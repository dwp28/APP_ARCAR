export type ParkingKind = 'street' | 'parking';
export type Availability = 'available' | 'occupied';
export type Scenario = 'normal' | 'empty' | 'error';
export type Parking = {
  id: string; name: string; address: string; kind: ParkingKind;
  latitude: number; longitude: number; price: string; restrictions: string;
  minutes: number; availability: Availability;
};
export type Filters = { kind: 'all' | ParkingKind; availableOnly: boolean };
export type ParkingState = {
  destination: string; selectedId: string | null; completedId: string | null;
  scenario: Scenario; filters: Filters; favorites: string[]; spaces: Parking[];
};
export const catalogue: Parking[] = [
  { id: 'gran-via-32', name: 'Gran Vía · Plaza 32', address: 'Calle Gran Vía, 32 · Madrid', kind: 'street', latitude: 40.4201, longitude: -3.7036, price: '2,10 €/h', restrictions: 'Zona regulada. Consulta las señales de la calle.', minutes: 3, availability: 'available' },
  { id: 'fuencarral-12', name: 'Fuencarral · Plaza 12', address: 'Calle de Fuencarral, 12 · Madrid', kind: 'street', latitude: 40.4215, longitude: -3.7014, price: '2,10 €/h', restrictions: 'Tiempo máximo de demostración: 2 horas.', minutes: 5, availability: 'available' },
  { id: 'parking-callao', name: 'Parking Callao', address: 'Plaza del Callao · Madrid', kind: 'parking', latitude: 40.4200, longitude: -3.7052, price: '3,50 €/h', restrictions: 'Altura máxima de demostración: 2 m.', minutes: 4, availability: 'available' },
  { id: 'barco-8', name: 'Barco · Plaza 8', address: 'Calle del Barco, 8 · Madrid', kind: 'street', latitude: 40.4221, longitude: -3.7033, price: '2,10 €/h', restrictions: 'Zona regulada. Consulta la señalización.', minutes: 6, availability: 'occupied' },
];
export const initialState: ParkingState = {
  destination: 'Gran Vía, Madrid', selectedId: null, completedId: null, scenario: 'normal',
  filters: { kind: 'all', availableOnly: true }, favorites: [], spaces: catalogue.map(p => ({ ...p })),
};
export type Action =
  | { type: 'search'; destination: string }
  | { type: 'scenario'; scenario: Scenario }
  | { type: 'filters'; filters: Filters }
  | { type: 'select'; id: string }
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
    case 'select': return state.spaces.some(p => p.id === action.id && p.availability === 'available') ? { ...state, selectedId: action.id, completedId: null } : state;
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
  if (!/gran via|callao|madrid|fuencarral/.test(normalize(state.destination))) return [];
  return state.spaces.filter(p => (state.filters.kind === 'all' || state.filters.kind === p.kind) && (!state.filters.availableOnly || p.availability === 'available'));
}
