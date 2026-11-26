// Geometry, typography and assets adapted from the team's Figma prototype.
import { Asset } from 'expo-asset';
import { designStyle, DesignText, DesignBox } from '../design-style';

const imgWifi = Asset.fromModule(require("../../../assets/prototype/817866a3f3589a23e6f1.svg")).uri;
const imgIconMagnifier = Asset.fromModule(require("../../../assets/prototype/15defce5dd37483d01bd.svg")).uri;
const imgIconXmarkFill = Asset.fromModule(require("../../../assets/prototype/22c3e59152bda93579d0.svg")).uri;
const imgIconChevLeft = Asset.fromModule(require("../../../assets/prototype/eb7775d283a6949b80d6.svg")).uri;
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
type ArcarCampo13Props = {
  className?: string;
  texto1?: string;
};
function ArcarCampo13({
  className,
  texto1 = "Calle Gran Vía, 32"
}: ArcarCampo13Props) {
  return <DesignBox style={designStyle(className || "bg-[#e3e3e8] content-stretch flex gap-[var(--space-8,8px)] h-[44px] items-center overflow-clip px-[var(--space-12,12px)] relative rounded-[var(--radius-12,12px)] w-[293px]")} data-node-id="115:2499" data-name="Arcar/Campo/13">
      <DesignBox style={designStyle("relative shrink-0 size-[18px]")} data-node-id="115:2492" data-name="icon/magnifier">
        <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconMagnifier} />
      </DesignBox>
      <DesignText style={designStyle("[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[normal] min-w-px not-italic relative text-[17px] text-[color:var(--color-text-primary,#1c1c1e)]")} data-node-id="115:2493">
        {texto1}
      </DesignText>
      <DesignBox style={designStyle("relative shrink-0 size-[18px]")} data-node-id="115:2494" data-name="icon/xmark-fill">
        <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconXmarkFill} />
      </DesignBox>
    </DesignBox>;
}
export default function B22ErrorDeBusqueda() {
  return <DesignBox style={designStyle("bg-[var(--color-bg-surface,white)] relative size-full")} data-node-id="148:2556" data-name="B2.2 · Error de búsqueda">
      <DesignBox style={designStyle("absolute content-stretch cursor-pointer flex gap-[var(--space-4,4px)] h-[44px] items-center left-[6px] overflow-clip px-[var(--space-8,8px)] top-[54px]")} data-node-id="148:2557" data-name="back">
        <DesignBox style={designStyle("relative shrink-0 size-[22px]")} data-node-id="148:2558" data-name="icon/chev-left">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconChevLeft} />
        </DesignBox>
        <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[17px] text-[color:var(--color-action-primary,#0a3d91)] text-left whitespace-nowrap")} data-node-id="148:2559">
          Inicio
        </DesignText>
      </DesignBox>
      <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[20px] not-italic text-[34px] text-[color:var(--color-text-primary,#1c1c1e)] top-[100px] tracking-[-0.51px] w-[353px]")} data-node-id="148:2560">
        No pudimos buscar
      </DesignText>
      <ArcarCampo13 className="absolute bg-[#e3e3e8] content-stretch flex gap-[var(--space-8,8px)] h-[44px] items-center left-[20px] overflow-clip px-[var(--space-12,12px)] rounded-[var(--radius-12,12px)] top-[152px] w-[293px]" />
      <IOsHomeIndicator className="absolute h-[34px] left-0 top-[818px] w-[393px]" />
      <IOsStatusBarOscura className="absolute h-[54px] left-0 top-0 w-[393px]" />
      <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[20px] not-italic text-[17px] text-[color:var(--color-text-primary,#1c1c1e)] top-[245px] w-[353px]")} data-node-id="148:2695">
        Revisa tu conexión y vuelve a intentarlo. Tu destino se conserva.
      </DesignText>
      <ArcarBoton16 className="absolute bg-[var(--color-action-primary,#0a3d91)] content-stretch cursor-pointer flex gap-[var(--space-8,8px)] h-[52px] items-center justify-center left-[20px] overflow-clip rounded-[var(--radius-14,14px)] top-[632px] w-[353px]" texto1="Reintentar" />
      <ArcarBoton16 className="absolute bg-[var(--color-action-primary,#0a3d91)] content-stretch cursor-pointer flex gap-[var(--space-8,8px)] h-[52px] items-center justify-center left-[20px] overflow-clip rounded-[var(--radius-14,14px)] top-[698px] w-[353px]" texto1="Volver a buscar" />
    </DesignBox>;
}
