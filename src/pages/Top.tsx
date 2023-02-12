import React, { useCallback, useState } from "react"
import { FilterShadow, Group, Path, SVG, line } from "../library"

export const Top = () => {
  const [xxxx, setXxxx] = useState<string>("")

  const handleClick = useCallback(() => {
    const target = document.getElementById("target")
    const body = document.getElementById("part1")
    if (body) target?.appendChild(body)
  }, [])

  return (
    <>
      <input type="button" onClick={handleClick} value="Click" />
      <div>
        <SVG height={300} width={500} viewBoxHeight={900} viewBoxWidth={1500}>
          <defs>
            <Path
              id="part1"
              path={line({ d1: [100, 100], d2: [600, 400] })}
              stroke="green"
              strokeWidth="2"
            >
              <title>Hello World</title>
              <animate
                attributeName="stroke-width"
                values="2;5;2"
                dur="3s"
                repeatCount="indefinite"
              />
            </Path>
          </defs>
          <FilterShadow id="idShadow" />
          {/* <use xlinkHref="#part1" /> */}
          <Group id="target" filter="idShadow"></Group>
        </SVG>
      </div>
    </>
  )
}
