// Geometry, typography and assets adapted from the team's Figma prototype.
import { Asset } from 'expo-asset';
import { designStyle, DesignText, DesignBox } from '../design-style';

const imgWifi = Asset.fromModule(require("../../../assets/prototype/817866a3f3589a23e6f1.svg")).uri;
const imgAvatar = Asset.fromModule(require("../../../assets/prototype/e0a07e134e71e1bcfddd.svg")).uri;
const imgChevRight = Asset.fromModule(require("../../../assets/prototype/8a4c66d19f237f18f901.svg")).uri;
const imgCamera = Asset.fromModule(require("../../../assets/prototype/b634f58921a892722e15.svg")).uri;
const imgChevRight1 = Asset.fromModule(require("../../../assets/prototype/8a4c66d19f237f18f901.svg")).uri;
const imgCamera1 = Asset.fromModule(require("../../../assets/prototype/763b9d1a5212b62b6464.svg")).uri;
const imgCar = Asset.fromModule(require("../../../assets/prototype/98844eb95543ef8ef6d5.svg")).uri;
const imgBell = Asset.fromModule(require("../../../assets/prototype/afba88bbb6859d55d0de.svg")).uri;
const imgCamera2 = Asset.fromModule(require("../../../assets/prototype/aca1cc29a7f88f5ff9f3.svg")).uri;
const imgBell1 = Asset.fromModule(require("../../../assets/prototype/d30565fcb85bca60db80.svg")).uri;
const imgIconHouse = Asset.fromModule(require("../../../assets/prototype/65da2e422c8f7eea0e4b.svg")).uri;
const imgIconMap = Asset.fromModule(require("../../../assets/prototype/4883de1bd2aa7e6f0744.svg")).uri;
const imgIconHeart = Asset.fromModule(require("../../../assets/prototype/ba0f7cbcb453d018cf8c.svg")).uri;
const imgIconPersonCircle = Asset.fromModule(require("../../../assets/prototype/c417957055a8b9991c17.svg")).uri;
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
type ArcarTarjeta34Props = {
  className?: string;
  texto1?: string;
};
function ArcarTarjeta34({
  className,
  texto1 = "Cerrar sesión"
}: ArcarTarjeta34Props) {
  return <DesignBox style={designStyle(className || "h-[52px] relative w-[353px]")} data-node-id="115:2949" data-name="Arcar/Tarjeta/34">
      <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[176.5px] not-italic text-[17px] text-[color:var(--color-status-error,#ff3b30)] text-center top-[15px] w-[353px]")} data-node-id="115:2948">
        {texto1}
      </DesignText>
    </DesignBox>;
}
type ArcarTarjeta30Props = {
  className?: string;
  texto1?: string;
  texto2?: string;
  texto3?: string;
};
function ArcarTarjeta30({
  className,
  texto1 = "CM",
  texto2 = "Carlos Martín Jiménez",
  texto3 = "carlos.martin@email.com"
}: ArcarTarjeta30Props) {
  return <DesignBox style={designStyle(className || "bg-[var(--color-bg-surface,white)] h-[96px] relative rounded-[var(--radius-16,16px)] w-[353px]")} data-node-id="115:2845" data-name="Arcar/Tarjeta/30">
      <DesignBox style={designStyle("absolute left-[16px] size-[64px] top-[16px]")} data-node-id="115:2839" data-name="avatar">
        <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgAvatar} />
      </DesignBox>
      <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[normal] left-[48px] not-italic text-[23px] text-[color:var(--color-text-inverse,white)] text-center top-[34px] w-[64px]")} data-node-id="115:2840">
        {texto1}
      </DesignText>
      <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[normal] left-[96px] not-italic text-[18px] text-[color:var(--color-text-primary,#1c1c1e)] top-[26px] whitespace-nowrap")} data-node-id="115:2841">
        {texto2}
      </DesignText>
      <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[96px] not-italic text-[15px] text-[color:var(--color-text-muted,#8e8e93)] top-[52px] whitespace-nowrap")} data-node-id="115:2842">
        {texto3}
      </DesignText>
      <DesignBox style={designStyle("absolute left-[328px] size-[14px] top-[41px]")} data-node-id="115:2843" data-name="chev-right">
        <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgChevRight} />
      </DesignBox>
    </DesignBox>;
}
export default function E1Perfil() {
  return <DesignBox style={designStyle("bg-[var(--color-bg-canvas,#f2f2f7)] relative size-full")} data-node-id="68:2856" data-name="E1 · Perfil">
      <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[20px] not-italic text-[34px] text-[color:var(--color-text-primary,#1c1c1e)] top-[100px] tracking-[-0.51px] whitespace-nowrap")} data-node-id="68:2857">
        Perfil
      </DesignText>
      <ArcarTarjeta30 className="absolute bg-[var(--color-bg-surface,white)] block cursor-pointer h-[96px] left-[20px] rounded-[var(--radius-16,16px)] top-[152px] w-[353px]" />
      <DesignBox style={designStyle("absolute bg-[var(--color-bg-surface,white)] h-[208px] left-[20px] overflow-clip rounded-[var(--radius-14,14px)] top-[268px] w-[353px]")} data-node-id="68:2864" data-name="lista">
        <DesignBox style={designStyle("absolute block cursor-pointer h-[52px] left-0 top-0 w-[353px]")} data-node-id="115:2865" data-name="row: Foto de perfil">
          <DesignBox style={designStyle("absolute bg-[var(--icon-tile-0a7cff,#0a7cff)] left-[16px] rounded-[8.32px] size-[32px] top-[10px]")} data-node-id="I115:2865;115:2855" data-name="icono camera">
            <DesignBox style={designStyle("absolute left-[7.04px] size-[17.92px] top-[7.04px]")} data-node-id="I115:2865;115:2856" data-name="camera">
              <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgCamera} />
            </DesignBox>
          </DesignBox>
          <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[60px] not-italic text-[17px] text-[color:var(--color-text-primary,#1c1c1e)] text-left top-[15px] whitespace-nowrap")} data-node-id="I115:2865;115:2857">
            Foto de perfil
          </DesignText>
          <DesignBox style={designStyle("absolute left-[328px] size-[14px] top-[19px]")} data-node-id="I115:2865;115:2858" data-name="chev-right">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgChevRight1} />
          </DesignBox>
          <DesignBox style={designStyle("absolute bg-[var(--icon-tile-c6c6c8,#c6c6c8)] h-[0.5px] left-[60px] top-[51.5px] w-[293px]")} data-node-id="I115:2865;115:2859" data-name="Rectangle" />
        </DesignBox>
        <DesignBox style={designStyle("absolute block cursor-pointer h-[52px] left-0 top-[52px] w-[353px]")} data-node-id="115:2876" data-name="row: Datos personales">
          <DesignBox style={designStyle("absolute bg-[var(--icon-tile-5856d6,#5856d6)] left-[16px] rounded-[8.32px] size-[32px] top-[10px]")} data-node-id="I115:2876;115:2855" data-name="icono camera">
            <DesignBox style={designStyle("absolute left-[7.04px] size-[17.92px] top-[7.04px]")} data-node-id="I115:2876;115:2856" data-name="camera">
              <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgCamera1} />
            </DesignBox>
          </DesignBox>
          <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[60px] not-italic text-[17px] text-[color:var(--color-text-primary,#1c1c1e)] text-left top-[15px] whitespace-nowrap")} data-node-id="I115:2876;115:2857">
            Datos personales
          </DesignText>
          <DesignBox style={designStyle("absolute left-[328px] size-[14px] top-[19px]")} data-node-id="I115:2876;115:2858" data-name="chev-right">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgChevRight1} />
          </DesignBox>
          <DesignBox style={designStyle("absolute bg-[var(--icon-tile-c6c6c8,#c6c6c8)] h-[0.5px] left-[60px] top-[51.5px] w-[293px]")} data-node-id="I115:2876;115:2859" data-name="Rectangle" />
        </DesignBox>
        <DesignBox style={designStyle("absolute block cursor-pointer h-[52px] left-0 top-[104px] w-[353px]")} data-node-id="115:2911" data-name="row: Mi vehículo">
          <DesignBox style={designStyle("absolute bg-[var(--icon-tile-ff9500,#ff9500)] left-[16px] rounded-[8.32px] size-[32px] top-[10px]")} data-node-id="I115:2911;115:2898" data-name="icono car">
            <DesignBox style={designStyle("absolute left-[7.04px] size-[17.92px] top-[7.04px]")} data-node-id="I115:2911;115:2899" data-name="car">
              <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgCar} />
            </DesignBox>
          </DesignBox>
          <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[60px] not-italic text-[17px] text-[color:var(--color-text-primary,#1c1c1e)] text-left top-[15px] whitespace-nowrap")} data-node-id="I115:2911;115:2900">
            Mi vehículo
          </DesignText>
          <DesignBox style={designStyle("absolute left-[328px] size-[14px] top-[19px]")} data-node-id="I115:2911;115:2901" data-name="chev-right">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgChevRight1} />
          </DesignBox>
          <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[235px] not-italic text-[17px] text-[color:var(--color-text-muted,#8e8e93)] text-left top-[15px] whitespace-nowrap")} data-node-id="I115:2911;115:2902">
            1234 ABC
          </DesignText>
          <DesignBox style={designStyle("absolute bg-[var(--icon-tile-c6c6c8,#c6c6c8)] h-[0.5px] left-[60px] top-[51.5px] w-[293px]")} data-node-id="I115:2911;115:2903" data-name="Rectangle" />
        </DesignBox>
        <DesignBox style={designStyle("absolute h-[52px] left-0 top-[156px] w-[353px]")} data-node-id="115:2933" data-name="row: Notificaciones">
          <DesignBox style={designStyle("absolute bg-[var(--icon-tile-ff3b30,#ff3b30)] left-[16px] rounded-[8.32px] size-[32px] top-[10px]")} data-node-id="I115:2933;115:2926" data-name="icono bell">
            <DesignBox style={designStyle("absolute left-[7.04px] size-[17.92px] top-[7.04px]")} data-node-id="I115:2933;115:2927" data-name="bell">
              <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgBell} />
            </DesignBox>
          </DesignBox>
          <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[60px] not-italic text-[17px] text-[color:var(--color-text-primary,#1c1c1e)] top-[15px] whitespace-nowrap")} data-node-id="I115:2933;115:2928">
            Notificaciones
          </DesignText>
          <DesignBox style={designStyle("absolute left-[328px] size-[14px] top-[19px]")} data-node-id="I115:2933;115:2929" data-name="chev-right">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgChevRight1} />
          </DesignBox>
        </DesignBox>
      </DesignBox>
      <DesignBox style={designStyle("absolute bg-[var(--color-bg-surface,white)] h-[104px] left-[20px] overflow-clip rounded-[var(--radius-14,14px)] top-[496px] w-[353px]")} data-node-id="68:2889" data-name="lista">
        <DesignBox style={designStyle("absolute h-[52px] left-0 top-0 w-[353px]")} data-node-id="115:2887" data-name="row: Ayuda">
          <DesignBox style={designStyle("absolute bg-[var(--icon-tile-30b0c7,#30b0c7)] left-[16px] rounded-[8.32px] size-[32px] top-[10px]")} data-node-id="I115:2887;115:2855" data-name="icono camera">
            <DesignBox style={designStyle("absolute left-[7.04px] size-[17.92px] top-[7.04px]")} data-node-id="I115:2887;115:2856" data-name="camera">
              <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgCamera2} />
            </DesignBox>
          </DesignBox>
          <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[60px] not-italic text-[17px] text-[color:var(--color-text-primary,#1c1c1e)] top-[15px] whitespace-nowrap")} data-node-id="I115:2887;115:2857">
            Ayuda
          </DesignText>
          <DesignBox style={designStyle("absolute left-[328px] size-[14px] top-[19px]")} data-node-id="I115:2887;115:2858" data-name="chev-right">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgChevRight1} />
          </DesignBox>
          <DesignBox style={designStyle("absolute bg-[var(--icon-tile-c6c6c8,#c6c6c8)] h-[0.5px] left-[60px] top-[51.5px] w-[293px]")} data-node-id="I115:2887;115:2859" data-name="Rectangle" />
        </DesignBox>
        <DesignBox style={designStyle("absolute h-[52px] left-0 top-[52px] w-[353px]")} data-node-id="115:2940" data-name="row: Ajustes">
          <DesignBox style={designStyle("absolute bg-[var(--icon-tile-8e8e93,#8e8e93)] left-[16px] rounded-[8.32px] size-[32px] top-[10px]")} data-node-id="I115:2940;115:2926" data-name="icono bell">
            <DesignBox style={designStyle("absolute left-[7.04px] size-[17.92px] top-[7.04px]")} data-node-id="I115:2940;115:2927" data-name="bell">
              <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgBell1} />
            </DesignBox>
          </DesignBox>
          <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[60px] not-italic text-[17px] text-[color:var(--color-text-primary,#1c1c1e)] top-[15px] whitespace-nowrap")} data-node-id="I115:2940;115:2928">
            Ajustes
          </DesignText>
          <DesignBox style={designStyle("absolute left-[328px] size-[14px] top-[19px]")} data-node-id="I115:2940;115:2929" data-name="chev-right">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgChevRight1} />
          </DesignBox>
        </DesignBox>
      </DesignBox>
      <DesignBox style={designStyle("absolute bg-[var(--color-bg-surface,white)] h-[52px] left-[20px] overflow-clip rounded-[var(--radius-14,14px)] top-[620px] w-[353px]")} data-node-id="68:2901" data-name="lista">
        <ArcarTarjeta34 className="absolute block cursor-pointer h-[52px] left-0 top-0 w-[353px]" />
      </DesignBox>
      <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[196.5px] not-italic text-[13px] text-[color:var(--color-text-muted,#8e8e93)] text-center top-[690px] w-[393px]")} data-node-id="68:2904">
        App Arcar 1.0 (24)
      </DesignText>
      <DesignBox style={designStyle("absolute backdrop-blur-[10px] bg-[rgba(249,249,249,0.94)] h-[83px] left-0 top-[769px] w-[393px]")} data-node-id="68:2905" data-name="Tab bar">
        <DesignBox style={designStyle("absolute bg-[rgba(0,0,0,0.18)] h-[0.5px] left-0 top-0 w-[393px]")} data-node-id="I68:2905;3:326" data-name="separador" />
        <DesignBox style={designStyle("absolute block cursor-pointer h-[49px] left-0 overflow-clip top-0 w-[98px]")} data-node-id="I68:2905;3:327" data-name="tab/Inicio">
          <DesignBox style={designStyle("absolute left-[36.5px] size-[25px] top-[6px]")} data-node-id="I68:2905;3:328" data-name="icon/house">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconHouse} />
          </DesignBox>
          <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium'] font-medium h-[12px] leading-[normal] left-[49px] not-italic text-[#8e8e93] text-[10px] text-center top-[34px] w-[98px]")} data-node-id="I68:2905;3:330">
            Inicio
          </DesignText>
        </DesignBox>
        <DesignBox style={designStyle("absolute block cursor-pointer h-[49px] left-[98.25px] overflow-clip top-0 w-[98px]")} data-node-id="I68:2905;3:331" data-name="tab/Mapa">
          <DesignBox style={designStyle("absolute left-[36.5px] size-[25px] top-[6px]")} data-node-id="I68:2905;3:332" data-name="icon/map">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconMap} />
          </DesignBox>
          <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium'] font-medium h-[12px] leading-[normal] left-[49px] not-italic text-[#8e8e93] text-[10px] text-center top-[34px] w-[98px]")} data-node-id="I68:2905;3:335">
            Mapa
          </DesignText>
        </DesignBox>
        <DesignBox style={designStyle("absolute block cursor-pointer h-[49px] left-[196.5px] overflow-clip top-0 w-[98px]")} data-node-id="I68:2905;3:336" data-name="tab/Favoritos">
          <DesignBox style={designStyle("absolute left-[36.5px] size-[25px] top-[6px]")} data-node-id="I68:2905;3:337" data-name="icon/heart">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconHeart} />
          </DesignBox>
          <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium'] font-medium h-[12px] leading-[normal] left-[49px] not-italic text-[#8e8e93] text-[10px] text-center top-[34px] w-[98px]")} data-node-id="I68:2905;3:339">
            Favoritos
          </DesignText>
        </DesignBox>
        <DesignBox style={designStyle("absolute h-[49px] left-[294.75px] overflow-clip top-0 w-[98px]")} data-node-id="I68:2905;3:340" data-name="tab/Perfil">
          <DesignBox style={designStyle("absolute left-[36.5px] size-[25px] top-[6px]")} data-node-id="I68:2905;3:341" data-name="icon/person-circle">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconPersonCircle} />
          </DesignBox>
          <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium'] font-medium h-[12px] leading-[normal] left-[49px] not-italic text-[#0a7cff] text-[10px] text-center top-[34px] w-[98px]")} data-node-id="I68:2905;3:345">
            Perfil
          </DesignText>
        </DesignBox>
        <IOsHomeIndicator className="absolute h-[34px] left-0 top-[49px] w-[393px]" />
      </DesignBox>
      <IOsStatusBarOscura className="absolute h-[54px] left-0 top-0 w-[393px]" />
    </DesignBox>;
}
