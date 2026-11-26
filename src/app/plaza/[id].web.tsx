import { useLocalSearchParams } from 'expo-router';
import { PrototypeScreen } from '@/prototype/PrototypeScreen';
export default function Screen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return <PrototypeScreen screen="detail" id={id} />;
}
