import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, Dispatch, ReactNode, useContext, useEffect, useReducer, useRef, useState } from 'react';
import { decodePreferences, encodePreferences, STORAGE_KEY } from '@/storage/session';
import { Action, initialState, ParkingState, parkingReducer } from './model';

const Context = createContext<{ state: ParkingState; dispatch: Dispatch<Action>; storageError: boolean } | null>(null);
export function ParkingProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(parkingReducer, initialState);
  const [ready, setReady] = useState(false);
  const [storageError, setStorageError] = useState(false);
  const writes = useRef(Promise.resolve());
  useEffect(() => {
    let active = true;
    AsyncStorage.getItem(STORAGE_KEY).then(value => { if (active) dispatch({ type: 'hydrate', favorites: decodePreferences(value) }); })
      .catch(() => { if (active) setStorageError(true); }).finally(() => { if (active) setReady(true); });
    return () => { active = false; };
  }, []);
  useEffect(() => {
    if (!ready) return;
    const value = encodePreferences(state.favorites);
    writes.current = writes.current.then(() => AsyncStorage.setItem(STORAGE_KEY, value)).catch(() => { setStorageError(true); });
  }, [ready, state.favorites]);
  if (!ready) return null;
  return <Context.Provider value={{ state, dispatch, storageError }}>{children}</Context.Provider>;
}
export function useParking() {
  const context = useContext(Context);
  if (!context) throw new Error('ParkingProvider no disponible');
  return context;
}
