import { useText } from "~/library/hooks/useText"
import { useRange } from "~/library/hooks/useRange"
import { useSelect } from "~/library/hooks/useSelect"
import { useMemo } from "react"
import { CSSProperties } from "styled-components"
import { UseReturnType } from "~/component"

export const useSvgText = (): UseReturnType => {
  const title = `テキスト`

  const Sample = useText({
    title: "東京特許許可局",
    initValue: "東京特許許可局",
  })
  const Stroke = useText({
    title: "線色",
    subTitle: "stroke",
    initValue: "#777",
  })
  const StrokeWidth = useRange({
    title: "線の太さ",
    subTitle: "strokeWidth",
    initValue: 1,
    range: [1, 10],
    step: 1,
  })
  const Fill = useText({
    title: "塗り色",
    subTitle: "fill",
    initValue: "DarkCyan",
  })
  const Anchor = useSelect({
    title: "アンカー(左右)",
    subTitle: "textAnchor",
    initValue: "middle",
    values: ["start", "middle", "end"],
  })
  const dominantBaseline = useSelect({
    title: "アンカー(上下)",
    subTitle: "dominantBaseline",
    initValue: "auto",
    values: [
      "text-after-edge",
      "ideographic", // ひらがな，漢字，ハングル等
      "alphabetic", // アルファベット等
      "auto",
      "middle",
      "central",
      "mathematical",
      "hanging",
      "text-before-edge",
    ],
  })

  const FontWeight = useRange({
    title: "フォントWeight",
    subTitle: "fontWeight",
    initValue: 500,
    range: [100, 800],
    step: 100,
  })

  const FontFamily = useSelect({
    title: "フォントFamily",
    subTitle: "fontFamily",
    initValue: "sans-serif",
    values: ["serif", "sans-serif", "monospace", "cursive"],
  })

  const FontSize = useRange({
    title: "フォントSize",
    subTitle: "fontSize",
    initValue: 30,
    range: [8, 60],
    step: 2,
  })

  const Rotate = useRange({
    title: "回転 transform",
    subTitle: "rotate",
    initValue: 0,
    range: [0, 360],
    step: 1,
  })

  const Translate = useRange({
    title: "移動 transform",
    subTitle: "translate",
    initValue: 0,
    range: [0, 100],
    step: 1,
  })

  const CSSProps: CSSProperties = useMemo(() => {
    let style: CSSProperties = {}
    if (FontSize.value) style = { fontSize: FontSize.value }
    if (FontFamily.value) style = { ...style, fontFamily: FontFamily.value }
    return style
  }, [FontSize.value, FontFamily.value])

  const code = `<svg width="640" height="300">
  <path d="M320,20 v260" stroke="black" strokeWidth="1" />
  <path d="M20,150 h620" stroke="black" strokeWidth="1" />
  <text x="320" y="150"
    fill="${Fill.value}"
    stroke="${Stroke.value}"
    strokeWidth="${StrokeWidth.value}"
    textAnchor="${Anchor.value}"
    dominantBaseline="${dominantBaseline.value}"
    fontWeight="${FontWeight.value}"
    style=${JSON.stringify(CSSProps)}
    transform="rotate(${Rotate.value},320,150) translate(${Translate.value},${
    Translate.value
  })"
  >
    ${Sample.value}
  </text>
</svg>`

  const jsx = (
    <svg width={640} height={300}>
      <path d="M320,20 v260" stroke="black" strokeWidth={1} />
      <path d="M20,150 h620" stroke="black" strokeWidth={1} />
      <text
        x={320}
        y={150}
        fill={Fill.value}
        stroke={Stroke.value}
        strokeWidth={StrokeWidth.value}
        textAnchor={Anchor.value}
        dominantBaseline={dominantBaseline.value}
        fontWeight={FontWeight.value}
        style={CSSProps}
        transform={`rotate(${Rotate.value},320,150) translate(${Translate.value},${Translate.value})`}
      >
        {Sample.value}
      </text>
    </svg>
  )

  return {
    height: 300,
    title,
    code,
    options: [
      Sample,
      Stroke,
      StrokeWidth,
      Fill,
      Anchor,
      dominantBaseline,
      FontWeight,
      FontFamily,
      FontSize,
      Rotate,
      Translate,
    ],
    jsx,
  }
}
