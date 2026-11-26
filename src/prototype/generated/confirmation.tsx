// Geometry, typography and assets adapted from the team's Figma prototype.
import { Asset } from 'expo-asset';
import { designStyle, DesignText, DesignBox } from '../design-style';

const imgWifi = Asset.fromModule(require("../../../assets/prototype/817866a3f3589a23e6f1.svg")).uri;
const imgIconHeart = Asset.fromModule(require("../../../assets/prototype/cc14aadb8148956397d7.svg")).uri;
const imgHalo = Asset.fromModule(require("../../../assets/prototype/aa3e254084e3c95c9a4e.svg")).uri;
const imgInsignia = Asset.fromModule(require("../../../assets/prototype/4ced47da3fe6b29c7cda.svg")).uri;
const imgFlag = Asset.fromModule(require("../../../assets/prototype/07d8544fbb94d1cc2fa1.svg")).uri;
function IOsStatusBarOscura({
  className
}: {
  className?: string;
}) {
  return <DesignBox style={designStyle(className || "h-[54px] relative w-[393px]")} data-node-id="3:36" data-name="iOS/Status bar/Oscura">
      <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold h-[22px] leading-[normal] left-[67px] not-italic text-[17px] text-black text-center top-[17px] tracking-[-0.17px] w-[70px]")} data-node-id="3:37">
        9:41
      </DesignText>
      <DesignBox style={designStyle("absolute bg-black h-[37px] left-[134px] rounded-[19px] top-[11px] w-[125px]")} data-node-id="3:38" data-name="Dynamic Island" />
      <DesignBox style={designStyle("absolute bg-black h-[4px] left-[296px] rounded-[1px] top-[28.5px] w-[3px]")} data-node-id="3:39" data-name="Rectangle" />
      <DesignBox style={designStyle("absolute bg-black h-[6.5px] left-[300.6px] rounded-[1px] top-[26px] w-[3px]")} data-node-id="3:40" data-name="Rectangle" />
      <DesignBox style={designStyle("absolute bg-black h-[9px] left-[305.2px] rounded-[1px] top-[23.5px] w-[3px]")} data-node-id="3:41" data-name="Rectangle" />
      <DesignBox style={designStyle("absolute bg-black h-[11.5px] left-[309.8px] rounded-[1px] top-[21px] w-[3px]")} data-node-id="3:42" data-name="Rectangle" />
      <DesignBox style={designStyle("absolute h-[12px] left-[317px] top-[21px] w-[17px]")} data-node-id="3:43" data-name="wifi">
        <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgWifi} />
      </DesignBox>
      <DesignBox style={designStyle("absolute border border-[rgba(0,0,0,0.4)] border-solid h-[12px] left-[339px] rounded-[3.5px] top-[20.5px] w-[25px]")} data-node-id="3:45" data-name="Rectangle" />
      <DesignBox style={designStyle("absolute bg-black h-[8px] left-[341px] rounded-[2px] top-[22.5px] w-[21px]")} data-node-id="3:46" data-name="Rectangle" />
      <DesignBox style={designStyle("absolute bg-[rgba(0,0,0,0.4)] h-[4px] left-[365px] rounded-[1px] top-[24.5px] w-[1.5px]")} data-node-id="3:47" data-name="Rectangle" />
    </DesignBox>;
}
function IOsHomeIndicator({
  className
}: {
  className?: string;
}) {
  return <DesignBox style={designStyle(className || "h-[34px] relative w-[393px]")} data-node-id="3:5" data-name="iOS/Home indicator">
      <DesignBox style={designStyle("absolute bg-black h-[5px] left-[129.5px] rounded-[3px] top-[21px] w-[134px]")} data-node-id="3:6" data-name="Rectangle" />
    </DesignBox>;
}
type ArcarBoton25Props = {
  className?: string;
  texto1?: string;
};
function ArcarBoton25({
  className,
  texto1 = "Guardar en favoritos"
}: ArcarBoton25Props) {
  return <DesignBox style={designStyle(className || "bg-[var(--color-bg-selected,#e8f2ff)] content-stretch flex gap-[var(--space-8,8px)] h-[52px] items-center justify-center overflow-clip relative rounded-[var(--radius-14,14px)] w-[353px]")} data-node-id="115:2778" data-name="Arcar/Botón/25">
      <DesignBox style={designStyle("relative shrink-0 size-[18px]")} data-node-id="115:2775" data-name="icon/heart">
        <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconHeart} />
      </DesignBox>
      <DesignText style={designStyle("[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[17px] text-[color:var(--color-action-primary,#0a3d91)] whitespace-nowrap")} data-node-id="115:2776">
        {texto1}
      </DesignText>
    </DesignBox>;
}
type ArcarBoton16Props = {
  className?: string;
  texto1?: string;
};
function ArcarBoton16({
  className,
  texto1 = "Buscar plazas cercanas"
}: ArcarBoton16Props) {
  return <DesignBox style={designStyle(className || "bg-[var(--color-action-primary,#0a3d91)] content-stretch flex gap-[var(--space-8,8px)] h-[52px] items-center justify-center overflow-clip relative rounded-[var(--radius-14,14px)] w-[353px]")} data-node-id="115:2570" data-name="Arcar/Botón/16">
      <DesignText style={designStyle("[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[17px] text-[color:var(--color-text-inverse,white)] whitespace-nowrap")} data-node-id="115:2569">
        {texto1}
      </DesignText>
    </DesignBox>;
}
export default function C3Fin() {
  return <DesignBox style={designStyle("bg-[var(--color-bg-surface,white)] relative size-full")} data-node-id="68:2622" data-name="C3 · Fin">
      <DesignBox style={designStyle("absolute left-[81.5px] size-[230px] top-[135px]")} data-node-id="68:2623" data-name="halo">
        <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgHalo} />
      </DesignBox>
      <DesignBox style={designStyle("absolute left-[calc(25%+28.25px)] size-[140px] top-[180px]")} data-node-id="68:2624" data-name="insignia">
        <DesignBox style={designStyle("absolute inset-[-14.29%_-21.43%_-28.57%_-21.43%]")}>
          <img alt="" style={designStyle("block max-w-none size-full")} src={imgInsignia} />
        </DesignBox>
      </DesignBox>
      <DesignBox style={designStyle("absolute left-[calc(25%+66.25px)] size-[64px] top-[218px]")} data-node-id="68:2625" data-name="flag">
        <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgFlag} />
      </DesignBox>
      <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[196.5px] not-italic text-[32px] text-[color:var(--color-text-primary,#1c1c1e)] text-center top-[392px] tracking-[-0.48px] w-[345px]")} data-node-id="68:2626">
        ¡Has llegado!
      </DesignText>
      <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[24px] left-[196.5px] not-italic text-[17px] text-[color:var(--color-text-secondary,#6e6e73)] text-center top-[440px] w-[330px]")} data-node-id="68:2627">
        Parking Gran Vía · Calle Gran Vía, 28. Te quedan 5 min a pie hasta tu destino.
      </DesignText>
      <DesignBox style={designStyle("absolute bg-[var(--color-bg-canvas,#f2f2f7)] h-[96px] left-[20px] rounded-[var(--radius-18,18px)] top-[528px] w-[353px]")} data-node-id="68:2628" data-name="resumen">
        <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[88px] not-italic text-[28px] text-[color:var(--color-text-primary,#1c1c1e)] text-center top-[18px] tracking-[-0.42px] w-[176px]")} data-node-id="68:2629">
          6 min
        </DesignText>
        <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[88px] not-italic text-[13px] text-[color:var(--color-text-secondary,#6e6e73)] text-center top-[56px] w-[176px]")} data-node-id="68:2630">
          de trayecto
        </DesignText>
        <DesignBox style={designStyle("absolute bg-[#c6c6c8] h-[56px] left-[176.5px] top-[20px] w-[0.5px]")} data-node-id="68:2631" data-name="Rectangle" />
        <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[265px] not-italic text-[28px] text-[color:var(--color-status-available-text,#1b6e32)] text-center top-[18px] tracking-[-0.42px] w-[176px]")} data-node-id="68:2632">
          9 min
        </DesignText>
        <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[265px] not-italic text-[13px] text-[color:var(--color-text-secondary,#6e6e73)] text-center top-[56px] w-[176px]")} data-node-id="68:2633">
          ahorrados buscando
        </DesignText>
      </DesignBox>
      <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[196.5px] not-italic text-[15px] text-[color:var(--color-text-primary,#1c1c1e)] text-center top-[646px] w-[345px]")} data-node-id="68:2634">
        Tu plaza: planta -2 · plaza 47
      </DesignText>
      <ArcarBoton16 className="absolute bg-[var(--color-action-primary,#0a3d91)] content-stretch cursor-pointer flex gap-[var(--space-8,8px)] h-[52px] items-center justify-center left-[20px] overflow-clip rounded-[var(--radius-14,14px)] top-[698px] w-[353px]" texto1="Volver al inicio" />
      <ArcarBoton25 className="absolute bg-[var(--color-bg-selected,#e8f2ff)] content-stretch cursor-pointer flex gap-[var(--space-8,8px)] h-[52px] items-center justify-center left-[20px] overflow-clip rounded-[var(--radius-14,14px)] top-[758px] w-[353px]" />
      <IOsHomeIndicator className="absolute h-[34px] left-0 top-[818px] w-[393px]" />
      <IOsStatusBarOscura className="absolute h-[54px] left-0 top-0 w-[393px]" />
    </DesignBox>;
}
