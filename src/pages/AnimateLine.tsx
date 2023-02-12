import { useCallback } from "react"
import styled from "styled-components"
import {
  Animate,
  FilterShadow,
  Group,
  MarkerCircle,
  Path,
  SVG,
  Tooltip,
  line,
} from "~/library"

export const AnimateLine = () => {
  const handleClick = useCallback(() => {
    const target = document.getElementById("target")
    const body = document.getElementById("part1")
    if (body) target?.appendChild(body)
  }, [])

  return (
    <>
      <Input onClick={handleClick} value="Click" />
      <div>
        <SVG height={300} width={500} viewBoxHeight={900} viewBoxWidth={1500}>
          <defs>
            <MarkerCircle id="idMarkerCircle" R={10} />
            <FilterShadow id="idShadow" />
            <Path
              id="part1"
              path={line({ d1: [100, 100], d2: [600, 400] })}
              stroke="green"
              strokeWidth="2"
              marker={"idMarkerCircle"}
            >
              <Tooltip>Line Happiness</Tooltip>
              <Animate attribute="stroke-width" values="2;4;2" sec={4} />
            </Path>
          </defs>
          {/* <use xlinkHref="#part1" /> */}
          <Group id="target" filter="idShadow" />
        </SVG>
      </div>
    </>
  )
}

const Input = styled.input.attrs({ type: "button" })`
  padding: 0.2rem;
  width: 160px;
  height: 40px;
  color: #999;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  box-shadow: 1px 1px 5px #ccc;
`
