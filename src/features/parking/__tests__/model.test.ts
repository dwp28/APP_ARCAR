import { describe, expect, test } from '@jest/globals';
import { getResults, initialState, parkingReducer } from '../model';

describe('recorridos del catálogo de demostración', () => {
  test('consulta y filtra las mismas plazas para mapa y lista', () => {
    expect(getResults(initialState)).toHaveLength(3);
    const filtered = parkingReducer(initialState, { type: 'filters', filters: { kind: 'parking', availableOnly: true } });
    expect(getResults(filtered).map(p => p.id)).toEqual(['parking-callao']);
    expect(getResults(parkingReducer(initialState, { type: 'search', destination: 'Gran Vía' }))).toHaveLength(3);
    expect(getResults(parkingReducer(initialState, { type: 'search', destination: 'Barcelona' }))).toHaveLength(0);
  });
  test('reintentar conserva el destino', () => {
    const search = parkingReducer(initialState, { type: 'search', destination: 'Callao, Madrid' });
    const error = parkingReducer(search, { type: 'scenario', scenario: 'error' });
    expect(getResults(error)).toEqual([]);
    const recovered = parkingReducer(error, { type: 'scenario', scenario: 'normal' });
    expect(recovered.destination).toBe('Callao, Madrid');
    expect(getResults(recovered)).toHaveLength(3);
  });
  test('una plaza ocupada no se puede confirmar y permite seleccionar otra', () => {
    let state = parkingReducer(initialState, { type: 'select', id: 'gran-via-32' });
    state = parkingReducer(state, { type: 'occupy', id: 'gran-via-32' });
    expect(parkingReducer(state, { type: 'confirm', id: 'gran-via-32' }).completedId).toBeNull();
    state = parkingReducer(state, { type: 'select', id: 'fuencarral-12' });
    state = parkingReducer(state, { type: 'confirm', id: 'fuencarral-12' });
    expect(state.completedId).toBe('fuencarral-12');
    expect(state.destination).toBe(initialState.destination);
    expect(getResults(state).some(p => p.id === 'fuencarral-12')).toBe(false);
  });
  test('no permite confirmar una plaza distinta de la seleccionada', () => {
    const state = parkingReducer(initialState, { type: 'select', id: 'gran-via-32' });
    expect(parkingReducer(state, { type: 'confirm', id: 'parking-callao' }).completedId).toBeNull();
  });
  test('restablecer elimina cambios y favoritos de la sesión', () => {
    let state = parkingReducer(initialState, { type: 'favorite', id: 'gran-via-32' });
    state = parkingReducer(state, { type: 'occupy', id: 'gran-via-32' });
    state = parkingReducer(state, { type: 'reset' });
    expect(state.favorites).toEqual([]);
    expect(getResults(state)).toHaveLength(3);
    expect(initialState.spaces.find(p => p.id === 'gran-via-32')?.availability).toBe('available');
  });
});
