import { Column, Section } from "../../common/styleDiv"
import { SVG } from "~/library"
import { useText } from "~/library/hooks/useText"
import { useRange } from "~/library/hooks/useRange"
import { useSelect } from "~/library/hooks/useSelect"
import { useMemo } from "react"
import { CSSProperties } from "styled-components"

export const TextCompo = () => {
  const { JSX: JsxSample, value: sample } = useText({
    title: "東京特許許可局",
    initValue: "東京特許許可局",
  })
  const { JSX: JsxStroke, value: stroke } = useText({
    title: "線色(stroke)",
    initValue: "#777",
  })
  const { JSX: JsxStrokeWidth, value: strokeWidth } = useRange({
    title: "線の太さ(strokeWidth)",
    initValue: 1,
    range: [1, 10],
    step: 1,
  })
  const { JSX: JsxFill, value: fill } = useText({
    title: "塗り色(fill)",
    initValue: "DarkCyan",
  })
  const { JSX: JsxAnchor, value: anchor } = useSelect({
    title: "アンカー(左右: anchor)",
    initValue: "middle",
    values: ["start", "middle", "end"],
  })

  const { JSX: JsxFontWeight, value: fontWeight } = useRange({
    title: "フォントWeight(fontWeight)",
    initValue: 500,
    range: [100, 800],
    step: 100,
  })
  const { JSX: JsxFontFamily, value: fontFamily } = useSelect({
    title: "フォントFamily(fontFamily)",
    initValue: "sans-serif",
    values: ["serif", "sans-serif", "monospace", "cursive"],
  })

  const { JSX: JsxFontSize, value: fontSize } = useRange({
    title: "フォントSize(fontSize)",
    initValue: 30,
    range: [8, 60],
    step: 2,
  })

  const CSSProps: CSSProperties = useMemo(() => {
    let style: CSSProperties = {}
    if (fontSize) style = { fontSize: fontSize }
    if (fontFamily) style = { ...style, fontFamily: fontFamily }
    return style
  }, [fontSize, fontFamily])

  return (
    <Section paddingBottom={100}>
      {JsxSample}
      {JsxStroke}
      {JsxStrokeWidth}
      {JsxAnchor}
      {JsxFill}
      {JsxFontWeight}
      {JsxFontFamily}
      {JsxFontSize}

      <Column padding={0} gap={20} border="#eee" width={640}>
        <SVG width={640} height={100}>
          <path d="M320,20 v60" stroke={"black"} strokeWidth={1} />
          <text
            x={320}
            y={60}
            fill={fill as string}
            stroke={stroke as string}
            strokeWidth={strokeWidth}
            textAnchor={anchor}
            fontWeight={fontWeight}
            fontFamily={fontFamily}
            style={CSSProps}
          >
            {sample}
          </text>
        </SVG>
      </Column>
    </Section>
  )
}
