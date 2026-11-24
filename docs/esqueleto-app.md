# Esqueleto de App Arcar

Fecha: 24/11/2026. Seguimiento: E3MA-70, E3MA-94 y E3MA-95.

## Arranque

Requisitos: Node.js 24 LTS, npm y, para pruebas nativas, un cliente Expo Go compatible con SDK 57.

```bash
npm ci
npm start
```

Escanear el QR de Expo con un teléfono conectado a la misma red. Para web: `npm run web`. En Windows no se puede abrir el simulador de iOS; un iPhone físico permite probar con Expo Go. `npm run android` requiere un emulador configurado o un teléfono Android conectado.

No se necesitan variables de entorno para recorrer el catálogo simulado. No se solicita ubicación al arrancar: solo al pulsar «Usar mi ubicación». Si se deniega o no está disponible, se puede buscar manualmente. Las coordenadas no se guardan ni se envían a nuestro repositorio o a un backend.

## Pantallas y navegación

| Ruta | Pantalla | Recorrido |
| --- | --- | --- |
| `/` | Inicio | Acceso a búsqueda, ubicación y destinos de ejemplo |
| `/buscar` | Buscar destino | Introducir Gran Vía, Callao o Fuencarral |
| `/mapa` | Mapa y lista | Resultados compartidos y acceso a la ficha |
| `/filtros` | Filtros | Calle/parking y disponibilidad |
| `/plaza/[id]` | Ficha | Datos, favorito e inicio del recorrido |
| `/ruta/[id]` | Recorrido | Indicaciones simuladas, ocupación y confirmación |
| `/confirmacion/[id]` | Confirmación | Resultado del aparcamiento y regreso |
| `/favoritos` | Favoritos | Plazas guardadas en el dispositivo |
| `/perfil` | Perfil de ejemplo | Escenarios y restablecimiento de la prueba |

Flujo 1, E3MA-100: Inicio → Buscar → Mapa/lista → Filtros → Ficha.

Flujo 2, E3MA-101: Ficha → Recorrido → Confirmación → Mapa. Si la plaza se ocupa, se conserva el destino y se vuelve a elegir una plaza libre.

Las rutas con un identificador desconocido, selección ausente o confirmación no realizada muestran una recuperación en lugar de asumir que se ha aparcado.

## Datos y organización

- `src/app/`: rutas de Expo Router; no contiene servicios ni el catálogo.
- `src/components/`: controles reutilizables, fichas y mapa por plataforma.
- `src/theme/`: colores, radios y tipografía Inter del sistema visual existente.
- `src/features/parking/`: catálogo tipado, filtros, reducer y Context compartido.
- `src/features/navigation/`: indicaciones y coordenadas de demostración.
- `src/storage/`: formato versionado de favoritos locales.
- `assets/figma/`: recursos locales procedentes del diseño del equipo.

La selección usa el identificador de la plaza. El reducer impide confirmar una plaza ocupada o distinta de la seleccionada. Mapa, lista, ficha y confirmación comparten los datos de la sesión.

Solo se persisten favoritos en esta fase. La selección, ocupación y progreso del recorrido se restablecen al recargar. Los destinos recientes configurables y el resto de preferencias del acuerdo técnico quedan para un incremento posterior.

## Comprobaciones realizadas

- TypeScript estricto y ESLint.
- Diez pruebas automáticas: filtros, búsqueda y recuperación, disponibilidad, selección, confirmación, restablecimiento y formato de favoritos.
- Exportación web y paquete Android generados con Metro.
- Expo Doctor: 21 de 21 comprobaciones de configuración y dependencias superadas.
- Servidor Expo web arrancado y paquete servido; el registro confirma la inicialización de la aplicación.

La revisión interactiva en Chrome quedó interrumpida porque el control del navegador no pudo verificar la URL local. Por tanto, no se acredita aquí una revisión visual completa, un recorrido manual completo, pruebas externas ni ejecución en un teléfono.

## Comprobación manual pendiente

1. Abrir Inicio, buscar Gran Vía y alternar mapa y lista.
2. Aplicar el filtro Parking; comprobar que ficha y resultados coinciden.
3. Abrir una plaza libre, guardar favorito e iniciar el recorrido.
4. Confirmar el aparcamiento y comprobar que la plaza deja de estar libre al volver.
5. Restablecer desde Perfil; iniciar otro recorrido, simular plaza ocupada y elegir otra conservando el destino.
6. Simular búsqueda vacía y error desde Perfil; recuperar la consulta sin perder el destino.
7. Recargar y comprobar que se conservan los favoritos; restablecer la prueba y comprobar su borrado.
8. En Android e iPhone, verificar mapa nativo, botones de regreso, permiso de ubicación denegado y autorizado, tamaño de texto y zonas seguras.

## Límites del incremento

Es una base navegable para desarrollar y contrastar los flujos en Sprint 3. No incluye disponibilidad real, reserva, pago, cuentas de usuario ni navegación GPS paso a paso. La vista web es esquemática. Los cuatro miembros del equipo deben revisar el reparto, la interfaz y las pruebas pendientes antes de considerar cerrada la validación del esqueleto.

`npm audit` detectó seis avisos en la cadena de dependencias de SDK 57 (tres moderados y tres altos, relacionados con minimatch y decode-uri-component). Se conserva la pila acordada; no se ha forzado una actualización mayor incompatible. Revisar las actualizaciones compatibles antes de distribuir un binario fuera del entorno académico de prueba.
