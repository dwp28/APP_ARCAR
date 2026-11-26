import { Redirect, useRouter } from 'expo-router';
import { Asset } from 'expo-asset';
import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';
import { useParking } from '@/features/parking/context';
import { Filters, getResults } from '@/features/parking/model';
import { DesignOverrides } from './design-style';
import Home from './generated/home';
import Search from './generated/search';
import FilterDesign from './generated/filters';
import MapDesign from './generated/map';
import ListDesign from './generated/list';
import Detail from './generated/detail';
import Street from './generated/street';
import RouteDesign from './generated/route';
import StreetRoute from './generated/streetRoute';
import Confirmation from './generated/confirmation';
import StreetConfirmation from './generated/streetConfirmation';
import Favorites from './generated/favorites';
import Profile from './generated/profile';
import Empty from './generated/empty';
import ErrorDesign from './generated/error';
import Occupied from './generated/occupied';

export type Screen = 'home' | 'search' | 'filters' | 'map' | 'favorites' | 'profile' | 'detail' | 'route' | 'confirmation';
type HitProps = { label: string; x: number; y: number; w: number; h: number; action: () => void; pressed?: boolean };
function Hit({ label, x, y, w, h, action, pressed }: HitProps) {
  return <button type="button" className="prototype-hit" style={{ left: x, top: y, width: w, height: h }}
    aria-label={label} aria-pressed={pressed} onClick={action} />;
}
function PrototypeCanvas({ children, screen }: { children: ReactNode; screen: Screen }) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const images = Array.from(ref.current?.querySelectorAll('img') ?? []);
    const check = () => {
      if (images.every(image => image.complete)) {
        if (images.some(image => image.naturalWidth === 0)) setFailed(true);
        else setReady(true);
      }
    };
    images.forEach(image => { image.addEventListener('load', check); image.addEventListener('error', check); });
    check();
    return () => { images.forEach(image => { image.removeEventListener('load', check); image.removeEventListener('error', check); }); };
  }, []);
  return <div className="prototype-canvas" data-screen={screen}>
    <div ref={ref} style={{ position: 'absolute', inset: 0, visibility: ready ? 'visible' : 'hidden' }} inert={!ready}>{children}</div>
    {!ready && <div className="prototype-loading" role="status">{failed ? <><p>No se pudo cargar esta pantalla.</p><button onClick={() => window.location.reload()}>Volver a intentar</button></> : <><span className="prototype-spinner" /><p>Cargando App Arcar…</p></>}</div>}
  </div>;
}
function Modal({ title, children, close }: { title: string; children: ReactNode; close: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const trigger = document.activeElement as HTMLElement | null;
    ref.current?.focus();
    return () => { trigger?.focus(); };
  }, []);
  return <div className="prototype-dialog-shade" onClick={close}>
    <section role="dialog" aria-modal="true" aria-label={title} className="prototype-dialog"
      onClick={event => event.stopPropagation()} onKeyDown={event => {
        if (event.key === 'Escape') close();
        if (event.key === 'Tab') {
          const items = event.currentTarget.querySelectorAll<HTMLButtonElement>('button');
          const first = items[0], last = items[items.length - 1];
          if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
          if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
        }
      }}>
      <h2>{title}</h2><div>{children}</div><button ref={ref} onClick={close}>Cerrar</button>
    </section>
  </div>;
}
export function PrototypeScreen({ screen, id }: { screen: Screen; id?: string }) {
  const router = useRouter();
  const { state, dispatch } = useParking();
  const [query, setQuery] = useState(state.destination);
  const [list, setList] = useState(false);
  const routeAlternative = state.routeAlternative;
  const setRouteAlternative = (alternative: boolean) => dispatch({ type: 'route-option', alternative });
  const [dialog, setDialog] = useState<{ title: string; body: ReactNode } | null>(null);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<Filters>({ ...state.filters, kind: state.filters.kind === 'all' ? 'street' : state.filters.kind, maxMinutes: state.filters.maxMinutes ?? 5, maxPrice: state.filters.maxPrice ?? 3 });
  const [suggestion, setSuggestion] = useState(false);
  const results = getResults(state);
  const place = state.spaces.find(p => p.id === id);
  const street = place?.kind === 'street';
  const saved = Boolean(id && state.favorites.includes(id));
  const text: Record<string, ReactNode> = {};
  const styles: Record<string, CSSProperties> = {};
  const controls: ReactNode[] = [];
  const go = (url: '/' | '/buscar' | '/filtros' | '/mapa' | '/favoritos' | '/perfil') => router.push(url);
  const info = (title: string, body: ReactNode) => setDialog({ title, body });
  const hit = (label: string, x: number, y: number, w: number, h: number, action: () => void, pressed?: boolean) =>
    controls.push(<Hit key={label} {...{ label, x, y, w, h, action, pressed }} />);
  const search = (destination = query) => { dispatch({ type: 'search', destination }); go('/mapa'); };
  const select = (selectedId: string) => {
    dispatch({ type: 'select', id: selectedId });
    router.push({ pathname: '/plaza/[id]', params: { id: selectedId } });
  };
  const favorite = () => { if (id) dispatch({ type: 'favorite', id }); };
  const tabs = () => {
    (['Inicio', 'Mapa', 'Favoritos', 'Perfil'] as const).forEach((label, index) =>
      hit(label, index * 98.25, 769, 98.25, 49, () => go((['/', '/mapa', '/favoritos', '/perfil'] as const)[index])));
  };
  const primary = (label: string, action: () => void, y = 698) => hit(label, 20, y, 353, 52, action);
  const secondary = (label: string, action: () => void) => primary(label, action, 758);
  const back = (target: '/' | '/buscar' | '/mapa' = '/') => hit('Atrás', 6, 54, 108, 44, () => go(target));
  let visual: ReactNode = null;
  if (screen === 'home') {
    visual = <Home />; tabs();
    hit('Buscar destino', 20, 190, 353, 44, () => go('/buscar'));
    hit('Usar mi ubicación', 20, 246, 353, 50, () => search('Calle Gran Vía, 32'));
    hit('Abrir mapa', 20, 312, 353, 170, () => go('/mapa'));
    hit('Ver recientes', 290, 498, 83, 36, () => go('/buscar'));
    hit('Notificaciones', 333, 56, 40, 40, () => info('Notificaciones', 'No tienes avisos nuevos. La disponibilidad de las plazas es de demostración.'));
    ['Calle Gran Vía, 32', 'Universidad · Av. Arapiles', 'Calle Mayor, 10'].forEach((destination, i) =>
      hit('Reciente: ' + destination, 20, 540 + i * 64, 353, 64, () => search(destination)));
  }
  if (screen === 'search') {
    visual = <Search />; back();
    controls.push(<input key="destination" className="prototype-input" aria-label="Destino" value={query}
      style={{ left: 58, top: 152, width: 215, height: 44 }} onChange={e => setQuery(e.target.value)}
      onKeyDown={e => { if (e.key === 'Enter') search(); }} />);
    hit('Borrar destino', 277, 152, 36, 44, () => setQuery(''));
    hit('Abrir filtros', 325, 152, 48, 44, () => go('/filtros'));
    ['Calle Gran Vía, 32', 'Gran Vía, 14', 'Plaza del Callao', 'Universidad · Av. Arapiles'].forEach((destination, i) =>
      hit(destination, 20, 256 + 68 * i, 353, 68, () => search(destination)));
    primary('Buscar plazas cercanas', () => search());
    secondary('Ajustar filtros', () => { dispatch({ type: 'search', destination: query }); go('/filtros'); });
  }
  if (screen === 'filters') {
    visual = <FilterDesign />; back('/buscar');
    const update = (patch: Partial<Filters>) => setDraft({ ...draft, ...patch });
    const distanceIndex = [5, 10, 15].indexOf(draft.maxMinutes ?? 5);
    styles['68:2411'] = { left: 2 + Math.max(0, distanceIndex) * 116.33 };
    styles['68:2418'] = { left: draft.kind === 'parking' ? 176.5 : 2 };
    const preferenceIndex = ['near', 'fast', 'cheap'].indexOf(draft.preference ?? 'near');
    styles['68:2423'] = { left: 2 + preferenceIndex * 116.33 };
    [5, 10, 15].forEach((n, i) => hit(n + ' minutos a pie', 20 + i * 117.66, 182, 117.66, 36, () => update({ maxMinutes: n }), draft.maxMinutes === n));
    (['street', 'parking'] as const).forEach((kind, i) => hit(kind === 'street' ? 'Calle' : 'Parking', 20 + i * 176.5, 258, 176.5, 36, () => update({ kind }), draft.kind === kind));
    (['near', 'fast', 'cheap'] as const).forEach((preference, i) =>
      hit(['Cerca', 'Rápido', 'Barato'][i], 20 + i * 117.66, 334, 117.66, 36, () => update({ preference }), (draft.preference ?? 'near') === preference));
    const toggle = (key: 'availableOnly' | 'accessibleOnly', y: number, label: string) => {
      controls.push(<button key={key} type="button" role="switch" aria-checked={Boolean(draft[key])} aria-label={label}
        className="prototype-switch" style={{ left: 306, top: y, background: draft[key] ? '#34c759' : '#e3e3e8' }}
        onClick={() => update({ [key]: !draft[key] })}><span style={{ transform: draft[key] ? 'translateX(20px)' : undefined }} /></button>);
    };
    toggle('availableOnly', 422.5, 'Solo plazas libres'); toggle('accessibleOnly', 474.5, 'Movilidad reducida');
    hit('Precio máximo', 20, 516, 353, 52, () => update({ maxPrice: draft.maxPrice === 2 ? 3 : draft.maxPrice === 3 ? undefined : 2 }));
    text['115:2630'] = draft.maxPrice ? draft.maxPrice + ' €/h' : 'Sin límite';
    text['68:2444'] = 'Mostrando ' + getResults({ ...state, filters: draft, scenario: 'normal' }).length + ' plazas cerca de ' + state.destination;
    primary('Ver plazas cercanas', () => { dispatch({ type: 'filters', filters: draft }); go('/mapa'); });
    secondary('Restablecer filtros', () => setDraft({ kind: 'street', availableOnly: true, maxMinutes: 5, maxPrice: 3 }));
  }
  if (screen === 'map') {
    if (state.scenario === 'error' || results.length === 0) {
      const error = state.scenario === 'error';
      visual = error ? <ErrorDesign /> : <Empty />; back();
      primary(error ? 'Reintentar' : 'Cambiar filtros', () => error ? dispatch({ type: 'scenario', scenario: 'normal' }) : go('/filtros'), 632);
      primary('Volver a buscar', () => go('/buscar'));
    } else if (list) {
      tabs();
      visual = <ListDesign />;
      hit('Ver mapa', 278, 54, 99, 44, () => setList(false));
      hit('Volver al mapa', 6, 54, 108, 44, () => setList(false));
      text['68:2528'] = state.destination;
      styles['68:2530'] = { left: 2 + (state.filters.kind === 'street' ? 116.33 : state.filters.kind === 'parking' ? 232.66 : 0) };
      (['all', 'street', 'parking'] as const).forEach((kind, i) => hit(['Todas', 'Calle', 'Parking'][i], 20 + i * 117.66, 184, 117.66, 36, () => dispatch({ type: 'filters', filters: { ...state.filters, kind } })));
      // The result rows use the same measured geometry and original icons, with live catalogue data.
      controls.push(<div key="results" className="prototype-results" style={{ left: 20, top: 236, width: 353, height: 516 }}>
        {results.map(p => <button key={p.id} className="prototype-result" onClick={() => select(p.id)} aria-label={p.name + ', ' + p.address}>
          <span className="prototype-result-icon" style={{ background: p.kind === 'parking' ? '#0a7cff' : '#34c759' }}>{p.kind === 'parking' ? 'P' : <CarIcon />}</span>
          <span className="prototype-result-title">{p.name}</span>
          <span className="prototype-result-subtitle">{p.kind === 'parking' ? (p.id === 'parking-callao' ? '12' : '4') + ' libres · ' + p.price : p.address} · {p.minutes} min{p.kind === 'street' ? ' andando' : ''}</span>
          {p.kind === 'street' && <span className="prototype-result-badge" style={p.availability === 'occupied' ? { background: '#ffe8e6', color: '#b42318' } : undefined}>{p.availability === 'available' ? 'Libre' : 'Ocupada'}</span>}
        </button>)}
      </div>);
    } else {
      tabs();
      visual = <MapDesign />;
      const streetCount = results.filter(p => p.kind === 'street').length;
      text['68:2503'] = results.length + (results.length === 1 ? ' plaza cercana' : ' plazas cercanas');
      text['68:2504'] = streetCount + ' en calle · ' + (results.length - streetCount) + ' parkings · cerca de ti';
      hit('Cambiar destino', 16, 62, 305, 50, () => go('/buscar'));
      hit('Filtros del mapa', 327, 62, 50, 50, () => go('/filtros'));
      primary('Ver lista de plazas', () => setList(true), 668);
      const markers = [
        { node: '68:2454', id: 'gran-via-32', x: 108.65, y: 373.8 },
        { node: '68:2457', id: 'alcala-15', x: 210.95, y: 359.85 },
        { node: '68:2460', id: 'fuencarral-12', x: 181.5, y: 457.5 },
        { node: '68:2463', id: 'ballesta-10', x: 83.85, y: 435.8 },
        { node: '68:2466', id: 'desengano-8', x: 286.9, y: 395.5 },
        { node: '68:2469', id: 'silva-12', x: 305.5, y: 336.6 },
        { node: '68:2472', id: 'barco-16', x: 54.4, y: 395.5 },
        { node: '68:2475', id: 'valverde-5', x: 153.6, y: 500.9 },
        { node: '68:2482', id: 'parking-callao', x: 228.1, y: 417.3 },
        { node: '68:2486', id: 'parking-carmen', x: 311.8, y: 477.75 },
      ];
      markers.forEach(marker => {
        const p = results.find(p => p.id === marker.id);
        if (p) hit(p.name + ', ' + p.address, marker.x - 5, marker.y - 5, 44, 44, () => select(p.id));
        else styles[marker.node] = { display: 'none' };
      });
      // Occupied places are background context; available results remain interactive.
      if (state.filters.kind === 'parking') ['68:2478', '68:2479', '68:2480', '68:2481'].forEach(node => { styles[node] = { display: 'none' }; });
      hit('Centrar mapa', 337, 172, 40, 44, () => info('Mapa centrado', 'Estás viendo la zona de demostración de Gran Vía, Madrid.'));
      hit('Capas del mapa', 337, 128, 40, 44, () => info('Mapa', 'Mapa de calles del prototipo. El servicio de mapas en tiempo real se conectará en una fase posterior.'));
    }
  }
  if (screen === 'detail' || screen === 'route' || screen === 'confirmation') {
    if (!place) return <Redirect href="/mapa" />;
    if (screen === 'confirmation' && state.completedId !== id) return <Redirect href="/mapa" />;
    if (screen === 'detail') {
      visual = street ? <Street /> : <Detail />;
      hit('Volver al mapa', 16, 56, 40, 40, () => go('/mapa'));
      hit('Favorito', 337, 56, 40, 40, favorite, saved);
      if (saved) controls.push(<span key="saved-heart" aria-hidden="true" className="prototype-saved-heart">♥</span>);
      const prefix = street ? '68:2981' : '68:2589';
      text[prefix] = place.address + ' · a ' + place.minutes + ' min andando';
      if (!street) text['68:2588'] = place.name;
      text[street ? '68:2987' : '68:2595'] = place.price;
      text[street ? '68:3011' : '68:2619'] = saved ? 'Guardado' : 'Guardar';
      primary('Cómo llegar', () => {
        if (place.availability !== 'available') { info('Plaza ocupada', 'Esta plaza ya no está libre. Vuelve al mapa para elegir otra.'); return; }
        if (place.availability === 'available') dispatch({ type: 'select', id: place.id });
        router.push({ pathname: '/ruta/[id]', params: { id: place.id } });
      }, 680);
      hit('Más información', 20, 744, 170, 52, () => info(place.name, place.restrictions));
      hit('Guardar plaza', 203, 744, 170, 52, favorite, saved);
    }
    if (screen === 'route') {
      if (state.selectedId !== id) return <Redirect href={{ pathname: '/plaza/[id]', params: { id: place.id } }} />;
      if (place.availability === 'occupied') {
        visual = <Occupied />;
        primary('Ver otra plaza disponible', () => {
          const alternative = state.spaces.find(p => p.availability === 'available' && p.id !== id);
          if (alternative) select(alternative.id); else go('/mapa');
        }, 696);
        primary('Volver al mapa', () => go('/mapa'), 760);
      } else {
        visual = street ? <StreetRoute /> : <RouteDesign />;
        text[street ? '68:3039' : '68:2672'] = (street ? '17:09 · 0,6 km · ' : '17:12 · 1,8 km · ') + (street ? place.address : place.name);
        if (routeAlternative) {
          text[street ? '68:3038' : '68:2671'] = street ? 'Llegas en 6 min' : 'Llegas en 9 min';
          styles[street ? '68:3047' : '68:2680'] = { borderColor: '#e5e5ea', backgroundColor: '#f2f2f7' };
          styles[street ? '68:3050' : '68:2683'] = { borderColor: '#0a7cff', borderWidth: 2, borderStyle: 'solid', backgroundColor: '#e8f2ff' };
          text[street ? '68:3039' : '68:2672'] = (street ? '17:12 · 1,0 km · ' : '17:15 · 2,1 km · ') + (street ? place.address : place.name);
        }
        hit('Ruta rápida', 20, 682, 169, 62, () => setRouteAlternative(false), !routeAlternative);
        hit('Otra ruta', 203, 682, 170, 62, () => setRouteAlternative(true), routeAlternative);
        hit('Cambiar ruta', 255, 644, 118, 36, () => setRouteAlternative(!routeAlternative));
        hit('Opciones del trayecto', 337, 186, 40, 40, () => info('Trayecto de demostración',
          <><p>Elige una alternativa o comprueba qué ocurre si la plaza deja de estar disponible.</p><button onClick={() => { dispatch({ type: 'occupy', id: place.id }); setDialog(null); }}>Simular plaza ocupada</button><button onClick={() => { go('/mapa'); setDialog(null); }}>Volver al mapa</button></>));
        primary(street ? 'He aparcado' : 'He llegado', () => {
          if (state.selectedId !== place.id) dispatch({ type: 'select', id: place.id });
          dispatch({ type: 'confirm', id: place.id });
          router.replace({ pathname: '/confirmacion/[id]', params: { id: place.id } });
        }, 760);
      }
    }
    if (screen === 'confirmation') {
      visual = street ? <StreetConfirmation /> : <Confirmation />;
      text[street ? '68:3063' : '68:2627'] = (street ? 'Plaza en calle · ' : place.name + ' · ') + place.address + '. Te quedan ' + place.minutes + ' min a pie hasta tu destino.';
      text[street ? '68:3065' : '68:2629'] = (street ? routeAlternative ? 6 : 3 : routeAlternative ? 9 : 6) + ' min';
      text['115:2776'] = saved ? 'Guardado en favoritos' : 'Guardar en favoritos';
      primary('Volver al inicio', () => go('/'));
      secondary(saved ? 'Quitar de favoritos' : 'Guardar en favoritos', favorite);
    }
  }
  if (screen === 'favorites') {
    visual = <Favorites />; tabs();
    hit('Editar favoritos', 295, 54, 78, 44, () => setEditing(!editing));
    text['68:2693'] = editing ? 'Hecho' : 'Editar';
    hit('Casa', 20, 186, 353, 64, () => search('Calle Mayor, 10'));
    hit('Trabajo', 20, 250, 353, 64, () => search('Calle Gran Vía, 32'));
    // Casa and Trabajo are example destinations from the prototype; parking favorites are persisted.
    const favorites = state.spaces.filter(p => state.favorites.includes(p.id));
    controls.push(<div key="favorite-list" className="prototype-favorite-list">
      {favorites.length ? favorites.map(p => <button key={p.id} className="prototype-favorite-row" onClick={() => editing ? dispatch({ type: 'favorite', id: p.id }) : select(p.id)}>
        <span className="prototype-favorite-icon">{editing ? '−' : p.kind === 'parking' ? 'P' : '♥'}</span><span><strong>{p.kind === 'parking' ? p.name : p.address}</strong><small>{editing ? 'Pulsa para eliminar' : p.address}</small></span><span>›</span>
      </button>) : <button className="prototype-favorite-row" onClick={() => go('/mapa')}><span className="prototype-favorite-icon">P</span><span><strong>Guarda tu primera plaza</strong><small>Encuéntrala en el mapa</small></span><span>›</span></button>}
    </div>);
    hit('Añadir Universidad', 274, 456, 79, 36, () => { setSuggestion(true); info('Lugar añadido', 'Universidad queda disponible como destino en tus búsquedas recientes.'); });
    if (suggestion) text['68:2726'] = 'Añadido';
    hit('Universidad', 20, 440, 250, 92, () => search('Universidad · Av. Arapiles'));
  }
  if (screen === 'profile') {
    visual = <Profile />; tabs();
    hit('Datos del perfil', 20, 152, 353, 96, () => info('Perfil de demostración', 'Carlos Martín Jiménez · carlos.martin@email.com'));
    ['Foto de perfil', 'Datos personales', 'Mi vehículo', 'Notificaciones'].forEach((label, i) =>
      hit(label, 20, 268 + i * 52, 353, 52, () => info(label, label === 'Mi vehículo' ? 'Vehículo de demostración · 1234 ABC.' : 'Este apartado muestra el perfil de ejemplo del prototipo. No se guardan datos personales ni se envían notificaciones.')));
    hit('Ayuda', 20, 496, 353, 52, () => info('Ayuda', 'Busca un destino, elige una plaza en el mapa o la lista y pulsa Cómo llegar. Al terminar, confirma que has aparcado.'));
    hit('Ajustes', 20, 548, 353, 52, () => info('Ajustes de la demostración', <>
      <button onClick={() => { dispatch({ type: 'scenario', scenario: 'error' }); setDialog(null); go('/mapa'); }}>Probar error de conexión</button>
      <button onClick={() => { dispatch({ type: 'scenario', scenario: 'empty' }); setDialog(null); go('/mapa'); }}>Probar búsqueda sin resultados</button>
      <button onClick={() => { dispatch({ type: 'reset' }); setDialog(null); go('/'); }}>Restablecer demostración</button>
    </>));
    hit('Cerrar sesión', 20, 624, 353, 52, () => info('Sesión de demostración', 'No hay una cuenta conectada. Puedes restablecer los datos de ejemplo desde Ajustes.'));
  }
  text['115:2645'] = state.destination;
  text['115:2493'] = state.destination;
  return <DesignOverrides.Provider value={{ text, styles }}>
    <PrototypeCanvas screen={screen} key={[screen, id, screen === 'map' ? String(list) + state.scenario + (results.length === 0 ? 'empty' : '') : '', screen === 'route' ? place?.availability : ''].join(':')}>
      <h1 className="prototype-sr-only">{({ home: 'Inicio', search: 'Busca tu destino', filters: 'Filtros', map: state.scenario === 'error' ? 'No pudimos buscar' : results.length === 0 ? 'Sin resultados' : 'Plazas cercanas', favorites: 'Mis favoritos', profile: 'Perfil', detail: place?.name, route: place?.availability === 'occupied' ? 'La plaza se ha ocupado' : 'Recorrido', confirmation: street ? 'Has aparcado' : 'Has llegado' })[screen]}</h1>
      <div className="prototype-artwork" aria-hidden="true" inert>{visual}</div>
      {controls}
      {dialog && <Modal title={dialog.title} close={() => setDialog(null)}>{dialog.body}</Modal>}
    </PrototypeCanvas>
  </DesignOverrides.Provider>;
}
function CarIcon() {
  return <img width="27" height="27" alt="" src={Asset.fromModule(require('../../assets/prototype/2a3ae0fdd8b402b46284.svg')).uri} />;
}
