import { UseReturnType } from "~/component"
import { useRange, useSelect, useText } from "~/library"

type StrokeLinecap = React.SVGAttributes<SVGLineElement>["strokeLinecap"]
type StrokeLinejoin = React.SVGAttributes<SVGLineElement>["strokeLinejoin"]
type FillRule = React.SVGAttributes<SVGLineElement>["fillRule"]

export function useAttribute(): UseReturnType<
  StrokeLinecap | StrokeLinejoin | FillRule
> {
  const title = `線と塗りの属性`

  const StrokeColor = useSelect<string>({
    title: "線色",
    subTitle: "stroke",
    initValue: "DarkCyan",
    values: [
      "DarkCyan",
      "green",
      "red",
      "blue",
      "orange",
      "currentColor",
      "unknown",
    ],
  })

  const StrokeWidth = useRange({
    title: "線の太さ",
    subTitle: "strokeWidth",
    initValue: 1,
    range: [1, 10],
    step: 1,
  })

  const StrokeDasharray = useText<string>({
    title: "破線",
    subTitle: "strokeDasharray",
    extraNote:
      "書式：実線長(px) Gap長(px)、間にスペースを挟んで数値のみ、例：5 10",
    initValue: "",
  })

  const StrokeLinecap = useSelect<StrokeLinecap>({
    title: "線の端",
    subTitle: "strokeLinecap",
    initValue: "inherit" as const,
    extraNote: `"round","square"は先端が線幅分伸長(線が細いと不明瞭)`,
    values: ["inherit", "butt", "round", "square"],
  })

  const StrokeLinejoin = useSelect<StrokeLinejoin>({
    title: "線の角",
    subTitle: "strokeLinejoin",
    initValue: "inherit" as const,
    values: ["inherit", "bevel", "miter", "round"],
  })

  const StrokeOpacity = useRange({
    title: "線の透明度",
    subTitle: "strokeOpacity",
    initValue: 1,
    range: [0, 1],
    step: 0.1,
  })

  const FillColor = useSelect<string>({
    title: "塗り色",
    subTitle: "fill",
    initValue: "none",
    values: [
      "white",
      "DarkCyan",
      "green",
      "red",
      "blue",
      "orange",
      "currentColor",
      "none",
    ],
  })

  const FillOpacity = useRange({
    title: "塗りの透明度",
    subTitle: "fillOpacity",
    initValue: 1,
    range: [0, 1],
    step: 0.1,
  })

  const FillRule = useSelect<FillRule>({
    title: "塗りの重複処理",
    subTitle: "fillRule",
    initValue: "nonzero" as const,
    values: ["nonzero", "evenodd"],
  })

  const BothOpacity = useRange({
    title: "全体の透明度",
    subTitle: "opacity",
    initValue: 1,
    range: [0, 1],
    step: 0.1,
  })

  const code = `<path d="M20,20 h200 v120 h-200z M140,60 h240 l60,60 v60 h-300z
  M460,40 h220 M460,80 h220 M460,120 h220 M460,160 h220"
  stroke="${StrokeColor.value}"
  strokeWidth="${StrokeWidth.value}"
  strokeDasharray="${StrokeDasharray.value}"
  strokeLinecap="${StrokeLinecap.value}"
  strokeLinejoin="${StrokeLinejoin.value}"
  strokeOpacity="${StrokeOpacity.value}"
  fill="${FillColor.value}"
  fillOpacity="${FillOpacity.value}"
  fillRule="${FillRule.value}"
  opacity="${BothOpacity.value}"
/>`

  const jsx = (
    <svg width={700} height={200}>
      <path
        d="M20,20 h200 v120 h-200z M140,60 h240 l60,60 v60 h-300z M460,40 h220 M460,80 h220 M460,120 h220 M460,160 h220"
        stroke={StrokeColor.value}
        strokeWidth={StrokeWidth.value}
        strokeDasharray={StrokeDasharray.value}
        strokeLinecap={StrokeLinecap.value}
        strokeLinejoin={StrokeLinejoin.value}
        strokeOpacity={StrokeOpacity.value}
        fill={FillColor.value}
        fillOpacity={FillOpacity.value}
        fillRule={FillRule.value}
        opacity={BothOpacity.value}
      />
    </svg>
  )

  return {
    height: 200,
    title,
    code,
    options: [
      StrokeColor,
      StrokeWidth,
      StrokeDasharray,
      StrokeLinecap,
      StrokeLinejoin,
      StrokeOpacity,
      FillColor,
      FillOpacity,
      FillRule,
      BothOpacity,
    ],
    jsx,
  }
}
