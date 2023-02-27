import { rectangle } from "~/library"
import { Code, Div, Row, S, Section } from "../common/style"
import { FC, useCallback, useState } from "react"
import { SelectSet } from "~/component"
import { adjustOptions, aspectXOptions, aspectYOptions } from "./setting"

export const Page01 = () => {
  //Viewbox
  const [viewbox, setViewbox] = useState("0 0 600 300")

  //preserveAspectRatio(X)
  const [aspectX, setAspectX] = useState<string>(
    aspectXOptions[0].value as string
  )
  //preserveAspectRatio(Y)
  const [aspectY, setAspectY] = useState<string>(
    aspectYOptions[0].value as string
  )
  //preserveAspectRatio (meet or cut)
  const [adjustValue, setAdjustValue] = useState<string>(
    adjustOptions[0].value as string
  )

  return (
    <Section>
      <Row border={"#ddd"} padding={6}>
        <Code>
          SVG width:<S>600px</S> height:<S>300px</S>
        </Code>
      </Row>

      <ViewBox
        viewbox={viewbox}
        setViewbox={setViewbox}
        aspectRatio={`${aspectX}${aspectY} ${adjustValue}`}
      />
      <AspectRatio
        setAspectX={setAspectX}
        setAspectY={setAspectY}
        setAdjustValue={setAdjustValue}
      />
      <DisplaySVG
        viewbox={viewbox}
        aspectRatio={`${aspectX}${aspectY} ${adjustValue}`}
      />
    </Section>
  )
}

//----------------------------------------
// ViewBox
//----------------------------------------
type ViewBoxProps = {
  viewbox: string
  setViewbox: React.Dispatch<React.SetStateAction<string>>
  aspectRatio: string
}

const ViewBox: FC<ViewBoxProps> = ({ viewbox, setViewbox, aspectRatio }) => {
  const handleChangeText = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value
      setViewbox(value)
    },
    []
  )

  return (
    <Row border={"#ddd"} padding={10}>
      <div style={{ fontSize: "20px" }}>viewBox:</div>
      <input
        type="text"
        onChange={handleChangeText}
        value={viewbox}
        placeholder="viewbox"
        style={{
          border: "1px solid #ccc",
          fontSize: "20px",
          padding: "4px",
          borderRadius: "5px",
          textAlign: "center",
        }}
      />
      <div>{aspectRatio}</div>
    </Row>
  )
}

//----------------------------------------
// preserveAspectRatio
//----------------------------------------
type AspectRatioProps = {
  setAspectX: React.Dispatch<React.SetStateAction<string>>
  setAspectY: React.Dispatch<React.SetStateAction<string>>
  setAdjustValue: React.Dispatch<React.SetStateAction<string>>
}

const AspectRatio: FC<AspectRatioProps> = ({
  setAspectX,
  setAspectY,
  setAdjustValue,
}) => {
  const handleChangeAspectX = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setAspectX(e.currentTarget.value)
    },
    []
  )

  const handleChangeAspectY = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setAspectY(e.currentTarget.value)
    },
    []
  )

  const handleChangeAdjust = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setAdjustValue(e.currentTarget.value)
    },
    []
  )

  return (
    <Row border={"#ddd"} padding={10}>
      <div style={{ fontSize: "20px" }}>
        preserveAspectRatio <S>X</S>:
      </div>
      <SelectSet
        options={aspectXOptions}
        onChange={handleChangeAspectX}
        width={80}
      />
      <div style={{ fontSize: "20px" }}>
        <S>Y</S>:
      </div>
      <SelectSet
        options={aspectYOptions}
        onChange={handleChangeAspectY}
        width={80}
      />
      <SelectSet
        options={adjustOptions}
        onChange={handleChangeAdjust}
        width={100}
      />
    </Row>
  )
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
    <Div width={600} height={300} border={"LightSeaGreen"}>
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
          <text
            x="150"
            y="165"
            style={{ fontSize: "30px" }}
            text-anchor="middle"
          >
            200x200
          </text>
        </g>
      </svg>
    </Div>
  )
}
