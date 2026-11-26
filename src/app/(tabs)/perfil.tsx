import { router } from 'expo-router';
import { useState } from 'react';
import { Button, Card, Copy, Heading, Notice, Screen } from '@/components/ui';
import { useParking } from '@/features/parking/context';

export default function Profile() {
  const { dispatch, storageError } = useParking();
  const [confirmReset, setConfirmReset] = useState(false);
  return <Screen><Heading>Perfil de demostración</Heading><Card><Copy>Carlos · Perfil local de ejemplo</Copy><Copy>Sin cuenta ni conexión con un servicio de aparcamiento.</Copy></Card>
    {storageError && <Notice error>No se han podido guardar los favoritos. El recorrido sigue disponible durante esta sesión.</Notice>}
    <Heading>Preparar una prueba</Heading><Copy>Estas opciones reproducen los estados del catálogo para revisar la navegación.</Copy>
    <Button title="Simular búsqueda sin resultados" secondary onPress={() => { dispatch({ type: 'scenario', scenario: 'empty' }); router.push('/mapa'); }} />
    <Button title="Simular error de búsqueda" secondary onPress={() => { dispatch({ type: 'scenario', scenario: 'error' }); router.push('/mapa'); }} />
    <Button title="Restablecer demostración" secondary onPress={() => setConfirmReset(true)} />
    {confirmReset && <><Notice>Se borrarán los favoritos y los cambios de esta demostración local.</Notice><Button title="Confirmar restablecimiento" onPress={() => { dispatch({ type: 'reset' }); setConfirmReset(false); router.replace('/'); }} /><Button title="Conservar mis datos" secondary onPress={() => setConfirmReset(false)} /></>}
    <Button title="Simular error de búsqueda" secondary onPress={() => { dispatch({ type: 'scenario', scenario: 'error' }); router.push('/mapa'); }} />
    <Button title="Restablecer demostración" onPress={() => { dispatch({ type: 'reset' }); router.replace('/'); }} />
    <Notice>Restablecer borra los favoritos locales y repone el catálogo. La ubicación no se guarda.</Notice>
  </Screen>;
}
