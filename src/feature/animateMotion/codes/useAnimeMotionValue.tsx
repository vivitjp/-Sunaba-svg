import { useState } from "react"
import { useCheck, useSelect } from "~/library"
import { UseReturnType } from "./type"

export function useAnimeMotionValue(): UseReturnType {
  const title = `valuesによる移動`

  const visible = useState<boolean>(false)
  const [isVisible] = visible

  const CalcModeRed = useSelect({
    title: "Mode(Red)",
    subTitle: "calcMode",
    initValue: "linear",
    values: ["linear", "discrete", "spline", "paced"],
  })

  const CalcModeBlue = useSelect({
    title: "Mode(Blue)",
    subTitle: "calcMode",
    initValue: "paced",
    values: ["linear", "discrete", "spline", "paced"],
  })

  const SymbolRotate = useSelect({
    title: "シンボル表示方向(Blue)",
    subTitle: "symbol rotate",
    initValue: "auto",
    values: ["auto", "auto-reverse", "90"],
  })

  const CheckRotation = useCheck({
    title: "進行方向スイッチ(Blue)",
    subTitle: "keyPoints",
    initValue: true,
  })

  const code = `<svg width="700" height="200">
  <defs>
    <path id="guideLineRed" d="M60,60 h600 v100 h-600z" />
    <symbol id="arrowSymbol" viewBox="0,0,20,20">
      <g strokeWidth="2" fill="none">
        <polyline points="10,0 20,10 10,20" />
        <line x1="0" y1="10" x2="20" y2="10" />
      </g>
    </symbol>
  </defs>

  <use xlinkHref="#arrowSymbol" stroke="red" x="-10" y="-10" width="20" height="20" >
    <animateMotion begin="0s" dur="6s" calcMode=${
      CalcModeRed.value
    } rotate="auto"
      repeatCount="indefinite" >
      <mpath xlinkHref="#guideLineRed" />
    </animateMotion>
  </use>
   
  <use xlinkHref="#arrowSymbol" stroke="blue" x="-10" y="-10" width="20" height="20" >
    <animateMotion begin="0s" dur="6s" repeatCount="indefinite"
      values="60,60;660,60;660,160;60,160;60,60"
      calcMode="${CalcModeBlue.value}" rotate="${
    SymbolRotate.value
  }" keyTimes="0;1" keyPoints="${CheckRotation.value ? "0;1" : "1;0"}" />
  </use>
</svg>`

  const jsx = (
    <>
      {isVisible && (
        <svg width="700" height="200">
          <defs>
            <path id="guideLineRed" d="M60,60 h600 v100 h-600z" />
            <symbol id="arrowSymbol" viewBox="0,0,20,20">
              <g strokeWidth="2" fill="none">
                <polyline points="10,0 20,10 10,20" />
                <line x1="0" y1="10" x2="20" y2="10" />
              </g>
            </symbol>
          </defs>
          <use
            xlinkHref="#arrowSymbol"
            stroke="red"
            x="-10"
            y="-10"
            width="20"
            height="20"
          >
            <animateMotion
              begin="0s"
              dur="6s"
              calcMode={CalcModeRed.value}
              rotate="auto"
              repeatCount="indefinite"
            >
              <mpath xlinkHref="#guideLineRed" />
            </animateMotion>
          </use>
          <use
            xlinkHref="#arrowSymbol"
            stroke="blue"
            x="-10"
            y="-10"
            width="20"
            height="20"
          >
            <animateMotion
              begin="0s"
              dur="6s"
              values="60,60;660,60;660,160;60,160;60,60"
              calcMode={CalcModeBlue.value}
              rotate={SymbolRotate.value}
              repeatCount="indefinite"
              keyTimes="0;1"
              keyPoints={CheckRotation.value ? "0;1" : "1;0"}
            />
          </use>
        </svg>
      )}
    </>
  )

  return {
    height: 200,
    visible,
    title,
    code,
    options: [CalcModeRed, CalcModeBlue, SymbolRotate, CheckRotation],
    jsx,
  }
}
