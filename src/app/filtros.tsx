import { router } from 'expo-router';
import { useState } from 'react';
import { Switch, View } from 'react-native';
import { Button, Copy, Heading, Screen, styles } from '@/components/ui';
import { useParking } from '@/features/parking/context';
import { Filters } from '@/features/parking/model';

export default function FilterScreen() {
  const { state, dispatch } = useParking(); const [filters, setFilters] = useState<Filters>({ ...state.filters });
  return <Screen><Heading>Encuentra tu plaza</Heading>
    {([{ value: 'all', label: 'Todos los tipos' }, { value: 'street', label: 'Plazas en calle' }, { value: 'parking', label: 'Parkings' }] as const).map(option => <Button key={option.value} title={`${filters.kind === option.value ? '✓ ' : ''}${option.label}`} secondary={filters.kind !== option.value} onPress={() => setFilters({ ...filters, kind: option.value })} />)}
    <View style={styles.row}><Copy>Solo plazas libres</Copy><Switch accessibilityLabel="Solo plazas libres" value={filters.availableOnly} onValueChange={availableOnly => setFilters({ ...filters, availableOnly })} /></View>
    <Button title="Aplicar filtros" onPress={() => { dispatch({ type: 'filters', filters }); if (router.canGoBack()) router.back(); else router.replace('/mapa'); }} />
  </Screen>;
}
