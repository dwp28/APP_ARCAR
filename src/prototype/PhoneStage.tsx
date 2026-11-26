import { CSSProperties, ReactNode } from 'react';
import { useWindowDimensions } from 'react-native';
import './phone.css';

export function PhoneStage({ children }: { children: ReactNode }) {
  const { width, height } = useWindowDimensions();
  const scale = Math.max(0.2, Math.min((width - 36) / 417, (height - 64) / 876, 1));
  return <main className="phone-stage" aria-label="App Arcar en iPhone">
    <div className="phone-size" style={{ width: 417 * scale, height: 876 * scale }}>
      <div className="iphone-shell" style={{ transform: `scale(${scale})` } as CSSProperties}>
        <div className="iphone-screen">{children}</div>
      </div>
    </div>
    <div className="phone-caption">App Arcar · Prototipo interactivo · Datos de demostración</div>
  </main>;
}
