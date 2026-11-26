import { createContext, CSSProperties, HTMLAttributes, ReactNode, useContext } from 'react';

type Overrides = { text?: Record<string, ReactNode>; styles?: Record<string, CSSProperties> };
export const DesignOverrides = createContext<Overrides>({});
type LayerProps = HTMLAttributes<HTMLDivElement> & { 'data-node-id'?: string; 'data-name'?: string };
export function DesignBox(props: LayerProps) {
  const overrides = useContext(DesignOverrides);
  return <div {...props} style={{ ...props.style, ...overrides.styles?.[props['data-node-id'] ?? ''] }} />;
}
export function DesignText(props: HTMLAttributes<HTMLParagraphElement> & { 'data-node-id'?: string }) {
  const overrides = useContext(DesignOverrides); const id = props['data-node-id'] ?? '';
  return <p {...props} style={{ ...props.style, ...overrides.styles?.[id] }}>{id in (overrides.text ?? {}) ? overrides.text?.[id] : props.children}</p>;
}

const cache = new Map<string, CSSProperties>();
const simple: Record<string, CSSProperties> = {
  absolute: { position: 'absolute' }, relative: { position: 'relative' }, block: { display: 'block' }, hidden: { display: 'none' }, flex: { display: 'flex' },
  'flex-none': { flex: 'none' }, 'shrink-0': { flexShrink: 0 }, 'content-stretch': { alignContent: 'stretch' }, 'items-center': { alignItems: 'center' },
  'justify-center': { justifyContent: 'center' }, 'justify-end': { justifyContent: 'flex-end' }, 'justify-between': { justifyContent: 'space-between' },
  'overflow-clip': { overflow: 'clip' }, 'overflow-hidden': { overflow: 'hidden' }, 'cursor-pointer': { cursor: 'pointer' },
  'min-w-px': { minWidth: 1 }, 'whitespace-nowrap': { whiteSpace: 'nowrap' }, 'not-italic': { fontStyle: 'normal' },
  'text-center': { textAlign: 'center' }, 'text-left': { textAlign: 'left' }, 'text-right': { textAlign: 'right' },
  'leading-[normal]': { lineHeight: 'normal' }, 'border-solid': { borderStyle: 'solid' }, 'border': { borderWidth: 1 }, 'border-2': { borderWidth: 2 },
  'size-full': { width: '100%', height: '100%' }, 'w-full': { width: '100%' }, 'h-full': { height: '100%' }, 'max-w-none': { maxWidth: 'none' },
  'rounded-full': { borderRadius: 9999 }, 'bg-black': { backgroundColor: '#000000' }, 'bg-white': { backgroundColor: '#FFFFFF' },
  'text-black': { color: '#000000' }, 'text-white': { color: '#FFFFFF' },
  'w-px': { width: 1 }, 'mb-0': { marginBottom: 0 }, 'border-3': { borderWidth: 3 }, 'border-4': { borderWidth: 4 },
};
const properties: Record<string, keyof CSSProperties> = {
  left: 'left', right: 'right', top: 'top', bottom: 'bottom', w: 'width', h: 'height',
  gap: 'gap', rounded: 'borderRadius', tracking: 'letterSpacing', leading: 'lineHeight',
  opacity: 'opacity', 'min-w': 'minWidth', 'min-h': 'minHeight',
};
const value = (s: string) => s.replaceAll('_', ' ').replace(/calc\(([^)]*)\)/g, (_, inside: string) => 'calc(' + inside.replace(/([+])/g, ' $1 ').replace(/(?<=[%\d])-(?=\d)/g, ' - ') + ')');
/** Converts the measured Figma layout into web styles without a CSS framework. */
export function designStyle(classes = ''): CSSProperties {
  if (cache.has(classes)) return cache.get(classes)!;
  const style: CSSProperties = {}; const transforms: string[] = [];
  for (const token of classes.split(/\s+/)) {
    if (simple[token]) { Object.assign(style, simple[token]); continue; }
    let m: RegExpMatchArray | null;
    if ((m = token.match(/^font-\['Inter:([^']+)'\]$/))) {
      style.fontFamily = /Bold/.test(m[1]) && !/Semi/.test(m[1]) ? 'Inter_700Bold' : /Semi/.test(m[1]) ? 'Inter_600SemiBold' : /Medium/.test(m[1]) ? 'Inter_500Medium' : 'Inter_400Regular';
      style.fontWeight = 400; continue;
    }
    if (/^font-(normal|medium|semibold|bold)$/.test(token)) continue;
    if ((m = token.match(/^(bg|text|border)-\[(.+)\]$/))) {
      const raw = value(m[2]).replace(/^color:/, '');
      if (m[1] === 'bg') style.backgroundColor = raw;
      else if (m[1] === 'text') { if (/^[\d.]+px$/.test(raw)) style.fontSize = raw; else style.color = raw; }
      else if (/^[\d.]+px$/.test(raw)) style.borderWidth = raw; else style.borderColor = raw;
      continue;
    }
    if ((m = token.match(/^(left|right|top|bottom|w|h|gap|rounded|tracking|leading|opacity|min-w|min-h)-\[(.+)\]$/))) {
      Object.assign(style, { [properties[m[1]]]: value(m[2]) }); continue;
    }
    if ((m = token.match(/^size-\[(.+)\]$/))) { style.width = value(m[1]); style.height = value(m[1]); continue; }
    if ((m = token.match(/^rounded-(tl|tr|bl|br)-\[(.+)\]$/))) {
      const corners = { tl: 'borderTopLeftRadius', tr: 'borderTopRightRadius', bl: 'borderBottomLeftRadius', br: 'borderBottomRightRadius' };
      Object.assign(style, { [corners[m[1] as keyof typeof corners]]: value(m[2]) }); continue;
    }
    if ((m = token.match(/^inset-\[(.+)\]$/))) { style.inset = value(m[1]); continue; }
    if ((m = token.match(/^p([xytrbl]?)-\[(.+)\]$/))) {
      const raw = value(m[2]); const dirs = { x: ['paddingLeft', 'paddingRight'], y: ['paddingTop', 'paddingBottom'], t: ['paddingTop'], r: ['paddingRight'], b: ['paddingBottom'], l: ['paddingLeft'], '': ['padding'] };
      for (const prop of dirs[m[1] as keyof typeof dirs]) Object.assign(style, { [prop]: raw }); continue;
    }
    if ((m = token.match(/^shadow-\[(.+)\]$/))) { style.boxShadow = value(m[1]); continue; }
    if ((m = token.match(/^drop-shadow-\[(.+)\]$/))) { style.filter = `drop-shadow(${value(m[1])})`; continue; }
    if ((m = token.match(/^backdrop-blur-\[(.+)\]$/))) { style.backdropFilter = `blur(${m[1]})`; style.WebkitBackdropFilter = style.backdropFilter; continue; }
    if ((m = token.match(/^(-?)translate-([xy])-(1\/2|\[(.+)\])$/))) { transforms.push(`translate${m[2].toUpperCase()}(${m[1] ? '-' : ''}${m[3] === '1/2' ? '50%' : value(m[4])})`); continue; }
    if ((m = token.match(/^(-?)rotate-(\d+|\[(.+)\])$/))) { transforms.push(`rotate(${m[1] ? '-' : ''}${m[3] ?? m[2] + 'deg'})`); continue; }
    if ((m = token.match(/^flex-\[(.+)\]$/))) { style.flex = value(m[1]); continue; }
    if ((m = token.match(/^\[([^:]+):(.+)\]$/))) { Object.assign(style, { [m[1].replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())]: value(m[2]) }); continue; }
    if ((m = token.match(/^(left|right|top|bottom|w|h|gap|inset|size)-(0|\d+(?:\.\d+)?)$/))) {
      const n = Number(m[2]) * 4;
      if (m[1] === 'inset') style.inset = n; else if (m[1] === 'size') { style.width = n; style.height = n; } else Object.assign(style, { [properties[m[1]]]: n });
      continue;
    }
  }
  if (transforms.length) style.transform = transforms.join(' ');
  cache.set(classes, style); return style;
}
