// Geometry, typography and assets adapted from the team's Figma prototype.
import { Asset } from 'expo-asset';
import { designStyle, DesignText, DesignBox } from '../design-style';

const imgWifi = Asset.fromModule(require("../../../assets/prototype/817866a3f3589a23e6f1.svg")).uri;
const imgIconCar = Asset.fromModule(require("../../../assets/prototype/4f8f2a7dfa4a09abb893.svg")).uri;
const imgMapaMadridCentroOsm = Asset.fromModule(require("../../../assets/prototype/6aa09aebdb8d097ea227.svg")).uri;
const imgVector = Asset.fromModule(require("../../../assets/prototype/3e895e93a009b324e4de.svg")).uri;
const imgVector1 = Asset.fromModule(require("../../../assets/prototype/a5542423952e29b6fb3b.svg")).uri;
const imgVector2 = Asset.fromModule(require("../../../assets/prototype/b66468745fdac9830596.svg")).uri;
const imgVector3 = Asset.fromModule(require("../../../assets/prototype/5ccf329e91d62c47d5c9.svg")).uri;
const imgVector4 = Asset.fromModule(require("../../../assets/prototype/28eff0993542f24b4248.svg")).uri;
const imgVector5 = Asset.fromModule(require("../../../assets/prototype/3e42d25cc746206e80d2.svg")).uri;
const imgVector6 = Asset.fromModule(require("../../../assets/prototype/f03b594f4b079a99bc78.svg")).uri;
const imgVector7 = Asset.fromModule(require("../../../assets/prototype/ca6498494b7bcdedb186.svg")).uri;
const imgVector8 = Asset.fromModule(require("../../../assets/prototype/c6d8d7b6625934537462.svg")).uri;
const imgVector9 = Asset.fromModule(require("../../../assets/prototype/2cac54c720e484f7de4c.svg")).uri;
const imgVector10 = Asset.fromModule(require("../../../assets/prototype/64309c371839524952d9.svg")).uri;
const imgVector11 = Asset.fromModule(require("../../../assets/prototype/d385749427966e429668.svg")).uri;
const imgVector12 = Asset.fromModule(require("../../../assets/prototype/3809c6660479c7e0433f.svg")).uri;
const imgRuta = Asset.fromModule(require("../../../assets/prototype/5a6d39316186dc97ac27.svg")).uri;
const imgRuta1 = Asset.fromModule(require("../../../assets/prototype/ec1e625cbd262922c341.svg")).uri;
const imgRuta2 = Asset.fromModule(require("../../../assets/prototype/a0b0de55bfbde81de6a5.svg")).uri;
const imgPlazaOcupada = Asset.fromModule(require("../../../assets/prototype/33863dcb9b9b8b11b428.svg")).uri;
const imgHalo = Asset.fromModule(require("../../../assets/prototype/9a82565730c0062a3ad5.svg")).uri;
const imgCar = Asset.fromModule(require("../../../assets/prototype/f1f71e819528679f288e.svg")).uri;
const imgPrecision = Asset.fromModule(require("../../../assets/prototype/df6e8405b0f9e07e8fd6.svg")).uri;
const imgLocation = Asset.fromModule(require("../../../assets/prototype/07e519c9f3b2b9ee0b9f.svg")).uri;
const imgTurnRight = Asset.fromModule(require("../../../assets/prototype/7dd60841a3646976fb46.svg")).uri;
const imgEllipse = Asset.fromModule(require("../../../assets/prototype/e5c8382b348080c9edea.svg")).uri;
const imgIconSwap = Asset.fromModule(require("../../../assets/prototype/6ba2c6b15c43608c16b8.svg")).uri;
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
type ArcarBoton42Props = {
  className?: string;
  texto1?: string;
};
function ArcarBoton42({
  className,
  texto1 = "He aparcado"
}: ArcarBoton42Props) {
  return <DesignBox style={designStyle(className || "bg-[var(--color-action-primary,#0a3d91)] content-stretch flex gap-[var(--space-8,8px)] h-[52px] items-center justify-center overflow-clip relative rounded-[var(--radius-14,14px)] w-[353px]")} data-node-id="115:3051" data-name="Arcar/Botón/42">
      <DesignBox style={designStyle("relative shrink-0 size-[18px]")} data-node-id="115:3044" data-name="icon/car">
        <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconCar} />
      </DesignBox>
      <DesignText style={designStyle("[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[17px] text-[color:var(--color-text-inverse,white)] whitespace-nowrap")} data-node-id="115:3045">
        {texto1}
      </DesignText>
    </DesignBox>;
}
export default function C21RutaAPlazaGranVia32() {
  return <DesignBox style={designStyle("bg-[var(--color-bg-surface,white)] relative size-full")} data-node-id="68:3014" data-name="C2.1 · Ruta a plaza (Gran Vía, 32)">
      <DesignBox style={designStyle("absolute bg-[#f2f1ee] h-[852px] left-0 overflow-clip top-0 w-[393px]")} data-node-id="68:3015" data-name="mapa">
        <DesignBox style={designStyle("absolute left-[-624.38px] overflow-clip size-[1978.022px] top-[-474.62px]")} data-node-id="68:3016" data-name="Mapa/Madrid Centro (OSM)">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgMapaMadridCentroOsm} />
          <DesignBox style={designStyle("absolute inset-[-3.52%_-3.11%_-25.66%_-4.08%]")} data-node-id="I68:3016;2:4" data-name="Vector">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgVector} />
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-0.13%_0.13%_0.57%_2.11%]")} data-node-id="I68:3016;2:5" data-name="Vector">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgVector1} />
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[1.21%_-6.93%_1.55%_4.13%]")} data-node-id="I68:3016;2:6" data-name="Vector">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgVector2} />
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-3.46%_-2.66%_-2.36%_-5.12%]")} data-node-id="I68:3016;2:7" data-name="Vector">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgVector3} />
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-6.3%_-8.54%_-2.29%_-16.96%]")} data-node-id="I68:3016;2:8" data-name="Vector">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgVector4} />
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-1.28%_0.07%_-1.99%_-15.03%]")} data-node-id="I68:3016;2:9" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.24%_-0.22%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector5} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-21.58%_-14.42%_-19.67%_-14.6%]")} data-node-id="I68:3016;2:10" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.25%_-0.27%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector6} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-4.08%_-7.13%_-5.37%_-2.28%]")} data-node-id="I68:3016;2:11" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.46%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector7} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-3.13%_-2.14%_48.56%_-16.37%]")} data-node-id="I68:3016;2:12" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-1.11%_-0.51%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector8} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-1.28%_0.07%_-1.99%_-15.03%]")} data-node-id="I68:3016;2:13" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.18%_-0.16%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector9} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-21.58%_-14.42%_-19.67%_-14.6%]")} data-node-id="I68:3016;2:14" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.21%_-0.23%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector10} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-4.08%_-7.13%_-5.37%_-2.28%]")} data-node-id="I68:3016;2:15" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.4%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector11} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-3.13%_-2.14%_48.56%_-16.37%]")} data-node-id="I68:3016;2:16" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.95%_-0.44%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector12} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[11.94%_79.16%_79.11%_15.15%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:17">
            <DesignBox style={designStyle("flex-none h-[hypot(-18.6387cqw,6.57597cqh)] rotate-61 w-[hypot(81.3613cqw,93.424cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative text-[#6b6b70] text-[19.78px] text-center whitespace-nowrap")}>Calle de la Princesa</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[57.44%_83.76%_36.07%_14.57%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:18">
            <DesignBox style={designStyle("-rotate-85 flex-none h-[hypot(66.4431cqw,1.49293cqh)] w-[hypot(33.5569cqw,-98.5071cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[18.132px] text-center whitespace-nowrap")}>Calle de Bailén</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[88.56%_88.22%_10.31%_4.55%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:19">
            <DesignBox style={designStyle("flex-none h-[hypot(-0.026844cqw,98.8783cqh)] rotate-[0.1deg] w-[hypot(99.9732cqw,1.12174cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[18.132px] text-center whitespace-nowrap")}>Calle de Segovia</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[53.23%_15.51%_44.43%_80.64%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:20">
            <DesignBox style={designStyle("flex-none h-[hypot(-10.1751cqw,44.4994cqh)] rotate-[20.6deg] w-[hypot(89.8249cqw,55.5006cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[18.132px] text-center whitespace-nowrap")}>Gran Vía</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[91.39%_23.49%_4.41%_69.96%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:21">
            <DesignBox style={designStyle("flex-none h-[hypot(-8.00487cqw,23.3835cqh)] rotate-[28.1deg] w-[hypot(91.9951cqw,76.6165cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[18.132px] text-center whitespace-nowrap")}>Calle de Atocha</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[35.08%_19.54%_57.42%_75.56%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:22">
            <DesignBox style={designStyle("flex-none h-[hypot(19.7501cqw,7.30256cqh)] rotate-[-60.5deg] w-[hypot(80.2499cqw,-92.6974cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[18.132px] text-center whitespace-nowrap")}>Calle de Hortaleza</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[7.87%_18.57%_88.17%_74.58%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:23">
            <DesignBox style={designStyle("flex-none h-[hypot(6.81487cqw,25.514cqh)] rotate-[-24.8deg] w-[hypot(93.1851cqw,-74.486cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[18.132px] text-center whitespace-nowrap")}>Calle de Barceló</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[72.98%_48.75%_25.28%_46.5%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:24">
            <DesignBox style={designStyle("flex-none h-[hypot(3.40122cqw,57.3054cqh)] rotate-[-9.2deg] w-[hypot(96.5988cqw,-42.6946cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle Mayor</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[47.94%_67.63%_47.36%_27.1%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:25">
            <DesignBox style={designStyle("flex-none h-[hypot(12.4609cqw,16.3279cqh)] rotate-[-40.5deg] w-[hypot(87.5391cqw,-83.6721cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle de la Bola</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[84.62%_15.74%_9.73%_81.59%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:26">
            <DesignBox style={designStyle("flex-none h-[hypot(36.085cqw,5.43761cqh)] rotate-[-72.3deg] w-[hypot(63.915cqw,-94.5624cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle del León</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[57.56%_22.45%_41.27%_69.4%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:27">
            <DesignBox style={designStyle("flex-none h-[hypot(-0.237954cqw,86.6125cqh)] rotate-[1.1deg] w-[hypot(99.762cqw,13.3875cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle de los Jardines</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[40.59%_31.21%_52.5%_66.11%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:28">
            <DesignBox style={designStyle("flex-none h-[hypot(36.5858cqw,3.61305cqh)] rotate-[-75.7deg] w-[hypot(63.4142cqw,-96.387cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle de Valverde</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[28.7%_1.46%_64.23%_97.21%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:29">
            <DesignBox style={designStyle("flex-none h-[hypot(76.0111cqw,0.649136cqh)] rotate-[-87.4deg] w-[hypot(23.9889cqw,-99.3509cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle del Barquillo</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[48.95%_17.2%_47.77%_76.35%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:30">
            <DesignBox style={designStyle("flex-none h-[hypot(-5.61709cqw,28.7693cqh)] rotate-21 w-[hypot(94.3829cqw,71.2307cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle de la Reina</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[90.16%_36.28%_2.75%_60.56%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:31">
            <DesignBox style={designStyle("-rotate-72 flex-none h-[hypot(30.3888cqw,4.40574cqh)] w-[hypot(69.6112cqw,-95.5943cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle de Relatores</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[70.82%_6.3%_27.71%_87.47%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:32">
            <DesignBox style={designStyle("flex-none h-[hypot(1.21762cqw,68.556cqh)] rotate-[-4.3deg] w-[hypot(98.7824cqw,-31.444cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle de Zorrilla</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[97.42%_4.37%_0.58%_89.08%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:33">
            <DesignBox style={designStyle("flex-none h-[hypot(2.38837cqw,49.9447cqh)] rotate-[-8.9deg] w-[hypot(97.6116cqw,-50.0553cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle de Moratín</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[73.86%_23.16%_19.25%_75.32%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:34">
            <DesignBox style={designStyle("flex-none h-[hypot(-66.3334cqw,1.10166cqh)] rotate-[85.7deg] w-[hypot(33.6666cqw,98.8983cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle del Príncipe</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[80.02%_9.91%_16.72%_84.2%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:35">
            <DesignBox style={designStyle("-rotate-23 flex-none h-[hypot(6.71162cqw,28.5355cqh)] w-[hypot(93.2884cqw,-71.4645cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle del Prado</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[41.46%_9.93%_50.87%_88.77%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:36">
            <DesignBox style={designStyle("flex-none h-[hypot(77.5169cqw,0.506247cqh)] rotate-[-87.8deg] w-[hypot(22.4831cqw,-99.4938cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle de la Libertad</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[81.21%_7.68%_10.6%_90.86%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:37">
            <DesignBox style={designStyle("flex-none h-[hypot(68.9624cqw,0.689727cqh)] rotate-[-86.8deg] w-[hypot(31.0376cqw,-99.3103cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle de San Agustín</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[85.99%_6.63%_12.96%_87.1%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:38">
            <DesignBox style={designStyle("flex-none h-[hypot(-0.112477cqw,95.8511cqh)] rotate-[0.4deg] w-[hypot(99.8875cqw,4.1489cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle Cervantes</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[11.34%_39.46%_86.76%_53.74%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:39">
            <DesignBox style={designStyle("flex-none h-[hypot(-1.96698cqw,52.9858cqh)] rotate-[7.6deg] w-[hypot(98.033cqw,47.0142cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle de la Palma</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[14.65%_36.34%_82.93%_52.9%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:40">
            <DesignBox style={designStyle("flex-none h-[hypot(-1.24311cqw,41.4192cqh)] rotate-[7.6deg] w-[hypot(98.7569cqw,58.5808cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle de San Vicente Ferrer</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[1.87%_40.77%_95.03%_50.4%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:41">
            <DesignBox style={designStyle("flex-none h-[hypot(-2.75049cqw,31.5915cqh)] rotate-[13.9deg] w-[hypot(97.2495cqw,68.4085cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle del Divino Pastor</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[5.41%_70.03%_88.57%_27.1%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:42">
            <DesignBox style={designStyle("flex-none h-[hypot(33.4354cqw,5.32406cqh)] rotate-[-71.5deg] w-[hypot(66.5646cqw,-94.6759cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle del Limón</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[1.81%_59.54%_96.66%_32.62%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:43">
            <DesignBox style={designStyle("flex-none h-[hypot(0.855219cqw,66.1624cqh)] rotate-[-3.8deg] w-[hypot(99.1448cqw,-33.8376cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle de Montserrat</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[9.37%_55.92%_84.8%_40.79%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:44">
            <DesignBox style={designStyle("flex-none h-[hypot(28.2195cqw,6.91846cqh)] rotate-[-66.5deg] w-[hypot(71.7805cqw,-93.0815cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle del Norte</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[29.35%_48.64%_64.79%_47.31%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:45">
            <DesignBox style={designStyle("flex-none h-[hypot(21.431cqw,8.83648cqh)] rotate-[-59.2deg] w-[hypot(78.569cqw,-91.1635cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle de Pizarro</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[17.92%_53.11%_76.24%_45.75%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:46">
            <DesignBox style={designStyle("flex-none h-[hypot(-89.2502cqw,0.362974cqh)] rotate-[88.8deg] w-[hypot(10.7498cqw,99.637cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle de Pozas</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[37.39%_89.6%_58.49%_5.39%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:47">
            <DesignBox style={designStyle("flex-none h-[hypot(-12.1084cqw,19.6387cqh)] rotate-[36.9deg] w-[hypot(87.8916cqw,80.3613cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle Cadarso</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[3.08%_70.63%_88.38%_24.41%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:48">
            <DesignBox style={designStyle("flex-none h-[hypot(18.2421cqw,5.29865cqh)] rotate-[-63.4deg] w-[hypot(81.7579cqw,-94.7014cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle del Conde Duque</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[4.36%_66.07%_89%_32.32%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:49">
            <DesignBox style={designStyle("flex-none h-[hypot(-62.832cqw,1.38078cqh)] rotate-[84.8deg] w-[hypot(37.168cqw,98.6192cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle de Amaniel</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[39.42%_74.96%_55.12%_21.75%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:50">
            <DesignBox style={designStyle("flex-none h-[hypot(-27.779cqw,7.91431cqh)] rotate-[64.7deg] w-[hypot(72.221cqw,92.0857cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle del Reloj</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[11.29%_91.85%_77.35%_-0.38%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:51">
            <DesignBox style={designStyle("flex-none h-[hypot(-9.63514cqw,5.18191cqh)] rotate-[54.4deg] w-[hypot(90.3649cqw,94.8181cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle de Juan Álvarez Mendizábal</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[15.91%_17.84%_79.3%_75.03%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:52">
            <DesignBox style={designStyle("flex-none h-[hypot(7.21975cqw,18.1996cqh)] rotate-[-30.6deg] w-[hypot(92.7803cqw,-81.8004cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle de San Mateo</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[-2.97%_45.27%_95.28%_52.57%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:53">
            <DesignBox style={designStyle("flex-none h-[hypot(46.1084cqw,2.00924cqh)] rotate-[-81.2deg] w-[hypot(53.8916cqw,-97.9908cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle de Monteleón</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[8.73%_31.93%_89.47%_61.58%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:54">
            <DesignBox style={designStyle("flex-none h-[hypot(-1.92379cqw,55.8368cqh)] rotate-[7.1deg] w-[hypot(98.0762cqw,44.1632cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle de Velarde</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[1.43%_25.29%_91.49%_71.72%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:55">
            <DesignBox style={designStyle("flex-none h-[hypot(-32.3961cqw,4.08479cqh)] rotate-[73.4deg] w-[hypot(67.6039cqw,95.9152cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle de Churruca</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[5.55%_21.6%_92.87%_71.42%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:56">
            <DesignBox style={designStyle("flex-none h-[hypot(1.18598cqw,63.9725cqh)] rotate-[-4.7deg] w-[hypot(98.814cqw,-36.0275cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle de Apodaca</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[1.84%_21.87%_92.63%_75.61%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:57">
            <DesignBox style={designStyle("flex-none h-[hypot(-38.4682cqw,5.20018cqh)] rotate-[73.5deg] w-[hypot(61.5318cqw,94.7998cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle de Larra</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[34.53%_33.9%_59.48%_63.91%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:58">
            <DesignBox style={designStyle("flex-none h-[hypot(45.2187cqw,3.41897cqh)] rotate-[-78.3deg] w-[hypot(54.7813cqw,-96.581cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle del Barco</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[9.29%_-0.67%_83.37%_95.12%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:59">
            <DesignBox style={designStyle("flex-none h-[hypot(14.9577cqw,7.88472cqh)] rotate-[-55.1deg] w-[hypot(85.0423cqw,-92.1153cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle de Campoamor</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[39.66%_13.96%_56.23%_78.2%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:60">
            <DesignBox style={designStyle("flex-none h-[hypot(-5.08507cqw,22.5795cqh)] rotate-[23.2deg] w-[hypot(94.9149cqw,77.4205cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle de San Marcos</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[24.84%_35.17%_70.91%_57.73%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:61">
            <DesignBox style={designStyle("flex-none h-[hypot(-6.40457cqw,21.2917cqh)] rotate-[26.7deg] w-[hypot(93.5954cqw,78.7083cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle de El Escorial</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[20.5%_38.98%_72.55%_53.4%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:62">
            <DesignBox style={designStyle("flex-none h-[hypot(8.82936cqw,10.8732cqh)] rotate-[-41.7deg] w-[hypot(91.1706cqw,-89.1268cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle de Jesús del Valle</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[24.08%_38.98%_69.42%_55.85%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:63">
            <DesignBox style={designStyle("flex-none h-[hypot(15.7116cqw,9.26113cqh)] rotate-[-53.5deg] w-[hypot(84.2884cqw,-90.7389cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle de la Madera</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[31.8%_14.05%_62.37%_82.21%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:64">
            <DesignBox style={designStyle("-rotate-62 flex-none h-[hypot(23.8649cqw,8.14043cqh)] w-[hypot(76.1351cqw,-91.8596cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle de Pelayo</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[27.75%_0.61%_70.59%_91.85%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:65">
            <DesignBox style={designStyle("flex-none h-[hypot(-1.16846cqw,60.7011cqh)] rotate-5 w-[hypot(98.8315cqw,39.2989cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle de San Lucas</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[66.26%_97.87%_26.56%_0.51%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:66">
            <DesignBox style={designStyle("flex-none h-[hypot(62.3287cqw,1.20142cqh)] rotate-[-85.1deg] w-[hypot(37.6713cqw,-98.7986cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Paseo de Felipe III</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[51.94%_96.66%_40.97%_1.74%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:67">
            <DesignBox style={designStyle("flex-none h-[hypot(63.1469cqw,1.19381cqh)] rotate-[-85.2deg] w-[hypot(36.8531cqw,-98.8062cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Paseo de Felipe V</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[59.13%_43.46%_34.97%_52.85%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:68">
            <DesignBox style={designStyle("flex-none h-[hypot(-24.4144cqw,7.79865cqh)] rotate-[62.9deg] w-[hypot(75.5856cqw,92.2014cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle Preciados</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[65.29%_55.27%_31.67%_38.58%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:69">
            <DesignBox style={designStyle("flex-none h-[hypot(-5.57308cqw,31.2878cqh)] rotate-[19.8deg] w-[hypot(94.4269cqw,68.7122cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle del Arenal</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[65.24%_22.66%_31.75%_71.54%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:3016;2:70">
            <DesignBox style={designStyle("flex-none h-[hypot(6.19695cqw,31.4049cqh)] rotate-[-20.8deg] w-[hypot(93.8031cqw,-68.5951cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[16.484px] text-center whitespace-nowrap")}>Calle de Alcalá</DesignText>
            </DesignBox>
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute h-[245.604px] left-[46.5px] top-[262.2px] w-[300px]")} data-node-id="68:3017" data-name="ruta">
          <DesignBox style={designStyle("absolute inset-[-3.05%_-2.5%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgRuta} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute h-[245.604px] left-[46.5px] top-[262.2px] w-[300px]")} data-node-id="68:3018" data-name="ruta">
          <DesignBox style={designStyle("absolute inset-[-1.83%_-1.5%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgRuta1} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute h-[113.736px] left-[-91.96px] top-[148.46px] w-[138.462px]")} data-node-id="68:3019" data-name="ruta">
          <DesignBox style={designStyle("absolute inset-[-3.08%_-2.53%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgRuta2} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute left-[354.63px] size-[20px] top-[463.19px]")} data-node-id="68:3020" data-name="plaza ocupada">
          <DesignBox style={designStyle("absolute inset-[-15%_-20%_-25%_-20%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgPlazaOcupada} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute left-[288.7px] size-[20px] top-[520.88px]")} data-node-id="68:3021" data-name="plaza ocupada">
          <DesignBox style={designStyle("absolute inset-[-15%_-20%_-25%_-20%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgPlazaOcupada} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute left-[306.5px] size-[80px] top-[467.8px]")} data-node-id="68:3022" data-name="halo">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgHalo} />
        </DesignBox>
        <DesignBox style={designStyle("absolute bg-[var(--color-status-available,#34c759)] border-4 border-[var(--color-bg-surface,white)] border-solid drop-shadow-[0px_3px_5px_rgba(0,0,0,0.3)] left-[322.5px] rounded-[var(--radius-24,24px)] size-[48px] top-[483.8px]")} data-node-id="68:3023" data-name="tu plaza">
          <DesignBox style={designStyle("absolute left-[8px] size-[24px] top-[8px]")} data-node-id="68:3024" data-name="car">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgCar} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute left-[11.5px] size-[70px] top-[227.2px]")} data-node-id="68:3025" data-name="precisión">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgPrecision} />
        </DesignBox>
        <DesignBox style={designStyle("absolute bg-[var(--color-bg-surface,white)] drop-shadow-[0px_2px_4px_rgba(0,0,0,0.3)] left-[27.5px] rounded-[19px] size-[38px] top-[243.2px]")} data-node-id="68:3026" data-name="tú">
          <DesignBox style={designStyle("absolute left-[9px] size-[20px] top-[9px]")} data-node-id="68:3027" data-name="location">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgLocation} />
          </DesignBox>
        </DesignBox>
      </DesignBox>
      <DesignBox style={designStyle("absolute bg-[var(--color-text-primary,#1c1c1e)] drop-shadow-[0px_6px_10px_rgba(0,0,0,0.25)] h-[112px] left-[8px] rounded-[var(--radius-24,24px)] top-[56px] w-[377px]")} data-node-id="68:3028" data-name="indicación">
        <DesignBox style={designStyle("absolute left-[22px] size-[46px] top-[30px]")} data-node-id="68:3029" data-name="turn-right">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgTurnRight} />
        </DesignBox>
        <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[84px] not-italic text-[34px] text-[color:var(--color-text-inverse,white)] top-[18px] tracking-[-0.51px] whitespace-nowrap")} data-node-id="68:3030">
          150 m
        </DesignText>
        <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[84px] not-italic text-[16px] text-[rgba(255,255,255,0.8)] top-[64px] whitespace-nowrap")} data-node-id="68:3031">
          Continúa por Gran Vía
        </DesignText>
      </DesignBox>
      <DesignBox style={designStyle("absolute bg-[#2c2c2e] content-stretch flex h-[34px] items-center left-[16px] px-[14px] rounded-[17px] top-[176px]")} data-node-id="68:3032" data-name="siguiente">
        <DesignText style={designStyle("[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-[color:var(--color-text-inverse,white)] whitespace-nowrap")} data-node-id="68:3033">
          Luego: tu plaza a la derecha
        </DesignText>
      </DesignBox>
      <DesignBox style={designStyle("absolute bg-[rgba(255,255,255,0.96)] drop-shadow-[0px_2px_5px_rgba(0,0,0,0.15)] left-[calc(75%+42.25px)] rounded-[var(--radius-20,20px)] size-[40px] top-[186px]")} data-node-id="68:3034" data-name="btn: centrar">
        <DesignBox style={designStyle("absolute left-[10px] size-[20px] top-[10px]")} data-node-id="68:3035" data-name="location">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgLocation} />
        </DesignBox>
      </DesignBox>
      <DesignBox style={designStyle("absolute bg-[var(--color-bg-surface,white)] drop-shadow-[0px_-4px_12px_rgba(0,0,0,0.14)] h-[304px] left-0 rounded-tl-[24px] rounded-tr-[24px] top-[548px] w-[393px]")} data-node-id="68:3036" data-name="hoja inferior">
        <DesignBox style={designStyle("absolute bg-[var(--color-border-default,#e5e5ea)] h-[5px] left-[178.5px] rounded-[3px] top-[8px] w-[36px]")} data-node-id="68:3037" data-name="grabber" />
        <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[20px] not-italic text-[24px] text-[color:var(--color-text-primary,#1c1c1e)] top-[26px] tracking-[-0.36px] whitespace-nowrap")} data-node-id="68:3038">
          Llegas en 3 min
        </DesignText>
        <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[20px] not-italic text-[15px] text-[color:var(--color-text-secondary,#6e6e73)] top-[60px] whitespace-nowrap")} data-node-id="68:3039">
          17:09 · 0,6 km · Gran Vía, 32
        </DesignText>
        <DesignBox style={designStyle("absolute bg-[var(--color-status-available-bg,#e3f7e8)] content-stretch flex gap-[6px] h-[30px] items-center left-[301px] overflow-clip px-[var(--space-12,12px)] rounded-[15px] top-[30px]")} data-node-id="68:3040" data-name="chip: Libre">
          <DesignBox style={designStyle("relative shrink-0 size-[8px]")} data-node-id="68:3041" data-name="Ellipse">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgEllipse} />
          </DesignBox>
          <DesignText style={designStyle("[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-[color:var(--color-status-available-text,#1b6e32)] whitespace-nowrap")} data-node-id="68:3042">
            Libre
          </DesignText>
        </DesignBox>
        <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[normal] left-[20px] not-italic text-[15px] text-[color:var(--color-text-secondary,#6e6e73)] top-[102px] whitespace-nowrap")} data-node-id="68:3043">
          Elige ruta
        </DesignText>
        <DesignBox style={designStyle("absolute content-stretch cursor-pointer flex gap-[var(--space-8,8px)] h-[34px] items-center justify-end left-[233px] overflow-clip top-[94px] w-[140px]")} data-node-id="68:3044" data-name="btn: Cambiar ruta">
          <DesignBox style={designStyle("relative shrink-0 size-[16px]")} data-node-id="68:3045" data-name="icon/swap">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconSwap} />
          </DesignBox>
          <DesignText style={designStyle("[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[15px] text-[color:var(--color-action-primary,#0a3d91)] text-left whitespace-nowrap")} data-node-id="68:3046">
            Cambiar ruta
          </DesignText>
        </DesignBox>
        <DesignBox style={designStyle("[word-break:break-word] absolute bg-[var(--color-bg-selected,#e8f2ff)] border-2 border-[var(--color-brand-accent,#0a7cff)] border-solid h-[62px] leading-[normal] left-[20px] not-italic rounded-[var(--radius-14,14px)] top-[134px] w-[170px] whitespace-nowrap")} data-node-id="68:3047" data-name="btn: Rápida">
          <DesignText style={designStyle("absolute font-['Inter:Semi_Bold'] font-semibold left-[12px] text-[16px] text-[color:var(--color-action-primary,#0a3d91)] top-[8px]")} data-node-id="68:3048">
            Rápida
          </DesignText>
          <DesignText style={designStyle("absolute font-['Inter:Regular'] font-normal left-[12px] text-[13px] text-[color:var(--color-text-secondary,#6e6e73)] top-[32px]")} data-node-id="68:3049">
            3 min · 0,6 km
          </DesignText>
        </DesignBox>
        <DesignBox style={designStyle("[word-break:break-word] absolute bg-[var(--color-bg-canvas,#f2f2f7)] h-[62px] leading-[normal] left-[203px] not-italic rounded-[var(--radius-14,14px)] top-[134px] w-[170px] whitespace-nowrap")} data-node-id="68:3050" data-name="btn: Otra ruta">
          <DesignText style={designStyle("absolute font-['Inter:Semi_Bold'] font-semibold left-[14px] text-[16px] text-[color:var(--color-text-primary,#1c1c1e)] top-[10px]")} data-node-id="68:3051">
            Otra ruta
          </DesignText>
          <DesignText style={designStyle("absolute font-['Inter:Regular'] font-normal left-[14px] text-[13px] text-[color:var(--color-text-secondary,#6e6e73)] top-[34px]")} data-node-id="68:3052">
            6 min · 1,0 km
          </DesignText>
        </DesignBox>
        <ArcarBoton42 className="absolute bg-[var(--color-action-primary,#0a3d91)] content-stretch cursor-pointer flex gap-[var(--space-8,8px)] h-[52px] items-center justify-center left-[20px] overflow-clip rounded-[var(--radius-14,14px)] top-[212px] w-[353px]" />
      </DesignBox>
      <IOsHomeIndicator className="absolute h-[34px] left-0 top-[818px] w-[393px]" />
      <IOsStatusBarOscura className="absolute h-[54px] left-0 top-0 w-[393px]" />
    </DesignBox>;
}
