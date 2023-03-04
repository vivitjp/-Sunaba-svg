import { Code, Div, Row, S, Section } from "../../common/styleDiv"
import { FC, useState } from "react"

type BasicCodes = {
  title: string
  code: string
}

const basicCodes: BasicCodes[] = [
  {
    title: `SVG基本構文`,
    code: `
<svg width={} xmlns="http://www.w3.org/2000/svg">
  <path d="M 0 0 L 100 250 L 200 0" fill="none"/>
</svg>
    `,
  },
  {
    title: ``,
    code: ``,
  },
]

export const Basic = () => {
  return (
    <Section>
      <Row border={"#ddd"} padding={6}>
        <CodeBox code={basicCodes[0].code} />
        <Code fontSize={20}>
          <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,0 L10,10" stroke="#aaa" fill="none" />
          </svg>
        </Code>
      </Row>
    </Section>
  )
}

//----------------------------------------
// コード
//----------------------------------------
type CodeBox = {
  code: string
}

const CodeBox: FC<CodeBox> = ({ code }) => {
  return (
    <Code border={"#ddd"} padding={10}>
      {code}
    </Code>
  )
}

//----------------------------------------
// 属性
//----------------------------------------

type Attribute = {
  title: string
  note: String
  sample: string
}

const attibutes: Attribute[] = [
  { title: "d", note: "パス", sample: "M100,100 L200,100" },
  { title: "stroke", note: "線の色", sample: "=CSS/currentColor" },
  { title: "strokeWidth", note: "線の太さ", sample: "1" },
  { title: "strokeDasharray", note: "破線定義", sample: "4 1" },
  { title: "strokeLinecap", note: "線の端", sample: "butt/round/square" },
  {
    title: "strokeLinejoin",
    note: "線の折れ端",
    sample: "arcs/bevel/miter/miter-clip/round",
  },
  { title: "strokeOpacity", note: "線の透明度", sample: "0.0~1.0" },
  { title: "fill", note: "塗り潰しの色", sample: "=CSS/currentColor" },
  { title: "fillOpacity", note: "", sample: "=CSS" },
  { title: "fillRule", note: "重複白抜き", sample: "nonzero/evenodd" },
  { title: "opacity", note: "透明", sample: "0.0~1.0" },
  {
    title: "color",
    note: "gで使用する総合配色(fill, stroke, stop-color, flood-color, and lighting-color )",
    sample: "=CSS",
  },
  { title: "cursor", note: "カーソル", sample: "=CSS" },
  { title: "display", note: "表示切替", sample: "none" },
  {
    title: "pointerEvents",
    note: "マウスイベント",
    sample:
      "bounding-box/visiblePainted/visibleFill/visibleStroke/visible/painted/fill/stroke/all/none",
  },
]
