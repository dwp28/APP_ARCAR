import MapView, { Marker, Polyline } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { Parking } from '@/features/parking/model';
import { colors } from '@/theme/tokens';

export type ParkingMapProps = { spaces: Parking[]; onSelect: (id: string) => void; route?: { latitude: number; longitude: number }[] };
export default function ParkingMap({ spaces, onSelect, route }: ParkingMapProps) {
  return <View style={{ height: 230, borderRadius: 18, overflow: 'hidden' }}>
    <MapView style={StyleSheet.absoluteFill} initialRegion={{ latitude: 40.4207, longitude: -3.7035, latitudeDelta: 0.008, longitudeDelta: 0.008 }}>
      {spaces.map(p => <Marker key={p.id} coordinate={{ latitude: p.latitude, longitude: p.longitude }} title={p.name} description={`${p.availability === 'available' ? 'Libre' : 'Ocupada'} · Datos simulados`} pinColor={p.availability === 'available' ? colors.success : colors.danger} onPress={() => onSelect(p.id)} />)}
      {route && <Polyline coordinates={route} strokeColor={colors.primary} strokeWidth={5} />}
    </MapView>
  </View>;
}
