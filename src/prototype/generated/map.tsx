// Geometry, typography and assets adapted from the team's Figma prototype.
import { Asset } from 'expo-asset';
import { designStyle, DesignText, DesignBox } from '../design-style';

const imgWifi = Asset.fromModule(require("../../../assets/prototype/817866a3f3589a23e6f1.svg")).uri;
const imgIconList = Asset.fromModule(require("../../../assets/prototype/e656c2d4e79dab5dc81e.svg")).uri;
const imgIconMagnifier = Asset.fromModule(require("../../../assets/prototype/15defce5dd37483d01bd.svg")).uri;
const imgMapaMadridCentroOsm = Asset.fromModule(require("../../../assets/prototype/55a3c8e2c40aa66dc15c.svg")).uri;
const imgVector = Asset.fromModule(require("../../../assets/prototype/b0343d0d2776aa8e50a2.svg")).uri;
const imgVector1 = Asset.fromModule(require("../../../assets/prototype/916e191352a14920d7c6.svg")).uri;
const imgVector2 = Asset.fromModule(require("../../../assets/prototype/4ddd80a96dd5fc32d8d9.svg")).uri;
const imgVector3 = Asset.fromModule(require("../../../assets/prototype/af10f4bd729e6e2b584f.svg")).uri;
const imgVector4 = Asset.fromModule(require("../../../assets/prototype/8bda9a277b2dfd668651.svg")).uri;
const imgVector5 = Asset.fromModule(require("../../../assets/prototype/7a4ba771d19e8aea4c2e.svg")).uri;
const imgVector6 = Asset.fromModule(require("../../../assets/prototype/8d277cda15c8217057a2.svg")).uri;
const imgVector7 = Asset.fromModule(require("../../../assets/prototype/1be0be1d8e355b7010c6.svg")).uri;
const imgVector8 = Asset.fromModule(require("../../../assets/prototype/ac20c9f81f22b4ba0efb.svg")).uri;
const imgVector9 = Asset.fromModule(require("../../../assets/prototype/61bff129dabe6201e118.svg")).uri;
const imgVector10 = Asset.fromModule(require("../../../assets/prototype/7f64a832aef701b77c65.svg")).uri;
const imgVector11 = Asset.fromModule(require("../../../assets/prototype/6750d54adeccde69bd2b.svg")).uri;
const imgVector12 = Asset.fromModule(require("../../../assets/prototype/42d8ff4bc4f6b5023bd4.svg")).uri;
const imgMarkerPlazaLibre = Asset.fromModule(require("../../../assets/prototype/e453ad942ea867b266f6.svg")).uri;
const imgMarkerPlazaLibre1 = Asset.fromModule(require("../../../assets/prototype/60fb43328c117aa8511e.svg")).uri;
const imgPlazaOcupada = Asset.fromModule(require("../../../assets/prototype/3fb9cbdd4bf200ab93ac.svg")).uri;
const imgPrecision = Asset.fromModule(require("../../../assets/prototype/72b9f5b96c733dbbd279.svg")).uri;
const imgTuUbicacion = Asset.fromModule(require("../../../assets/prototype/2c8d0a6b134488f7eced.svg")).uri;
const imgSliders = Asset.fromModule(require("../../../assets/prototype/a89fb372c5e61d7ba360.svg")).uri;
const imgLocation = Asset.fromModule(require("../../../assets/prototype/07e519c9f3b2b9ee0b9f.svg")).uri;
const imgMapLine = Asset.fromModule(require("../../../assets/prototype/e56ee073ead3ca792b77.svg")).uri;
const imgEllipse = Asset.fromModule(require("../../../assets/prototype/e5c8382b348080c9edea.svg")).uri;
const imgEllipse1 = Asset.fromModule(require("../../../assets/prototype/1aed3a3076fe74399f4e.svg")).uri;
const imgEllipse2 = Asset.fromModule(require("../../../assets/prototype/f9d5a5bc6107481a5f16.svg")).uri;
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
type ArcarBoton22Props = {
  className?: string;
  texto1?: string;
};
function ArcarBoton22({
  className,
  texto1 = "Ver lista de plazas"
}: ArcarBoton22Props) {
  return <DesignBox style={designStyle(className || "bg-[var(--color-action-primary,#0a3d91)] content-stretch flex gap-[var(--space-8,8px)] h-[52px] items-center justify-center overflow-clip relative rounded-[var(--radius-14,14px)] w-[353px]")} data-node-id="115:2662" data-name="Arcar/Botón/22">
      <DesignBox style={designStyle("relative shrink-0 size-[18px]")} data-node-id="115:2656" data-name="icon/list">
        <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconList} />
      </DesignBox>
      <DesignText style={designStyle("[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[17px] text-[color:var(--color-text-inverse,white)] whitespace-nowrap")} data-node-id="115:2657">
        {texto1}
      </DesignText>
    </DesignBox>;
}
type ArcarCampo21Props = {
  className?: string;
  texto1?: string;
};
function ArcarCampo21({
  className,
  texto1 = "Calle Gran Vía, 32"
}: ArcarCampo21Props) {
  return <DesignBox style={designStyle(className || "bg-[var(--color-bg-surface,white)] content-stretch flex gap-[var(--space-8,8px)] h-[50px] items-center overflow-clip px-[var(--space-12,12px)] relative rounded-[var(--radius-14,14px)] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.15)] w-[305px]")} data-node-id="115:2648" data-name="Arcar/Campo/21">
      <DesignBox style={designStyle("relative shrink-0 size-[18px]")} data-node-id="115:2644" data-name="icon/magnifier">
        <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconMagnifier} />
      </DesignBox>
      <DesignText style={designStyle("[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[normal] min-w-px not-italic relative text-[17px] text-[color:var(--color-text-primary,#1c1c1e)]")} data-node-id="115:2645">
        {texto1}
      </DesignText>
    </DesignBox>;
}
export default function B4MapaPlazas() {
  return <DesignBox style={designStyle("bg-[var(--color-bg-surface,white)] relative size-full")} data-node-id="68:2451" data-name="B4 · Mapa plazas">
      <DesignBox style={designStyle("absolute bg-[#f2f1ee] h-[852px] left-0 overflow-clip top-0 w-[393px]")} data-node-id="68:2452" data-name="mapa">
        <DesignBox style={designStyle("absolute left-[-767.6px] overflow-clip size-[1860px] top-[-519.5px]")} data-node-id="68:2453" data-name="Mapa/Madrid Centro (OSM)">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgMapaMadridCentroOsm} />
          <DesignBox style={designStyle("absolute inset-[-3.52%_-3.11%_-25.66%_-4.08%]")} data-node-id="I68:2453;2:4" data-name="Vector">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgVector} />
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-0.13%_0.13%_0.57%_2.11%]")} data-node-id="I68:2453;2:5" data-name="Vector">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgVector1} />
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[1.21%_-6.93%_1.55%_4.12%]")} data-node-id="I68:2453;2:6" data-name="Vector">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgVector2} />
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-3.46%_-2.66%_-2.36%_-5.12%]")} data-node-id="I68:2453;2:7" data-name="Vector">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgVector3} />
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-6.3%_-8.54%_-2.29%_-16.96%]")} data-node-id="I68:2453;2:8" data-name="Vector">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgVector4} />
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-1.28%_0.07%_-1.99%_-15.02%]")} data-node-id="I68:2453;2:9" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.24%_-0.22%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector5} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-21.58%_-14.42%_-19.67%_-14.6%]")} data-node-id="I68:2453;2:10" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.25%_-0.27%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector6} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-4.08%_-7.13%_-5.37%_-2.27%]")} data-node-id="I68:2453;2:11" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.46%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector7} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-3.13%_-2.14%_48.56%_-16.37%]")} data-node-id="I68:2453;2:12" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-1.11%_-0.51%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector8} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-1.28%_0.07%_-1.99%_-15.02%]")} data-node-id="I68:2453;2:13" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.18%_-0.16%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector9} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-21.58%_-14.42%_-19.67%_-14.6%]")} data-node-id="I68:2453;2:14" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.21%_-0.23%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector10} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-4.08%_-7.13%_-5.37%_-2.27%]")} data-node-id="I68:2453;2:15" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.4%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector11} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-3.13%_-2.14%_48.56%_-16.37%]")} data-node-id="I68:2453;2:16" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.95%_-0.44%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector12} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[11.94%_79.15%_79.09%_15.13%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:17">
            <DesignBox style={designStyle("flex-none h-[hypot(-18.9041cqw,6.6837cqh)] rotate-61 w-[hypot(81.0959cqw,93.3163cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative text-[#6b6b70] text-[18.6px] text-center whitespace-nowrap")}>Calle de la Princesa</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[57.46%_83.74%_36.07%_14.57%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:18">
            <DesignBox style={designStyle("-rotate-85 flex-none h-[hypot(66.8552cqw,1.52044cqh)] w-[hypot(33.1448cqw,-98.4796cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[17.05px] text-center whitespace-nowrap")}>Calle de Bailén</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[88.56%_88.19%_10.3%_4.55%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:19">
            <DesignBox style={designStyle("flex-none h-[hypot(-0.0271422cqw,98.8905cqh)] rotate-[0.1deg] w-[hypot(99.9729cqw,1.10955cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[17.05px] text-center whitespace-nowrap")}>Calle de Segovia</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[53.22%_15.54%_44.42%_80.59%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:20">
            <DesignBox style={designStyle("flex-none h-[hypot(-10.2654cqw,44.7424cqh)] rotate-[20.6deg] w-[hypot(89.7346cqw,55.2576cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[17.05px] text-center whitespace-nowrap")}>Gran Vía</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[91.39%_23.49%_4.4%_69.95%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:21">
            <DesignBox style={designStyle("flex-none h-[hypot(-8.11281cqw,23.6455cqh)] rotate-[28.1deg] w-[hypot(91.8872cqw,76.3545cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[17.05px] text-center whitespace-nowrap")}>Calle de Atocha</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[35.06%_19.52%_57.41%_75.56%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:22">
            <DesignBox style={designStyle("flex-none h-[hypot(19.943cqw,7.38509cqh)] rotate-[-60.5deg] w-[hypot(80.057cqw,-92.6149cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[17.05px] text-center whitespace-nowrap")}>Calle de Hortaleza</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[7.88%_18.6%_88.14%_74.53%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:23">
            <DesignBox style={designStyle("flex-none h-[hypot(6.89633cqw,25.7572cqh)] rotate-[-24.8deg] w-[hypot(93.1037cqw,-74.2428cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[17.05px] text-center whitespace-nowrap")}>Calle de Barceló</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[72.98%_48.72%_25.27%_46.5%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:24">
            <DesignBox style={designStyle("flex-none h-[hypot(3.41632cqw,57.4176cqh)] rotate-[-9.2deg] w-[hypot(96.5837cqw,-42.5824cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle Mayor</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[47.93%_67.62%_47.35%_27.1%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:25">
            <DesignBox style={designStyle("flex-none h-[hypot(12.5573cqw,16.4486cqh)] rotate-[-40.5deg] w-[hypot(87.4427cqw,-83.5514cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle de la Bola</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[84.69%_15.75%_9.67%_81.57%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:26">
            <DesignBox style={designStyle("flex-none h-[hypot(36.405cqw,5.50924cqh)] rotate-[-72.3deg] w-[hypot(63.595cqw,-94.4908cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle del León</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[57.56%_22.47%_41.26%_69.34%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:27">
            <DesignBox style={designStyle("flex-none h-[hypot(-0.239438cqw,86.6846cqh)] rotate-[1.1deg] w-[hypot(99.7606cqw,13.3154cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle de los Jardines</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[40.59%_31.2%_52.49%_66.11%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:28">
            <DesignBox style={designStyle("flex-none h-[hypot(36.8026cqw,3.64569cqh)] rotate-[-75.7deg] w-[hypot(63.1974cqw,-96.3543cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle de Valverde</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[28.74%_1.45%_64.18%_97.21%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:29">
            <DesignBox style={designStyle("flex-none h-[hypot(76.1563cqw,0.654305cqh)] rotate-[-87.4deg] w-[hypot(23.8437cqw,-99.3457cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle del Barquillo</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[48.95%_17.21%_47.77%_76.35%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:30">
            <DesignBox style={designStyle("flex-none h-[hypot(-5.68495cqw,29.0309cqh)] rotate-21 w-[hypot(94.315cqw,70.9691cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle de la Reina</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[90.14%_36.26%_2.74%_60.56%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:31">
            <DesignBox style={designStyle("-rotate-72 flex-none h-[hypot(30.5396cqw,4.43581cqh)] w-[hypot(69.4604cqw,-95.5642cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle de Relatores</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[70.82%_6.29%_27.71%_87.52%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:32">
            <DesignBox style={designStyle("flex-none h-[hypot(1.23766cqw,68.9112cqh)] rotate-[-4.3deg] w-[hypot(98.7623cqw,-31.0888cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle de Zorrilla</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[97.42%_4.39%_0.57%_89.08%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:33">
            <DesignBox style={designStyle("flex-none h-[hypot(2.41945cqw,50.2759cqh)] rotate-[-8.9deg] w-[hypot(97.5806cqw,-49.7241cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle de Moratín</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[73.86%_23.16%_19.25%_75.31%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:34">
            <DesignBox style={designStyle("flex-none h-[hypot(-66.5518cqw,1.11238cqh)] rotate-[85.7deg] w-[hypot(33.4482cqw,98.8876cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle del Príncipe</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[80.01%_9.9%_16.71%_84.2%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:35">
            <DesignBox style={designStyle("-rotate-23 flex-none h-[hypot(6.77363cqw,28.7371cqh)] w-[hypot(93.2264cqw,-71.2629cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle del Prado</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[41.46%_9.92%_50.87%_88.77%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:36">
            <DesignBox style={designStyle("flex-none h-[hypot(77.6934cqw,0.51139cqh)] rotate-[-87.8deg] w-[hypot(22.3066cqw,-99.4886cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle de la Libertad</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[81.23%_7.67%_10.55%_90.85%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:37">
            <DesignBox style={designStyle("flex-none h-[hypot(69.0956cqw,0.694008cqh)] rotate-[-86.8deg] w-[hypot(30.9044cqw,-99.306cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle de San Agustín</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[85.99%_6.61%_12.95%_87.15%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:38">
            <DesignBox style={designStyle("flex-none h-[hypot(-0.11422cqw,95.9119cqh)] rotate-[0.4deg] w-[hypot(99.8858cqw,4.0881cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle Cervantes</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[11.34%_39.47%_86.75%_53.74%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:39">
            <DesignBox style={designStyle("flex-none h-[hypot(-1.9878cqw,53.2533cqh)] rotate-[7.6deg] w-[hypot(98.0122cqw,46.7467cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle de la Palma</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[14.64%_36.36%_82.93%_52.84%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:40">
            <DesignBox style={designStyle("flex-none h-[hypot(-1.2517cqw,41.5885cqh)] rotate-[7.6deg] w-[hypot(98.7483cqw,58.4115cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle de San Vicente Ferrer</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[1.85%_40.79%_95.02%_50.35%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:41">
            <DesignBox style={designStyle("flex-none h-[hypot(-2.77075cqw,31.7549cqh)] rotate-[13.9deg] w-[hypot(97.2292cqw,68.2451cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle del Divino Pastor</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[5.45%_70.03%_88.51%_27.09%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:42">
            <DesignBox style={designStyle("flex-none h-[hypot(33.6434cqw,5.37129cqh)] rotate-[-71.5deg] w-[hypot(66.3566cqw,-94.6287cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle del Limón</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[1.81%_59.53%_96.65%_32.62%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:43">
            <DesignBox style={designStyle("flex-none h-[hypot(0.862821cqw,66.3619cqh)] rotate-[-3.8deg] w-[hypot(99.1372cqw,-33.6381cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle de Montserrat</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[9.37%_55.92%_84.8%_40.79%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:44">
            <DesignBox style={designStyle("flex-none h-[hypot(28.4306cqw,6.98574cqh)] rotate-[-66.5deg] w-[hypot(71.5694cqw,-93.0143cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle del Norte</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[29.33%_48.62%_64.83%_47.34%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:45">
            <DesignBox style={designStyle("flex-none h-[hypot(21.701cqw,8.96589cqh)] rotate-[-59.2deg] w-[hypot(78.299cqw,-91.0341cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle de Pizarro</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[17.92%_53.11%_76.25%_45.74%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:46">
            <DesignBox style={designStyle("flex-none h-[hypot(-89.3601cqw,0.367159cqh)] rotate-[88.8deg] w-[hypot(10.6399cqw,99.6328cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle de Pozas</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[37.39%_89.58%_58.47%_5.38%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:47">
            <DesignBox style={designStyle("flex-none h-[hypot(-12.1652cqw,19.7229cqh)] rotate-[36.9deg] w-[hypot(87.8348cqw,80.2771cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle Cadarso</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[3.09%_70.63%_88.37%_24.41%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:48">
            <DesignBox style={designStyle("flex-none h-[hypot(18.4237cqw,5.35984cqh)] rotate-[-63.4deg] w-[hypot(81.5763cqw,-94.6402cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle del Conde Duque</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[4.36%_66.07%_89.01%_32.31%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:49">
            <DesignBox style={designStyle("flex-none h-[hypot(-63.1169cqw,1.39752cqh)] rotate-[84.8deg] w-[hypot(36.8831cqw,98.6025cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle de Amaniel</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[39.42%_74.97%_55.14%_21.74%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:50">
            <DesignBox style={designStyle("flex-none h-[hypot(-28.07cqw,8.02032cqh)] rotate-[64.7deg] w-[hypot(71.93cqw,91.9797cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle del Reloj</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[11.29%_91.83%_77.32%_-0.39%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:51">
            <DesignBox style={designStyle("flex-none h-[hypot(-9.70206cqw,5.2197cqh)] rotate-[54.4deg] w-[hypot(90.2979cqw,94.7803cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle de Juan Álvarez Mendizábal</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[15.89%_17.79%_79.32%_75.08%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:52">
            <DesignBox style={designStyle("flex-none h-[hypot(7.28528cqw,18.3451cqh)] rotate-[-30.6deg] w-[hypot(92.7147cqw,-81.6549cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle de San Mateo</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[-2.98%_45.26%_95.27%_52.57%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:53">
            <DesignBox style={designStyle("flex-none h-[hypot(46.361cqw,2.02934cqh)] rotate-[-81.2deg] w-[hypot(53.639cqw,-97.9707cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle de Monteleón</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[8.73%_31.95%_89.46%_61.52%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:54">
            <DesignBox style={designStyle("flex-none h-[hypot(-1.934cqw,55.9699cqh)] rotate-[7.1deg] w-[hypot(98.066cqw,44.0301cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle de Velarde</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[1.38%_25.3%_91.52%_71.69%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:55">
            <DesignBox style={designStyle("flex-none h-[hypot(-32.5616cqw,4.11447cqh)] rotate-[73.4deg] w-[hypot(67.4384cqw,95.8855cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle de Churruca</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[5.55%_21.58%_92.86%_71.42%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:56">
            <DesignBox style={designStyle("flex-none h-[hypot(1.19643cqw,64.1768cqh)] rotate-[-4.7deg] w-[hypot(98.8036cqw,-35.8232cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle de Apodaca</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[1.84%_21.87%_92.61%_75.6%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:57">
            <DesignBox style={designStyle("flex-none h-[hypot(-38.6071cqw,5.22917cqh)] rotate-[73.5deg] w-[hypot(61.3929cqw,94.7708cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle de Larra</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[34.53%_33.89%_59.47%_63.91%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:58">
            <DesignBox style={designStyle("flex-none h-[hypot(45.4764cqw,3.45348cqh)] rotate-[-78.3deg] w-[hypot(54.5236cqw,-96.5465cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle del Barco</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[9.3%_-0.67%_83.32%_95.09%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:59">
            <DesignBox style={designStyle("flex-none h-[hypot(15.0279cqw,7.9248cqh)] rotate-[-55.1deg] w-[hypot(84.9721cqw,-92.0752cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle de Campoamor</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[39.68%_13.94%_56.21%_78.24%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:60">
            <DesignBox style={designStyle("flex-none h-[hypot(-5.14938cqw,22.8118cqh)] rotate-[23.2deg] w-[hypot(94.8506cqw,77.1882cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle de San Marcos</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[24.82%_35.18%_70.91%_57.68%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:61">
            <DesignBox style={designStyle("flex-none h-[hypot(-6.43259cqw,21.37cqh)] rotate-[26.7deg] w-[hypot(93.5674cqw,78.63cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle de El Escorial</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[20.5%_38.97%_72.55%_53.4%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:62">
            <DesignBox style={designStyle("flex-none h-[hypot(8.91303cqw,10.9739cqh)] rotate-[-41.7deg] w-[hypot(91.087cqw,-89.0261cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle de Jesús del Valle</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[24.06%_38.95%_69.42%_55.85%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:63">
            <DesignBox style={designStyle("flex-none h-[hypot(15.7841cqw,9.30712cqh)] rotate-[-53.5deg] w-[hypot(84.2159cqw,-90.6929cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle de la Madera</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[31.79%_14.03%_62.37%_82.21%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:64">
            <DesignBox style={designStyle("-rotate-62 flex-none h-[hypot(24.0253cqw,8.20656cqh)] w-[hypot(75.9747cqw,-91.7934cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle de Pelayo</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[27.75%_0.62%_70.58%_91.79%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:65">
            <DesignBox style={designStyle("flex-none h-[hypot(-1.17341cqw,60.8031cqh)] rotate-5 w-[hypot(98.8266cqw,39.1969cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle de San Lucas</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[66.23%_97.86%_26.56%_0.51%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:66">
            <DesignBox style={designStyle("flex-none h-[hypot(62.4956cqw,1.2099cqh)] rotate-[-85.1deg] w-[hypot(37.5044cqw,-98.7901cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Paseo de Felipe III</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[51.97%_96.65%_40.92%_1.74%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:67">
            <DesignBox style={designStyle("flex-none h-[hypot(63.3325cqw,1.20326cqh)] rotate-[-85.2deg] w-[hypot(36.6675cqw,-98.7967cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Paseo de Felipe V</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[59.13%_43.45%_34.95%_52.84%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:68">
            <DesignBox style={designStyle("flex-none h-[hypot(-24.5679cqw,7.85853cqh)] rotate-[62.9deg] w-[hypot(75.4321cqw,92.1415cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle Preciados</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[65.3%_55.26%_31.66%_38.63%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:69">
            <DesignBox style={designStyle("flex-none h-[hypot(-5.66071cqw,31.6442cqh)] rotate-[19.8deg] w-[hypot(94.3393cqw,68.3558cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle del Arenal</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[65.24%_22.67%_31.74%_71.54%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2453;2:70">
            <DesignBox style={designStyle("flex-none h-[hypot(6.26418cqw,31.6533cqh)] rotate-[-20.8deg] w-[hypot(93.7358cqw,-68.3467cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[15.5px] text-center whitespace-nowrap")}>Calle de Alcalá</DesignText>
            </DesignBox>
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute block cursor-pointer left-[108.65px] size-[30px] top-[373.8px]")} data-node-id="68:2454" data-name="marker: plaza libre">
          <DesignBox style={designStyle("absolute inset-[-13.33%_-20%_-26.67%_-20%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgMarkerPlazaLibre} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute block cursor-pointer left-[210.95px] size-[30px] top-[359.85px]")} data-node-id="68:2457" data-name="marker: plaza libre">
          <DesignBox style={designStyle("absolute inset-[-13.33%_-20%_-26.67%_-20%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgMarkerPlazaLibre} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute block cursor-pointer left-[181.5px] size-[30px] top-[457.5px]")} data-node-id="68:2460" data-name="marker: plaza libre">
          <DesignBox style={designStyle("absolute inset-[-13.33%_-20%_-26.67%_-20%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgMarkerPlazaLibre1} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute block cursor-pointer left-[83.85px] size-[30px] top-[435.8px]")} data-node-id="68:2463" data-name="marker: plaza libre">
          <DesignBox style={designStyle("absolute inset-[-13.33%_-20%_-26.67%_-20%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgMarkerPlazaLibre} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute block cursor-pointer left-[286.9px] size-[30px] top-[395.5px]")} data-node-id="68:2466" data-name="marker: plaza libre">
          <DesignBox style={designStyle("absolute inset-[-13.33%_-20%_-26.67%_-20%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgMarkerPlazaLibre1} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute block cursor-pointer left-[305.5px] size-[30px] top-[336.6px]")} data-node-id="68:2469" data-name="marker: plaza libre">
          <DesignBox style={designStyle("absolute inset-[-13.33%_-20%_-26.67%_-20%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgMarkerPlazaLibre1} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute block cursor-pointer left-[54.4px] size-[30px] top-[395.5px]")} data-node-id="68:2472" data-name="marker: plaza libre">
          <DesignBox style={designStyle("absolute inset-[-13.33%_-20%_-26.67%_-20%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgMarkerPlazaLibre} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute block cursor-pointer left-[153.6px] size-[30px] top-[500.9px]")} data-node-id="68:2475" data-name="marker: plaza libre">
          <DesignBox style={designStyle("absolute inset-[-13.33%_-20%_-26.67%_-20%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgMarkerPlazaLibre1} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute block cursor-pointer left-[152.4px] size-[20px] top-[361.75px]")} data-node-id="68:2478" data-name="plaza ocupada">
          <DesignBox style={designStyle("absolute inset-[-15%_-20%_-25%_-20%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgPlazaOcupada} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute block cursor-pointer left-[257.8px] size-[20px] top-[462.5px]")} data-node-id="68:2479" data-name="plaza ocupada">
          <DesignBox style={designStyle("absolute inset-[-15%_-20%_-25%_-20%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgPlazaOcupada} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute block cursor-pointer left-[90.4px] size-[20px] top-[338.5px]")} data-node-id="68:2480" data-name="plaza ocupada">
          <DesignBox style={designStyle("absolute inset-[-15%_-20%_-25%_-20%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgPlazaOcupada} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute block cursor-pointer left-[341.5px] size-[20px] top-[443.9px]")} data-node-id="68:2481" data-name="plaza ocupada">
          <DesignBox style={designStyle("absolute inset-[-15%_-20%_-25%_-20%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgPlazaOcupada} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute bg-[var(--color-action-primary,#0a3d91)] block border-[2.5px] border-[var(--color-bg-surface,white)] border-solid cursor-pointer drop-shadow-[0px_3px_4px_rgba(0,0,0,0.3)] left-[228.1px] rounded-[var(--radius-10,10px)] size-[36px] top-[417.3px]")} data-node-id="68:2482" data-name="parking">
          <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[15.5px] not-italic text-[20px] text-[color:var(--color-text-inverse,white)] text-center top-[2.5px] w-[36px]")} data-node-id="68:2483">
            P
          </DesignText>
        </DesignBox>
        <DesignBox style={designStyle("absolute bg-[var(--color-status-available,#34c759)] border-2 border-[var(--color-bg-surface,white)] border-solid content-stretch flex h-[20px] items-center left-[254.1px] overflow-clip px-[6px] rounded-[var(--radius-10,10px)] top-[409.3px]")} data-node-id="68:2484" data-name="chip: 12">
          <DesignText style={designStyle("[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-[color:var(--color-text-inverse,white)] whitespace-nowrap")} data-node-id="68:2485">
            12
          </DesignText>
        </DesignBox>
        <DesignBox style={designStyle("absolute bg-[var(--color-action-primary,#0a3d91)] block border-[2.5px] border-[var(--color-bg-surface,white)] border-solid cursor-pointer drop-shadow-[0px_3px_4px_rgba(0,0,0,0.3)] left-[311.8px] rounded-[var(--radius-10,10px)] size-[36px] top-[477.75px]")} data-node-id="68:2486" data-name="parking">
          <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[15.5px] not-italic text-[20px] text-[color:var(--color-text-inverse,white)] text-center top-[2.5px] w-[36px]")} data-node-id="68:2487">
            P
          </DesignText>
        </DesignBox>
        <DesignBox style={designStyle("absolute bg-[var(--color-status-available,#34c759)] border-2 border-[var(--color-bg-surface,white)] border-solid content-stretch flex h-[20px] items-center left-[337.8px] overflow-clip px-[6px] rounded-[var(--radius-10,10px)] top-[469.75px]")} data-node-id="68:2488" data-name="chip: 4">
          <DesignText style={designStyle("[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-[color:var(--color-text-inverse,white)] whitespace-nowrap")} data-node-id="68:2489">
            4
          </DesignText>
        </DesignBox>
        <DesignBox style={designStyle("absolute left-[127.3px] size-[64px] top-[387.8px]")} data-node-id="68:2490" data-name="precisión">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgPrecision} />
        </DesignBox>
        <DesignBox style={designStyle("absolute left-[148.3px] size-[22px] top-[408.8px]")} data-node-id="68:2491" data-name="tu ubicación">
          <DesignBox style={designStyle("absolute inset-[-18.18%_-27.27%_-36.36%_-27.27%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgTuUbicacion} />
          </DesignBox>
        </DesignBox>
      </DesignBox>
      <ArcarCampo21 className="absolute bg-[var(--color-bg-surface,white)] content-stretch cursor-pointer flex gap-[var(--space-8,8px)] h-[50px] items-center left-[16px] overflow-clip px-[var(--space-12,12px)] rounded-[var(--radius-14,14px)] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.15)] top-[62px] w-[305px]" />
      <DesignBox style={designStyle("absolute bg-[rgba(255,255,255,0.96)] block cursor-pointer drop-shadow-[0px_2px_5px_rgba(0,0,0,0.15)] left-[calc(75%+32.25px)] rounded-[var(--radius-14,14px)] size-[50px] top-[62px]")} data-node-id="68:2495" data-name="btn: filtros">
        <DesignBox style={designStyle("absolute left-[15px] size-[20px] top-[15px]")} data-node-id="68:2496" data-name="sliders">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgSliders} />
        </DesignBox>
      </DesignBox>
      <DesignBox style={designStyle("absolute bg-[var(--color-bg-surface,white)] drop-shadow-[0px_2px_5px_rgba(0,0,0,0.15)] h-[88px] left-[calc(75%+42.25px)] rounded-[var(--radius-12,12px)] top-[128px] w-[40px]")} data-node-id="68:2497" data-name="controles mapa">
        <DesignBox style={designStyle("absolute left-[10px] size-[20px] top-[10px]")} data-node-id="68:2498" data-name="location">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgLocation} />
        </DesignBox>
        <DesignBox style={designStyle("absolute bg-[#c6c6c8] h-[0.5px] left-0 top-[44px] w-[40px]")} data-node-id="68:2499" data-name="Rectangle" />
        <DesignBox style={designStyle("absolute left-[10px] size-[20px] top-[56px]")} data-node-id="68:2500" data-name="map-line">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgMapLine} />
        </DesignBox>
      </DesignBox>
      <DesignBox style={designStyle("absolute bg-[var(--color-bg-surface,white)] drop-shadow-[0px_-4px_12px_rgba(0,0,0,0.14)] h-[324px] left-0 rounded-tl-[24px] rounded-tr-[24px] top-[528px] w-[393px]")} data-node-id="68:2501" data-name="hoja inferior">
        <DesignBox style={designStyle("absolute bg-[var(--color-border-default,#e5e5ea)] h-[5px] left-[178.5px] rounded-[3px] top-[8px] w-[36px]")} data-node-id="68:2502" data-name="grabber" />
        <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[20px] not-italic text-[22px] text-[color:var(--color-text-primary,#1c1c1e)] top-[28px] whitespace-nowrap")} data-node-id="68:2503">
          12 plazas cercanas
        </DesignText>
        <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[20px] not-italic text-[15px] text-[color:var(--color-text-secondary,#6e6e73)] top-[60px] whitespace-nowrap")} data-node-id="68:2504">
          8 en calle · 4 parkings · a menos de 5 min
        </DesignText>
        <DesignBox style={designStyle("absolute bg-[var(--color-bg-canvas,#f2f2f7)] content-stretch flex gap-[6px] h-[30px] items-center left-[20px] overflow-clip px-[var(--space-12,12px)] rounded-[15px] top-[92px]")} data-node-id="68:2505" data-name="chip: Libre">
          <DesignBox style={designStyle("relative shrink-0 size-[8px]")} data-node-id="68:2506" data-name="Ellipse">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgEllipse} />
          </DesignBox>
          <DesignText style={designStyle("[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-[color:var(--color-text-primary,#1c1c1e)] whitespace-nowrap")} data-node-id="68:2507">
            Libre
          </DesignText>
        </DesignBox>
        <DesignBox style={designStyle("absolute bg-[var(--color-bg-canvas,#f2f2f7)] content-stretch flex gap-[6px] h-[30px] items-center left-[100px] overflow-clip px-[var(--space-12,12px)] rounded-[15px] top-[92px]")} data-node-id="68:2508" data-name="chip: Ocupada">
          <DesignBox style={designStyle("relative shrink-0 size-[8px]")} data-node-id="68:2509" data-name="Ellipse">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgEllipse1} />
          </DesignBox>
          <DesignText style={designStyle("[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-[color:var(--color-text-primary,#1c1c1e)] whitespace-nowrap")} data-node-id="68:2510">
            Ocupada
          </DesignText>
        </DesignBox>
        <DesignBox style={designStyle("absolute bg-[var(--color-bg-canvas,#f2f2f7)] content-stretch flex gap-[6px] h-[30px] items-center left-[207px] overflow-clip px-[var(--space-12,12px)] rounded-[15px] top-[92px]")} data-node-id="68:2511" data-name="chip: Parking">
          <DesignBox style={designStyle("relative shrink-0 size-[8px]")} data-node-id="68:2512" data-name="Ellipse">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgEllipse2} />
          </DesignBox>
          <DesignText style={designStyle("[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-[color:var(--color-text-primary,#1c1c1e)] whitespace-nowrap")} data-node-id="68:2513">
            Parking
          </DesignText>
        </DesignBox>
        <ArcarBoton22 className="absolute bg-[var(--color-action-primary,#0a3d91)] content-stretch cursor-pointer flex gap-[var(--space-8,8px)] h-[52px] items-center justify-center left-[20px] overflow-clip rounded-[var(--radius-14,14px)] top-[140px] w-[353px]" />
      </DesignBox>
      <DesignBox style={designStyle("absolute backdrop-blur-[10px] bg-[rgba(249,249,249,0.94)] h-[83px] left-0 top-[769px] w-[393px]")} data-node-id="68:2517" data-name="Tab bar">
        <DesignBox style={designStyle("absolute bg-[rgba(0,0,0,0.18)] h-[0.5px] left-0 top-0 w-[393px]")} data-node-id="I68:2517;3:280" data-name="separador" />
        <DesignBox style={designStyle("absolute block cursor-pointer h-[49px] left-0 overflow-clip top-0 w-[98px]")} data-node-id="I68:2517;3:281" data-name="tab/Inicio">
          <DesignBox style={designStyle("absolute left-[36.5px] size-[25px] top-[6px]")} data-node-id="I68:2517;3:282" data-name="icon/house">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconHouse} />
          </DesignBox>
          <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium'] font-medium h-[12px] leading-[normal] left-[49px] not-italic text-[#8e8e93] text-[10px] text-center top-[34px] w-[98px]")} data-node-id="I68:2517;3:284">
            Inicio
          </DesignText>
        </DesignBox>
        <DesignBox style={designStyle("absolute h-[49px] left-[98.25px] overflow-clip top-0 w-[98px]")} data-node-id="I68:2517;3:285" data-name="tab/Mapa">
          <DesignBox style={designStyle("absolute left-[36.5px] size-[25px] top-[6px]")} data-node-id="I68:2517;3:286" data-name="icon/map">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconMap} />
          </DesignBox>
          <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium'] font-medium h-[12px] leading-[normal] left-[49px] not-italic text-[#0a7cff] text-[10px] text-center top-[34px] w-[98px]")} data-node-id="I68:2517;3:289">
            Mapa
          </DesignText>
        </DesignBox>
        <DesignBox style={designStyle("absolute block cursor-pointer h-[49px] left-[196.5px] overflow-clip top-0 w-[98px]")} data-node-id="I68:2517;3:290" data-name="tab/Favoritos">
          <DesignBox style={designStyle("absolute left-[36.5px] size-[25px] top-[6px]")} data-node-id="I68:2517;3:291" data-name="icon/heart">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconHeart} />
          </DesignBox>
          <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium'] font-medium h-[12px] leading-[normal] left-[49px] not-italic text-[#8e8e93] text-[10px] text-center top-[34px] w-[98px]")} data-node-id="I68:2517;3:293">
            Favoritos
          </DesignText>
        </DesignBox>
        <DesignBox style={designStyle("absolute block cursor-pointer h-[49px] left-[294.75px] overflow-clip top-0 w-[98px]")} data-node-id="I68:2517;3:294" data-name="tab/Perfil">
          <DesignBox style={designStyle("absolute left-[36.5px] size-[25px] top-[6px]")} data-node-id="I68:2517;3:295" data-name="icon/person-circle">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconPersonCircle} />
          </DesignBox>
          <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium'] font-medium h-[12px] leading-[normal] left-[49px] not-italic text-[#8e8e93] text-[10px] text-center top-[34px] w-[98px]")} data-node-id="I68:2517;3:299">
            Perfil
          </DesignText>
        </DesignBox>
        <IOsHomeIndicator className="absolute h-[34px] left-0 top-[49px] w-[393px]" />
      </DesignBox>
      <IOsStatusBarOscura className="absolute h-[54px] left-0 top-0 w-[393px]" />
    </DesignBox>;
}
