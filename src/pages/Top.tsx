import { useCallback } from "react"
import { FilterShadow, Group, Path, SVG, line, MarkerCircle } from "../library"

export const Top = () => {
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
            <MarkerCircle id="idMarkerCircle" R={10} />
            <FilterShadow id="idShadow" />
            <Path
              id="part1"
              path={line({ d1: [100, 100], d2: [600, 400] })}
              stroke="green"
              strokeWidth="2"
              marker-start="url(#idMarkerCircle)"
              marker-end="url(#idMarkerCircle)"
            >
              <title>Hello World</title>
              <animate
                attributeName="stroke-width"
                values="2;4;2"
                dur="4s"
                repeatCount="indefinite"
              />
            </Path>
          </defs>
          {/* <use xlinkHref="#part1" /> */}
          <Group id="target" filter="idShadow" />
        </SVG>
      </div>
    </>
  )
}
