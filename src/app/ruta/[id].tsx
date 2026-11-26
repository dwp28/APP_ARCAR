import { router, useLocalSearchParams } from 'expo-router';
import { Button, Card, Copy, Heading, Notice, Screen, styles } from '@/components/ui';
import ParkingMap from '@/components/ParkingMap';
import { useParking } from '@/features/parking/context';
import { demoRoute } from '@/features/navigation/route';

export default function RouteScreen() {
  const { id } = useLocalSearchParams<{ id: string }>(); const { state, dispatch } = useParking();
  const space = state.spaces.find(p => p.id === id);
  if (!space || state.selectedId !== id) return <Screen><Heading>Elige una plaza primero</Heading><Button title="Ir al mapa" onPress={() => router.replace('/mapa')} /></Screen>;
  if (space.availability === 'occupied') return <Screen><Heading>La plaza se ha ocupado</Heading><Notice error>Tu destino sigue siendo {state.destination}. Elige una alternativa para continuar.</Notice><Button title="Elegir otra plaza" onPress={() => router.replace('/mapa')} /></Screen>;
  const route = demoRoute(space);
  return <Screen><Heading>Vamos a {space.name}</Heading><Copy style={styles.muted}>{route.minutes} min · Recorrido simulado</Copy>
    <ParkingMap spaces={[space]} route={route.coordinates} onSelect={() => {}} />
    <Notice>Esta pantalla permite ensayar el recorrido. Las indicaciones son de demostración.</Notice>
    <Card>{route.instructions.map((step, i) => <Copy key={step}>{i + 1}. {step}</Copy>)}</Card>
    <Button title="He aparcado · Confirmar" onPress={() => { dispatch({ type: 'confirm', id }); router.replace({ pathname: '/confirmacion/[id]', params: { id } }); }} />
    <Button title="Simular plaza ocupada" secondary onPress={() => dispatch({ type: 'occupy', id })} />
    <Button title="Cancelar recorrido" secondary onPress={() => router.replace('/mapa')} />
  </Screen>;
}
