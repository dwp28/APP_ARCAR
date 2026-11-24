import { router } from 'expo-router';
import { useState } from 'react';
import { TextInput } from 'react-native';
import { Button, Copy, Heading, Screen, styles } from '@/components/ui';
import { useParking } from '@/features/parking/context';

export default function Search() {
  const { state, dispatch } = useParking();
  const [value, setValue] = useState(state.destination);
  const submit = () => { if (!value.trim()) return; dispatch({ type: 'search', destination: value }); router.replace('/mapa'); };
  return <Screen><Heading>Tu próximo destino</Heading><Copy style={styles.muted}>Prueba Gran Vía, Callao o Fuencarral, en Madrid.</Copy>
    <TextInput accessibilityLabel="Dirección o lugar" placeholder="Escribe una dirección" value={value} onChangeText={setValue} onSubmitEditing={submit} returnKeyType="search" style={styles.field} />
    <Button title="Buscar plazas" onPress={submit} disabled={!value.trim()} />
    <Copy style={styles.muted}>El catálogo es local. Una dirección fuera de la zona mostrará el estado sin resultados.</Copy>
  </Screen>;
}
