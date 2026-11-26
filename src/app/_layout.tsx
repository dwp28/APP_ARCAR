import { Inter_400Regular } from '@expo-google-fonts/inter/400Regular';
import { Inter_500Medium } from '@expo-google-fonts/inter/500Medium';
import { Inter_600SemiBold } from '@expo-google-fonts/inter/600SemiBold';
import { Inter_700Bold } from '@expo-google-fonts/inter/700Bold';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { ParkingProvider } from '@/features/parking/context';
import { colors, font } from '@/theme/tokens';

SplashScreen.preventAutoHideAsync().catch(() => {});
export default function RootLayout() {
  const [loaded, error] = useFonts({ Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold });
  useEffect(() => { if (loaded || error) SplashScreen.hideAsync().catch(() => {}); }, [loaded, error]);
  if (!loaded && !error) return null;
  return <ParkingProvider><StatusBar style="dark" /><Stack screenOptions={{ headerTintColor: colors.primary, headerStyle: { backgroundColor: colors.canvas }, headerTitleStyle: { fontFamily: font.semibold }, contentStyle: { backgroundColor: colors.canvas }, headerBackTitle: 'Volver' }}>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    <Stack.Screen name="buscar" options={{ title: 'Buscar destino' }} />
    <Stack.Screen name="filtros" options={{ title: 'Filtros', presentation: 'modal' }} />
    <Stack.Screen name="plaza/[id]" options={{ title: 'Detalle de la plaza' }} />
    <Stack.Screen name="ruta/[id]" options={{ title: 'Recorrido' }} />
    <Stack.Screen name="confirmacion/[id]" options={{ title: 'Confirmación', headerBackVisible: false }} />
    <Stack.Screen name="+not-found" options={{ title: 'Página no encontrada' }} />
  </Stack></ParkingProvider>;
}
