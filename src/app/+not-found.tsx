import { router } from 'expo-router';
import { Button, Heading, Screen } from '@/components/ui';
export default function NotFound() { return <Screen><Heading>Esta página no existe</Heading><Button title="Volver al inicio" onPress={() => router.replace('/')} /></Screen>; }
