import { Inter_400Regular } from '@expo-google-fonts/inter/400Regular';
import { Inter_500Medium } from '@expo-google-fonts/inter/500Medium';
import { Inter_600SemiBold } from '@expo-google-fonts/inter/600SemiBold';
import { Inter_700Bold } from '@expo-google-fonts/inter/700Bold';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { ParkingProvider } from '@/features/parking/context';
import { PhoneStage } from '@/prototype/PhoneStage';

export default function WebLayout() {
  const [loaded, error] = useFonts({ Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold });
  if (!loaded && !error) return null;
  return <ParkingProvider><PhoneStage><Slot /></PhoneStage></ParkingProvider>;
}
