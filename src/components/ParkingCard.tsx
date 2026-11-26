import { router } from 'expo-router';
import { Pressable, View } from 'react-native';
import { Parking } from '@/features/parking/model';
import { colors, font } from '@/theme/tokens';
import { Copy, styles } from './ui';

export function ParkingCard({ space }: { space: Parking }) {
  return <Pressable accessibilityRole="button" accessibilityLabel={`Ver ${space.name}`} onPress={() => router.push({ pathname: '/plaza/[id]', params: { id: space.id } })} style={styles.card}>
    <View style={styles.row}><Copy style={{ fontFamily: font.semibold, flex: 1 }}>{space.name}</Copy><Copy style={{ color: space.availability === 'available' ? colors.available : colors.danger, fontSize: 13 }}>{space.availability === 'available' ? 'Libre' : 'Ocupada'}</Copy></View>
    <Copy style={[styles.muted, { fontSize: 14 }]}>{space.address}</Copy>
    <View style={styles.row}><Copy style={{ fontSize: 14 }}>{space.kind === 'street' ? 'En calle' : 'Parking'} · {space.price}</Copy><Copy style={{ fontSize: 14 }}>{space.minutes} min</Copy></View>
  </Pressable>;
}
