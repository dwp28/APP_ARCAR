// Geometry, typography and assets adapted from the team's Figma prototype.
import { Asset } from 'expo-asset';
import { designStyle, DesignText, DesignBox } from '../design-style';

const imgWifi = Asset.fromModule(require("../../../assets/prototype/817866a3f3589a23e6f1.svg")).uri;
const imgCar = Asset.fromModule(require("../../../assets/prototype/2a3ae0fdd8b402b46284.svg")).uri;
const imgIconChevLeft = Asset.fromModule(require("../../../assets/prototype/eb7775d283a6949b80d6.svg")).uri;
const imgIconMapLine = Asset.fromModule(require("../../../assets/prototype/879c48b0084df4e96c4a.svg")).uri;
const imgPin = Asset.fromModule(require("../../../assets/prototype/eba1607c6746f44c6a0b.svg")).uri;
const imgCar1 = Asset.fromModule(require("../../../assets/prototype/2a3ae0fdd8b402b46284.svg")).uri;
const imgIconHouse = Asset.fromModule(require("../../../assets/prototype/65da2e422c8f7eea0e4b.svg")).uri;
const imgIconMap = Asset.fromModule(require("../../../assets/prototype/a8f57953d3f21f66ae77.svg")).uri;
const imgIconHeart = Asset.fromModule(require("../../../assets/prototype/ba0f7cbcb453d018cf8c.svg")).uri;
const imgIconPersonCircle = Asset.fromModule(require("../../../assets/prototype/4b69701710fcbb94d570.svg")).uri;
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
type ArcarTarjeta23Props = {
  className?: string;
  texto1?: string;
  texto2?: string;
};
function ArcarTarjeta23({
  className,
  texto1 = "Plaza en calle",
  texto2 = "Gran Vía, 32 · 3 min andando"
}: ArcarTarjeta23Props) {
  return <DesignBox style={designStyle(className || "bg-[var(--color-bg-surface,white)] h-[84px] relative rounded-[var(--radius-16,16px)] w-[353px]")} data-node-id="115:2683" data-name="Arcar/Tarjeta/23">
      <DesignBox style={designStyle("absolute bg-[var(--color-status-available,#34c759)] left-[14px] rounded-[var(--radius-24,24px)] size-[48px] top-[18px]")} data-node-id="115:2672" data-name="icono car">
        <DesignBox style={designStyle("absolute left-[10.56px] size-[26.88px] top-[10.56px]")} data-node-id="115:2673" data-name="car">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgCar} />
        </DesignBox>
      </DesignBox>
      <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[normal] left-[74px] not-italic text-[17px] text-[color:var(--color-text-primary,#1c1c1e)] top-[20px] whitespace-nowrap")} data-node-id="115:2674">
        {texto1}
      </DesignText>
      <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[74px] not-italic text-[14px] text-[color:var(--color-text-muted,#8e8e93)] top-[46px] whitespace-nowrap")} data-node-id="115:2675">
        {texto2}
      </DesignText>
      <DesignBox style={designStyle("absolute bg-[var(--color-status-available-bg,#e3f7e8)] content-stretch flex h-[28px] items-center left-[283px] overflow-clip px-[var(--space-12,12px)] rounded-[var(--radius-14,14px)] top-[27px]")} data-node-id="115:2676" data-name="chip: Libre">
        <DesignText style={designStyle("[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] text-[color:var(--color-status-available-text,#1b6e32)] whitespace-nowrap")} data-node-id="115:2677">
          Libre
        </DesignText>
      </DesignBox>
    </DesignBox>;
}
export default function B5ListaPlazas() {
  return <DesignBox style={designStyle("bg-[var(--color-bg-canvas,#f2f2f7)] relative size-full")} data-node-id="68:2519" data-name="B5 · Lista plazas">
      <DesignBox style={designStyle("absolute content-stretch cursor-pointer flex gap-[var(--space-4,4px)] h-[44px] items-center left-[6px] overflow-clip px-[var(--space-8,8px)] top-[54px]")} data-node-id="68:2520" data-name="back">
        <DesignBox style={designStyle("relative shrink-0 size-[22px]")} data-node-id="68:2521" data-name="icon/chev-left">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconChevLeft} />
        </DesignBox>
        <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[17px] text-[color:var(--color-action-primary,#0a3d91)] text-left whitespace-nowrap")} data-node-id="68:2522">
          Mapa
        </DesignText>
      </DesignBox>
      <DesignBox style={designStyle("absolute bg-[var(--color-bg-selected,#e8f2ff)] content-stretch cursor-pointer flex gap-[var(--space-8,8px)] h-[36px] items-center justify-center left-[calc(50%+70.5px)] overflow-clip rounded-[var(--radius-18,18px)] top-[58px] w-[110px]")} data-node-id="68:2523" data-name="btn: Ver mapa">
        <DesignBox style={designStyle("relative shrink-0 size-[16px]")} data-node-id="68:2524" data-name="icon/map-line">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconMapLine} />
        </DesignBox>
        <DesignText style={designStyle("[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[15px] text-[color:var(--color-action-primary,#0a3d91)] text-left whitespace-nowrap")} data-node-id="68:2525">
          Ver mapa
        </DesignText>
      </DesignBox>
      <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[20px] not-italic text-[34px] text-[color:var(--color-text-primary,#1c1c1e)] top-[100px] tracking-[-0.51px] whitespace-nowrap")} data-node-id="68:2526">
        Plazas cercanas
      </DesignText>
      <DesignBox style={designStyle("absolute left-[20px] size-[15px] top-[152px]")} data-node-id="68:2527" data-name="pin">
        <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgPin} />
      </DesignBox>
      <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[39px] not-italic text-[15px] text-[color:var(--color-text-secondary,#6e6e73)] top-[150px] whitespace-nowrap")} data-node-id="68:2528">
        Calle Gran Vía, 32
      </DesignText>
      <DesignBox style={designStyle("absolute bg-[#e3e3e8] h-[36px] left-[20px] rounded-[9px] top-[184px] w-[353px]")} data-node-id="68:2529" data-name="segmented">
        <DesignBox style={designStyle("absolute bg-[var(--color-bg-surface,white)] h-[32px] left-[2px] rounded-[7px] shadow-[0px_3px_8px_0px_rgba(0,0,0,0.12)] top-[2px] w-[116.333px]")} data-node-id="68:2530" data-name="seleccionado" />
        <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[normal] left-[60.17px] not-italic text-[14px] text-[color:var(--color-text-primary,#1c1c1e)] text-center top-[9px] w-[116.333px]")} data-node-id="68:2531">
          Todas
        </DesignText>
        <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[176.5px] not-italic text-[14px] text-[color:var(--color-text-primary,#1c1c1e)] text-center top-[9px] w-[116.333px]")} data-node-id="68:2532">
          Calle
        </DesignText>
        <DesignBox style={designStyle("absolute bg-[var(--color-border-default,#e5e5ea)] h-[16px] left-[234.67px] top-[10px] w-px")} data-node-id="68:2533" data-name="Rectangle" />
        <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[292.83px] not-italic text-[14px] text-[color:var(--color-text-primary,#1c1c1e)] text-center top-[9px] w-[116.333px]")} data-node-id="68:2534">
          Parking
        </DesignText>
      </DesignBox>
      <DesignBox style={designStyle("absolute bg-[var(--color-bg-surface,white)] block cursor-pointer h-[84px] left-[20px] rounded-[var(--radius-16,16px)] top-[236px] w-[353px]")} data-node-id="115:2684" data-name="row: Plaza en calle">
        <DesignBox style={designStyle("absolute bg-[var(--icon-tile-34c759,#34c759)] left-[14px] rounded-[var(--radius-24,24px)] size-[48px] top-[18px]")} data-node-id="I115:2684;115:2672" data-name="icono car">
          <DesignBox style={designStyle("absolute left-[10.56px] size-[26.88px] top-[10.56px]")} data-node-id="I115:2684;115:2673" data-name="car">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgCar1} />
          </DesignBox>
        </DesignBox>
        <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[normal] left-[74px] not-italic text-[17px] text-[color:var(--color-text-primary,#1c1c1e)] text-left top-[20px] whitespace-nowrap")} data-node-id="I115:2684;115:2674">
          Plaza en calle
        </DesignText>
        <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[74px] not-italic text-[14px] text-[color:var(--color-text-muted,#8e8e93)] text-left top-[46px] whitespace-nowrap")} data-node-id="I115:2684;115:2675">
          Gran Vía, 32 · 3 min andando
        </DesignText>
        <DesignBox style={designStyle("absolute bg-[var(--icon-tile-e3f7e8,#e3f7e8)] content-stretch flex h-[28px] items-center left-[283px] overflow-clip px-[var(--space-12,12px)] rounded-[var(--radius-14,14px)] top-[27px]")} data-node-id="I115:2684;115:2676" data-name="chip: Libre">
          <DesignText style={designStyle("[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] text-[color:var(--color-status-available-text,#1b6e32)] text-left whitespace-nowrap")} data-node-id="I115:2684;115:2677">
            Libre
          </DesignText>
        </DesignBox>
      </DesignBox>
      <ArcarTarjeta23 className="absolute bg-[var(--color-bg-surface,white)] block cursor-pointer h-[84px] left-[20px] rounded-[var(--radius-16,16px)] top-[330px] w-[353px]" texto1="Parking Gran Vía" texto2="12 libres · 2,50 €/h · 5 min" />
      <DesignBox style={designStyle("absolute bg-[var(--color-bg-surface,white)] block cursor-pointer h-[84px] left-[20px] rounded-[var(--radius-16,16px)] top-[424px] w-[353px]")} data-node-id="115:2710" data-name="row: Plaza en calle 2">
        <DesignBox style={designStyle("absolute bg-[var(--icon-tile-34c759,#34c759)] left-[14px] rounded-[var(--radius-24,24px)] size-[48px] top-[18px]")} data-node-id="I115:2710;115:2672" data-name="icono car">
          <DesignBox style={designStyle("absolute left-[10.56px] size-[26.88px] top-[10.56px]")} data-node-id="I115:2710;115:2673" data-name="car">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgCar1} />
          </DesignBox>
        </DesignBox>
        <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[normal] left-[74px] not-italic text-[17px] text-[color:var(--color-text-primary,#1c1c1e)] text-left top-[20px] whitespace-nowrap")} data-node-id="I115:2710;115:2674">
          Plaza en calle
        </DesignText>
        <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[74px] not-italic text-[14px] text-[color:var(--color-text-muted,#8e8e93)] text-left top-[46px] whitespace-nowrap")} data-node-id="I115:2710;115:2675">
          C/ Alcalá, 15 · 5 min andando
        </DesignText>
        <DesignBox style={designStyle("absolute bg-[var(--icon-tile-e3f7e8,#e3f7e8)] content-stretch flex h-[28px] items-center left-[283px] overflow-clip px-[var(--space-12,12px)] rounded-[var(--radius-14,14px)] top-[27px]")} data-node-id="I115:2710;115:2676" data-name="chip: Libre">
          <DesignText style={designStyle("[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] text-[color:var(--color-status-available-text,#1b6e32)] text-left whitespace-nowrap")} data-node-id="I115:2710;115:2677">
            Libre
          </DesignText>
        </DesignBox>
      </DesignBox>
      <ArcarTarjeta23 className="absolute bg-[var(--color-bg-surface,white)] block cursor-pointer h-[84px] left-[20px] rounded-[var(--radius-16,16px)] top-[518px] w-[353px]" texto1="Parking del Carmen" texto2="4 libres · 2,95 €/h · 6 min" />
      <DesignBox style={designStyle("absolute bg-[var(--color-bg-surface,white)] block cursor-pointer h-[84px] left-[20px] rounded-[var(--radius-16,16px)] top-[612px] w-[353px]")} data-node-id="115:2736" data-name="row: Plaza en calle 4">
        <DesignBox style={designStyle("absolute bg-[var(--icon-tile-34c759,#34c759)] left-[14px] rounded-[var(--radius-24,24px)] size-[48px] top-[18px]")} data-node-id="I115:2736;115:2672" data-name="icono car">
          <DesignBox style={designStyle("absolute left-[10.56px] size-[26.88px] top-[10.56px]")} data-node-id="I115:2736;115:2673" data-name="car">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgCar1} />
          </DesignBox>
        </DesignBox>
        <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[normal] left-[74px] not-italic text-[17px] text-[color:var(--color-text-primary,#1c1c1e)] text-left top-[20px] whitespace-nowrap")} data-node-id="I115:2736;115:2674">
          Plaza en calle
        </DesignText>
        <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[74px] not-italic text-[14px] text-[color:var(--color-text-muted,#8e8e93)] text-left top-[46px] whitespace-nowrap")} data-node-id="I115:2736;115:2675">
          Calle de la Montera, 12 · 4 min
        </DesignText>
        <DesignBox style={designStyle("absolute bg-[var(--icon-tile-e3f7e8,#e3f7e8)] content-stretch flex h-[28px] items-center left-[283px] overflow-clip px-[var(--space-12,12px)] rounded-[var(--radius-14,14px)] top-[27px]")} data-node-id="I115:2736;115:2676" data-name="chip: Libre">
          <DesignText style={designStyle("[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] text-[color:var(--color-status-available-text,#1b6e32)] text-left whitespace-nowrap")} data-node-id="I115:2736;115:2677">
            Libre
          </DesignText>
        </DesignBox>
      </DesignBox>
      <DesignBox style={designStyle("absolute backdrop-blur-[10px] bg-[rgba(249,249,249,0.94)] h-[83px] left-0 top-[769px] w-[393px]")} data-node-id="68:2570" data-name="Tab bar">
        <DesignBox style={designStyle("absolute bg-[rgba(0,0,0,0.18)] h-[0.5px] left-0 top-0 w-[393px]")} data-node-id="I68:2570;3:280" data-name="separador" />
        <DesignBox style={designStyle("absolute block cursor-pointer h-[49px] left-0 overflow-clip top-0 w-[98px]")} data-node-id="I68:2570;3:281" data-name="tab/Inicio">
          <DesignBox style={designStyle("absolute left-[36.5px] size-[25px] top-[6px]")} data-node-id="I68:2570;3:282" data-name="icon/house">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconHouse} />
          </DesignBox>
          <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium'] font-medium h-[12px] leading-[normal] left-[49px] not-italic text-[#8e8e93] text-[10px] text-center top-[34px] w-[98px]")} data-node-id="I68:2570;3:284">
            Inicio
          </DesignText>
        </DesignBox>
        <DesignBox style={designStyle("absolute block cursor-pointer h-[49px] left-[98.25px] overflow-clip top-0 w-[98px]")} data-node-id="I68:2570;3:285" data-name="tab/Mapa">
          <DesignBox style={designStyle("absolute left-[36.5px] size-[25px] top-[6px]")} data-node-id="I68:2570;3:286" data-name="icon/map">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconMap} />
          </DesignBox>
          <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium'] font-medium h-[12px] leading-[normal] left-[49px] not-italic text-[#0a7cff] text-[10px] text-center top-[34px] w-[98px]")} data-node-id="I68:2570;3:289">
            Mapa
          </DesignText>
        </DesignBox>
        <DesignBox style={designStyle("absolute block cursor-pointer h-[49px] left-[196.5px] overflow-clip top-0 w-[98px]")} data-node-id="I68:2570;3:290" data-name="tab/Favoritos">
          <DesignBox style={designStyle("absolute left-[36.5px] size-[25px] top-[6px]")} data-node-id="I68:2570;3:291" data-name="icon/heart">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconHeart} />
          </DesignBox>
          <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium'] font-medium h-[12px] leading-[normal] left-[49px] not-italic text-[#8e8e93] text-[10px] text-center top-[34px] w-[98px]")} data-node-id="I68:2570;3:293">
            Favoritos
          </DesignText>
        </DesignBox>
        <DesignBox style={designStyle("absolute block cursor-pointer h-[49px] left-[294.75px] overflow-clip top-0 w-[98px]")} data-node-id="I68:2570;3:294" data-name="tab/Perfil">
          <DesignBox style={designStyle("absolute left-[36.5px] size-[25px] top-[6px]")} data-node-id="I68:2570;3:295" data-name="icon/person-circle">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconPersonCircle} />
          </DesignBox>
          <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium'] font-medium h-[12px] leading-[normal] left-[49px] not-italic text-[#8e8e93] text-[10px] text-center top-[34px] w-[98px]")} data-node-id="I68:2570;3:299">
            Perfil
          </DesignText>
        </DesignBox>
        <IOsHomeIndicator className="absolute h-[34px] left-0 top-[49px] w-[393px]" />
      </DesignBox>
      <IOsStatusBarOscura className="absolute h-[54px] left-0 top-0 w-[393px]" />
    </DesignBox>;
}
