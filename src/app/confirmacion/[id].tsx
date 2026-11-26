import { router, useLocalSearchParams } from 'expo-router';
import { Button, Card, Copy, Heading, Notice, Screen } from '@/components/ui';
import { useParking } from '@/features/parking/context';

export default function Confirmation() {
  const { id } = useLocalSearchParams<{ id: string }>(); const { state } = useParking(); const space = state.spaces.find(p => p.id === id);
  if (!space || state.completedId !== id) return <Screen><Heading>Sin confirmación de aparcamiento</Heading><Copy>Completa el recorrido antes de confirmar.</Copy><Button title="Volver al mapa" onPress={() => router.replace('/mapa')} /></Screen>;
  return <Screen><Heading>Ya has aparcado</Heading><Card><Copy>{space.name}</Copy><Copy>{space.address}</Copy><Copy>La plaza figura ocupada en esta sesión.</Copy></Card><Notice>Confirmación de demostración. No se ha reservado ni pagado una plaza real.</Notice><Button title="Volver al mapa" onPress={() => router.replace('/mapa')} /><Button title="Ir al inicio" secondary onPress={() => router.replace('/')} /></Screen>;
}
