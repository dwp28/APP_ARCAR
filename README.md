# App Arcar

App móvil del Equipo 3 para la asignatura Metodologías Ágiles para la Gestión de Proyectos.

App Arcar permite consultar plazas de aparcamiento cerca de un destino, comparar sus datos y seguir un recorrido hasta la plaza elegida. El primer incremento utilizará un catálogo de demostración de Madrid con disponibilidad, precios e indicaciones simulados.

## Estado del proyecto

El prototipo y el sistema visual están disponibles en Figma. La tecnología de desarrollo quedó definida el 13 de noviembre de 2026 en E3MA-84.

El esqueleto de E3MA-70 incorpora Expo SDK 57, TypeScript y Expo Router, con pantallas conectadas para consultar plazas, seleccionar una, seguir un recorrido simulado y confirmar el aparcamiento. Incluye filtros, favoritos locales y estados de recuperación. La versión web reproduce las pantallas de Figma dentro de un iPhone de 393 × 852 px, con marco, Dynamic Island y barra inferior; el teléfono completo se adapta al tamaño de la ventana.

El catálogo, los precios, la disponibilidad y las indicaciones son simulados. El mapa nativo usa react-native-maps; la web utiliza los mapas vectoriales originales del prototipo con marcadores interactivos y recursos locales. La cartografía web es fija y no ofrece navegación GPS. La adaptación visual nativa y las pruebas en teléfonos físicos siguen pendientes.

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
- [Arranque, pantallas y comprobaciones del esqueleto](docs/esqueleto-app.md).
- [Adaptación del prototipo y revisión del iPhone en web](docs/prototipo-web.md).

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

Desde la carpeta del repositorio que contiene package.json:

```bash
npm ci
npm start
```

Para abrir la versión web: `npm run web`. Para un móvil compatible, ejecutar `npm start` y escanear el QR en Expo Go desde la misma red. No hace falta ninguna clave para el catálogo simulado. La carga de cartografía nativa depende del proveedor y de la conexión; su funcionamiento en el teléfono y el permiso de ubicación deben comprobarse en el dispositivo.

Si ya tienes la rama del esqueleto clonada, detén Expo con Ctrl+C y actualiza desde PowerShell:

```powershell
git switch feat/E3MA-70-esqueleto-app
git pull --ff-only
npm.cmd ci
npm.cmd run web
```

Ejecuta cada comando por separado. La web muestra el iPhone directamente; no hace falta activar la emulación del navegador.

Comprobaciones del proyecto:

```bash
npm run typecheck
npm run lint
npm test
npm run export:web
npx expo export --platform android --output-dir dist-android
npx expo-doctor
```

Las exportaciones generan los paquetes JavaScript y recursos; no son un APK ni sustituyen una prueba en el teléfono.

Los módulos nativos se instalarán mediante `npx expo install` para mantener la compatibilidad con SDK 57. Las versiones exactas quedarán registradas en el lockfile.

## Trabajo del equipo

Cada tarea se sigue en Jira y los cambios se revisan mediante pull requests. El mensaje del cambio debe indicar la tarea relacionada y lo que se ha modificado.

La referencia visual es el prototipo principal de App Arcar. Los componentes se reutilizarán desde la implementación común y sus valores de color, tipografía y espaciado se mantendrán en el tema de la aplicación.

Las pruebas de usabilidad del Sprint 2 se registrarán con sus participantes, tareas, resultados e incidencias. El recorrido cruzado de octubre y las pruebas externas tendrán registros separados.

## Equipo

Daniel Relloso · Daniel Willson · Javier Jiménez · Pablo Monserrat

