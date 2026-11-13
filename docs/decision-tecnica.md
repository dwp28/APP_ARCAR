# Decisión técnica de App Arcar

Fecha de adopción · 13 de noviembre de 2026  
Estado · Adoptada  
Seguimiento · E3MA-84  
Proyecto · Equipo 3

## Decisión

Hemos elegido React Native con Expo y TypeScript para desarrollar App Arcar. Mantendremos una única base de código para iPhone y Android, con el diseño, la tipografía Inter y los componentes definidos en Figma.

El primer incremento cubrirá la consulta de plazas y el recorrido desde la selección de una plaza hasta la confirmación de aparcamiento. La disponibilidad, los precios y las indicaciones se obtendrán de un catálogo de demostración de Madrid.

## Motivo de la elección

El proyecto requiere mapa, permisos de ubicación, navegación entre pantallas y almacenamiento de preferencias. Expo reúne estas piezas y permite probar el incremento en teléfonos físicos desde Windows. TypeScript permite definir y comprobar los datos de plazas, filtros y estados antes de utilizarlos en las pantallas.

La base será Expo SDK 57. La guía de creación de proyectos recomienda esta versión para usar Expo Go en móviles físicos durante la transición a SDK 58. Esto facilita que el equipo y las personas que participen en las pruebas abran el mismo proyecto. La compatibilidad del cliente Expo Go se comprobará al preparar el esqueleto. [Creación de proyectos Expo](https://docs.expo.dev/get-started/create-a-project/)

## Pila y versiones de referencia

| Área | Elección | Versión de referencia |
|---|---|---|
| Entorno de desarrollo | Node.js y npm | Node.js 24 LTS; npm incluido con esa instalación |
| Framework móvil | Expo | SDK 57, rama ~57.0.32 |
| Interfaz | React Native y React | 0.86.3 y 19.2.3 |
| Lenguaje | TypeScript en modo estricto | ~6.0.3 |
| Pantallas y navegación | Expo Router | ~57.0.31 |
| Mapas | react-native-maps | 1.27.2 |
| Ubicación | expo-location | ~57.0.23 |
| Persistencia local | AsyncStorage | 2.2.0 |
| Tipografía | Inter cargada con expo-font | expo-font ~57.0.4 |
| Comprobación | TypeScript, ESLint y Jest con jest-expo | Versiones compatibles con SDK 57 al preparar el proyecto |

Las versiones de React Native, React y TypeScript siguen la plantilla oficial de SDK 57. Los módulos nativos se instalarán con `npx expo install`. Las versiones exactas resueltas se guardarán en `package-lock.json` y se reproducirán con `npm ci`. Durante el incremento se mantendrá SDK 57 y se revisará cualquier actualización de versión mayor. [Plantilla oficial](https://raw.githubusercontent.com/expo/expo/sdk-57/templates/expo-template-default/package.json) · [Expo Router](https://docs.expo.dev/versions/v57.0.0/sdk/router/) · [Node.js](https://github.com/nodejs/Release)

## Mapa, ubicación y recorrido

El mapa se implementará con react-native-maps. Usaremos el proveedor predeterminado de cada plataforma, Apple Maps en iOS y Google Maps en Android. Las plazas aparecerán como marcadores con los colores y símbolos del prototipo. La ficha y la lista compartirán los mismos datos. Expo Go permite probar este módulo sin configurar una clave propia para esa prueba. Si se prepara posteriormente un binario propio para Android, habrá que configurar las credenciales del proveedor y comprobar sus condiciones de uso. [Mapa en Expo SDK 57](https://docs.expo.dev/versions/v57.0.0/sdk/map-view/)

La ubicación se pedirá al pulsar «Usar mi ubicación», mediante un permiso en primer plano. Si se deniega, se podrá continuar con un destino manual. El catálogo reconocerá direcciones de demostración, normalizando mayúsculas y acentos. Cuando la ubicación quede fuera de la zona cubierta por el catálogo, se ofrecerá abrir la demostración en Madrid. [Ubicación en Expo SDK 57](https://docs.expo.dev/versions/v57.0.0/sdk/location/)

Las rutas del incremento tendrán coordenadas, maniobras y tiempos de demostración previamente definidos. El mapa dibujará el trazado y la pantalla mostrará las indicaciones del caso seleccionado. La interfaz identificará los datos como simulados. El permiso de ubicación servirá para situar al usuario cuando lo autorice; el avance del recorrido de prueba se controlará con los escenarios de demostración.

## Datos y estado

Las plazas se definirán con identificador, nombre, tipo, coordenadas, dirección, precio, restricciones, disponibilidad y fecha de actualización. Los tipos serán plaza en calle y parking. La disponibilidad distinguirá libre, ocupada y sin información.

Un módulo de datos compartido ofrecerá las operaciones de consultar, filtrar, seleccionar, actualizar disponibilidad y confirmar aparcamiento. La interfaz accederá a estas operaciones para mantener coherentes mapa, lista, ficha y ruta.

El estado se gestionará con Context y useReducer de React. La selección se conservará mediante el identificador de la plaza. Antes de continuar la ruta y de confirmar el aparcamiento se comprobará su disponibilidad actual.

AsyncStorage guardará favoritos, preferencias, destinos recientes y el progreso de la demostración con una versión de formato. La escritura se gestionará desde el módulo de estado para evitar que varias pantallas sobrescriban cambios entre sí. Se incorporará una opción para restablecer los datos antes de cada sesión de pruebas. Este almacenamiento está pensado para datos locales de la demostración. [AsyncStorage](https://docs.expo.dev/versions/v57.0.0/sdk/async-storage.md)

La aplicación empezará con un perfil de demostración. Los servicios de autenticación, las cuentas sincronizadas y la disponibilidad de aparcamiento en tiempo real se estudiarán en una ampliación que incluya su proveedor y su integración.

## Organización prevista

- `src/app/` contendrá las rutas y la navegación entre pantallas.
- `src/components/` reunirá botones, campos, fichas, marcadores y avisos reutilizables.
- `src/theme/` recogerá los colores, tipografía, espaciados y radios de Figma.
- `src/features/parking/` agrupará los tipos, filtros, consultas, estado y escenarios de las plazas.
- `src/features/navigation/` agrupará los recorridos y sus indicaciones de demostración.
- `src/storage/` gestionará la lectura, escritura y versión de los datos locales.
- `assets/` contendrá la tipografía y los recursos gráficos con su licencia.
- `docs/` contendrá el acuerdo técnico y la documentación de pruebas.

## Alcance y criterios de aceptación del primer incremento

| Caso | Resultado comprobable |
|---|---|
| E3MA-100 · Consultar plazas | Desde Inicio se introduce un destino del catálogo o se usa la ubicación autorizada, y se consultan plazas en mapa y lista. |
| Filtros | Se filtra el catálogo por los criterios que tengan datos y cambian los resultados de forma coherente. |
| Ficha | La plaza elegida mantiene el mismo identificador y muestra precio, restricciones y disponibilidad. |
| E3MA-101 · Seleccionar y llegar | Desde la ficha se abre el recorrido de demostración y se alcanza la confirmación de aparcamiento. |
| Plaza ocupada durante la ruta | Un escenario controlado cambia el estado de la plaza, informa del cambio y permite elegir una alternativa conservando el destino. |
| Confirmación | La plaza se marca como ocupada en el estado local y se refleja al volver al mapa o a la lista. |
| Búsqueda vacía y fallo | Se muestran mensajes con acciones de recuperación; al reintentar se conserva el destino. |
| Permiso denegado | Se permite continuar con destino manual y se explica cómo volver a solicitar acceso cuando proceda. |
| Persistencia | Favoritos y preferencias se recuperan al abrir de nuevo la aplicación. |
| Pruebas repetibles | Se puede restablecer el catálogo y reproducir los escenarios libre, sin resultados, fallo y plaza ocupada. |

La búsqueda del catálogo y el estado local se podrán probar de forma determinista. La carga del mapa base dependerá del proveedor y de la conexión disponible.

## Preparación y comprobación previstas

Al preparar el esqueleto se generará la plantilla `default@sdk-57`, se instalarán los módulos compatibles y se guardará el lockfile. Para una copia ya configurada del proyecto, el flujo previsto será `npm ci` y `npx expo start`.

El mapa se verificará en un teléfono físico con Expo Go y en Android. En Windows, Android Studio servirá para probar con emulador. La comprobación en iPhone se realizará con un dispositivo físico; el simulador iOS requiere macOS y Xcode. [Entorno y arranque](https://docs.expo.dev/router/introduction/)

Se comprobarán tipos con `npx tsc --noEmit`, calidad de código con `npx expo lint` y compatibilidad con `npx expo-doctor`. Las pruebas unitarias cubrirán filtrado, cambios de disponibilidad, conservación del destino y confirmación del aparcamiento. Las pruebas de interacción cubrirán los recorridos y sus recuperaciones. Se utilizará Jest con el preset jest-expo. [Pruebas en Expo](https://docs.expo.dev/develop/unit-testing/)

Este documento cierra la elección de tecnología y alcance de E3MA-84. La preparación del repositorio, la creación del proyecto y las pruebas de ejecución se registrarán en sus tareas correspondientes.

