import { router, useLocalSearchParams } from 'expo-router';
import { Button, Card, Copy, Heading, Notice, Screen, styles } from '@/components/ui';
import { useParking } from '@/features/parking/context';

export default function Detail() {
  const { id } = useLocalSearchParams<{ id: string }>(); const { state, dispatch } = useParking();
  const space = state.spaces.find(p => p.id === id);
  if (!space) return <Screen><Heading>Plaza no encontrada</Heading><Button title="Volver al mapa" onPress={() => router.replace('/mapa')} /></Screen>;
  const available = space.availability === 'available'; const favorite = state.favorites.includes(id);
  return <Screen><Heading>{space.name}</Heading><Copy style={styles.muted}>{space.address}</Copy><Notice>Ficha de demostración · Disponibilidad y precio simulados</Notice>
    <Card><Copy style={styles.section}>{space.kind === 'street' ? 'Plaza en calle' : 'Parking'}</Copy><Copy>{available ? 'Libre' : 'Ocupada'} · {space.minutes} min</Copy><Copy>{space.price}</Copy><Copy style={styles.muted}>{space.restrictions}</Copy></Card>
    <Button title={favorite ? 'Quitar de favoritos' : 'Guardar en favoritos'} secondary onPress={() => dispatch({ type: 'favorite', id })} />
    <Button title="Iniciar recorrido" disabled={!available} onPress={() => { dispatch({ type: 'select', id }); router.push({ pathname: '/ruta/[id]', params: { id } }); }} />
    {!available && <Button title="Buscar otra plaza" onPress={() => router.replace('/mapa')} />}
  </Screen>;
}
