import { router } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';
import { Button, Copy, Heading, Notice, Screen, styles } from '@/components/ui';
import { ParkingCard } from '@/components/ParkingCard';
import ParkingMap from '@/components/ParkingMap';
import { useParking } from '@/features/parking/context';
import { getResults } from '@/features/parking/model';

export default function Results() {
  const { state, dispatch } = useParking(); const [map, setMap] = useState(true);
  const spaces = getResults(state);
  return <Screen><Heading>Plazas cerca de ti</Heading><Copy style={styles.muted}>{state.destination}</Copy>
    <View style={styles.row}><View style={{ flex: 1 }}><Button title="Cambiar destino" secondary onPress={() => router.push('/buscar')} /></View><View style={{ flex: 1 }}><Button title="Filtros" secondary onPress={() => router.push('/filtros')} /></View></View>
    <Notice>Datos simulados · Catálogo de Madrid</Notice>
    {state.scenario === 'error' ? <><Heading>No se pudo buscar</Heading><Copy>El destino sigue guardado. Vuelve a intentarlo.</Copy><Button title="Reintentar búsqueda" onPress={() => dispatch({ type: 'scenario', scenario: 'normal' })} /></> : !spaces.length ? <><Heading>No hay plazas</Heading><Copy>Prueba otra zona o cambia los filtros.</Copy><Button title="Restablecer filtros" onPress={() => { dispatch({ type: 'filters', filters: { kind: 'all', availableOnly: true } }); dispatch({ type: 'scenario', scenario: 'normal' }); }} /><Button title="Buscar en Gran Vía" secondary onPress={() => dispatch({ type: 'search', destination: 'Gran Vía, Madrid' })} /></> : <>
      <Button title={map ? 'Ver solo lista' : 'Ver mapa y lista'} secondary onPress={() => setMap(!map)} />
      {map && <ParkingMap spaces={spaces} onSelect={id => router.push({ pathname: '/plaza/[id]', params: { id } })} />}
      <Copy accessibilityRole="header" style={styles.section}>{spaces.length} opciones en el catálogo</Copy>
      {spaces.map(p => <ParkingCard key={p.id} space={p} />)}
    </>}
  </Screen>;
}
