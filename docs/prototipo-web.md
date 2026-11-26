# App Arcar: prototipo en web

La versión web conserva el diseño de las pantallas de 393 × 852 del [prototipo del equipo](https://www.figma.com/design/OOlI7kOF5jODjBgmeMvH13/App-Arcar---Design). El marco exterior mide 417 × 876; se reduce proporcionalmente para caber en la ventana. El contenido mantiene las medidas originales, sin distribuirse como una página de escritorio.

## Pantallas de referencia

| Pantalla | Nodo de Figma |
| --- | --- |
| Inicio | 68:2291 |
| Búsqueda | 68:2358 |
| Filtros | 68:2404 |
| Mapa | 68:2451 |
| Lista | 68:2519 |
| Ficha de parking | 68:2572 |
| Recorrido de parking | 68:2642 |
| Llegada al parking | 68:2622 |
| Favoritos | 68:2691 |
| Perfil | 68:2856 |
| Ficha en calle | 68:2962 |
| Recorrido en calle | 68:3014 |
| Aparcamiento en calle | 68:3058 |
| Sin resultados | 148:2539 |
| Error de búsqueda | 148:2556 |
| Plaza ocupada | 148:2703 |

Se mantienen Inter, colores, tamaños, radios, espaciados, mapas e iconos del archivo. `src/prototype/generated/` contiene las capas adaptadas a React; `design-style.tsx` traduce sus medidas a CSS. Los recursos SVG están en `assets/prototype/`, deduplicados por contenido. No se utilizan capturas de pantalla como interfaz ni enlaces temporales de Figma en ejecución. Cada pantalla espera a que sus imágenes estén listas para evitar mostrar mapas incompletos durante la carga.

`PrototypeScreen.tsx` conecta las capas con el catálogo y el estado compartido. Las rutas `.web.tsx` utilizan esta interfaz. Las rutas de React Native continúan disponibles en Android e iOS; su adaptación visual se realiza por separado.

## Comportamiento

- Búsqueda editable, borrado del destino y envío con Enter. Los destinos del catálogo de Madrid muestran resultados; otros destinos muestran el estado vacío.
- Filtros por calle/parking, distancia a pie, plazas libres, acceso adaptado y precio máximo. El precio recorre 2 €/h, 3 €/h y sin límite. La preferencia ordena por tiempo o precio; los tiempos son simulados.
- Mapa con marcadores seleccionables y lista desplazable, alimentados por el mismo catálogo. Algunos resultados quedan fuera del área visible del mapa y se consultan en la lista.
- Ficha, guardado de favoritos, elección de ruta y confirmación. Una plaza confirmada deja de aparecer libre durante la sesión.
- Recuperación de plaza ocupada, consulta vacía y error. Los escenarios se pueden activar en Perfil → Ajustes; la ocupación también se puede simular desde el control de ubicación del trayecto.
- Favoritos persistidos en el navegador, con edición y borrado. Casa y Trabajo son destinos de ejemplo del prototipo.
- Controles de teclado, nombres accesibles, foco visible, diálogo con cierre mediante Escape y respeto a la preferencia de movimiento reducido.

Los textos de resultado, el número de plazas, la dirección seleccionada y los favoritos reflejan el estado de la aplicación; pueden variar respecto a la imagen de referencia. Los mapas, los precios y las rutas son datos de demostración. En web, «Usar mi ubicación» abre la zona de ejemplo; no consulta la ubicación real. Perfil, vehículo y notificaciones muestran información de ejemplo y no conectan con servicios personales.

## Revisión del 26 de noviembre de 2026

Se recorrieron manualmente en el navegador integrado la búsqueda, los filtros, mapa/lista, ficha de parking, ruta alternativa, llegada, ficha en calle, aparcamiento, ocupación durante un trayecto y selección de otra plaza. Se comprobaron también el error, el estado sin resultados y la recuperación de favoritos después de recargar.

En una ventana de 1280 × 1000, la pantalla interior mide 393 × 852. En una ventana de 393 × 852, el teléfono completo cabe dentro de los márgenes, sin recortar la navegación inferior. No se atribuyen estas comprobaciones a usuarios externos ni a un teléfono físico. Quedan pendientes la revisión del equipo, la adaptación visual nativa y las pruebas en Android e iPhone reales.
