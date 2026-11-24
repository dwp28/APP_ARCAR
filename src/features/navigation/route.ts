import { Parking } from '@/features/parking/model';
export function demoRoute(space: Parking) {
  return {
    minutes: space.minutes,
    instructions: ['Sal desde el punto de demostración de Gran Vía.', `Continúa hacia ${space.address.split(' · ')[0]}.`, 'Comprueba la señalización y confirma solo cuando hayas aparcado.'],
    coordinates: [{ latitude: 40.4194, longitude: -3.7063 }, { latitude: 40.4201, longitude: -3.7055 }, { latitude: space.latitude, longitude: space.longitude }],
  };
}
