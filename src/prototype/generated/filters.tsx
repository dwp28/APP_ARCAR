// Geometry, typography and assets adapted from the team's Figma prototype.
import { Asset } from 'expo-asset';
import { designStyle, DesignText, DesignBox } from '../design-style';

const imgWifi = Asset.fromModule(require("../../../assets/prototype/817866a3f3589a23e6f1.svg")).uri;
const imgChevRight = Asset.fromModule(require("../../../assets/prototype/8a4c66d19f237f18f901.svg")).uri;
const imgIconChevLeft = Asset.fromModule(require("../../../assets/prototype/eb7775d283a6949b80d6.svg")).uri;
const imgSwitch = Asset.fromModule(require("../../../assets/prototype/c14e3abe082f1122b067.svg")).uri;
const imgSwitch1 = Asset.fromModule(require("../../../assets/prototype/0ffea3ea3e5487263da1.svg")).uri;
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
type ArcarBoton20Props = {
  className?: string;
  texto1?: string;
};
function ArcarBoton20({
  className,
  texto1 = "Restablecer filtros"
}: ArcarBoton20Props) {
  return <DesignBox style={designStyle(className || "bg-[var(--color-bg-selected,#e8f2ff)] content-stretch flex gap-[var(--space-8,8px)] h-[52px] items-center justify-center overflow-clip relative rounded-[var(--radius-14,14px)] w-[353px]")} data-node-id="115:2640" data-name="Arcar/Botón/20">
      <DesignText style={designStyle("[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[17px] text-[color:var(--color-action-primary,#0a3d91)] whitespace-nowrap")} data-node-id="115:2639">
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
type ArcarTarjeta19Props = {
  className?: string;
  texto1?: string;
  texto2?: string;
};
function ArcarTarjeta19({
  className,
  texto1 = "Precio máximo",
  texto2 = "3 €/h"
}: ArcarTarjeta19Props) {
  return <DesignBox style={designStyle(className || "h-[52px] relative w-[353px]")} data-node-id="115:2632" data-name="Arcar/Tarjeta/19">
      <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[16px] not-italic text-[17px] text-[color:var(--color-text-primary,#1c1c1e)] top-[15px] whitespace-nowrap")} data-node-id="115:2628">
        {texto1}
      </DesignText>
      <DesignBox style={designStyle("absolute left-[328px] size-[14px] top-[19px]")} data-node-id="115:2629" data-name="chev-right">
        <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgChevRight} />
      </DesignBox>
      <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[271px] not-italic text-[17px] text-[color:var(--color-text-muted,#8e8e93)] top-[15px] whitespace-nowrap")} data-node-id="115:2630">
        {texto2}
      </DesignText>
    </DesignBox>;
}
export default function B3FiltroBusqueda() {
  return <DesignBox style={designStyle("bg-[var(--color-bg-canvas,#f2f2f7)] relative size-full")} data-node-id="68:2404" data-name="B3 · Filtro búsqueda">
      <button style={designStyle("absolute content-stretch cursor-pointer flex gap-[var(--space-4,4px)] h-[44px] items-center left-[6px] overflow-clip px-[var(--space-8,8px)] top-[54px]")} data-node-id="68:2405" data-name="back">
        <DesignBox style={designStyle("relative shrink-0 size-[22px]")} data-node-id="68:2406" data-name="icon/chev-left">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconChevLeft} />
        </DesignBox>
        <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[17px] text-[color:var(--color-action-primary,#0a3d91)] text-left whitespace-nowrap")} data-node-id="68:2407">
          Atrás
        </DesignText>
      </button>
      <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[20px] not-italic text-[34px] text-[color:var(--color-text-primary,#1c1c1e)] top-[100px] tracking-[-0.51px] whitespace-nowrap")} data-node-id="68:2408">
        Filtros
      </DesignText>
      <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[36px] not-italic text-[13px] text-[color:var(--color-text-secondary,#6e6e73)] top-[160px] tracking-[0.26px] whitespace-nowrap")} data-node-id="68:2409">
        DISTANCIA A PIE
      </DesignText>
      <DesignBox style={designStyle("absolute bg-[#e3e3e8] h-[36px] left-[20px] rounded-[9px] top-[182px] w-[353px]")} data-node-id="68:2410" data-name="segmented">
        <DesignBox style={designStyle("absolute bg-[var(--color-bg-surface,white)] h-[32px] left-[2px] rounded-[7px] shadow-[0px_3px_8px_0px_rgba(0,0,0,0.12)] top-[2px] w-[116.333px]")} data-node-id="68:2411" data-name="seleccionado" />
        <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[normal] left-[60.17px] not-italic text-[14px] text-[color:var(--color-text-primary,#1c1c1e)] text-center top-[9px] w-[116.333px]")} data-node-id="68:2412">
          5 min
        </DesignText>
        <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[176.5px] not-italic text-[14px] text-[color:var(--color-text-primary,#1c1c1e)] text-center top-[9px] w-[116.333px]")} data-node-id="68:2413">
          10 min
        </DesignText>
        <DesignBox style={designStyle("absolute bg-[var(--color-border-default,#e5e5ea)] h-[16px] left-[234.67px] top-[10px] w-px")} data-node-id="68:2414" data-name="Rectangle" />
        <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[292.83px] not-italic text-[14px] text-[color:var(--color-text-primary,#1c1c1e)] text-center top-[9px] w-[116.333px]")} data-node-id="68:2415">
          15 min
        </DesignText>
      </DesignBox>
      <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[36px] not-italic text-[13px] text-[color:var(--color-text-secondary,#6e6e73)] top-[236px] tracking-[0.26px] whitespace-nowrap")} data-node-id="68:2416">
        TIPO DE APARCAMIENTO
      </DesignText>
      <DesignBox style={designStyle("absolute bg-[#e3e3e8] h-[36px] left-[20px] rounded-[9px] top-[258px] w-[353px]")} data-node-id="68:2417" data-name="segmented">
        <DesignBox style={designStyle("absolute bg-[var(--color-bg-surface,white)] h-[32px] left-[2px] rounded-[7px] shadow-[0px_3px_8px_0px_rgba(0,0,0,0.12)] top-[2px] w-[174.5px]")} data-node-id="68:2418" data-name="seleccionado" />
        <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[normal] left-[89.25px] not-italic text-[14px] text-[color:var(--color-text-primary,#1c1c1e)] text-center top-[9px] w-[174.5px]")} data-node-id="68:2419">
          Calle
        </DesignText>
        <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[263.75px] not-italic text-[14px] text-[color:var(--color-text-primary,#1c1c1e)] text-center top-[9px] w-[174.5px]")} data-node-id="68:2420">
          Parking
        </DesignText>
      </DesignBox>
      <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[36px] not-italic text-[13px] text-[color:var(--color-text-secondary,#6e6e73)] top-[312px] tracking-[0.26px] whitespace-nowrap")} data-node-id="68:2421">
        PREFERENCIA
      </DesignText>
      <DesignBox style={designStyle("absolute bg-[#e3e3e8] h-[36px] left-[20px] rounded-[9px] top-[334px] w-[353px]")} data-node-id="68:2422" data-name="segmented">
        <DesignBox style={designStyle("absolute bg-[var(--color-bg-surface,white)] h-[32px] left-[2px] rounded-[7px] shadow-[0px_3px_8px_0px_rgba(0,0,0,0.12)] top-[2px] w-[116.333px]")} data-node-id="68:2423" data-name="seleccionado" />
        <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[normal] left-[60.17px] not-italic text-[14px] text-[color:var(--color-text-primary,#1c1c1e)] text-center top-[9px] w-[116.333px]")} data-node-id="68:2424">
          Cerca
        </DesignText>
        <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[176.5px] not-italic text-[14px] text-[color:var(--color-text-primary,#1c1c1e)] text-center top-[9px] w-[116.333px]")} data-node-id="68:2425">
          Rápido
        </DesignText>
        <DesignBox style={designStyle("absolute bg-[var(--color-border-default,#e5e5ea)] h-[16px] left-[234.67px] top-[10px] w-px")} data-node-id="68:2426" data-name="Rectangle" />
        <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[292.83px] not-italic text-[14px] text-[color:var(--color-text-primary,#1c1c1e)] text-center top-[9px] w-[116.333px]")} data-node-id="68:2427">
          Barato
        </DesignText>
      </DesignBox>
      <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[36px] not-italic text-[13px] text-[color:var(--color-text-secondary,#6e6e73)] top-[390px] tracking-[0.26px] whitespace-nowrap")} data-node-id="68:2428">
        OPCIONES
      </DesignText>
      <DesignBox style={designStyle("absolute bg-[var(--color-bg-surface,white)] h-[156px] left-[20px] overflow-clip rounded-[var(--radius-14,14px)] top-[412px] w-[353px]")} data-node-id="68:2429" data-name="lista">
        <DesignBox style={designStyle("absolute h-[52px] left-0 top-0 w-[353px]")} data-node-id="115:2617" data-name="row: Solo plazas libres">
          <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[16px] not-italic text-[17px] text-[color:var(--color-text-primary,#1c1c1e)] top-[15px] whitespace-nowrap")} data-node-id="I115:2617;115:2612">
            Solo plazas libres
          </DesignText>
          <DesignBox style={designStyle("absolute h-[31px] left-[286px] top-[10.5px] w-[51px]")} data-node-id="I115:2617;115:2613" data-name="switch">
            <DesignBox style={designStyle("absolute inset-[-9.68%_-11.76%_-29.03%_0]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgSwitch} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute bg-[var(--icon-tile-c6c6c8,#c6c6c8)] h-[0.5px] left-[16px] top-[51.5px] w-[337px]")} data-node-id="I115:2617;115:2615" data-name="Rectangle" />
        </DesignBox>
        <DesignBox style={designStyle("absolute h-[52px] left-0 top-[52px] w-[353px]")} data-node-id="115:2622" data-name="row: Movilidad reducida">
          <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[16px] not-italic text-[17px] text-[color:var(--color-text-primary,#1c1c1e)] top-[15px] whitespace-nowrap")} data-node-id="I115:2622;115:2612">
            Movilidad reducida
          </DesignText>
          <DesignBox style={designStyle("absolute h-[31px] left-[286px] top-[10.5px] w-[51px]")} data-node-id="I115:2622;115:2613" data-name="switch">
            <DesignBox style={designStyle("absolute inset-[-9.68%_-11.76%_-29.03%_0]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgSwitch1} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute bg-[var(--icon-tile-c6c6c8,#c6c6c8)] h-[0.5px] left-[16px] top-[51.5px] w-[337px]")} data-node-id="I115:2622;115:2615" data-name="Rectangle" />
        </DesignBox>
        <ArcarTarjeta19 className="absolute h-[52px] left-0 top-[104px] w-[353px]" />
      </DesignBox>
      <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[36px] not-italic text-[13px] text-[color:var(--color-text-muted,#8e8e93)] top-[582px] w-[321px]")} data-node-id="68:2444">
        Mostrando 12 de 31 plazas cerca de Calle Gran Vía, 32
      </DesignText>
      <ArcarBoton16 className="absolute bg-[var(--color-action-primary,#0a3d91)] content-stretch cursor-pointer flex gap-[var(--space-8,8px)] h-[52px] items-center justify-center left-[20px] overflow-clip rounded-[var(--radius-14,14px)] top-[698px] w-[353px]" texto1="Ver plazas cercanas" />
      <ArcarBoton20 className="absolute bg-[var(--color-bg-selected,#e8f2ff)] content-stretch cursor-pointer flex gap-[var(--space-8,8px)] h-[52px] items-center justify-center left-[20px] overflow-clip rounded-[var(--radius-14,14px)] top-[758px] w-[353px]" />
      <IOsHomeIndicator className="absolute h-[34px] left-0 top-[818px] w-[393px]" />
      <IOsStatusBarOscura className="absolute h-[54px] left-0 top-0 w-[393px]" />
    </DesignBox>;
}
