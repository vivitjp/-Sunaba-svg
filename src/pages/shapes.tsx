import { FC, ReactNode, useCallback, useEffect, useState } from "react"
import {
  Section,
  Column,
  Row,
  Div,
  xRulers,
  yRulers,
  zeroRulers,
} from "~/common"
import { SVGRuled, SelectSet } from "~/component"
import { Shape, shapes, shapesOptions } from "~/feature"
import { Text } from "~/library"

export const PageShapes = () => {
  const [selectedShape, setSelectedShape] = useState<string | undefined>(
    shapes[0].title
  )
  const [shapeSet, setShapeSet] = useState<Shape | null>(null)

  useEffect(() => {
    const shape = shapes.find((shape) => shape.title === selectedShape) ?? null
    setShapeSet(shape)
  }, [selectedShape])

  return (
    <Section style={{ width: "100%" }}>
      <SelectShapes setSelectedShape={setSelectedShape} />
      <Column style={{ gap: "5" }}>
        {shapeSet?.shape && (
          <CompoCode
            title={selectedShape}
            code={shapeSet?.shape.code}
            weight={600}
            color={"var(--main-color)"}
          />
        )}
        {shapeSet?.absolute && (
          <CompoCode title={"絶対Path"} code={shapeSet?.absolute.code} />
        )}
        {shapeSet?.relative && (
          <CompoCode title={"相対Path"} code={shapeSet?.relative.code} />
        )}
      </Column>
      <Column style={{ width: "auto" }}>
        {shapeSet?.shape && (
          <CompoSVG title={"Shape"} jsx={shapeSet?.shape.jsx} />
        )}
        {shapeSet?.absolute && (
          <CompoSVG title={"絶対Path"} jsx={shapeSet?.absolute.jsx} />
        )}
        {shapeSet?.relative && (
          <CompoSVG title={"相対Path"} jsx={shapeSet?.relative.jsx} />
        )}
      </Column>
    </Section>
  )
}

//----------------------------------------
// Code
//----------------------------------------
type CompoCode = {
  title?: string
  code?: string
  weight?: number
  color?: string
}

const CompoCode = ({
  code = "",
  title = "",
  weight = 400,
  color = "inherit",
}: CompoCode) => {
  return (
    <Row style={{ width: "100%", gap: "none" }}>
      <Div style={{ width: "120px", fontWeight: weight, color: color }}>
        {title}
      </Div>
      <Row
        width="calc(100% - 120px)"
        fontSize={16}
        minHeight={44}
        padding={10}
        color={"#777"}
        border={"#ddd"}
        fontFamily={"monospace"}
      >
        {code}
      </Row>
    </Row>
  )
}

//----------------------------------------
// SVG
//----------------------------------------

const CompoSVG = ({ jsx, title }: { title: string; jsx?: ReactNode }) => {
  return (
    <Column padding={1}>
      <Row style={{ width: "100%" }}>
        <Div
          fontSize={20}
          style={{
            width: "100%",
            color: "var(--main-color)",
            borderBottom: "1px solid var(--main-color)",
          }}
        >
          {title}
        </Div>
      </Row>
      <SVGRuled
        width={600}
        height={300}
        ratio={1}
        xRulers={xRulers}
        yRulers={yRulers}
        zeroRulers={zeroRulers}
        margin={30}
        marginTLOnly={true}
      >
        {jsx ?? <DefaultMessage />}
      </SVGRuled>
    </Column>
  )
}

//----------------------------------------
// SelectShapes
//----------------------------------------
type SelectShapesProps = {
  setSelectedShape: React.Dispatch<React.SetStateAction<string | undefined>>
}

const SelectShapes: FC<SelectShapesProps> = ({ setSelectedShape }) => {
  const handleChangeShapes = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedShape(e.currentTarget.value)
    },
    []
  )

  return (
    <SelectSet
      options={shapesOptions}
      onChange={handleChangeShapes}
      width={200}
    />
  )
}

const DefaultMessage = () => (
  <Text x={200} y={200} fontSize={30} fill={"#ccc"} textAnchor="middle">
    選択してください
  </Text>
)
