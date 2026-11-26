// Geometry, typography and assets adapted from the team's Figma prototype.
import { Asset } from 'expo-asset';
import { designStyle, DesignText, DesignBox } from '../design-style';

const imgWifi = Asset.fromModule(require("../../../assets/prototype/817866a3f3589a23e6f1.svg")).uri;
const imgIconSend = Asset.fromModule(require("../../../assets/prototype/8735213276c33f28155f.svg")).uri;
const imgMapaMadridCentroOsm = Asset.fromModule(require("../../../assets/prototype/d56da9563042db4426a1.svg")).uri;
const imgVector = Asset.fromModule(require("../../../assets/prototype/b6938efccb9ed44ba947.svg")).uri;
const imgVector1 = Asset.fromModule(require("../../../assets/prototype/2a487f7429bc8112835a.svg")).uri;
const imgVector2 = Asset.fromModule(require("../../../assets/prototype/eb8fe25dd7ca97415c5a.svg")).uri;
const imgVector3 = Asset.fromModule(require("../../../assets/prototype/b39632378935f7434559.svg")).uri;
const imgVector4 = Asset.fromModule(require("../../../assets/prototype/de1265117a963039d83e.svg")).uri;
const imgVector5 = Asset.fromModule(require("../../../assets/prototype/84c5bc995b16170b48f3.svg")).uri;
const imgVector6 = Asset.fromModule(require("../../../assets/prototype/85fb148b2d54253a1afa.svg")).uri;
const imgVector7 = Asset.fromModule(require("../../../assets/prototype/8392b1d67586a1100def.svg")).uri;
const imgVector8 = Asset.fromModule(require("../../../assets/prototype/c99e858d352f4d174808.svg")).uri;
const imgVector9 = Asset.fromModule(require("../../../assets/prototype/6c56283ea49edfe24c50.svg")).uri;
const imgVector10 = Asset.fromModule(require("../../../assets/prototype/1441a0b43e33e54a6917.svg")).uri;
const imgVector11 = Asset.fromModule(require("../../../assets/prototype/aa201f937217fe352008.svg")).uri;
const imgVector12 = Asset.fromModule(require("../../../assets/prototype/b434685bcda4f6b66f0b.svg")).uri;
const imgPlazaLibre = Asset.fromModule(require("../../../assets/prototype/137fd025acf532f80459.svg")).uri;
const imgCar = Asset.fromModule(require("../../../assets/prototype/3f691004fd7daed9890c.svg")).uri;
const imgPlazaOcupada = Asset.fromModule(require("../../../assets/prototype/519d51a3790e40d5f69e.svg")).uri;
const imgChevLeft = Asset.fromModule(require("../../../assets/prototype/df864922381eb0b399fe.svg")).uri;
const imgHeartLine = Asset.fromModule(require("../../../assets/prototype/6f982fa80d834757479a.svg")).uri;
const imgEllipse = Asset.fromModule(require("../../../assets/prototype/e5c8382b348080c9edea.svg")).uri;
const imgIconEuro = Asset.fromModule(require("../../../assets/prototype/ec0f2f7ca370373dc54c.svg")).uri;
const imgIconClock = Asset.fromModule(require("../../../assets/prototype/d66c304df82837d2053f.svg")).uri;
const imgWalk = Asset.fromModule(require("../../../assets/prototype/96e4901feacc773b315d.svg")).uri;
const imgShield = Asset.fromModule(require("../../../assets/prototype/3fa5ce52d1fe0c62679c.svg")).uri;
const imgWheelchair = Asset.fromModule(require("../../../assets/prototype/e93fbb8a269bdaccfcce.svg")).uri;
const imgIconInfo = Asset.fromModule(require("../../../assets/prototype/e6219cd9f75bba1aaf24.svg")).uri;
const imgIconHeartLine = Asset.fromModule(require("../../../assets/prototype/59a7f015d0ce09e981d3.svg")).uri;
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
type ArcarBoton24Props = {
  className?: string;
  texto1?: string;
};
function ArcarBoton24({
  className,
  texto1 = "Cómo llegar"
}: ArcarBoton24Props) {
  return <DesignBox style={designStyle(className || "bg-[var(--color-action-primary,#0a3d91)] content-stretch flex gap-[var(--space-8,8px)] h-[52px] items-center justify-center overflow-clip relative rounded-[var(--radius-14,14px)] w-[353px]")} data-node-id="115:2753" data-name="Arcar/Botón/24">
      <DesignBox style={designStyle("relative shrink-0 size-[17px]")} data-node-id="115:2750" data-name="icon/send">
        <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconSend} />
      </DesignBox>
      <DesignText style={designStyle("[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[17px] text-[color:var(--color-text-inverse,white)] whitespace-nowrap")} data-node-id="115:2751">
        {texto1}
      </DesignText>
    </DesignBox>;
}
export default function C1MasInfo() {
  return <DesignBox style={designStyle("bg-[var(--color-bg-surface,white)] relative size-full")} data-node-id="68:2572" data-name="C1 · Más info">
      <DesignBox style={designStyle("absolute bg-[#f2f1ee] h-[340px] left-0 overflow-clip top-0 w-[393px]")} data-node-id="68:2573" data-name="mapa">
        <DesignBox style={designStyle("absolute left-[-1242.3px] overflow-clip size-[2640px] top-[-1150px]")} data-node-id="68:2574" data-name="Mapa/Madrid Centro (OSM)">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgMapaMadridCentroOsm} />
          <DesignBox style={designStyle("absolute inset-[-3.52%_-3.11%_-25.66%_-4.08%]")} data-node-id="I68:2574;2:4" data-name="Vector">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgVector} />
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-0.13%_0.13%_0.57%_2.11%]")} data-node-id="I68:2574;2:5" data-name="Vector">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgVector1} />
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[1.21%_-6.93%_1.55%_4.13%]")} data-node-id="I68:2574;2:6" data-name="Vector">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgVector2} />
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-3.46%_-2.66%_-2.36%_-5.12%]")} data-node-id="I68:2574;2:7" data-name="Vector">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgVector3} />
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-6.3%_-8.54%_-2.29%_-16.96%]")} data-node-id="I68:2574;2:8" data-name="Vector">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgVector4} />
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-1.28%_0.07%_-1.99%_-15.03%]")} data-node-id="I68:2574;2:9" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.24%_-0.22%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector5} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-21.58%_-14.42%_-19.67%_-14.6%]")} data-node-id="I68:2574;2:10" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.25%_-0.27%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector6} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-4.08%_-7.13%_-5.37%_-2.28%]")} data-node-id="I68:2574;2:11" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.46%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector7} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-3.13%_-2.14%_48.56%_-16.38%]")} data-node-id="I68:2574;2:12" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-1.11%_-0.51%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector8} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-1.28%_0.07%_-1.99%_-15.03%]")} data-node-id="I68:2574;2:13" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.18%_-0.16%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector9} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-21.58%_-14.42%_-19.67%_-14.6%]")} data-node-id="I68:2574;2:14" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.21%_-0.23%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector10} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-4.08%_-7.13%_-5.37%_-2.28%]")} data-node-id="I68:2574;2:15" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.4%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector11} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-3.13%_-2.14%_48.56%_-16.38%]")} data-node-id="I68:2574;2:16" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.95%_-0.44%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector12} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[11.94%_79.16%_79.12%_15.15%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:17">
            <DesignBox style={designStyle("flex-none h-[hypot(-18.6387cqw,6.57597cqh)] rotate-61 w-[hypot(81.3613cqw,93.424cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative text-[#6b6b70] text-[26.4px] text-center whitespace-nowrap")}>Calle de la Princesa</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[57.46%_83.77%_36.07%_14.57%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:18">
            <DesignBox style={designStyle("-rotate-85 flex-none h-[hypot(66.2318cqw,1.47908cqh)] w-[hypot(33.7682cqw,-98.5209cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[24.2px] text-center whitespace-nowrap")}>Calle de Bailén</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[88.56%_88.21%_10.33%_4.55%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:19">
            <DesignBox style={designStyle("flex-none h-[hypot(-0.0264928cqw,98.8636cqh)] rotate-[0.1deg] w-[hypot(99.9735cqw,1.13645cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[24.2px] text-center whitespace-nowrap")}>Calle de Segovia</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[53.22%_15.54%_44.45%_80.6%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:20">
            <DesignBox style={designStyle("flex-none h-[hypot(-10.0095cqw,44.049cqh)] rotate-[20.6deg] w-[hypot(89.9905cqw,55.951cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[24.2px] text-center whitespace-nowrap")}>Gran Vía</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[91.39%_23.5%_4.43%_69.97%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:21">
            <DesignBox style={designStyle("flex-none h-[hypot(-7.92112cqw,23.1794cqh)] rotate-[28.1deg] w-[hypot(92.0789cqw,76.8206cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[24.2px] text-center whitespace-nowrap")}>Calle de Atocha</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[35.07%_19.55%_57.43%_75.56%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:22">
            <DesignBox style={designStyle("flex-none h-[hypot(19.5447cqw,7.21498cqh)] rotate-[-60.5deg] w-[hypot(80.4553cqw,-92.785cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[24.2px] text-center whitespace-nowrap")}>Calle de Hortaleza</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[7.88%_18.61%_88.17%_74.53%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:23">
            <DesignBox style={designStyle("flex-none h-[hypot(6.7201cqw,25.2297cqh)] rotate-[-24.8deg] w-[hypot(93.2799cqw,-74.7703cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[24.2px] text-center whitespace-nowrap")}>Calle de Barceló</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[72.98%_48.74%_25.26%_46.5%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:24">
            <DesignBox style={designStyle("flex-none h-[hypot(3.43326cqw,57.5427cqh)] rotate-[-9.2deg] w-[hypot(96.5667cqw,-42.4573cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle Mayor</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[47.94%_67.63%_47.35%_27.1%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:25">
            <DesignBox style={designStyle("flex-none h-[hypot(12.597cqw,16.4983cqh)] rotate-[-40.5deg] w-[hypot(87.403cqw,-83.5017cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle de la Bola</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[84.66%_15.74%_9.72%_81.59%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:26">
            <DesignBox style={designStyle("flex-none h-[hypot(36.5291cqw,5.53719cqh)] rotate-[-72.3deg] w-[hypot(63.4709cqw,-94.4628cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle del León</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[57.56%_22.44%_41.26%_69.4%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:27">
            <DesignBox style={designStyle("flex-none h-[hypot(-0.240549cqw,86.738cqh)] rotate-[1.1deg] w-[hypot(99.7595cqw,13.262cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle de los Jardines</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[40.57%_31.19%_52.53%_66.12%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:28">
            <DesignBox style={designStyle("flex-none h-[hypot(36.9174cqw,3.66305cqh)] rotate-[-75.7deg] w-[hypot(63.0826cqw,-96.337cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle de Valverde</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[28.74%_1.45%_64.18%_97.21%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:29">
            <DesignBox style={designStyle("flex-none h-[hypot(76.1718cqw,0.654857cqh)] rotate-[-87.4deg] w-[hypot(23.8282cqw,-99.3451cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle del Barquillo</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[48.94%_17.24%_47.77%_76.31%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:30">
            <DesignBox style={designStyle("flex-none h-[hypot(-5.68331cqw,29.0246cqh)] rotate-21 w-[hypot(94.3167cqw,70.9754cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle de la Reina</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[90.17%_36.27%_2.74%_60.56%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:31">
            <DesignBox style={designStyle("-rotate-72 flex-none h-[hypot(30.6522cqw,4.45836cqh)] w-[hypot(69.3478cqw,-95.5416cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle de Relatores</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[70.82%_6.28%_27.7%_87.52%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:32">
            <DesignBox style={designStyle("flex-none h-[hypot(1.23766cqw,68.9112cqh)] rotate-[-4.3deg] w-[hypot(98.7623cqw,-31.0888cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle de Zorrilla</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[97.42%_4.4%_0.57%_89.08%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:33">
            <DesignBox style={designStyle("flex-none h-[hypot(2.42675cqw,50.3531cqh)] rotate-[-8.9deg] w-[hypot(97.5732cqw,-49.6469cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle de Moratín</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[73.86%_23.16%_19.26%_75.3%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:34">
            <DesignBox style={designStyle("flex-none h-[hypot(-66.6103cqw,1.11528cqh)] rotate-[85.7deg] w-[hypot(33.3897cqw,98.8847cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle del Príncipe</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[80.01%_9.89%_16.71%_84.2%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:35">
            <DesignBox style={designStyle("-rotate-23 flex-none h-[hypot(6.76311cqw,28.7029cqh)] w-[hypot(93.2369cqw,-71.2971cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle del Prado</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[41.44%_9.91%_50.87%_88.77%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:36">
            <DesignBox style={designStyle("flex-none h-[hypot(77.6754cqw,0.51086cqh)] rotate-[-87.8deg] w-[hypot(22.3246cqw,-99.4891cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle de la Libertad</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[81.21%_7.67%_10.6%_90.86%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:37">
            <DesignBox style={designStyle("flex-none h-[hypot(69.1946cqw,0.697214cqh)] rotate-[-86.8deg] w-[hypot(30.8054cqw,-99.3028cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle de San Agustín</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[85.99%_6.59%_12.95%_87.15%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:38">
            <DesignBox style={designStyle("flex-none h-[hypot(-0.114111cqw,95.9081cqh)] rotate-[0.4deg] w-[hypot(99.8859cqw,4.09185cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle Cervantes</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[11.34%_39.44%_86.75%_53.74%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:39">
            <DesignBox style={designStyle("flex-none h-[hypot(-1.98377cqw,53.2017cqh)] rotate-[7.6deg] w-[hypot(98.0162cqw,46.7983cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle de la Palma</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[14.65%_36.34%_82.92%_52.9%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:40">
            <DesignBox style={designStyle("flex-none h-[hypot(-1.25699cqw,41.6922cqh)] rotate-[7.6deg] w-[hypot(98.743cqw,58.3078cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle de San Vicente Ferrer</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[1.85%_40.8%_95.02%_50.35%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:41">
            <DesignBox style={designStyle("flex-none h-[hypot(-2.77621cqw,31.7987cqh)] rotate-[13.9deg] w-[hypot(97.2238cqw,68.2013cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle del Divino Pastor</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[5.41%_70.02%_88.55%_27.1%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:42">
            <DesignBox style={designStyle("flex-none h-[hypot(33.6656cqw,5.37633cqh)] rotate-[-71.5deg] w-[hypot(66.3344cqw,-94.6237cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle del Limón</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[1.81%_59.53%_96.65%_32.66%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:43">
            <DesignBox style={designStyle("flex-none h-[hypot(0.867213cqw,66.4761cqh)] rotate-[-3.8deg] w-[hypot(99.1328cqw,-33.5239cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle de Montserrat</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[9.38%_55.92%_84.79%_40.79%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:44">
            <DesignBox style={designStyle("flex-none h-[hypot(28.4718cqw,6.99889cqh)] rotate-[-66.5deg] w-[hypot(71.5282cqw,-93.0011cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle del Norte</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[29.35%_48.63%_64.79%_47.31%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:45">
            <DesignBox style={designStyle("flex-none h-[hypot(21.6409cqw,8.93707cqh)] rotate-[-59.2deg] w-[hypot(78.3591cqw,-91.0629cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle de Pizarro</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[17.92%_53.11%_76.22%_45.74%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:46">
            <DesignBox style={designStyle("flex-none h-[hypot(-89.3275cqw,0.365909cqh)] rotate-[88.8deg] w-[hypot(10.6725cqw,99.6341cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle de Pozas</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[37.37%_89.61%_58.49%_5.35%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:47">
            <DesignBox style={designStyle("flex-none h-[hypot(-12.1922cqw,19.7629cqh)] rotate-[36.9deg] w-[hypot(87.8078cqw,80.2371cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle Cadarso</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[3.11%_70.64%_88.37%_24.41%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:48">
            <DesignBox style={designStyle("flex-none h-[hypot(18.4702cqw,5.37554cqh)] rotate-[-63.4deg] w-[hypot(81.5298cqw,-94.6245cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle del Conde Duque</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[4.36%_66.07%_89.02%_32.31%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:49">
            <DesignBox style={designStyle("flex-none h-[hypot(-63.1664cqw,1.40045cqh)] rotate-[84.8deg] w-[hypot(36.8336cqw,98.5995cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle de Amaniel</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[39.42%_74.96%_55.11%_21.74%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:50">
            <DesignBox style={designStyle("flex-none h-[hypot(-27.9832cqw,7.98862cqh)] rotate-[64.7deg] w-[hypot(72.0168cqw,92.0114cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle del Reloj</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[11.26%_91.87%_77.37%_-0.42%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:51">
            <DesignBox style={designStyle("flex-none h-[hypot(-9.72709cqw,5.23383cqh)] rotate-[54.4deg] w-[hypot(90.2729cqw,94.7662cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle de Juan Álvarez Mendizábal</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[15.91%_17.82%_79.32%_75.08%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:52">
            <DesignBox style={designStyle("flex-none h-[hypot(7.32574cqw,18.4348cqh)] rotate-[-30.6deg] w-[hypot(92.6743cqw,-81.5652cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle de San Mateo</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[-2.99%_45.25%_95.31%_52.57%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:53">
            <DesignBox style={designStyle("flex-none h-[hypot(46.4585cqw,2.03715cqh)] rotate-[-81.2deg] w-[hypot(53.5415cqw,-97.9628cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle de Monteleón</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[8.73%_31.94%_89.46%_61.58%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:54">
            <DesignBox style={designStyle("flex-none h-[hypot(-1.95113cqw,56.1914cqh)] rotate-[7.1deg] w-[hypot(98.0489cqw,43.8086cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle de Velarde</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[1.43%_25.29%_91.49%_71.71%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:55">
            <DesignBox style={designStyle("flex-none h-[hypot(-32.6295cqw,4.12668cqh)] rotate-[73.4deg] w-[hypot(67.3705cqw,95.8733cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle de Churruca</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[5.55%_21.6%_92.86%_71.41%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:56">
            <DesignBox style={designStyle("flex-none h-[hypot(1.19847cqw,64.2164cqh)] rotate-[-4.7deg] w-[hypot(98.8015cqw,-35.7836cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle de Apodaca</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[1.84%_21.86%_92.6%_75.6%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:57">
            <DesignBox style={designStyle("flex-none h-[hypot(-38.5985cqw,5.22737cqh)] rotate-[73.5deg] w-[hypot(61.4015cqw,94.7726cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle de Larra</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[34.53%_33.89%_59.47%_63.91%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:58">
            <DesignBox style={designStyle("flex-none h-[hypot(45.5266cqw,3.46023cqh)] rotate-[-78.3deg] w-[hypot(54.4734cqw,-96.5398cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle del Barco</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[9.31%_-0.66%_83.34%_95.1%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:59">
            <DesignBox style={designStyle("flex-none h-[hypot(15.0772cqw,7.95297cqh)] rotate-[-55.1deg] w-[hypot(84.9228cqw,-92.047cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle de Campoamor</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[39.68%_13.94%_56.21%_78.24%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:60">
            <DesignBox style={designStyle("flex-none h-[hypot(-5.153cqw,22.8249cqh)] rotate-[23.2deg] w-[hypot(94.847cqw,77.1751cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle de San Marcos</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[24.84%_35.16%_70.9%_57.72%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:61">
            <DesignBox style={designStyle("flex-none h-[hypot(-6.44867cqw,21.4149cqh)] rotate-[26.7deg] w-[hypot(93.5513cqw,78.5851cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle de El Escorial</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[20.49%_38.96%_72.57%_53.43%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:62">
            <DesignBox style={designStyle("flex-none h-[hypot(8.94093cqw,11.0075cqh)] rotate-[-41.7deg] w-[hypot(91.0591cqw,-88.9925cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle de Jesús del Valle</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[24.1%_38.98%_69.38%_55.83%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:63">
            <DesignBox style={designStyle("flex-none h-[hypot(15.8309cqw,9.33688cqh)] rotate-[-53.5deg] w-[hypot(84.1691cqw,-90.6631cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle de la Madera</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[31.8%_14.04%_62.37%_82.21%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:64">
            <DesignBox style={designStyle("-rotate-62 flex-none h-[hypot(24.0913cqw,8.23381cqh)] w-[hypot(75.9087cqw,-91.7662cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle de Pelayo</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[27.75%_0.59%_70.58%_91.85%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:65">
            <DesignBox style={designStyle("flex-none h-[hypot(-1.17896cqw,60.9168cqh)] rotate-5 w-[hypot(98.821cqw,39.0832cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle de San Lucas</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[66.26%_97.86%_26.56%_0.51%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:66">
            <DesignBox style={designStyle("flex-none h-[hypot(62.6199cqw,1.21626cqh)] rotate-[-85.1deg] w-[hypot(37.3801cqw,-98.7837cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Paseo de Felipe III</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[51.97%_96.65%_40.92%_1.74%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:67">
            <DesignBox style={designStyle("flex-none h-[hypot(63.3522cqw,1.20427cqh)] rotate-[-85.2deg] w-[hypot(36.6478cqw,-98.7957cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Paseo de Felipe V</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[59.16%_43.45%_34.95%_52.86%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:68">
            <DesignBox style={designStyle("flex-none h-[hypot(-24.6828cqw,7.90348cqh)] rotate-[62.9deg] w-[hypot(75.3172cqw,92.0965cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle Preciados</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[65.3%_55.25%_31.65%_38.63%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:69">
            <DesignBox style={designStyle("flex-none h-[hypot(-5.66071cqw,31.6442cqh)] rotate-[19.8deg] w-[hypot(94.3393cqw,68.3558cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle del Arenal</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[65.24%_22.64%_31.75%_71.58%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2574;2:70">
            <DesignBox style={designStyle("flex-none h-[hypot(6.28235cqw,31.7202cqh)] rotate-[-20.8deg] w-[hypot(93.7176cqw,-68.2798cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[22px] text-center whitespace-nowrap")}>Calle de Alcalá</DesignText>
            </DesignBox>
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute left-[128.7px] size-[30px] top-[133px]")} data-node-id="68:2575" data-name="plaza libre">
          <DesignBox style={designStyle("absolute inset-[-13.33%_-20%_-26.67%_-20%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgPlazaLibre} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute left-[135.7px] size-[16px] top-[140px]")} data-node-id="68:2576" data-name="car">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgCar} />
        </DesignBox>
        <DesignBox style={designStyle("absolute left-[229.9px] size-[30px] top-[128.6px]")} data-node-id="68:2577" data-name="plaza libre">
          <DesignBox style={designStyle("absolute inset-[-13.33%_-20%_-26.67%_-20%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgPlazaLibre} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute left-[236.9px] size-[16px] top-[135.6px]")} data-node-id="68:2578" data-name="car">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgCar} />
        </DesignBox>
        <DesignBox style={designStyle("absolute left-[155.7px] size-[20px] top-[215px]")} data-node-id="68:2579" data-name="plaza ocupada">
          <DesignBox style={designStyle("absolute inset-[-15%_-20%_-25%_-20%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgPlazaOcupada} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute bg-[var(--color-action-primary,#0a3d91)] border-3 border-[var(--color-bg-surface,white)] border-solid drop-shadow-[0px_3px_4px_rgba(0,0,0,0.3)] left-[172.5px] rounded-[13.44px] size-[48px] top-[172.4px]")} data-node-id="68:2580" data-name="parking">
          <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[21px] not-italic text-[27px] text-[color:var(--color-text-inverse,white)] text-center top-[4.5px] w-[48px]")} data-node-id="68:2581">
            P
          </DesignText>
        </DesignBox>
      </DesignBox>
      <button style={designStyle("absolute bg-[rgba(255,255,255,0.96)] block cursor-pointer drop-shadow-[0px_2px_5px_rgba(0,0,0,0.15)] left-[16px] rounded-[var(--radius-20,20px)] size-[40px] top-[56px]")} data-node-id="68:2582" data-name="back">
        <DesignBox style={designStyle("absolute left-[10px] size-[20px] top-[10px]")} data-node-id="68:2583" data-name="chev-left">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgChevLeft} />
        </DesignBox>
      </button>
      <DesignBox style={designStyle("absolute bg-[rgba(255,255,255,0.96)] block cursor-pointer drop-shadow-[0px_2px_5px_rgba(0,0,0,0.15)] left-[calc(75%+42.25px)] rounded-[var(--radius-20,20px)] size-[40px] top-[56px]")} data-node-id="68:2584" data-name="btn: favorito">
        <DesignBox style={designStyle("absolute left-[10px] size-[20px] top-[10px]")} data-node-id="68:2585" data-name="heart-line">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgHeartLine} />
        </DesignBox>
      </DesignBox>
      <DesignBox style={designStyle("absolute bg-[var(--color-bg-surface,white)] drop-shadow-[0px_-4px_12px_rgba(0,0,0,0.14)] h-[552px] left-0 rounded-tl-[24px] rounded-tr-[24px] top-[300px] w-[393px]")} data-node-id="68:2586" data-name="hoja inferior">
        <DesignBox style={designStyle("absolute bg-[var(--color-border-default,#e5e5ea)] h-[5px] left-[178.5px] rounded-[3px] top-[8px] w-[36px]")} data-node-id="68:2587" data-name="grabber" />
        <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[20px] not-italic text-[28px] text-[color:var(--color-text-primary,#1c1c1e)] top-[28px] tracking-[-0.42px] whitespace-nowrap")} data-node-id="68:2588">
          Parking Gran Vía
        </DesignText>
        <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[20px] not-italic text-[15px] text-[color:var(--color-text-secondary,#6e6e73)] top-[66px] whitespace-nowrap")} data-node-id="68:2589">
          Calle Gran Vía, 28 · a 400 m
        </DesignText>
        <DesignBox style={designStyle("absolute bg-[var(--color-status-available-bg,#e3f7e8)] content-stretch flex gap-[6px] h-[30px] items-center left-[20px] overflow-clip px-[var(--space-12,12px)] rounded-[15px] top-[98px]")} data-node-id="68:2590" data-name="chip: 12 libres">
          <DesignBox style={designStyle("relative shrink-0 size-[8px]")} data-node-id="68:2591" data-name="Ellipse">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgEllipse} />
          </DesignBox>
          <DesignText style={designStyle("[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-[color:var(--color-status-available-text,#1b6e32)] whitespace-nowrap")} data-node-id="68:2592">
            12 libres
          </DesignText>
        </DesignBox>
        <DesignBox style={designStyle("absolute bg-[#eeeef0] content-stretch flex gap-[6px] h-[30px] items-center left-[123px] overflow-clip px-[var(--space-12,12px)] rounded-[15px] top-[98px]")} data-node-id="68:2593" data-name="chip: 2,50 €/h">
          <DesignBox style={designStyle("relative shrink-0 size-[14px]")} data-node-id="68:2594" data-name="icon/euro">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconEuro} />
          </DesignBox>
          <DesignText style={designStyle("[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-[color:var(--color-text-primary,#1c1c1e)] whitespace-nowrap")} data-node-id="68:2595">
            2,50 €/h
          </DesignText>
        </DesignBox>
        <DesignBox style={designStyle("absolute bg-[#eeeef0] content-stretch flex gap-[6px] h-[30px] items-center left-[233px] overflow-clip px-[var(--space-12,12px)] rounded-[15px] top-[98px]")} data-node-id="68:2596" data-name="chip: Abierto 24 h">
          <DesignBox style={designStyle("relative shrink-0 size-[14px]")} data-node-id="68:2597" data-name="icon/clock">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconClock} />
          </DesignBox>
          <DesignText style={designStyle("[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-[color:var(--color-text-primary,#1c1c1e)] whitespace-nowrap")} data-node-id="68:2598">
            Abierto 24 h
          </DesignText>
        </DesignBox>
        <DesignBox style={designStyle("absolute bg-[#c6c6c8] h-[0.5px] left-[20px] top-[146px] w-[353px]")} data-node-id="68:2599" data-name="Rectangle" />
        <DesignBox style={designStyle("absolute left-[20px] size-[22px] top-[162px]")} data-node-id="68:2600" data-name="walk">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgWalk} />
        </DesignBox>
        <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[54px] not-italic text-[17px] text-[color:var(--color-text-primary,#1c1c1e)] top-[162px] whitespace-nowrap")} data-node-id="68:2601">
          5 min a pie hasta tu destino
        </DesignText>
        <DesignBox style={designStyle("absolute left-[20px] size-[22px] top-[202px]")} data-node-id="68:2602" data-name="shield">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgShield} />
        </DesignBox>
        <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[54px] not-italic text-[17px] text-[color:var(--color-text-primary,#1c1c1e)] top-[202px] whitespace-nowrap")} data-node-id="68:2603">
          Vigilancia 24 h
        </DesignText>
        <DesignBox style={designStyle("absolute left-[20px] size-[22px] top-[242px]")} data-node-id="68:2604" data-name="wheelchair">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgWheelchair} />
        </DesignBox>
        <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[54px] not-italic text-[17px] text-[color:var(--color-text-primary,#1c1c1e)] top-[242px] whitespace-nowrap")} data-node-id="68:2605">
          Acceso adaptado
        </DesignText>
        <DesignBox style={designStyle("absolute bg-[var(--color-bg-canvas,#f2f2f7)] h-[70px] left-[20px] rounded-[var(--radius-16,16px)] top-[290px] w-[353px]")} data-node-id="68:2606" data-name="ocupación">
          <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[normal] left-[16px] not-italic text-[15px] text-[color:var(--color-text-primary,#1c1c1e)] top-[14px] whitespace-nowrap")} data-node-id="68:2607">
            Ocupación ahora
          </DesignText>
          <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[normal] left-[300px] not-italic text-[#c93400] text-[15px] top-[14px] whitespace-nowrap")} data-node-id="68:2608">
            84 %
          </DesignText>
          <DesignBox style={designStyle("absolute bg-[#e0e0e5] h-[8px] left-[16px] rounded-[4px] top-[44px] w-[321px]")} data-node-id="68:2609" data-name="barra">
            <DesignBox style={designStyle("absolute bg-[var(--color-status-warning,#ff9500)] h-[8px] left-0 rounded-[4px] top-0 w-[270px]")} data-node-id="68:2610" data-name="nivel" />
          </DesignBox>
        </DesignBox>
        <ArcarBoton24 className="absolute bg-[var(--color-action-primary,#0a3d91)] content-stretch cursor-pointer flex gap-[var(--space-8,8px)] h-[52px] items-center justify-center left-[20px] overflow-clip rounded-[var(--radius-14,14px)] top-[380px] w-[353px]" />
        <DesignBox style={designStyle("absolute bg-[var(--color-bg-selected,#e8f2ff)] content-stretch flex gap-[var(--space-8,8px)] h-[52px] items-center justify-center left-[20px] overflow-clip rounded-[var(--radius-14,14px)] top-[444px] w-[170px]")} data-node-id="68:2614" data-name="btn: Más información">
          <DesignBox style={designStyle("relative shrink-0 size-[17px]")} data-node-id="68:2615" data-name="icon/info">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconInfo} />
          </DesignBox>
          <DesignText style={designStyle("[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[17px] text-[color:var(--color-action-primary,#0a3d91)] whitespace-nowrap")} data-node-id="68:2616">
            Más info
          </DesignText>
        </DesignBox>
        <DesignBox style={designStyle("absolute bg-[var(--color-bg-selected,#e8f2ff)] content-stretch cursor-pointer flex gap-[var(--space-8,8px)] h-[52px] items-center justify-center left-[203px] overflow-clip rounded-[var(--radius-14,14px)] top-[444px] w-[170px]")} data-node-id="68:2617" data-name="btn: Guardar en favoritos">
          <DesignBox style={designStyle("relative shrink-0 size-[17px]")} data-node-id="68:2618" data-name="icon/heart-line">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconHeartLine} />
          </DesignBox>
          <DesignText style={designStyle("[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[17px] text-[color:var(--color-action-primary,#0a3d91)] text-left whitespace-nowrap")} data-node-id="68:2619">
            Guardar
          </DesignText>
        </DesignBox>
      </DesignBox>
      <IOsHomeIndicator className="absolute h-[34px] left-0 top-[818px] w-[393px]" />
      <IOsStatusBarOscura className="absolute h-[54px] left-0 top-0 w-[393px]" />
    </DesignBox>;
}
