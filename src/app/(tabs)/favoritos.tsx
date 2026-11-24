import { router } from 'expo-router';
import { Button, Copy, Heading, Screen } from '@/components/ui';
import { ParkingCard } from '@/components/ParkingCard';
import { useParking } from '@/features/parking/context';
export default function Favorites() {
  const { state } = useParking(); const favorites = state.spaces.filter(p => state.favorites.includes(p.id));
  return <Screen><Heading>Tus favoritos</Heading>{favorites.length ? favorites.map(p => <ParkingCard key={p.id} space={p} />) : <><Copy>Guarda una plaza desde su ficha para encontrarla aquí.</Copy><Button title="Explorar plazas" onPress={() => router.push('/mapa')} /></>}</Screen>;
}
