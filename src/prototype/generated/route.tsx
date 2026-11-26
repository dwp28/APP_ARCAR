// Geometry, typography and assets adapted from the team's Figma prototype.
import { Asset } from 'expo-asset';
import { designStyle, DesignText, DesignBox } from '../design-style';

const imgWifi = Asset.fromModule(require("../../../assets/prototype/817866a3f3589a23e6f1.svg")).uri;
const imgIconFlag = Asset.fromModule(require("../../../assets/prototype/bab8ea47dd8de210ca25.svg")).uri;
const imgMapaMadridCentroOsm = Asset.fromModule(require("../../../assets/prototype/95e0922c3d17b6690f57.svg")).uri;
const imgVector = Asset.fromModule(require("../../../assets/prototype/61115d3c27b74143609e.svg")).uri;
const imgVector1 = Asset.fromModule(require("../../../assets/prototype/2908c39311abb54f278b.svg")).uri;
const imgVector2 = Asset.fromModule(require("../../../assets/prototype/b8a3722fa41acea4b0d7.svg")).uri;
const imgVector3 = Asset.fromModule(require("../../../assets/prototype/cca8ea435f785970e147.svg")).uri;
const imgVector4 = Asset.fromModule(require("../../../assets/prototype/e9ec98cd2bd0cf7b7e3d.svg")).uri;
const imgVector5 = Asset.fromModule(require("../../../assets/prototype/a07fc7471b5b4307cedc.svg")).uri;
const imgVector6 = Asset.fromModule(require("../../../assets/prototype/11fe96ee0fc44ba5bf8b.svg")).uri;
const imgVector7 = Asset.fromModule(require("../../../assets/prototype/f9b52ed40c39cb8acdfd.svg")).uri;
const imgVector8 = Asset.fromModule(require("../../../assets/prototype/4678364ccb66f915bff1.svg")).uri;
const imgVector9 = Asset.fromModule(require("../../../assets/prototype/c5d01f01a211563c1e0d.svg")).uri;
const imgVector10 = Asset.fromModule(require("../../../assets/prototype/d54b47b8499d78e2062f.svg")).uri;
const imgVector11 = Asset.fromModule(require("../../../assets/prototype/6df4b21c69d7fd639281.svg")).uri;
const imgVector12 = Asset.fromModule(require("../../../assets/prototype/47a20bba5149f44710d6.svg")).uri;
const imgRuta = Asset.fromModule(require("../../../assets/prototype/79629dc5d23cc0430186.svg")).uri;
const imgRuta1 = Asset.fromModule(require("../../../assets/prototype/59d2a71951f226783a62.svg")).uri;
const imgRuta2 = Asset.fromModule(require("../../../assets/prototype/756670127ad04f408af3.svg")).uri;
const imgPlazaLibre = Asset.fromModule(require("../../../assets/prototype/1ad6faf9337ae3545ebd.svg")).uri;
const imgCar = Asset.fromModule(require("../../../assets/prototype/3f691004fd7daed9890c.svg")).uri;
const imgPlazaOcupada = Asset.fromModule(require("../../../assets/prototype/697a21581dbbc6500ba1.svg")).uri;
const imgPrecision = Asset.fromModule(require("../../../assets/prototype/df6e8405b0f9e07e8fd6.svg")).uri;
const imgLocation = Asset.fromModule(require("../../../assets/prototype/07e519c9f3b2b9ee0b9f.svg")).uri;
const imgTurnRight = Asset.fromModule(require("../../../assets/prototype/7dd60841a3646976fb46.svg")).uri;
const imgIconTurnRight = Asset.fromModule(require("../../../assets/prototype/4bc6065a8b8904ba4d64.svg")).uri;
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
type ArcarBoton26Props = {
  className?: string;
  texto1?: string;
};
function ArcarBoton26({
  className,
  texto1 = "He llegado"
}: ArcarBoton26Props) {
  return <DesignBox style={designStyle(className || "bg-[var(--color-action-primary,#0a3d91)] content-stretch flex gap-[var(--space-8,8px)] h-[52px] items-center justify-center overflow-clip relative rounded-[var(--radius-14,14px)] w-[353px]")} data-node-id="115:2804" data-name="Arcar/Botón/26">
      <DesignBox style={designStyle("relative shrink-0 size-[17px]")} data-node-id="115:2800" data-name="icon/flag">
        <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconFlag} />
      </DesignBox>
      <DesignText style={designStyle("[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[17px] text-[color:var(--color-text-inverse,white)] whitespace-nowrap")} data-node-id="115:2801">
        {texto1}
      </DesignText>
    </DesignBox>;
}
export default function C2MapaRuta() {
  return <DesignBox style={designStyle("bg-[var(--color-bg-surface,white)] relative size-full")} data-node-id="68:2642" data-name="C2 · Mapa ruta">
      <DesignBox style={designStyle("absolute bg-[#f2f1ee] h-[852px] left-0 overflow-clip top-0 w-[393px]")} data-node-id="68:2643" data-name="mapa">
        <DesignBox style={designStyle("absolute left-[-507.8px] overflow-clip size-[1560px] top-[-325.4px]")} data-node-id="68:2644" data-name="Mapa/Madrid Centro (OSM)">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgMapaMadridCentroOsm} />
          <DesignBox style={designStyle("absolute inset-[-3.52%_-3.11%_-25.66%_-4.08%]")} data-node-id="I68:2644;2:4" data-name="Vector">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgVector} />
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-0.13%_0.13%_0.57%_2.11%]")} data-node-id="I68:2644;2:5" data-name="Vector">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgVector1} />
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[1.21%_-6.93%_1.55%_4.13%]")} data-node-id="I68:2644;2:6" data-name="Vector">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgVector2} />
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-3.46%_-2.66%_-2.36%_-5.12%]")} data-node-id="I68:2644;2:7" data-name="Vector">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgVector3} />
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-6.3%_-8.54%_-2.29%_-16.96%]")} data-node-id="I68:2644;2:8" data-name="Vector">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgVector4} />
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-1.28%_0.08%_-1.99%_-15.02%]")} data-node-id="I68:2644;2:9" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.24%_-0.22%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector5} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-21.58%_-14.42%_-19.67%_-14.6%]")} data-node-id="I68:2644;2:10" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.25%_-0.27%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector6} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-4.08%_-7.13%_-5.37%_-2.27%]")} data-node-id="I68:2644;2:11" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.46%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector7} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-3.13%_-2.14%_48.56%_-16.37%]")} data-node-id="I68:2644;2:12" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-1.11%_-0.51%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector8} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-1.28%_0.08%_-1.99%_-15.02%]")} data-node-id="I68:2644;2:13" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.18%_-0.16%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector9} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-21.58%_-14.42%_-19.67%_-14.6%]")} data-node-id="I68:2644;2:14" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.21%_-0.23%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector10} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-4.08%_-7.13%_-5.37%_-2.27%]")} data-node-id="I68:2644;2:15" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.4%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector11} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={designStyle("absolute inset-[-3.13%_-2.14%_48.56%_-16.37%]")} data-node-id="I68:2644;2:16" data-name="Vector">
            <DesignBox style={designStyle("absolute inset-[-0.95%_-0.44%]")}>
              <img alt="" style={designStyle("block max-w-none size-full")} src={imgVector12} />
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[11.94%_79.16%_79.11%_15.14%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:17">
            <DesignBox style={designStyle("flex-none h-[hypot(-18.7023cqw,6.60174cqh)] rotate-61 w-[hypot(81.2977cqw,93.3983cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative text-[#6b6b70] text-[15.6px] text-center whitespace-nowrap")}>Calle de la Princesa</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[57.45%_83.78%_36.07%_14.57%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:18">
            <DesignBox style={designStyle("-rotate-85 flex-none h-[hypot(66.0223cqw,1.46551cqh)] w-[hypot(33.9777cqw,-98.5345cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[14.3px] text-center whitespace-nowrap")}>Calle de Bailén</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[88.56%_88.2%_10.34%_4.55%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:19">
            <DesignBox style={designStyle("flex-none h-[hypot(-0.0262503cqw,98.8532cqh)] rotate-[0.1deg] w-[hypot(99.9737cqw,1.14683cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[14.3px] text-center whitespace-nowrap")}>Calle de Segovia</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[53.22%_15.54%_44.46%_80.6%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:20">
            <DesignBox style={designStyle("flex-none h-[hypot(-9.92373cqw,43.8136cqh)] rotate-[20.6deg] w-[hypot(90.0763cqw,56.1864cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[14.3px] text-center whitespace-nowrap")}>Gran Vía</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[91.39%_23.47%_4.42%_69.97%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:21">
            <DesignBox style={designStyle("flex-none h-[hypot(-7.81993cqw,22.9319cqh)] rotate-[28.1deg] w-[hypot(92.1801cqw,77.0681cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[14.3px] text-center whitespace-nowrap")}>Calle de Atocha</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[35.06%_19.55%_57.43%_75.56%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:22">
            <DesignBox style={designStyle("flex-none h-[hypot(19.3795cqw,7.14476cqh)] rotate-[-60.5deg] w-[hypot(80.6205cqw,-92.8552cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[14.3px] text-center whitespace-nowrap")}>Calle de Hortaleza</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[7.88%_18.61%_88.17%_74.53%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:23">
            <DesignBox style={designStyle("flex-none h-[hypot(6.66505cqw,25.0637cqh)] rotate-[-24.8deg] w-[hypot(93.3349cqw,-74.9363cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[14.3px] text-center whitespace-nowrap")}>Calle de Barceló</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[72.98%_48.72%_25.26%_46.5%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:24">
            <DesignBox style={designStyle("flex-none h-[hypot(3.42821cqw,57.5055cqh)] rotate-[-9.2deg] w-[hypot(96.5718cqw,-42.4945cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle Mayor</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[47.92%_67.61%_47.35%_27.1%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:25">
            <DesignBox style={designStyle("flex-none h-[hypot(12.5756cqw,16.4715cqh)] rotate-[-40.5deg] w-[hypot(87.4244cqw,-83.5285cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle de la Bola</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[84.65%_15.74%_9.72%_81.59%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:26">
            <DesignBox style={designStyle("flex-none h-[hypot(36.5587cqw,5.54387cqh)] rotate-[-72.3deg] w-[hypot(63.4413cqw,-94.4561cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle del León</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[57.56%_22.44%_41.25%_69.4%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:27">
            <DesignBox style={designStyle("flex-none h-[hypot(-0.241318cqw,86.7748cqh)] rotate-[1.1deg] w-[hypot(99.7587cqw,13.2252cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle de los Jardines</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[40.61%_31.2%_52.49%_66.11%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:28">
            <DesignBox style={designStyle("flex-none h-[hypot(36.9737cqw,3.6716cqh)] rotate-[-75.7deg] w-[hypot(63.0263cqw,-96.3284cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle de Valverde</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[28.73%_1.45%_64.18%_97.21%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:29">
            <DesignBox style={designStyle("flex-none h-[hypot(76.2084cqw,0.656171cqh)] rotate-[-87.4deg] w-[hypot(23.7916cqw,-99.3438cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle del Barquillo</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[48.93%_17.24%_47.77%_76.29%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:30">
            <DesignBox style={designStyle("flex-none h-[hypot(-5.67942cqw,29.0096cqh)] rotate-21 w-[hypot(94.3206cqw,70.9904cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle de la Reina</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[90.17%_36.27%_2.68%_60.54%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:31">
            <DesignBox style={designStyle("-rotate-72 flex-none h-[hypot(30.5396cqw,4.43581cqh)] w-[hypot(69.4604cqw,-95.5642cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle de Relatores</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[70.81%_6.27%_27.7%_87.52%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:32">
            <DesignBox style={designStyle("flex-none h-[hypot(1.23766cqw,68.9112cqh)] rotate-[-4.3deg] w-[hypot(98.7623cqw,-31.0888cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle de Zorrilla</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[97.42%_4.37%_0.57%_89.08%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:33">
            <DesignBox style={designStyle("flex-none h-[hypot(2.42068cqw,50.2889cqh)] rotate-[-8.9deg] w-[hypot(97.5793cqw,-49.7111cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle de Moratín</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[73.86%_23.16%_19.22%_75.3%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:34">
            <DesignBox style={designStyle("flex-none h-[hypot(-66.5409cqw,1.11184cqh)] rotate-[85.7deg] w-[hypot(33.4591cqw,98.8882cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle del Príncipe</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[80.02%_9.91%_16.71%_84.2%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:35">
            <DesignBox style={designStyle("-rotate-23 flex-none h-[hypot(6.80578cqw,28.8412cqh)] w-[hypot(93.1942cqw,-71.1588cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle del Prado</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[41.47%_9.91%_50.87%_88.77%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:36">
            <DesignBox style={designStyle("flex-none h-[hypot(77.7774cqw,0.513865cqh)] rotate-[-87.8deg] w-[hypot(22.2226cqw,-99.4861cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle de la Libertad</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[81.21%_7.66%_10.6%_90.86%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:37">
            <DesignBox style={designStyle("flex-none h-[hypot(69.2629cqw,0.699435cqh)] rotate-[-86.8deg] w-[hypot(30.7371cqw,-99.3006cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle de San Agustín</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[85.99%_6.63%_12.94%_87.08%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:38">
            <DesignBox style={designStyle("flex-none h-[hypot(-0.113853cqw,95.8992cqh)] rotate-[0.4deg] w-[hypot(99.8861cqw,4.10077cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle Cervantes</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[11.34%_39.46%_86.75%_53.74%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:39">
            <DesignBox style={designStyle("flex-none h-[hypot(-1.99268cqw,53.3156cqh)] rotate-[7.6deg] w-[hypot(98.0073cqw,46.6844cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle de la Palma</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[14.64%_36.36%_82.92%_52.83%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:40">
            <DesignBox style={designStyle("flex-none h-[hypot(-1.2548cqw,41.6493cqh)] rotate-[7.6deg] w-[hypot(98.7452cqw,58.3507cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle de San Vicente Ferrer</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[1.85%_40.82%_95.03%_50.35%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:41">
            <DesignBox style={designStyle("flex-none h-[hypot(-2.78924cqw,31.9033cqh)] rotate-[13.9deg] w-[hypot(97.2108cqw,68.0967cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle del Divino Pastor</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[5.45%_70.03%_88.51%_27.09%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:42">
            <DesignBox style={designStyle("flex-none h-[hypot(33.7183cqw,5.38836cqh)] rotate-[-71.5deg] w-[hypot(66.2817cqw,-94.6116cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle del Limón</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[1.81%_59.51%_96.65%_32.62%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:43">
            <DesignBox style={designStyle("flex-none h-[hypot(0.863559cqw,66.3811cqh)] rotate-[-3.8deg] w-[hypot(99.1364cqw,-33.6189cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle de Montserrat</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[9.39%_55.92%_84.79%_40.79%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:44">
            <DesignBox style={designStyle("flex-none h-[hypot(28.57cqw,7.03032cqh)] rotate-[-66.5deg] w-[hypot(71.43cqw,-92.9697cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle del Norte</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[29.35%_48.63%_64.78%_47.31%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:45">
            <DesignBox style={designStyle("flex-none h-[hypot(21.6733cqw,8.9526cqh)] rotate-[-59.2deg] w-[hypot(78.3267cqw,-91.0474cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle de Pizarro</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[17.92%_53.11%_76.22%_45.74%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:46">
            <DesignBox style={designStyle("flex-none h-[hypot(-89.3546cqw,0.366948cqh)] rotate-[88.8deg] w-[hypot(10.6454cqw,99.6331cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle de Pozas</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[37.35%_89.65%_58.52%_5.33%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:47">
            <DesignBox style={designStyle("flex-none h-[hypot(-12.2567cqw,19.8584cqh)] rotate-[36.9deg] w-[hypot(87.7433cqw,80.1416cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle Cadarso</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[3.09%_70.62%_88.37%_24.41%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:48">
            <DesignBox style={designStyle("flex-none h-[hypot(18.4741cqw,5.37688cqh)] rotate-[-63.4deg] w-[hypot(81.5259cqw,-94.6231cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle del Conde Duque</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[4.36%_66.07%_88.97%_32.31%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:49">
            <DesignBox style={designStyle("flex-none h-[hypot(-63.0573cqw,1.394cqh)] rotate-[84.8deg] w-[hypot(36.9427cqw,98.606cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle de Amaniel</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[39.42%_74.96%_55.1%_21.73%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:50">
            <DesignBox style={designStyle("flex-none h-[hypot(-28.0089cqw,7.998cqh)] rotate-[64.7deg] w-[hypot(71.9911cqw,92.002cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle del Reloj</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[11.29%_91.84%_77.33%_-0.4%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:51">
            <DesignBox style={designStyle("flex-none h-[hypot(-9.74437cqw,5.24359cqh)] rotate-[54.4deg] w-[hypot(90.2556cqw,94.7564cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle de Juan Álvarez Mendizábal</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[15.92%_17.84%_79.28%_75.02%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:52">
            <DesignBox style={designStyle("flex-none h-[hypot(7.30898cqw,18.3976cqh)] rotate-[-30.6deg] w-[hypot(92.691cqw,-81.6024cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle de San Mateo</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[-2.97%_45.25%_95.27%_52.57%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:53">
            <DesignBox style={designStyle("flex-none h-[hypot(46.4817cqw,2.03901cqh)] rotate-[-81.2deg] w-[hypot(53.5183cqw,-97.961cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle de Monteleón</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[8.73%_31.94%_89.46%_61.58%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:54">
            <DesignBox style={designStyle("flex-none h-[hypot(-1.95396cqw,56.2278cqh)] rotate-[7.1deg] w-[hypot(98.046cqw,43.7722cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle de Velarde</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[1.43%_25.3%_91.52%_71.7%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:55">
            <DesignBox style={designStyle("flex-none h-[hypot(-32.792cqw,4.15598cqh)] rotate-[73.4deg] w-[hypot(67.208cqw,95.844cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle de Churruca</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[5.56%_21.65%_92.85%_71.37%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:56">
            <DesignBox style={designStyle("flex-none h-[hypot(1.20334cqw,64.3107cqh)] rotate-[-4.7deg] w-[hypot(98.7967cqw,-35.6893cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle de Apodaca</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[1.78%_21.88%_92.64%_75.57%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:57">
            <DesignBox style={designStyle("flex-none h-[hypot(-38.5781cqw,5.22311cqh)] rotate-[73.5deg] w-[hypot(61.4219cqw,94.7769cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle de Larra</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[34.54%_33.89%_59.47%_63.91%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:58">
            <DesignBox style={designStyle("flex-none h-[hypot(45.6461cqw,3.47636cqh)] rotate-[-78.3deg] w-[hypot(54.3539cqw,-96.5236cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle del Barco</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[9.27%_-0.7%_83.37%_95.12%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:59">
            <DesignBox style={designStyle("flex-none h-[hypot(15.0955cqw,7.96348cqh)] rotate-[-55.1deg] w-[hypot(84.9045cqw,-92.0365cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle de Campoamor</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[39.68%_13.93%_56.2%_78.24%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:60">
            <DesignBox style={designStyle("flex-none h-[hypot(-5.16162cqw,22.8559cqh)] rotate-[23.2deg] w-[hypot(94.8384cqw,77.1441cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle de San Marcos</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[24.82%_35.22%_70.92%_57.68%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:61">
            <DesignBox style={designStyle("flex-none h-[hypot(-6.48718cqw,21.5222cqh)] rotate-[26.7deg] w-[hypot(93.5128cqw,78.4778cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle de El Escorial</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[20.51%_38.97%_72.54%_53.4%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:62">
            <DesignBox style={designStyle("flex-none h-[hypot(8.95133cqw,11.02cqh)] rotate-[-41.7deg] w-[hypot(91.0487cqw,-88.98cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle de Jesús del Valle</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[24.05%_38.94%_69.41%_55.85%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:63">
            <DesignBox style={designStyle("flex-none h-[hypot(15.8266cqw,9.33415cqh)] rotate-[-53.5deg] w-[hypot(84.1734cqw,-90.6659cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle de la Madera</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[31.78%_14.02%_62.37%_82.21%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:64">
            <DesignBox style={designStyle("-rotate-62 flex-none h-[hypot(24.0557cqw,8.21908cqh)] w-[hypot(75.9443cqw,-91.7809cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle de Pelayo</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[27.75%_0.59%_70.57%_91.85%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:65">
            <DesignBox style={designStyle("flex-none h-[hypot(-1.18228cqw,60.9845cqh)] rotate-5 w-[hypot(98.8177cqw,39.0155cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle de San Lucas</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[66.27%_97.86%_26.56%_0.51%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:66">
            <DesignBox style={designStyle("flex-none h-[hypot(62.7056cqw,1.22067cqh)] rotate-[-85.1deg] w-[hypot(37.2944cqw,-98.7793cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Paseo de Felipe III</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[51.97%_96.65%_40.92%_1.74%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:67">
            <DesignBox style={designStyle("flex-none h-[hypot(63.3991cqw,1.20668cqh)] rotate-[-85.2deg] w-[hypot(36.6009cqw,-98.7933cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Paseo de Felipe V</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[59.18%_43.44%_34.93%_52.87%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:68">
            <DesignBox style={designStyle("flex-none h-[hypot(-24.7625cqw,7.93469cqh)] rotate-[62.9deg] w-[hypot(75.2375cqw,92.0653cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle Preciados</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[65.3%_55.24%_31.65%_38.63%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:69">
            <DesignBox style={designStyle("flex-none h-[hypot(-5.66071cqw,31.6442cqh)] rotate-[19.8deg] w-[hypot(94.3393cqw,68.3558cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle del Arenal</DesignText>
            </DesignBox>
          </DesignBox>
          <DesignBox style={{
          ...designStyle("absolute flex inset-[65.24%_22.64%_31.73%_71.54%] items-center justify-center"),
          ...{
            containerType: "size"
          }
        }} data-node-id="I68:2644;2:70">
            <DesignBox style={designStyle("flex-none h-[hypot(6.26078cqw,31.6408cqh)] rotate-[-20.8deg] w-[hypot(93.7392cqw,-68.3592cqh)]")}>
              <DesignText style={designStyle("[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative text-[#6b6b70] text-[13px] text-center whitespace-nowrap")}>Calle de Alcalá</DesignText>
            </DesignBox>
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute h-[219.7px] left-[21.3px] top-[255.7px] w-[322.4px]")} data-node-id="68:2645" data-name="ruta">
          <DesignBox style={designStyle("absolute inset-[-3.41%_-2.33%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgRuta} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute h-[219.7px] left-[21.3px] top-[255.7px] w-[322.4px]")} data-node-id="68:2646" data-name="ruta">
          <DesignBox style={designStyle("absolute inset-[-2.05%_-1.4%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgRuta1} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute h-[89.7px] left-[-87.9px] top-[166px] w-[109.2px]")} data-node-id="68:2647" data-name="ruta">
          <DesignBox style={designStyle("absolute inset-[-3.9%_-3.21%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgRuta2} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute left-[309.2px] size-[30px] top-[426.6px]")} data-node-id="68:2648" data-name="plaza libre">
          <DesignBox style={designStyle("absolute inset-[-13.33%_-20%_-26.67%_-20%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgPlazaLibre} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute left-[316.2px] size-[16px] top-[433.6px]")} data-node-id="68:2649" data-name="car">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgCar} />
        </DesignBox>
        <DesignBox style={designStyle("absolute left-[350.8px] size-[30px] top-[476px]")} data-node-id="68:2650" data-name="plaza libre">
          <DesignBox style={designStyle("absolute inset-[-13.33%_-20%_-26.67%_-20%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgPlazaLibre} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute left-[357.8px] size-[16px] top-[483px]")} data-node-id="68:2651" data-name="car">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgCar} />
        </DesignBox>
        <DesignBox style={designStyle("absolute left-[301.2px] size-[20px] top-[477.1px]")} data-node-id="68:2652" data-name="plaza ocupada">
          <DesignBox style={designStyle("absolute inset-[-15%_-20%_-25%_-20%]")}>
            <img alt="" style={designStyle("block max-w-none size-full")} src={imgPlazaOcupada} />
          </DesignBox>
        </DesignBox>
        <DesignBox style={designStyle("absolute bg-[var(--color-action-primary,#0a3d91)] border-3 border-[var(--color-bg-surface,white)] border-solid drop-shadow-[0px_3px_4px_rgba(0,0,0,0.3)] left-[318.4px] rounded-[13.44px] size-[48px] top-[451.4px]")} data-node-id="68:2653" data-name="parking">
          <DesignText style={designStyle("-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[21px] not-italic text-[27px] text-[color:var(--color-text-inverse,white)] text-center top-[4.5px] w-[48px]")} data-node-id="68:2654">
            P
          </DesignText>
        </DesignBox>
        <DesignBox style={designStyle("absolute bg-[var(--color-status-available,#34c759)] border-2 border-[var(--color-bg-surface,white)] border-solid content-stretch flex h-[20px] items-center left-[356.4px] overflow-clip px-[6px] rounded-[var(--radius-10,10px)] top-[439.4px]")} data-node-id="68:2655" data-name="chip: 12">
          <DesignText style={designStyle("[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-[color:var(--color-text-inverse,white)] whitespace-nowrap")} data-node-id="68:2656">
            12
          </DesignText>
        </DesignBox>
        <DesignBox style={designStyle("absolute left-[-13.7px] size-[70px] top-[220.7px]")} data-node-id="68:2657" data-name="precisión">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgPrecision} />
        </DesignBox>
        <DesignBox style={designStyle("absolute bg-[var(--color-bg-surface,white)] drop-shadow-[0px_2px_4px_rgba(0,0,0,0.3)] left-[2.3px] rounded-[19px] size-[38px] top-[236.7px]")} data-node-id="68:2658" data-name="tú">
          <DesignBox style={designStyle("absolute left-[9px] size-[20px] top-[9px]")} data-node-id="68:2659" data-name="location">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgLocation} />
          </DesignBox>
        </DesignBox>
      </DesignBox>
      <DesignBox style={designStyle("absolute bg-[var(--color-text-primary,#1c1c1e)] drop-shadow-[0px_6px_10px_rgba(0,0,0,0.25)] h-[112px] left-[8px] rounded-[var(--radius-24,24px)] top-[56px] w-[377px]")} data-node-id="68:2660" data-name="indicación">
        <DesignBox style={designStyle("absolute left-[22px] size-[46px] top-[30px]")} data-node-id="68:2661" data-name="turn-right">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgTurnRight} />
        </DesignBox>
        <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[84px] not-italic text-[34px] text-[color:var(--color-text-inverse,white)] top-[18px] tracking-[-0.51px] whitespace-nowrap")} data-node-id="68:2662">
          200 m
        </DesignText>
        <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[84px] not-italic text-[16px] text-[rgba(255,255,255,0.8)] top-[64px] whitespace-nowrap")} data-node-id="68:2663">
          Gira a la derecha · Gran Vía
        </DesignText>
      </DesignBox>
      <DesignBox style={designStyle("absolute bg-[#2c2c2e] content-stretch flex gap-[6px] h-[34px] items-center left-[16px] pl-[var(--space-12,12px)] pr-[14px] rounded-[17px] top-[176px]")} data-node-id="68:2664" data-name="siguiente">
        <DesignBox style={designStyle("relative shrink-0 size-[14px]")} data-node-id="68:2665" data-name="icon/turn-right">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconTurnRight} />
        </DesignBox>
        <DesignText style={designStyle("[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-[color:var(--color-text-inverse,white)] whitespace-nowrap")} data-node-id="68:2666">
          Luego: Calle de la Montera
        </DesignText>
      </DesignBox>
      <DesignBox style={designStyle("absolute bg-[rgba(255,255,255,0.96)] drop-shadow-[0px_2px_5px_rgba(0,0,0,0.15)] left-[calc(75%+42.25px)] rounded-[var(--radius-20,20px)] size-[40px] top-[186px]")} data-node-id="68:2667" data-name="btn: centrar">
        <DesignBox style={designStyle("absolute left-[10px] size-[20px] top-[10px]")} data-node-id="68:2668" data-name="location">
          <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgLocation} />
        </DesignBox>
      </DesignBox>
      <DesignBox style={designStyle("absolute bg-[var(--color-bg-surface,white)] drop-shadow-[0px_-4px_12px_rgba(0,0,0,0.14)] h-[304px] left-0 rounded-tl-[24px] rounded-tr-[24px] top-[548px] w-[393px]")} data-node-id="68:2669" data-name="hoja inferior">
        <DesignBox style={designStyle("absolute bg-[var(--color-border-default,#e5e5ea)] h-[5px] left-[178.5px] rounded-[3px] top-[8px] w-[36px]")} data-node-id="68:2670" data-name="grabber" />
        <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[20px] not-italic text-[24px] text-[color:var(--color-text-primary,#1c1c1e)] top-[26px] tracking-[-0.36px] whitespace-nowrap")} data-node-id="68:2671">
          Llegas en 6 min
        </DesignText>
        <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[20px] not-italic text-[15px] text-[color:var(--color-text-secondary,#6e6e73)] top-[60px] whitespace-nowrap")} data-node-id="68:2672">
          17:12 · 1,8 km · Parking Gran Vía
        </DesignText>
        <DesignBox style={designStyle("absolute bg-[var(--color-status-available-bg,#e3f7e8)] content-stretch flex gap-[6px] h-[30px] items-center left-[278px] overflow-clip px-[var(--space-12,12px)] rounded-[15px] top-[30px]")} data-node-id="68:2673" data-name="chip: 12 libres">
          <DesignBox style={designStyle("relative shrink-0 size-[8px]")} data-node-id="68:2674" data-name="Ellipse">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgEllipse} />
          </DesignBox>
          <DesignText style={designStyle("[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-[color:var(--color-status-available-text,#1b6e32)] whitespace-nowrap")} data-node-id="68:2675">
            12 libres
          </DesignText>
        </DesignBox>
        <DesignText style={designStyle("[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[normal] left-[20px] not-italic text-[15px] text-[color:var(--color-text-secondary,#6e6e73)] top-[102px] whitespace-nowrap")} data-node-id="68:2676">
          Elige ruta
        </DesignText>
        <DesignBox style={designStyle("absolute content-stretch cursor-pointer flex gap-[var(--space-8,8px)] h-[34px] items-center justify-end left-[233px] overflow-clip top-[94px] w-[140px]")} data-node-id="68:2677" data-name="btn: Cambiar ruta">
          <DesignBox style={designStyle("relative shrink-0 size-[16px]")} data-node-id="68:2678" data-name="icon/swap">
            <img alt="" style={designStyle("absolute block inset-0 max-w-none size-full")} src={imgIconSwap} />
          </DesignBox>
          <DesignText style={designStyle("[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[15px] text-[color:var(--color-action-primary,#0a3d91)] text-left whitespace-nowrap")} data-node-id="68:2679">
            Cambiar ruta
          </DesignText>
        </DesignBox>
        <DesignBox style={designStyle("[word-break:break-word] absolute bg-[var(--color-bg-selected,#e8f2ff)] border-2 border-[var(--color-brand-accent,#0a7cff)] border-solid h-[62px] leading-[normal] left-[20px] not-italic rounded-[var(--radius-14,14px)] top-[134px] w-[170px] whitespace-nowrap")} data-node-id="68:2680" data-name="btn: Rápida">
          <DesignText style={designStyle("absolute font-['Inter:Semi_Bold'] font-semibold left-[12px] text-[16px] text-[color:var(--color-action-primary,#0a3d91)] top-[8px]")} data-node-id="68:2681">
            Rápida
          </DesignText>
          <DesignText style={designStyle("absolute font-['Inter:Regular'] font-normal left-[12px] text-[13px] text-[color:var(--color-text-secondary,#6e6e73)] top-[32px]")} data-node-id="68:2682">
            6 min · 1,8 km
          </DesignText>
        </DesignBox>
        <DesignBox style={designStyle("[word-break:break-word] absolute bg-[var(--color-bg-canvas,#f2f2f7)] h-[62px] leading-[normal] left-[203px] not-italic rounded-[var(--radius-14,14px)] top-[134px] w-[170px] whitespace-nowrap")} data-node-id="68:2683" data-name="btn: Otra ruta">
          <DesignText style={designStyle("absolute font-['Inter:Semi_Bold'] font-semibold left-[14px] text-[16px] text-[color:var(--color-text-primary,#1c1c1e)] top-[10px]")} data-node-id="68:2684">
            Otra ruta
          </DesignText>
          <DesignText style={designStyle("absolute font-['Inter:Regular'] font-normal left-[14px] text-[13px] text-[color:var(--color-text-secondary,#6e6e73)] top-[34px]")} data-node-id="68:2685">
            9 min · 2,1 km
          </DesignText>
        </DesignBox>
        <ArcarBoton26 className="absolute bg-[var(--color-action-primary,#0a3d91)] content-stretch cursor-pointer flex gap-[var(--space-8,8px)] h-[52px] items-center justify-center left-[20px] overflow-clip rounded-[var(--radius-14,14px)] top-[212px] w-[353px]" />
      </DesignBox>
      <IOsHomeIndicator className="absolute h-[34px] left-0 top-[818px] w-[393px]" />
      <IOsStatusBarOscura className="absolute h-[54px] left-0 top-0 w-[393px]" />
    </DesignBox>;
}
