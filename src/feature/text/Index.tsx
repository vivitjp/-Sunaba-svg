import { Column, Div, Row, Section, Title } from "../../common/styleDiv"
import { SVG } from "~/library"
import { useText } from "~/library/hooks/useText"
import { useRange } from "~/library/hooks/useRange"
import { useSelect } from "~/library/hooks/useSelect"
import { useMemo } from "react"
import styled, { CSSProperties } from "styled-components"

export const FeatureText = () => {
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
    subTitle: "anchor",
    initValue: "middle",
    values: ["start", "middle", "end"],
  })
  const dominantBaseline = useSelect({
    title: "アンカー(上下)",
    subTitle: "dominantBaseline",
    initValue: "auto",
    values: [
      "ideographic",
      "auto",
      "middle",
      "central",
      "mathematical",
      "hanging",
      //"text-bottom", // = "auto"
      //"alphabetic", // = "auto"
      //"text-top", // = "auto"
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
    if (FontSize.value) style = { fontSize: FontSize.value as number }
    if (FontFamily.value)
      style = { ...style, fontFamily: FontFamily.value as string }
    return style
  }, [FontSize.value, FontFamily.value])

  type Attribute = {
    title: string
    subTitle?: string
    value: string | number | boolean
    JSX: JSX.Element
  }

  const Attributes: Attribute[] = [
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
  ]

  return (
    <Section>
      {Attributes.map(({ title, subTitle, JSX }, idx) => (
        <Row key={idx} gap={0}>
          <DivMainSub>
            <Title width={250} color={"#555"}>
              {title}
            </Title>
            {subTitle && (
              <Div
                fontSize={16}
                paddingRight={10}
                fontFamily={"monospace"}
                color="#555"
              >
                {subTitle} :
              </Div>
            )}
          </DivMainSub>
          <Div width={250}>{JSX}</Div>
        </Row>
      ))}

      <Column gap={20} border="#eee" width={640}>
        <SVG width={640} height={300}>
          <path d="M320,20 v260" stroke={"black"} strokeWidth={1} />
          <path d="M20,150 h620" stroke={"black"} strokeWidth={1} />
          <text
            x={320}
            y={150}
            fill={Fill.value as string}
            stroke={Stroke.value as string}
            strokeWidth={StrokeWidth.value as number}
            textAnchor={Anchor.value as string}
            dominantBaseline={dominantBaseline.value as string}
            fontWeight={FontWeight.value as number}
            style={CSSProps}
            transform={`rotate(${Rotate.value},320,150) translate(${Translate.value},${Translate.value})`}
          >
            {Sample.value}
          </text>
        </SVG>
      </Column>
    </Section>
  )
}

const DivMainSub = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  width: 400px;
`
