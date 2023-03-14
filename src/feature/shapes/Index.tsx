import { Code, Column, Div, DivPre, Row, Section } from "../../common/styleDiv"
import { SVGRuled, SelectSet } from "~/component"
import { xRulers, yRulers, zeroRulers } from "~/common/SVGContent"
import { Shape, shapes, shapesOptions } from "./setting"
import { FC, ReactNode, useCallback, useEffect, useState } from "react"
import { Text } from "~/library"

export const FeatureShapes = () => {
  const [selectedShape, setSelectedShape] = useState<string | null>(null)
  const [shapeSet, setShapeSet] = useState<Shape | null>(null)

  useEffect(() => {
    const shape = shapes.find((shape) => shape.title === selectedShape) ?? null
    setShapeSet(shape)
  }, [selectedShape])

  return (
    <Section style={{ width: "100%" }}>
      <SelectShapes setSelectedShape={setSelectedShape} />
      <Column padding={1} style={{ gap: "0" }}>
        {shapeSet?.shape && (
          <CompoCode title={"Shape"} code={shapeSet?.shape.code} />
        )}
        {shapeSet?.absolute && (
          <CompoCode title={"絶対Path"} code={shapeSet?.absolute.code} />
        )}
        {shapeSet?.relative && (
          <CompoCode title={"相対Path"} code={shapeSet?.relative.code} />
        )}
      </Column>
      <Column style={{ width: "auto" }} padding={1}>
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
}

const CompoCode = ({ code = "", title = "" }: CompoCode) => {
  return (
    <Row style={{ width: "100%", gap: "none" }}>
      <Div style={{ width: "60px" }}>{title}</Div>
      <DivPre
        fontSize={18}
        minHeight={44}
        style={{
          border: "1px solid #ddd",
          textAlign: "left",
          padding: "10px",
        }}
      >
        {code}
      </DivPre>
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
// preserveAspectRatio
//----------------------------------------
type SelectShapesProps = {
  setSelectedShape: React.Dispatch<React.SetStateAction<string | null>>
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
      withBlanc={true}
    />
  )
}

const DefaultMessage = () => (
  <Text x={200} y={200} fontSize={30} fill={"#ccc"} textAnchor="middle">
    選択してください
  </Text>
)
