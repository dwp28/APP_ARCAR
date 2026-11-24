import { Tabs } from 'expo-router';
import { Icon } from '@/components/ui';
import { colors, font } from '@/theme/tokens';

export default function TabsLayout() {
  return <Tabs screenOptions={{ headerStyle: { backgroundColor: colors.canvas }, headerTintColor: colors.text, headerTitleStyle: { fontFamily: font.semibold }, tabBarActiveTintColor: colors.primary, tabBarInactiveTintColor: colors.secondary, tabBarStyle: { backgroundColor: '#FAFAFC' }, tabBarLabelStyle: { fontFamily: font.medium } }}>
    <Tabs.Screen name="index" options={{ title: 'Inicio', headerShown: false, tabBarIcon: () => <Icon name="home" size={25} /> }} />
    <Tabs.Screen name="mapa" options={{ title: 'Mapa', tabBarIcon: () => <Icon name="map" size={25} /> }} />
    <Tabs.Screen name="favoritos" options={{ title: 'Favoritos', tabBarIcon: () => <Icon name="heart" size={25} /> }} />
    <Tabs.Screen name="perfil" options={{ title: 'Perfil', tabBarIcon: () => <Icon name="person" size={25} /> }} />
  </Tabs>;
}
