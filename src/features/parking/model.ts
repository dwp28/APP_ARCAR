export type ParkingKind = 'street' | 'parking';
export type Availability = 'available' | 'occupied';
export type Scenario = 'normal' | 'empty' | 'error';
export type Parking = {
  id: string; name: string; address: string; kind: ParkingKind;
  latitude: number; longitude: number; price: string; restrictions: string;
  minutes: number; availability: Availability; accessible?: boolean;
};
export type Filters = { kind: 'all' | ParkingKind; availableOnly: boolean; maxMinutes?: number; accessibleOnly?: boolean; maxPrice?: number; preference?: 'near' | 'fast' | 'cheap' };
export type ParkingState = {
  destination: string; selectedId: string | null; completedId: string | null;
  scenario: Scenario; filters: Filters; favorites: string[]; spaces: Parking[]; routeAlternative: boolean;
};
export const catalogue: Parking[] = [
  { id: 'gran-via-32', name: 'Plaza en calle', address: 'Gran Vía, 32', kind: 'street', latitude: 40.4201, longitude: -3.7036, price: '1,30 €/h', restrictions: 'Zona SER azul · máx. 4 h. Consulta la señalización.', minutes: 3, availability: 'available' },
  { id: 'parking-callao', name: 'Parking Gran Vía', address: 'Calle Gran Vía, 28', kind: 'parking', latitude: 40.4200, longitude: -3.7052, price: '2,50 €/h', restrictions: 'Abierto 24 h · vigilancia · acceso adaptado.', minutes: 5, availability: 'available', accessible: true },
  { id: 'alcala-15', name: 'Plaza en calle', address: 'C/ Alcalá, 15', kind: 'street', latitude: 40.4183, longitude: -3.7013, price: '1,30 €/h', restrictions: 'Zona SER azul · máx. 4 h. Consulta la señalización.', minutes: 5, availability: 'available' },
  { id: 'parking-carmen', name: 'Parking del Carmen', address: 'Plaza del Carmen', kind: 'parking', latitude: 40.4194, longitude: -3.7032, price: '2,95 €/h', restrictions: 'Abierto 24 h · vigilancia · acceso adaptado.', minutes: 6, availability: 'available', accessible: true },
  { id: 'fuencarral-12', name: 'Plaza en calle', address: 'Calle de la Montera, 12', kind: 'street', latitude: 40.4215, longitude: -3.7014, price: '1,30 €/h', restrictions: 'Zona SER azul · máx. 4 h. Consulta la señalización.', minutes: 4, availability: 'available' },
  { id: 'ballesta-10', name: 'Plaza en calle', address: 'Calle de la Ballesta, 10', kind: 'street', latitude: 40.4222, longitude: -3.7037, price: '1,30 €/h', restrictions: 'Zona SER azul · máx. 4 h.', minutes: 4, availability: 'available' },
  { id: 'desengano-8', name: 'Plaza en calle', address: 'Calle del Desengaño, 8', kind: 'street', latitude: 40.4219, longitude: -3.7046, price: '1,30 €/h', restrictions: 'Zona SER azul · máx. 4 h.', minutes: 5, availability: 'available' },
  { id: 'silva-12', name: 'Plaza en calle', address: 'Calle de Silva, 12', kind: 'street', latitude: 40.4221, longitude: -3.7072, price: '1,30 €/h', restrictions: 'Zona SER azul · máx. 4 h.', minutes: 5, availability: 'available' },
  { id: 'barco-16', name: 'Plaza en calle', address: 'Calle del Barco, 16', kind: 'street', latitude: 40.4227, longitude: -3.7028, price: '1,30 €/h', restrictions: 'Zona SER azul · máx. 4 h.', minutes: 5, availability: 'available' },
  { id: 'valverde-5', name: 'Plaza en calle', address: 'Calle de Valverde, 5', kind: 'street', latitude: 40.4215, longitude: -3.7024, price: '1,30 €/h', restrictions: 'Zona SER azul · máx. 4 h.', minutes: 4, availability: 'available' },
  { id: 'parking-luna', name: 'Parking de la Luna', address: 'Plaza de la Luna', kind: 'parking', latitude: 40.4222, longitude: -3.7051, price: '2,80 €/h', restrictions: 'Parking de demostración · abierto 24 h.', minutes: 7, availability: 'available', accessible: true },
  { id: 'parking-tudescos', name: 'Parking Tudescos', address: 'Calle de Tudescos', kind: 'parking', latitude: 40.4218, longitude: -3.7062, price: '3,00 €/h', restrictions: 'Parking de demostración · abierto 24 h.', minutes: 8, availability: 'available', accessible: true },
  { id: 'barco-8', name: 'Barco · Plaza 8', address: 'Calle del Barco, 8 · Madrid', kind: 'street', latitude: 40.4221, longitude: -3.7033, price: '2,10 €/h', restrictions: 'Zona regulada. Consulta la señalización.', minutes: 6, availability: 'occupied' },
];
export const initialState: ParkingState = {
  destination: 'Calle Gran Vía, 32', selectedId: null, completedId: null, scenario: 'normal',
  filters: { kind: 'all', availableOnly: true }, favorites: [], spaces: catalogue.map(p => ({ ...p })), routeAlternative: false,
};
export type Action =
  | { type: 'search'; destination: string }
  | { type: 'scenario'; scenario: Scenario }
  | { type: 'filters'; filters: Filters }
  | { type: 'select'; id: string }
  | { type: 'route-option'; alternative: boolean }
  | { type: 'occupy'; id: string }
  | { type: 'confirm'; id: string }
  | { type: 'favorite'; id: string }
  | { type: 'hydrate'; favorites: string[] }
  | { type: 'reset' };
export function parkingReducer(state: ParkingState, action: Action): ParkingState {
  switch (action.type) {
    case 'search': return { ...state, destination: action.destination.trim(), selectedId: null, scenario: 'normal' };
    case 'scenario': return { ...state, scenario: action.scenario };
    case 'filters': return { ...state, filters: action.filters };
    case 'select': return state.spaces.some(p => p.id === action.id && p.availability === 'available') ? { ...state, selectedId: action.id, completedId: null, routeAlternative: false } : state;
    case 'route-option': return { ...state, routeAlternative: action.alternative };
    case 'occupy': return { ...state, spaces: state.spaces.map(p => p.id === action.id ? { ...p, availability: 'occupied' } : p) };
    case 'confirm': {
      const space = state.spaces.find(p => p.id === action.id);
      if (state.selectedId !== action.id || space?.availability !== 'available') return state;
      return { ...state, completedId: action.id, spaces: state.spaces.map(p => p.id === action.id ? { ...p, availability: 'occupied' } : p) };
    }
    case 'favorite': return { ...state, favorites: state.favorites.includes(action.id) ? state.favorites.filter(id => id !== action.id) : [...state.favorites, action.id] };
    case 'hydrate': return { ...state, favorites: action.favorites.filter(id => catalogue.some(p => p.id === id)) };
    case 'reset': return { ...initialState, filters: { ...initialState.filters }, spaces: catalogue.map(p => ({ ...p })) };
  }
}
const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
export function getResults(state: ParkingState): Parking[] {
  if (state.scenario !== 'normal') return [];
  if (!/gran via|callao|madrid|fuencarral|montera|alcala|carmen|mayor|universidad|arapiles/.test(normalize(state.destination))) return [];
  const price = (p: Parking) => parseFloat(p.price.replace(',', '.'));
  const results = state.spaces.filter(p => (state.filters.kind === 'all' || state.filters.kind === p.kind)
    && (!state.filters.availableOnly || p.availability === 'available')
    && (!state.filters.maxMinutes || p.minutes <= state.filters.maxMinutes)
    && (!state.filters.accessibleOnly || p.accessible)
    && (!state.filters.maxPrice || price(p) <= state.filters.maxPrice));
  if (state.filters.preference === 'cheap') results.sort((a, b) => price(a) - price(b));
  if (state.filters.preference === 'near' || state.filters.preference === 'fast') results.sort((a, b) => a.minutes - b.minutes);
  return results;
}
