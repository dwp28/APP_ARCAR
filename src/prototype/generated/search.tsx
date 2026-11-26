// Geometry, typography and assets adapted from the team's Figma prototype.
import { Asset } from 'expo-asset';
import { designStyle, DesignText, DesignBox } from '../design-style';

const imgWifi = Asset.fromModule(require("../../../assets/prototype/817866a3f3589a23e6f1.svg")).uri;
const imgIconSliders = Asset.fromModule(require("../../../assets/prototype/aa92bca765db6f1d1ccd.svg")).uri;
const imgIconMagnifier = Asset.fromModule(require("../../../assets/prototype/15defce5dd37483d01bd.svg")).uri;
const imgIconXmarkFill = Asset.fromModule(require("../../../assets/prototype/22c3e59152bda93579d0.svg")).uri;
const imgIconChevLeft = Asset.fromModule(require("../../../assets/prototype/eb7775d283a6949b80d6.svg")).uri;
const imgSliders = Asset.fromModule(require("../../../assets/prototype/852ae368013de7978ebb.svg")).uri;
const imgPin = Asset.fromModule(require("../../../assets/prototype/ab6477f65e0753751947.svg")).uri;
const imgChevRight = Asset.fromModule(require("../../../assets/prototype/8a4c66d19f237f18f901.svg")).uri;
const imgClockFill = Asset.fromModule(require("../../../assets/prototype/c004962bc98880337b0d.svg")).uri;
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
type ArcarBoton17Props = {
  className?: string;
  texto1?: string;
};
function ArcarBoton17({
  className,
  texto1 = "Ajustar filtros"
}: ArcarBoton17Props) {
  return <DesignBox style={designStyle(className || "bg-[var(--color-bg-selected,#e8f2ff)] content-stretch flex gap-[var(--space-8,8px)] h-[52px] items-center justify-center overflow-clip relative rounded-[var(--radius-14,14px)] w-[353px]")} data-node-id="115:2603" data-name="Arcar/Botón/17">
      <DesignBox style={designStyle("relative shrink-0 size-[18px]")} data-node-id="115:2598" data-name="icon/sliders">
        <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconSliders} />
      </DesignBox>
      <DesignText style={designStyle("[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[17px] text-[color:var(--color-action-primary,#0a3d91)] whitespace-nowrap")} data-node-id="115:2599">
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
export default function B2Buscar() {
  return <DesignBox style={designStyle("bg-[var(--color-bg-surface,white)] relative size-full")} data-node-id="68:2358" data-name="B2 · Buscar">
      <button style={designStyle("absolute content-stretch cursor-pointer flex gap-[var(--space-4,4px)] h-[44px] items-center left-[6px] overflow-clip px-[var(--space-8,8px)] top-[54px]")} data-node-id="68:2359" data-name="back">
        <DesignBox style={designStyle("relative shrink-0 size-[22px]")} data-node-id="68:2360" data-name="icon/chev-left">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconChevLeft} />
        </DesignBox>
        <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[17px] text-[color:var(--color-action-primary,#0a3d91)] text-left whitespace-nowrap")} data-node-id="68:2361">
          Inicio
        </DesignText>
      </button>
      <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[20px] not-italic text-[34px] text-[color:var(--color-text-primary,#1c1c1e)] top-[100px] tracking-[-0.51px] whitespace-nowrap")} data-node-id="68:2362">
        Busca tu destino
      </DesignText>
      <ArcarCampo13 className="absolute bg-[#e3e3e8] content-stretch flex gap-[var(--space-8,8px)] h-[44px] items-center left-[20px] overflow-clip px-[var(--space-12,12px)] rounded-[var(--radius-12,12px)] top-[152px] w-[293px]" />
      <DesignBox style={designStyle("absolute bg-[var(--color-bg-selected,#e8f2ff)] block cursor-pointer h-[44px] left-[calc(75%+30.25px)] rounded-[var(--radius-12,12px)] top-[152px] w-[48px]")} data-node-id="68:2367" data-name="btn: filtros">
        <DesignBox style={designStyle("absolute left-[13px] size-[22px] top-[11px]")} data-node-id="68:2368" data-name="sliders">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgSliders} />
        </DesignBox>
      </DesignBox>
      <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[normal] left-[20px] not-italic text-[20px] text-[color:var(--color-text-primary,#1c1c1e)] top-[222px] whitespace-nowrap")} data-node-id="68:2369">
        Resultados
      </DesignText>
      <DesignBox style={designStyle("absolute block cursor-pointer h-[68px] left-0 top-[256px] w-[393px]")} data-node-id="115:2518" data-name="row: Calle Gran Vía, 32">
        <DesignBox style={designStyle("absolute bg-[var(--icon-tile-ffedec,#ffedec)] left-[20px] rounded-[var(--radius-20,20px)] size-[40px] top-[14px]")} data-node-id="I115:2518;115:2509" data-name="icono pin">
          <DesignBox style={designStyle("absolute left-[8.8px] size-[22.4px] top-[8.8px]")} data-node-id="I115:2518;115:2510" data-name="pin">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgPin} />
          </DesignBox>
        </DesignBox>
        <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[74px] not-italic text-[17px] text-[color:var(--color-text-primary,#1c1c1e)] text-left top-[13px] whitespace-nowrap")} data-node-id="I115:2518;115:2511">
          Calle Gran Vía, 32
        </DesignText>
        <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[74px] not-italic text-[14px] text-[color:var(--color-text-muted,#8e8e93)] text-left top-[37px] whitespace-nowrap")} data-node-id="I115:2518;115:2512">
          Madrid · a 1,2 km
        </DesignText>
        <DesignBox style={designStyle("absolute left-[360px] size-[14px] top-[27px]")} data-node-id="I115:2518;115:2513" data-name="chev-right">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgChevRight} />
        </DesignBox>
        <DesignBox style={designStyle("absolute bg-[var(--icon-tile-c6c6c8,#c6c6c8)] h-[0.5px] left-[74px] top-[67.5px] w-[319px]")} data-node-id="I115:2518;115:2514" data-name="Rectangle" />
      </DesignBox>
      <DesignBox style={designStyle("absolute block cursor-pointer h-[68px] left-0 top-[324px] w-[393px]")} data-node-id="115:2528" data-name="row: Gran Vía, 14">
        <DesignBox style={designStyle("absolute bg-[var(--icon-tile-ffedec,#ffedec)] left-[20px] rounded-[var(--radius-20,20px)] size-[40px] top-[14px]")} data-node-id="I115:2528;115:2509" data-name="icono pin">
          <DesignBox style={designStyle("absolute left-[8.8px] size-[22.4px] top-[8.8px]")} data-node-id="I115:2528;115:2510" data-name="pin">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgPin} />
          </DesignBox>
        </DesignBox>
        <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[74px] not-italic text-[17px] text-[color:var(--color-text-primary,#1c1c1e)] text-left top-[13px] whitespace-nowrap")} data-node-id="I115:2528;115:2511">
          Gran Vía, 14
        </DesignText>
        <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[74px] not-italic text-[14px] text-[color:var(--color-text-muted,#8e8e93)] text-left top-[37px] whitespace-nowrap")} data-node-id="I115:2528;115:2512">
          Madrid · a 1,5 km
        </DesignText>
        <DesignBox style={designStyle("absolute left-[360px] size-[14px] top-[27px]")} data-node-id="I115:2528;115:2513" data-name="chev-right">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgChevRight} />
        </DesignBox>
        <DesignBox style={designStyle("absolute bg-[var(--icon-tile-c6c6c8,#c6c6c8)] h-[0.5px] left-[74px] top-[67.5px] w-[319px]")} data-node-id="I115:2528;115:2514" data-name="Rectangle" />
      </DesignBox>
      <DesignBox style={designStyle("absolute block cursor-pointer h-[68px] left-0 top-[392px] w-[393px]")} data-node-id="115:2538" data-name="row: Plaza del Callao">
        <DesignBox style={designStyle("absolute bg-[var(--icon-tile-ffedec,#ffedec)] left-[20px] rounded-[var(--radius-20,20px)] size-[40px] top-[14px]")} data-node-id="I115:2538;115:2509" data-name="icono pin">
          <DesignBox style={designStyle("absolute left-[8.8px] size-[22.4px] top-[8.8px]")} data-node-id="I115:2538;115:2510" data-name="pin">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgPin} />
          </DesignBox>
        </DesignBox>
        <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[74px] not-italic text-[17px] text-[color:var(--color-text-primary,#1c1c1e)] text-left top-[13px] whitespace-nowrap")} data-node-id="I115:2538;115:2511">
          Plaza del Callao
        </DesignText>
        <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[74px] not-italic text-[14px] text-[color:var(--color-text-muted,#8e8e93)] text-left top-[37px] whitespace-nowrap")} data-node-id="I115:2538;115:2512">
          Madrid · a 1,3 km
        </DesignText>
        <DesignBox style={designStyle("absolute left-[360px] size-[14px] top-[27px]")} data-node-id="I115:2538;115:2513" data-name="chev-right">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgChevRight} />
        </DesignBox>
        <DesignBox style={designStyle("absolute bg-[var(--icon-tile-c6c6c8,#c6c6c8)] h-[0.5px] left-[74px] top-[67.5px] w-[319px]")} data-node-id="I115:2538;115:2514" data-name="Rectangle" />
      </DesignBox>
      <DesignBox style={designStyle("absolute block cursor-pointer h-[68px] left-0 top-[460px] w-[393px]")} data-node-id="115:2558" data-name="row: Universidad">
        <DesignBox style={designStyle("absolute bg-[var(--icon-tile-eeeef0,#eeeef0)] left-[20px] rounded-[var(--radius-20,20px)] size-[40px] top-[14px]")} data-node-id="I115:2558;115:2549" data-name="icono clock-fill">
          <DesignBox style={designStyle("absolute left-[8.8px] size-[22.4px] top-[8.8px]")} data-node-id="I115:2558;115:2550" data-name="clock-fill">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgClockFill} />
          </DesignBox>
        </DesignBox>
        <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[74px] not-italic text-[17px] text-[color:var(--color-text-primary,#1c1c1e)] text-left top-[13px] whitespace-nowrap")} data-node-id="I115:2558;115:2551">
          Universidad
        </DesignText>
        <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[74px] not-italic text-[14px] text-[color:var(--color-text-muted,#8e8e93)] text-left top-[37px] whitespace-nowrap")} data-node-id="I115:2558;115:2552">
          Reciente · Av. Arapiles
        </DesignText>
        <DesignBox style={designStyle("absolute left-[360px] size-[14px] top-[27px]")} data-node-id="I115:2558;115:2553" data-name="chev-right">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgChevRight} />
        </DesignBox>
      </DesignBox>
      <ArcarBoton16 className="absolute bg-[var(--color-action-primary,#0a3d91)] content-stretch cursor-pointer flex gap-[var(--space-8,8px)] h-[52px] items-center justify-center left-[20px] overflow-clip rounded-[var(--radius-14,14px)] top-[698px] w-[353px]" />
      <ArcarBoton17 className="absolute bg-[var(--color-bg-selected,#e8f2ff)] content-stretch cursor-pointer flex gap-[var(--space-8,8px)] h-[52px] items-center justify-center left-[20px] overflow-clip rounded-[var(--radius-14,14px)] top-[758px] w-[353px]" />
      <IOsHomeIndicator className="absolute h-[34px] left-0 top-[818px] w-[393px]" />
      <IOsStatusBarOscura className="absolute h-[54px] left-0 top-0 w-[393px]" />
    </DesignBox>;
}
