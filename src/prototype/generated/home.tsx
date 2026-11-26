// Geometry, typography and assets adapted from the team's Figma prototype.
import { Asset } from 'expo-asset';
import { designStyle, DesignText, DesignBox } from '../design-style';

const imgWifi = Asset.fromModule(require("../../../assets/prototype/817866a3f3589a23e6f1.svg")).uri;
const imgIconLocation = Asset.fromModule(require("../../../assets/prototype/2b68b346d48ab3e64a28.svg")).uri;
const imgIconMagnifier = Asset.fromModule(require("../../../assets/prototype/15defce5dd37483d01bd.svg")).uri;
const imgCar = Asset.fromModule(require("../../../assets/prototype/c0cd312c7653c6c98a9e.svg")).uri;
const imgBell = Asset.fromModule(require("../../../assets/prototype/247dbed7a11e529f522c.svg")).uri;
const imgAviso = Asset.fromModule(require("../../../assets/prototype/c13e70d45feb61af7636.svg")).uri;
const imgMapaMadridCentroOsm = Asset.fromModule(require("../../../assets/prototype/12993d118a7ed7858204.svg")).uri;
const imgVector = Asset.fromModule(require("../../../assets/prototype/83d649b81c04469dc7e6.svg")).uri;
const imgVector1 = Asset.fromModule(require("../../../assets/prototype/ea3171fb4d9cf05e2663.svg")).uri;
const imgVector2 = Asset.fromModule(require("../../../assets/prototype/573ce06aef0bc4d0a6eb.svg")).uri;
const imgVector3 = Asset.fromModule(require("../../../assets/prototype/6503586592efa542c4c1.svg")).uri;
const imgVector4 = Asset.fromModule(require("../../../assets/prototype/7f209c88ee7d0f6838d0.svg")).uri;
const imgVector5 = Asset.fromModule(require("../../../assets/prototype/8fedb8d8ca883ecbc6bb.svg")).uri;
const imgVector6 = Asset.fromModule(require("../../../assets/prototype/ef584cfeedc93a75c249.svg")).uri;
const imgVector7 = Asset.fromModule(require("../../../assets/prototype/e967bc1a7fcb4605d165.svg")).uri;
const imgVector8 = Asset.fromModule(require("../../../assets/prototype/3d56e63f678b49c6ca2c.svg")).uri;
const imgVector9 = Asset.fromModule(require("../../../assets/prototype/de9195c5c9db7952cc62.svg")).uri;
const imgVector10 = Asset.fromModule(require("../../../assets/prototype/7f4365f429a7d8c14927.svg")).uri;
const imgVector11 = Asset.fromModule(require("../../../assets/prototype/a63ad02cdc6f99bdbdb4.svg")).uri;
const imgVector12 = Asset.fromModule(require("../../../assets/prototype/42bfbb12f7c85a9d3ef5.svg")).uri;
const imgMarkerPlazaLibre = Asset.fromModule(require("../../../assets/prototype/947afc49767e1edba585.svg")).uri;
const imgMarkerPlazaLibre1 = Asset.fromModule(require("../../../assets/prototype/2ff942d044dc5e5b103c.svg")).uri;
const imgPlazaOcupada = Asset.fromModule(require("../../../assets/prototype/818adc5f1f3cdf866d63.svg")).uri;
const imgPrecision = Asset.fromModule(require("../../../assets/prototype/72b9f5b96c733dbbd279.svg")).uri;
const imgTuUbicacion = Asset.fromModule(require("../../../assets/prototype/60e9d716547d65b3e735.svg")).uri;
const imgEllipse = Asset.fromModule(require("../../../assets/prototype/e5c8382b348080c9edea.svg")).uri;
const imgBriefcase = Asset.fromModule(require("../../../assets/prototype/8efe1e8376353d0ca375.svg")).uri;
const imgChevRight = Asset.fromModule(require("../../../assets/prototype/8a4c66d19f237f18f901.svg")).uri;
const imgBriefcase1 = Asset.fromModule(require("../../../assets/prototype/f9d504d78b396b02d7ca.svg")).uri;
const imgHouse = Asset.fromModule(require("../../../assets/prototype/eecaa0d5b4156d68b448.svg")).uri;
const imgIconHouse = Asset.fromModule(require("../../../assets/prototype/1ce1b235458ba9f9d10b.svg")).uri;
const imgIconMap = Asset.fromModule(require("../../../assets/prototype/4883de1bd2aa7e6f0744.svg")).uri;
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
type ArcarBoton10Props = {
  className?: string;
  texto1?: string;
};
function ArcarBoton10({
  className,
  texto1 = "Usar mi ubicación"
}: ArcarBoton10Props) {
  return <DesignBox style={designStyle(className || "bg-[var(--color-action-primary,#0a3d91)] content-stretch flex gap-[var(--space-8,8px)] h-[50px] items-center justify-center overflow-clip relative rounded-[var(--radius-14,14px)] w-[353px]")} data-node-id="115:2408" data-name="Arcar/Botón/10">
      <DesignBox style={designStyle("relative shrink-0 size-[18px]")} data-node-id="115:2405" data-name="icon/location">
        <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconLocation} />
      </DesignBox>
      <DesignText style={designStyle("[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[17px] text-[color:var(--color-text-inverse,white)] whitespace-nowrap")} data-node-id="115:2406">
        {texto1}
      </DesignText>
    </DesignBox>;
}
type ArcarCampo09Props = {
  className?: string;
  texto1?: string;
};
function ArcarCampo09({
  className,
  texto1 = "Buscar dirección o lugar"
}: ArcarCampo09Props) {
  return <DesignBox style={designStyle(className || "bg-[var(--color-bg-surface,white)] content-stretch flex gap-[var(--space-8,8px)] h-[44px] items-center overflow-clip px-[var(--space-12,12px)] relative rounded-[var(--radius-12,12px)] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)] w-[353px]")} data-node-id="115:2397" data-name="Arcar/Campo/09">
      <DesignBox style={designStyle("relative shrink-0 size-[18px]")} data-node-id="115:2393" data-name="icon/magnifier">
        <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconMagnifier} />
      </DesignBox>
      <DesignText style={designStyle("[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[normal] min-w-px not-italic relative text-[17px] text-[color:var(--color-text-muted,#8e8e93)]")} data-node-id="115:2394">
        {texto1}
      </DesignText>
    </DesignBox>;
}
export default function B1Inicio() {
  return <DesignBox style={designStyle("bg-[var(--color-bg-canvas,#f2f2f7)] relative size-full")} data-node-id="68:2291" data-name="B1 · Inicio">
      <DesignBox style={designStyle("absolute left-[20px] size-[26px] top-[66px]")} data-node-id="68:2292" data-name="car">
        <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgCar} />
      </DesignBox>
      <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[54px] not-italic text-[20px] text-[color:var(--color-text-primary,#1c1c1e)] top-[65px] tracking-[-0.2px] whitespace-nowrap")} data-node-id="68:2293">
        App Arcar
      </DesignText>
      <DesignBox style={designStyle("absolute bg-[rgba(255,255,255,0.96)] drop-shadow-[0px_2px_5px_rgba(0,0,0,0.15)] left-[calc(75%+38.25px)] rounded-[var(--radius-20,20px)] size-[40px] top-[56px]")} data-node-id="68:2294" data-name="btn: notificaciones">
        <DesignBox style={designStyle("absolute left-[10px] size-[20px] top-[10px]")} data-node-id="68:2295" data-name="bell">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgBell} />
        </DesignBox>
      </DesignBox>
      <DesignBox style={designStyle("absolute left-[calc(75%+66.25px)] size-[10px] top-[57px]")} data-node-id="68:2296" data-name="aviso">
        <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgAviso} />
      </DesignBox>
      <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[20px] not-italic text-[34px] text-[color:var(--color-text-primary,#1c1c1e)] top-[108px] tracking-[-0.51px] whitespace-nowrap")} data-node-id="68:2297">
        Hola, Carlos
      </DesignText>
      <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[20px] not-italic text-[17px] text-[color:var(--color-text-secondary,#6e6e73)] top-[152px] whitespace-nowrap")} data-node-id="68:2298">
        ¿Dónde quieres aparcar hoy?
      </DesignText>
      <ArcarCampo09 className="absolute bg-[var(--color-bg-surface,white)] content-stretch cursor-pointer flex gap-[var(--space-8,8px)] h-[44px] items-center left-[20px] overflow-clip px-[var(--space-12,12px)] rounded-[var(--radius-12,12px)] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)] top-[190px] w-[353px]" />
      <ArcarBoton10 className="absolute bg-[var(--color-action-primary,#0a3d91)] content-stretch cursor-pointer flex gap-[var(--space-8,8px)] h-[50px] items-center justify-center left-[20px] overflow-clip rounded-[var(--radius-14,14px)] top-[246px] w-[353px]" />
      <DesignBox style={designStyle("absolute bg-[#f2f1ee] block cursor-pointer h-[170px] left-[20px] overflow-clip rounded-[var(--radius-18,18px)] top-[312px] w-[353px]")} data-node-id="68:2305" data-name="card: mapa cercano">
        <DesignBox style={designStyle("absolute left-[-653.75px] overflow-clip size-[1620px] top-[-727.7px]")} data-node-id="68:2306" data-name="Mapa/Madrid Centro (OSM)">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgMapaMadridCentroOsm} />
          <DesignBox style={designStyle("absolute inset-[-3.52%_-3.11%_-25.66%_-4.08%]")} data-node-id="I68:2306;2:4" data-name="Vector">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgVector} />
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-0.13%_0.13%_0.57%_2.11%]")} data-node-id="I68:2306;2:5" data-name="Vector">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgVector1} />
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[1.21%_-6.93%_1.55%_4.13%]")} data-node-id="I68:2306;2:6" data-name="Vector">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgVector2} />
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-3.46%_-2.66%_-2.36%_-5.12%]")} data-node-id="I68:2306;2:7" data-name="Vector">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgVector3} />
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-6.3%_-8.54%_-2.29%_-16.96%]")} data-node-id="I68:2306;2:8" data-name="Vector">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgVector4} />
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-1.28%_0.07%_-1.99%_-15.03%]")} data-node-id="I68:2306;2:9" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.24%_-0.22%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector5} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-21.58%_-14.42%_-19.68%_-14.6%]")} data-node-id="I68:2306;2:10" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.25%_-0.27%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector6} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-4.08%_-7.13%_-5.37%_-2.27%]")} data-node-id="I68:2306;2:11" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.46%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector7} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-3.13%_-2.14%_48.56%_-16.37%]")} data-node-id="I68:2306;2:12" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-1.11%_-0.51%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector8} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-1.28%_0.07%_-1.99%_-15.03%]")} data-node-id="I68:2306;2:13" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.18%_-0.16%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector9} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-21.58%_-14.42%_-19.68%_-14.6%]")} data-node-id="I68:2306;2:14" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.21%_-0.23%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector10} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-4.08%_-7.13%_-5.37%_-2.27%]")} data-node-id="I68:2306;2:15" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.4%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector11} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-3.13%_-2.14%_48.56%_-16.37%]")} data-node-id="I68:2306;2:16" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.95%_-0.44%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector12} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[11.94%_79.15%_79.09%_15.13%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:17">
            <DesignBox style={designStyle("flex-none h-[hypot(-18.8825cqw,6.67496cqh)] rotate-61 w-[hypot(81.1175cqw,93.325cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative text-[#6b6b70] text-[16.2px] text-center whitespace-nowrap")}>Calle de la Princesa</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[57.5%_83.77%_36.01%_14.57%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:18">
            <DesignBox style={designStyle("-rotate-85 flex-none h-[hypot(66.4236cqw,1.49164cqh)] w-[hypot(33.5764cqw,-98.5084cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[14.85px] text-center whitespace-nowrap")}>Calle de Bailén</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[88.56%_88.23%_10.32%_4.55%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:19">
            <DesignBox style={designStyle("flex-none h-[hypot(-0.026844cqw,98.8783cqh)] rotate-[0.1deg] w-[hypot(99.9732cqw,1.12174cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[14.85px] text-center whitespace-nowrap")}>Calle de Segovia</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[53.22%_15.55%_44.44%_80.59%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:20">
            <DesignBox style={designStyle("flex-none h-[hypot(-10.1336cqw,44.3869cqh)] rotate-[20.6deg] w-[hypot(89.8664cqw,55.6131cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[14.85px] text-center whitespace-nowrap")}>Gran Vía</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[91.39%_23.47%_4.4%_69.96%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:21">
            <DesignBox style={designStyle("flex-none h-[hypot(-7.96867cqw,23.2954cqh)] rotate-[28.1deg] w-[hypot(92.0313cqw,76.7046cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[14.85px] text-center whitespace-nowrap")}>Calle de Atocha</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[35.1%_19.55%_57.37%_75.53%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:22">
            <DesignBox style={designStyle("flex-none h-[hypot(19.6613cqw,7.26468cqh)] rotate-[-60.5deg] w-[hypot(80.3387cqw,-92.7353cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[14.85px] text-center whitespace-nowrap")}>Calle de Hortaleza</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[7.89%_18.61%_88.15%_74.53%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:23">
            <DesignBox style={designStyle("flex-none h-[hypot(6.79967cqw,25.4686cqh)] rotate-[-24.8deg] w-[hypot(93.2003cqw,-74.5314cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[14.85px] text-center whitespace-nowrap")}>Calle de Barceló</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[72.99%_48.78%_25.29%_46.44%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:24">
            <DesignBox style={designStyle("flex-none h-[hypot(3.29735cqw,56.5185cqh)] rotate-[-9.2deg] w-[hypot(96.7027cqw,-43.4815cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle Mayor</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[47.95%_67.66%_47.37%_27.1%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:25">
            <DesignBox style={designStyle("flex-none h-[hypot(12.2377cqw,16.0482cqh)] rotate-[-40.5deg] w-[hypot(87.7623cqw,-83.9518cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle de la Bola</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[84.61%_15.76%_9.74%_81.59%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:26">
            <DesignBox style={designStyle("flex-none h-[hypot(35.5226cqw,5.31313cqh)] rotate-[-72.3deg] w-[hypot(64.4774cqw,-94.6869cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle del León</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[57.56%_22.44%_41.29%_69.4%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:27">
            <DesignBox style={designStyle("flex-none h-[hypot(-0.232199cqw,86.3254cqh)] rotate-[1.1deg] w-[hypot(99.7678cqw,13.6746cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle de los Jardines</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[40.55%_31.22%_52.56%_66.13%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:28">
            <DesignBox style={designStyle("flex-none h-[hypot(36.1226cqw,3.54398cqh)] rotate-[-75.7deg] w-[hypot(63.8774cqw,-96.456cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle de Valverde</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[28.75%_1.49%_64.18%_97.21%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:29">
            <DesignBox style={designStyle("flex-none h-[hypot(75.5547cqw,0.633293cqh)] rotate-[-87.4deg] w-[hypot(24.4453cqw,-99.3667cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle del Barquillo</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[48.93%_17.23%_47.81%_76.3%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:30">
            <DesignBox style={designStyle("flex-none h-[hypot(-5.47684cqw,28.2239cqh)] rotate-21 w-[hypot(94.5232cqw,71.7761cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle de la Reina</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[90.13%_36.29%_2.75%_60.56%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:31">
            <DesignBox style={designStyle("-rotate-72 flex-none h-[hypot(29.8003cqw,4.28941cqh)] w-[hypot(70.1997cqw,-95.7106cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle de Relatores</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[70.82%_6.31%_27.74%_87.46%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:32">
            <DesignBox style={designStyle("flex-none h-[hypot(1.18874cqw,68.03cqh)] rotate-[-4.3deg] w-[hypot(98.8113cqw,-31.97cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle de Zorrilla</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[97.42%_4.37%_0.6%_89.08%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:33">
            <DesignBox style={designStyle("flex-none h-[hypot(2.33061cqw,49.3179cqh)] rotate-[-8.9deg] w-[hypot(97.6694cqw,-50.6821cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle de Moratín</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[73.86%_23.16%_19.23%_75.34%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:34">
            <DesignBox style={designStyle("flex-none h-[hypot(-65.7189cqw,1.0722cqh)] rotate-[85.7deg] w-[hypot(34.2811cqw,98.9278cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle del Príncipe</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[80.01%_9.9%_16.74%_84.2%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:35">
            <DesignBox style={designStyle("-rotate-23 flex-none h-[hypot(6.54349cqw,27.9847cqh)] w-[hypot(93.4565cqw,-72.0153cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle del Prado</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[41.44%_9.95%_50.87%_88.77%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:36">
            <DesignBox style={designStyle("flex-none h-[hypot(77.0579cqw,0.493247cqh)] rotate-[-87.8deg] w-[hypot(22.9421cqw,-99.5068cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle de la Libertad</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[81.2%_7.7%_10.61%_90.86%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:37">
            <DesignBox style={designStyle("flex-none h-[hypot(68.4347cqw,0.673119cqh)] rotate-[-86.8deg] w-[hypot(31.5653cqw,-99.3269cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle de San Agustín</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[85.99%_6.61%_12.98%_87.15%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:38">
            <DesignBox style={designStyle("flex-none h-[hypot(-0.110475cqw,95.779cqh)] rotate-[0.4deg] w-[hypot(99.8895cqw,4.22101cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle Cervantes</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[11.34%_39.46%_86.79%_53.74%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:39">
            <DesignBox style={designStyle("flex-none h-[hypot(-1.92096cqw,52.384cqh)] rotate-[7.6deg] w-[hypot(98.079cqw,47.616cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle de la Palma</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[14.65%_36.32%_82.95%_52.9%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:40">
            <DesignBox style={designStyle("flex-none h-[hypot(-1.21206cqw,40.7991cqh)] rotate-[7.6deg] w-[hypot(98.7879cqw,59.2009cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle de San Vicente Ferrer</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[1.85%_40.77%_95.05%_50.36%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:41">
            <DesignBox style={designStyle("flex-none h-[hypot(-2.67614cqw,30.9859cqh)] rotate-[13.9deg] w-[hypot(97.3239cqw,69.0141cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle del Divino Pastor</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[5.42%_70.06%_88.52%_27.09%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:42">
            <DesignBox style={designStyle("flex-none h-[hypot(32.7934cqw,5.17982cqh)] rotate-[-71.5deg] w-[hypot(67.2066cqw,-94.8202cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle del Limón</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[1.81%_59.55%_96.69%_32.62%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:43">
            <DesignBox style={designStyle("flex-none h-[hypot(0.836373cqw,65.6574cqh)] rotate-[-3.8deg] w-[hypot(99.1636cqw,-34.3426cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle de Montserrat</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[9.42%_55.97%_84.75%_40.76%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:44">
            <DesignBox style={designStyle("flex-none h-[hypot(27.7095cqw,6.75719cqh)] rotate-[-66.5deg] w-[hypot(72.2905cqw,-93.2428cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle del Norte</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[29.34%_48.65%_64.8%_47.31%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:45">
            <DesignBox style={designStyle("flex-none h-[hypot(20.9951cqw,8.62864cqh)] rotate-[-59.2deg] w-[hypot(79.0049cqw,-91.3714cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle de Pizarro</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[17.92%_53.11%_76.19%_45.78%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:46">
            <DesignBox style={designStyle("flex-none h-[hypot(-88.9385cqw,0.351552cqh)] rotate-[88.8deg] w-[hypot(11.0615cqw,99.6484cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle de Pozas</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[37.35%_89.61%_58.52%_5.35%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:47">
            <DesignBox style={designStyle("flex-none h-[hypot(-11.7761cqw,19.1447cqh)] rotate-[36.9deg] w-[hypot(88.2239cqw,80.8553cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle Cadarso</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[3.06%_70.64%_88.39%_24.41%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:48">
            <DesignBox style={designStyle("flex-none h-[hypot(17.8547cqw,5.16876cqh)] rotate-[-63.4deg] w-[hypot(82.1453cqw,-94.8312cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle del Conde Duque</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[4.36%_66.07%_88.97%_32.35%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:49">
            <DesignBox style={designStyle("flex-none h-[hypot(-62.1655cqw,1.34258cqh)] rotate-[84.8deg] w-[hypot(37.8345cqw,98.6574cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle de Amaniel</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[39.42%_74.97%_55.14%_21.77%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:50">
            <DesignBox style={designStyle("flex-none h-[hypot(-27.3304cqw,7.75207cqh)] rotate-[64.7deg] w-[hypot(72.6696cqw,92.2479cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle del Reloj</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[11.29%_91.84%_77.35%_-0.37%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:51">
            <DesignBox style={designStyle("flex-none h-[hypot(-9.41593cqw,5.05835cqh)] rotate-[54.4deg] w-[hypot(90.5841cqw,94.9417cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle de Juan Álvarez Mendizábal</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[15.9%_17.83%_79.35%_75.08%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:52">
            <DesignBox style={designStyle("flex-none h-[hypot(7.08992cqw,17.9104cqh)] rotate-[-30.6deg] w-[hypot(92.9101cqw,-82.0896cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle de San Mateo</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[-3%_45.29%_95.28%_52.57%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:53">
            <DesignBox style={designStyle("flex-none h-[hypot(45.4594cqw,1.95841cqh)] rotate-[-81.2deg] w-[hypot(54.5406cqw,-98.0416cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle de Monteleón</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[8.73%_31.99%_89.5%_61.52%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:54">
            <DesignBox style={designStyle("flex-none h-[hypot(-1.88023cqw,55.2603cqh)] rotate-[7.1deg] w-[hypot(98.1198cqw,44.7397cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle de Velarde</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[1.43%_25.29%_91.48%_71.74%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:55">
            <DesignBox style={designStyle("flex-none h-[hypot(-31.8199cqw,3.98248cqh)] rotate-[73.4deg] w-[hypot(68.1801cqw,96.0175cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle de Churruca</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[5.55%_21.6%_92.89%_71.37%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:56">
            <DesignBox style={designStyle("flex-none h-[hypot(1.15071cqw,63.2654cqh)] rotate-[-4.7deg] w-[hypot(98.8493cqw,-36.7346cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle de Apodaca</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[1.84%_21.86%_92.61%_75.63%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:57">
            <DesignBox style={designStyle("flex-none h-[hypot(-37.7688cqw,5.05595cqh)] rotate-[73.5deg] w-[hypot(62.2312cqw,94.9441cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle de Larra</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[34.58%_33.93%_59.42%_63.9%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:58">
            <DesignBox style={designStyle("flex-none h-[hypot(44.5923cqw,3.33635cqh)] rotate-[-78.3deg] w-[hypot(55.4077cqw,-96.6637cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle del Barco</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[9.31%_-0.63%_83.34%_95.09%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:59">
            <DesignBox style={designStyle("flex-none h-[hypot(14.6146cqw,7.68918cqh)] rotate-[-55.1deg] w-[hypot(85.3854cqw,-92.3108cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle de Campoamor</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[39.68%_13.92%_56.23%_78.26%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:60">
            <DesignBox style={designStyle("flex-none h-[hypot(-4.97441cqw,22.177cqh)] rotate-[23.2deg] w-[hypot(95.0256cqw,77.823cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle de San Marcos</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[24.82%_35.19%_70.94%_57.7%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:61">
            <DesignBox style={designStyle("flex-none h-[hypot(-6.23583cqw,20.818cqh)] rotate-[26.7deg] w-[hypot(93.7642cqw,79.182cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle de El Escorial</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[20.49%_38.98%_72.57%_53.4%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:62">
            <DesignBox style={designStyle("flex-none h-[hypot(8.62633cqw,10.6287cqh)] rotate-[-41.7deg] w-[hypot(91.3737cqw,-89.3713cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle de Jesús del Valle</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[24.07%_38.99%_69.44%_55.85%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:63">
            <DesignBox style={designStyle("flex-none h-[hypot(15.3764cqw,9.04879cqh)] rotate-[-53.5deg] w-[hypot(84.6236cqw,-90.9512cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle de la Madera</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[31.81%_14.08%_62.38%_82.21%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:64">
            <DesignBox style={designStyle("-rotate-62 flex-none h-[hypot(23.4923cqw,7.98757cqh)] w-[hypot(76.5077cqw,-92.0124cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle de Pelayo</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[27.75%_0.62%_70.61%_91.79%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:65">
            <DesignBox style={designStyle("flex-none h-[hypot(-1.13438cqw,59.9844cqh)] rotate-5 w-[hypot(98.8656cqw,40.0156cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle de San Lucas</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[66.22%_97.89%_26.56%_0.51%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:66">
            <DesignBox style={designStyle("flex-none h-[hypot(61.6696cqw,1.16867cqh)] rotate-[-85.1deg] w-[hypot(38.3304cqw,-98.8313cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Paseo de Felipe III</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[51.98%_96.69%_40.92%_1.74%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:67">
            <DesignBox style={designStyle("flex-none h-[hypot(62.5664cqw,1.16483cqh)] rotate-[-85.2deg] w-[hypot(37.4336cqw,-98.8352cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Paseo de Felipe V</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[59.13%_43.46%_34.98%_52.87%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:68">
            <DesignBox style={designStyle("flex-none h-[hypot(-24.0021cqw,7.63858cqh)] rotate-[62.9deg] w-[hypot(75.9979cqw,92.3614cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle Preciados</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[65.28%_55.28%_31.7%_38.58%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:69">
            <DesignBox style={designStyle("flex-none h-[hypot(-5.44661cqw,30.7679cqh)] rotate-[19.8deg] w-[hypot(94.5534cqw,69.2321cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle del Arenal</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[65.25%_22.68%_31.77%_71.54%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2306;2:70">
            <DesignBox style={designStyle("flex-none h-[hypot(6.0731cqw,30.9434cqh)] rotate-[-20.8deg] w-[hypot(93.9269cqw,-69.0566cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13.5px] text-center whitespace-nowrap")}>Calle de Alcalá</DesignText>
            </DesignBox>
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute left-[107.5px] size-[30px] top-[48.4px]")} data-node-id="68:2307" data-name="marker: plaza libre">
          <DesignBox style={designStyle("absolute inset-[-13.33%_-20%_-26.67%_-20%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgMarkerPlazaLibre} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute left-[196.6px] size-[30px] top-[36.25px]")} data-node-id="68:2310" data-name="marker: plaza libre">
          <DesignBox style={designStyle("absolute inset-[-13.33%_-20%_-26.67%_-20%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgMarkerPlazaLibre} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute left-[170.95px] size-[30px] top-[121.3px]")} data-node-id="68:2313" data-name="marker: plaza libre">
          <DesignBox style={designStyle("absolute inset-[-13.33%_-20%_-26.67%_-20%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgMarkerPlazaLibre1} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute left-[85.9px] size-[30px] top-[102.4px]")} data-node-id="68:2316" data-name="marker: plaza libre">
          <DesignBox style={designStyle("absolute inset-[-13.33%_-20%_-26.67%_-20%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgMarkerPlazaLibre} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute left-[262.75px] size-[30px] top-[67.3px]")} data-node-id="68:2319" data-name="marker: plaza libre">
          <DesignBox style={designStyle("absolute inset-[-13.33%_-20%_-26.67%_-20%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgMarkerPlazaLibre1} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute left-[146.25px] size-[20px] top-[38.55px]")} data-node-id="68:2322" data-name="plaza ocupada">
          <DesignBox style={designStyle("absolute inset-[-15%_-20%_-25%_-20%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgPlazaOcupada} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute bg-[var(--color-action-primary,#0a3d91)] border-[2.5px] border-[var(--color-bg-surface,white)] border-solid drop-shadow-[0px_3px_4px_rgba(0,0,0,0.3)] left-[211.15px] rounded-[var(--radius-10,10px)] size-[36px] top-[85.9px]")} data-node-id="68:2323" data-name="parking">
          <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[15.5px] not-italic text-[20px] text-[color:var(--color-text-inverse,white)] text-center top-[2.5px] w-[36px]")} data-node-id="68:2324">
            P
          </DesignText>
        </DesignBox>
        <DesignBox style={designStyle("absolute bg-[var(--color-status-available,#34c759)] border-2 border-[var(--color-bg-surface,white)] border-solid content-stretch flex h-[20px] items-center left-[237.15px] overflow-clip px-[6px] rounded-[var(--radius-10,10px)] top-[77.9px]")} data-node-id="68:2325" data-name="chip: 12">
          <DesignText style={designStyle("[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-[color:var(--color-text-inverse,white)] text-left whitespace-nowrap")} data-node-id="68:2326">
            12
          </DesignText>
        </DesignBox>
        <DesignBox style={designStyle("absolute left-[121.55px] size-[64px] top-[58.4px]")} data-node-id="68:2327" data-name="precisión">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgPrecision} />
        </DesignBox>
        <DesignBox style={designStyle("absolute left-[142.55px] size-[22px] top-[79.4px]")} data-node-id="68:2328" data-name="tu ubicación">
          <DesignBox style={designStyle("absolute inset-[-18.18%_-27.27%_-36.36%_-27.27%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgTuUbicacion} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute bg-[var(--color-bg-surface,white)] content-stretch flex gap-[6px] h-[32px] items-center left-[12px] overflow-clip px-[var(--space-12,12px)] rounded-[var(--radius-16,16px)] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.15)] top-[126px]")} data-node-id="68:2329" data-name="chip: 12 plazas libres a menos de 5 min">
          <DesignBox style={designStyle("relative shrink-0 size-[8px]")} data-node-id="68:2330" data-name="Ellipse">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgEllipse} />
          </DesignBox>
          <DesignText style={designStyle("[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] text-[color:var(--color-text-primary,#1c1c1e)] text-left whitespace-nowrap")} data-node-id="68:2331">
            12 plazas libres a menos de 5 min
          </DesignText>
        </DesignBox>
      </DesignBox>
      <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[20px] not-italic text-[22px] text-[color:var(--color-text-primary,#1c1c1e)] top-[504px] whitespace-nowrap")} data-node-id="68:2332">
        Recientes
      </DesignText>
      <DesignBox style={designStyle("absolute content-stretch cursor-pointer flex gap-[var(--space-8,8px)] h-[36px] items-center justify-end left-[calc(75%-1.75px)] overflow-clip top-[498px] w-[80px]")} data-node-id="68:2333" data-name="btn: Ver todo">
        <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[17px] text-[color:var(--color-action-primary,#0a3d91)] text-left whitespace-nowrap")} data-node-id="68:2334">
          Ver todo
        </DesignText>
      </DesignBox>
      <DesignBox style={designStyle("absolute bg-[var(--color-bg-surface,white)] cursor-pointer h-[192px] left-[20px] overflow-clip rounded-[var(--radius-14,14px)] top-[540px] w-[353px]")} data-node-id="68:2335" data-name="lista">
        <DesignBox style={designStyle("absolute block h-[64px] left-0 top-0 w-[353px]")} data-node-id="115:2424" data-name="row: Trabajo">
          <DesignBox style={designStyle("absolute bg-[var(--icon-tile-ff9500,#ff9500)] left-[16px] rounded-[8.32px] size-[32px] top-[16px]")} data-node-id="I115:2424;115:2415" data-name="icono briefcase">
            <DesignBox style={designStyle("absolute left-[7.04px] size-[17.92px] top-[7.04px]")} data-node-id="I115:2424;115:2416" data-name="briefcase">
              <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgBriefcase} />
            </DesignBox>
          </DesignBox>
          <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[60px] not-italic text-[17px] text-[color:var(--color-text-primary,#1c1c1e)] text-left top-[12px] whitespace-nowrap")} data-node-id="I115:2424;115:2417">
            Trabajo
          </DesignText>
          <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[60px] not-italic text-[14px] text-[color:var(--color-text-muted,#8e8e93)] text-left top-[35px] whitespace-nowrap")} data-node-id="I115:2424;115:2418">
            Calle Gran Vía, 32 · 8 libres
          </DesignText>
          <DesignBox style={designStyle("absolute left-[328px] size-[14px] top-[25px]")} data-node-id="I115:2424;115:2419" data-name="chev-right">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgChevRight} />
          </DesignBox>
          <DesignBox style={designStyle("absolute bg-[var(--icon-tile-c6c6c8,#c6c6c8)] h-[0.5px] left-[60px] top-[63.5px] w-[293px]")} data-node-id="I115:2424;115:2420" data-name="Rectangle" />
        </DesignBox>
        <DesignBox style={designStyle("absolute block h-[64px] left-0 top-[64px] w-[353px]")} data-node-id="115:2434" data-name="row: Universidad">
          <DesignBox style={designStyle("absolute bg-[var(--icon-tile-5856d6,#5856d6)] left-[16px] rounded-[8.32px] size-[32px] top-[16px]")} data-node-id="I115:2434;115:2415" data-name="icono briefcase">
            <DesignBox style={designStyle("absolute left-[7.04px] size-[17.92px] top-[7.04px]")} data-node-id="I115:2434;115:2416" data-name="briefcase">
              <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgBriefcase1} />
            </DesignBox>
          </DesignBox>
          <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[60px] not-italic text-[17px] text-[color:var(--color-text-primary,#1c1c1e)] text-left top-[12px] whitespace-nowrap")} data-node-id="I115:2434;115:2417">
            Universidad
          </DesignText>
          <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[60px] not-italic text-[14px] text-[color:var(--color-text-muted,#8e8e93)] text-left top-[35px] whitespace-nowrap")} data-node-id="I115:2434;115:2418">
            Av. Arapiles, s/n · 3 libres
          </DesignText>
          <DesignBox style={designStyle("absolute left-[328px] size-[14px] top-[25px]")} data-node-id="I115:2434;115:2419" data-name="chev-right">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgChevRight} />
          </DesignBox>
          <DesignBox style={designStyle("absolute bg-[var(--icon-tile-c6c6c8,#c6c6c8)] h-[0.5px] left-[60px] top-[63.5px] w-[293px]")} data-node-id="I115:2434;115:2420" data-name="Rectangle" />
        </DesignBox>
        <DesignBox style={designStyle("absolute block h-[64px] left-0 top-[128px] w-[353px]")} data-node-id="115:2473" data-name="row: Casa">
          <DesignBox style={designStyle("absolute bg-[var(--icon-tile-34c759,#34c759)] left-[16px] rounded-[8.32px] size-[32px] top-[16px]")} data-node-id="I115:2473;115:2465" data-name="icono house">
            <DesignBox style={designStyle("absolute left-[7.04px] size-[17.92px] top-[7.04px]")} data-node-id="I115:2473;115:2466" data-name="house">
              <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgHouse} />
            </DesignBox>
          </DesignBox>
          <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[60px] not-italic text-[17px] text-[color:var(--color-text-primary,#1c1c1e)] text-left top-[12px] whitespace-nowrap")} data-node-id="I115:2473;115:2467">
            Casa
          </DesignText>
          <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[60px] not-italic text-[14px] text-[color:var(--color-text-muted,#8e8e93)] text-left top-[35px] whitespace-nowrap")} data-node-id="I115:2473;115:2468">
            Calle Mayor, 10 · 5 libres
          </DesignText>
          <DesignBox style={designStyle("absolute left-[328px] size-[14px] top-[25px]")} data-node-id="I115:2473;115:2469" data-name="chev-right">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgChevRight} />
          </DesignBox>
        </DesignBox>
      </DesignBox>
      <DesignBox style={designStyle("absolute backdrop-blur-[10px] bg-[rgba(249,249,249,0.94)] h-[83px] left-0 top-[769px] w-[393px]")} data-node-id="68:2356" data-name="Tab bar">
        <DesignBox style={designStyle("absolute bg-[rgba(0,0,0,0.18)] h-[0.5px] left-0 top-0 w-[393px]")} data-node-id="I68:2356;3:257" data-name="separador" />
        <DesignBox style={designStyle("absolute h-[49px] left-0 overflow-clip top-0 w-[98px]")} data-node-id="I68:2356;3:258" data-name="tab/Inicio">
          <DesignBox style={designStyle("absolute left-[36.5px] size-[25px] top-[6px]")} data-node-id="I68:2356;3:259" data-name="icon/house">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconHouse} />
          </DesignBox>
          <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium'] font-medium h-[12px] leading-[normal] left-[49px] not-italic text-[#0a7cff] text-[10px] text-center top-[34px] w-[98px]")} data-node-id="I68:2356;3:261">
            Inicio
          </DesignText>
        </DesignBox>
        <DesignBox style={designStyle("absolute block cursor-pointer h-[49px] left-[98.25px] overflow-clip top-0 w-[98px]")} data-node-id="I68:2356;3:262" data-name="tab/Mapa">
          <DesignBox style={designStyle("absolute left-[36.5px] size-[25px] top-[6px]")} data-node-id="I68:2356;3:263" data-name="icon/map">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconMap} />
          </DesignBox>
          <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium'] font-medium h-[12px] leading-[normal] left-[49px] not-italic text-[#8e8e93] text-[10px] text-center top-[34px] w-[98px]")} data-node-id="I68:2356;3:266">
            Mapa
          </DesignText>
        </DesignBox>
        <DesignBox style={designStyle("absolute block cursor-pointer h-[49px] left-[196.5px] overflow-clip top-0 w-[98px]")} data-node-id="I68:2356;3:267" data-name="tab/Favoritos">
          <DesignBox style={designStyle("absolute left-[36.5px] size-[25px] top-[6px]")} data-node-id="I68:2356;3:268" data-name="icon/heart">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconHeart} />
          </DesignBox>
          <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium'] font-medium h-[12px] leading-[normal] left-[49px] not-italic text-[#8e8e93] text-[10px] text-center top-[34px] w-[98px]")} data-node-id="I68:2356;3:270">
            Favoritos
          </DesignText>
        </DesignBox>
        <DesignBox style={designStyle("absolute block cursor-pointer h-[49px] left-[294.75px] overflow-clip top-0 w-[98px]")} data-node-id="I68:2356;3:271" data-name="tab/Perfil">
          <DesignBox style={designStyle("absolute left-[36.5px] size-[25px] top-[6px]")} data-node-id="I68:2356;3:272" data-name="icon/person-circle">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconPersonCircle} />
          </DesignBox>
          <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium'] font-medium h-[12px] leading-[normal] left-[49px] not-italic text-[#8e8e93] text-[10px] text-center top-[34px] w-[98px]")} data-node-id="I68:2356;3:276">
            Perfil
          </DesignText>
        </DesignBox>
        <IOsHomeIndicator className="absolute h-[34px] left-0 top-[49px] w-[393px]" />
      </DesignBox>
      <IOsStatusBarOscura className="absolute h-[54px] left-0 top-0 w-[393px]" />
    </DesignBox>;
}
