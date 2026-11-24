import { Pressable, View } from 'react-native';
import type { ParkingMapProps } from './ParkingMap';
import { Copy } from './ui';
import { colors, font } from '@/theme/tokens';

export default function ParkingMap({ spaces, onSelect, route }: ParkingMapProps) {
  return <View style={{ height: 230, backgroundColor: '#ECEDE8', borderRadius: 18, overflow: 'hidden', position: 'relative' }}>
    <View style={{ position: 'absolute', width: '120%', height: 32, left: -20, top: 100, backgroundColor: '#FFFFFF', transform: [{ rotate: '-14deg' }] }} />
    <View style={{ position: 'absolute', width: 28, height: 300, left: '58%', top: -30, backgroundColor: '#FFFFFF', transform: [{ rotate: '26deg' }] }} />
    <Copy style={{ position: 'absolute', left: 14, top: 12, fontSize: 13, color: colors.secondary }}>Madrid · Vista esquemática web</Copy>
    {route && <View style={{ position: 'absolute', width: '44%', height: 5, backgroundColor: colors.primary, left: '20%', top: 140, transform: [{ rotate: '-25deg' }] }} />}
    {spaces.slice(0, 4).map((p, i) => <Pressable key={p.id} accessibilityRole="button" accessibilityLabel={`Mapa: ${p.name}`} onPress={() => onSelect(p.id)} style={{ position: 'absolute', left: `${18 + i * 19}%`, top: 55 + (i % 2) * 60, width: 38, height: 38, alignItems: 'center', justifyContent: 'center', borderRadius: 19, borderWidth: 3, borderColor: '#FFFFFF', backgroundColor: p.availability === 'available' ? colors.available : colors.danger }}>
      <Copy style={{ color: '#FFFFFF', fontFamily: font.bold }}>{p.kind === 'parking' ? 'P' : 'A'}</Copy>
    </Pressable>)}
    <Copy style={{ position: 'absolute', left: 12, bottom: 12, fontSize: 12, backgroundColor: '#FFFFFF', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 4 }}>Mapa nativo disponible en iPhone y Android</Copy>
  </View>;
}
