import { router } from 'expo-router';
import * as Location from 'expo-location';
import { useState } from 'react';
import { Alert, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Copy, Heading, Icon, Notice, Screen, styles } from '@/components/ui';
import ParkingMap from '@/components/ParkingMap';
import { useParking } from '@/features/parking/context';
import { colors, font } from '@/theme/tokens';

export default function Home() {
  const { state, dispatch } = useParking();
  const [locating, setLocating] = useState(false);
  const [locationMessage, setLocationMessage] = useState('');
  const search = (destination: string) => { dispatch({ type: 'search', destination }); router.push('/mapa'); };
  async function locate() {
    setLocating(true); setLocationMessage('');
    try {
      const permission = await Location.requestForegroundPermissionsAsync();
      if (!permission.granted) { setLocationMessage('Puedes continuar buscando un destino manualmente. La demostración cubre Gran Vía y Callao, en Madrid.'); return; }
      const position = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced });
      if (Math.abs(position.coords.latitude - 40.4207) > 0.03 || Math.abs(position.coords.longitude + 3.7035) > 0.03) {
        setLocationMessage('Tu ubicación queda fuera del catálogo. Puedes abrir la demostración de Madrid sin compartir ni guardar tus coordenadas.'); return;
      }
      search('Gran Vía, Madrid');
    } catch { setLocationMessage('No se ha podido obtener la ubicación. Busca un destino o abre la demostración de Madrid.'); }
    finally { setLocating(false); }
  }
  return <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: colors.canvas }}><Screen>
    <View style={styles.row}><View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}><Icon name="car" size={26} /><Copy style={{ fontFamily: font.bold, fontSize: 20 }}>App Arcar</Copy></View><Pressable accessibilityRole="button" accessibilityLabel="Notificaciones" onPress={() => Alert.alert('Notificaciones', 'No hay avisos en esta demostración.')} style={{ padding: 10, backgroundColor: colors.surface, borderRadius: 24 }}><Icon name="bell" /></Pressable></View>
    <View style={{ gap: 4 }}><Heading>Hola, Carlos</Heading><Copy style={styles.muted}>¿Dónde quieres aparcar hoy?</Copy></View>
    <Pressable accessibilityRole="button" accessibilityLabel="Buscar dirección o lugar" onPress={() => router.push('/buscar')} style={[styles.field, { flexDirection: 'row', gap: 8, alignItems: 'center' }]}><Icon name="search" size={18} /><Copy style={styles.muted}>Buscar dirección o lugar</Copy></Pressable>
    <Button title={locating ? 'Obteniendo ubicación…' : 'Usar mi ubicación'} onPress={locate} disabled={locating} icon="location" />
    {!!locationMessage && <><Notice>{locationMessage}</Notice><Button title="Ver demostración de Madrid" secondary onPress={() => search('Gran Vía, Madrid')} /></>}
    <ParkingMap spaces={state.spaces} onSelect={id => router.push({ pathname: '/plaza/[id]', params: { id } })} />
    <View style={styles.row}><Copy accessibilityRole="header" style={styles.section}>Destinos de ejemplo</Copy></View>
    <View style={{ backgroundColor: colors.surface, borderRadius: 14, overflow: 'hidden' }}>
      {([{ title: 'Trabajo', address: 'Gran Vía, Madrid', icon: 'briefcase', color: '#FF9500' }, { title: 'Callao', address: 'Callao, Madrid', icon: 'university', color: '#5856D6' }, { title: 'Fuencarral', address: 'Fuencarral, Madrid', icon: 'house', color: '#34C759' }] as const).map(item => <Pressable key={item.title} accessibilityRole="button" accessibilityLabel={`Buscar ${item.title}`} onPress={() => search(item.address)} style={[styles.row, { padding: 16, minHeight: 64, borderBottomWidth: 0.5, borderBottomColor: colors.line }]}>
        <View style={{ width: 32, height: 32, backgroundColor: item.color, borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}><Icon name={item.icon} size={18} /></View><View style={{ flex: 1 }}><Copy style={{ fontFamily: font.medium }}>{item.title}</Copy><Copy style={[styles.muted, { fontSize: 14 }]}>{item.address}</Copy></View><Icon name="chevron" size={14} />
      </Pressable>)}
    </View>
    <Notice>Demostración · Plazas, precios y recorridos simulados. Comprueba siempre la señalización real.</Notice>
  </Screen></SafeAreaView>;
}
