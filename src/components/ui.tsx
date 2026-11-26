import { Image } from 'expo-image';
import { ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextProps, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, font, radius } from '@/theme/tokens';

const icons = {
  car: require('../../assets/figma/Car.svg'), search: require('../../assets/figma/IconMagnifier.svg'),
  location: require('../../assets/figma/IconLocation.svg'), home: require('../../assets/figma/IconHouse.svg'),
  map: require('../../assets/figma/IconMap.svg'), heart: require('../../assets/figma/IconHeart.svg'),
  person: require('../../assets/figma/IconPersonCircle.svg'), briefcase: require('../../assets/figma/Briefcase.svg'),
  university: require('../../assets/figma/Briefcase1.svg'), house: require('../../assets/figma/House.svg'),
  chevron: require('../../assets/figma/ChevRight.svg'), bell: require('../../assets/figma/Bell.svg'),
};
export function Icon({ name, size = 20 }: { name: keyof typeof icons; size?: number }) {
  return <Image source={icons[name]} style={{ width: size, height: size }} contentFit="contain" accessibilityElementsHidden />;
}
export function Copy({ children, style, ...props }: TextProps) {
  return <Text {...props} style={[styles.text, style]}>{children}</Text>;
}
export function Heading({ children }: { children: ReactNode }) {
  return <Copy accessibilityRole="header" style={styles.heading}>{children}</Copy>;
}
export function Button({ title, onPress, secondary = false, disabled = false, icon }: { title: string; onPress: () => void; secondary?: boolean; disabled?: boolean; icon?: keyof typeof icons }) {
  return <Pressable accessibilityRole="button" accessibilityState={{ disabled }} disabled={disabled} onPress={onPress} style={({ pressed }) => [styles.button, secondary && styles.secondaryButton, disabled && { opacity: 0.45 }, pressed && { opacity: 0.75 }]}>
    {icon && <Icon name={icon} size={18} />}<Copy style={[styles.buttonText, secondary && { color: colors.primary }]}>{title}</Copy>
  </Pressable>;
}
export function Notice({ children, error = false }: { children: ReactNode; error?: boolean }) {
  return <View accessibilityRole={error ? 'alert' : undefined} style={[styles.notice, error && { backgroundColor: '#FEECE9' }]}><Copy style={{ fontSize: 13, lineHeight: 19, color: error ? colors.danger : colors.warningText }}>{children}</Copy></View>;
}
export function Card({ children }: { children: ReactNode }) { return <View style={styles.card}>{children}</View>; }
export function Screen({ children }: { children: ReactNode }) {
  return <SafeAreaView edges={['left', 'right', 'bottom']} style={styles.safe}>
    <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.content}><View style={styles.column}>{children}</View></ScrollView>
  </SafeAreaView>;
}
export const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.canvas },
  content: { flexGrow: 1, alignItems: 'center', padding: 20, paddingBottom: 28 },
  column: { width: '100%', maxWidth: 480, gap: 16 },
  text: { color: colors.text, fontFamily: font.regular, fontSize: 17, lineHeight: 24 },
  muted: { color: colors.secondary },
  heading: { fontFamily: font.bold, fontSize: 30, lineHeight: 38, letterSpacing: -0.5 },
  section: { fontFamily: font.bold, fontSize: 22, lineHeight: 28 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12 },
  card: { backgroundColor: colors.surface, borderRadius: radius.card, padding: 16, gap: 12 },
  button: { minHeight: 50, paddingHorizontal: 16, paddingVertical: 12, backgroundColor: colors.primary, borderRadius: radius.button, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 8 },
  secondaryButton: { backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.line },
  buttonText: { fontFamily: font.semibold, color: colors.surface, fontSize: 17, textAlign: 'center' },
  notice: { backgroundColor: colors.warning, padding: 12, borderRadius: radius.field },
  field: { minHeight: 48, padding: 12, backgroundColor: colors.surface, borderRadius: radius.field, color: colors.text, fontFamily: font.regular, fontSize: 17, borderWidth: 1, borderColor: colors.line },
  pill: { paddingHorizontal: 12, paddingVertical: 8, backgroundColor: colors.surface, borderRadius: 16, borderWidth: 1, borderColor: colors.line },
});
