import { useState } from "react"
import { UseReturnType } from "~/component"
import { useCheck } from "~/library"
import { useRange } from "~/library/hooks/useRange"

export const useTransform = (): UseReturnType => {
  const title = `Translate & Scale`
  const [[X, Y]] = useState<[number, number]>([300, 150])

  const TranslateX = useRange({
    title: "X軸移動",
    subTitle: "translate(x,y)",
    initValue: 250,
    range: [-100, 300],
    step: 5,
  })

  const TranslateY = useRange({
    title: "Y軸移動",
    subTitle: "translate(x,y)",
    initValue: 0,
    range: [-50, 50],
    step: 5,
  })

  const CenterFixed = useCheck({
    title: "スケール基準値固定",
    subTitle: "transform-origin",
    extraNote: "スケール基準値を固定しないと親SVGの(0,0)基準で拡大縮小する",
    initValue: true,
  })

  const ScaleX = useRange({
    title: "X軸(幅)縮小拡大",
    subTitle: "scale(x,y)",
    initValue: 1,
    range: [-1, 2],
    step: 0.01,
  })

  const ScaleXY = useCheck({
    title: "X座標でXY一括指定",
    subTitle: "scale(x)",
    initValue: false,
  })

  const ScaleY = useRange({
    title: "Y軸(高)縮小拡大",
    subTitle: "scale(x,y)",
    initValue: 1,
    range: [0, 2],
    step: 0.01,
    disabled: ScaleXY.value,
  })

  const ScaleXYValue = ScaleXY.value
    ? `${ScaleX.value}`
    : `${ScaleX.value},${ScaleY.value}`

  const code = `<svg width="800" height="300">
  <circle cx="300" cy="150" r="50" fill="tomato"
    transform="translate(${TranslateX.value},${
    TranslateY.value
  }) scale(${ScaleXYValue})"
    transform-origin="${CenterFixed.value ? X : 0} ${
    CenterFixed.value ? Y : 0
  }" //属性名はケバブのまま
  />
</svg>`

  const jsx = (
    <svg width={800} height={300} preserveAspectRatio="xMinYMin slice">
      <circle
        cx={300}
        cy={150}
        r={50}
        fill="tomato"
        transform={`translate(${TranslateX.value},${TranslateY.value}) scale(${ScaleXYValue})`}
        transform-origin={`${CenterFixed.value ? X : 0} ${
          CenterFixed.value ? Y : 0
        }`}
      />
    </svg>
  )

  return {
    height: 300,
    title,
    code,
    options: [TranslateX, TranslateY, ScaleX, ScaleY, ScaleXY, CenterFixed],
    jsx,
  }
}
