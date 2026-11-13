# App Arcar

App móvil del Equipo 3 para la asignatura Metodologías Ágiles para la Gestión de Proyectos.

App Arcar permite consultar plazas de aparcamiento cerca de un destino, comparar sus datos y seguir un recorrido hasta la plaza elegida. El primer incremento utilizará un catálogo de demostración de Madrid con disponibilidad, precios e indicaciones simulados.

## Estado del proyecto

El prototipo y el sistema visual están disponibles en Figma. La tecnología de desarrollo quedó definida el 13 de noviembre de 2026 en E3MA-84.

La preparación del repositorio comprende este README, el acuerdo técnico, el guion de pruebas y la configuración de archivos excluidos de Git. El siguiente hito es montar el esqueleto de la aplicación en E3MA-70. Las instrucciones de arranque se comprobarán al incorporar ese código.

## Tecnología

| Parte | Tecnología |
|---|---|
| Aplicación | React Native con Expo SDK 57 |
| Lenguaje | TypeScript en modo estricto |
| Plataformas | iPhone y Android |
| Navegación entre pantallas | Expo Router |
| Mapas | react-native-maps |
| Ubicación | expo-location, con permiso en primer plano |
| Favoritos y preferencias | AsyncStorage |
| Estado compartido | Context y useReducer de React |
| Tipografía | Inter |
| Entorno | Node.js 24 LTS y npm |
| Comprobación | TypeScript, ESLint y Jest con jest-expo |

El [acuerdo técnico](docs/decision-tecnica.md) recoge las versiones de referencia, la estructura prevista y los criterios de aceptación.

## Primer incremento

1. Introducir un destino del catálogo o usar la ubicación autorizada.
2. Consultar las plazas en mapa y lista.
3. Aplicar filtros y abrir la ficha de una plaza.
4. Iniciar su recorrido de demostración.
5. Elegir otra plaza si la seleccionada se ocupa.
6. Confirmar el aparcamiento y actualizar el estado local.

La búsqueda incluirá los estados sin resultados y error, con acciones para continuar. Favoritos y preferencias se conservarán en el dispositivo. Las sesiones de pruebas podrán restablecer los datos de demostración.

## Documentación

- [Decisión técnica y criterios de aceptación](docs/decision-tecnica.md).
- [Guion de pruebas de usabilidad](docs/guion-pruebas-usabilidad.md).

## Diseño y seguimiento

- [Caso de estudio de las Entregas 1 y 2](https://www.figma.com/slides/3niNUGJdIsP0yzm2vi9Q7U/Entrega-2----Equipo-3).
- [Prototipo de App Arcar](https://www.figma.com/proto/OOlI7kOF5jODjBgmeMvH13/App-Arcar---Design?node-id=68-2291&starting-point-node-id=68%3A2291&scaling=scale-down).
- [Diseño principal y componentes aplicados](https://www.figma.com/design/OOlI7kOF5jODjBgmeMvH13/App-Arcar---Design).
- [Moodboard](https://www.figma.com/design/8lXXIjhuv3KmbZ4QmfRPjq?node-id=41-1669).
- [Foundations](https://www.figma.com/design/8lXXIjhuv3KmbZ4QmfRPjq?node-id=45-1098).
- [Sitemap](https://www.figma.com/design/8lXXIjhuv3KmbZ4QmfRPjq?node-id=134-41).
- [Flowchart](https://www.figma.com/design/8lXXIjhuv3KmbZ4QmfRPjq?node-id=135-41).
- [Investigación y recorrido cruzado de octubre](https://www.figma.com/board/1TuPsTORP0EQ3r0UsdaGD1/Plantilla-1).
- [Tablero de Jira](https://equipo3-agiles.atlassian.net/jira/software/projects/E3MA/boards/2).
- [Decisión de tecnología en Jira](https://equipo3-agiles.atlassian.net/browse/E3MA-84).

## Preparación del entorno

El desarrollo se realizará con Node.js 24 LTS, npm y un cliente Expo Go compatible con SDK 57. En Windows se podrá utilizar Android Studio para el emulador de Android. La comprobación en iPhone se realizará en un teléfono físico.

Una vez añadido el esqueleto, estos serán los comandos previstos para arrancar desde una copia del repositorio.

```bash
npm ci
npx expo start
```

El esqueleto incorporará package.json y package-lock.json. En ese hito se comprobarán el arranque, el mapa y la ubicación en los dispositivos de prueba y se completarán estas instrucciones con los resultados.

Los módulos nativos se instalarán mediante `npx expo install` para mantener la compatibilidad con SDK 57. Las versiones exactas quedarán registradas en el lockfile.

## Trabajo del equipo

Cada tarea se sigue en Jira y los cambios se revisan mediante pull requests. El mensaje del cambio debe indicar la tarea relacionada y lo que se ha modificado.

La referencia visual es el prototipo principal de App Arcar. Los componentes se reutilizarán desde la implementación común y sus valores de color, tipografía y espaciado se mantendrán en el tema de la aplicación.

Las pruebas de usabilidad del Sprint 2 se registrarán con sus participantes, tareas, resultados e incidencias. El recorrido cruzado de octubre y las pruebas externas tendrán registros separados.

## Equipo

Daniel Relloso · Daniel Willson · Javier Jiménez · Pablo Monserrat · Jaime Pavón

