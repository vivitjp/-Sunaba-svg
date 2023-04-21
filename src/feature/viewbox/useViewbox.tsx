import { rectangle, Text, useSelect, useText } from "~/library"
import {
  Code,
  Div,
  Row,
  SpanRed,
  Section,
  DivPre,
  Column,
} from "../../common/styleDiv"
import { FC } from "react"
import { UseReturnType } from "~/component"

export const useViewbox = (): UseReturnType => {
  const title = `Viewbox`

  const ViewBox = useText({
    title: "viewbox",
    initValue: "0 0 600 300",
    width: 200,
  })

  const X = useSelect({
    title: "",
    initValue: "xMin",
    values: ["xMin", "xMid", "xMax"],
    width: 100,
  })

  const Y = useSelect({
    title: "",
    initValue: "YMin",
    values: ["YMin", "YMid", "YMax"],
    width: 100,
  })

  const Aspect = useSelect({
    title: "",
    initValue: "meet",
    values: ["meet", "slice"],
    width: 100,
  })

  const code = ``

  const jsx = (
    <Section>
      <Row border={"#ddd"} padding={6}>
        <Code fontSize={18}>
          SVG width:<SpanRed fontSize={"20px"}>600</SpanRed> height:
          <SpanRed fontSize={"20px"}>300</SpanRed>
        </Code>
      </Row>

      <Column border={"#ddd"} padding={10}>
        <Row>
          <Div fontSize={24}>viewBox:</Div>
          {ViewBox.JSX}
        </Row>
        <DivPre fontSize={18}>
          preserveAspectRatio: {X.JSX} {Y.JSX} {Aspect.JSX}
        </DivPre>
      </Column>

      <DisplaySVG
        viewbox={ViewBox.value}
        aspectRatio={`${X.value}${Y.value} ${Aspect.value}`}
      />
    </Section>
  )

  return {
    title,
    code,
    options: [],
    jsx,
    border: "none",
  }
}

//----------------------------------------
// SVG
//----------------------------------------
type SVGProps = {
  viewbox: string
  aspectRatio: string
}

const DisplaySVG: FC<SVGProps> = ({ viewbox, aspectRatio }) => {
  return (
    <Row width={600} height={300} border={"Firebrick"} padding={0}>
      <svg
        width={600}
        height={300}
        viewBox={viewbox}
        preserveAspectRatio={aspectRatio}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <path
          d={rectangle({ x: 0, y: 0, w: 600, h: 300 })}
          stroke="#aaa"
          fill="#fafafa"
          strokeWidth={2}
        />
        <g>
          <path
            d={rectangle({ x: 50, y: 50, w: 200, h: 200 })}
            stroke="#aaa"
            fill="Ivory"
            strokeWidth={1}
          />
          <Text x={150} y={165} fontSize={30} fill="#ccc" textAnchor="middle">
            200x200
          </Text>
        </g>
      </svg>
    </Row>
  )
}
