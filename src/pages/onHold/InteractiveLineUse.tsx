import React from "react"
import { useState } from "react"
import {
  Coordinate,
  FilterShadow,
  Group,
  MarkerCircle,
  Path,
  SVG,
  Tooltip,
  Use,
  line,
} from "~/library"
import { getCoordinatesByRatio } from "~/library/svg/lib/coordinates"

type Polyline = {
  id: string
  coordinates: { d1: Coordinate; d2: Coordinate }[]
  name: string
  color: string
}

const RATIO = 3 //VIEW 拡大率

const coordinateSet: Polyline[] = [
  {
    coordinates: [
      { d1: [100, 150], d2: [200, 220] },
      { d1: [200, 220], d2: [250, 150] },
    ],
    name: "Happiness",
    id: "1",
    color: "blue",
  },
]

export const InteractiveLineUse = () => {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <>
      <div>
        <SVG height={300} width={500} ratio={RATIO}>
          <defs>
            <MarkerCircle id="idMarkerCircle" R={10} />
            <FilterShadow id="idShadow" />

            {coordinateSet.map(({ coordinates, id, name }) => {
              const newCoordinateSet = getCoordinatesByRatio(coordinates, RATIO)
              return (
                <g key={id} id={`part-${id}`}>
                  {newCoordinateSet.map((coordinate, idx) => {
                    return (
                      <Path
                        key={idx}
                        path={line(coordinate)}
                        marker={"idMarkerCircle"}
                        strokeWidth={3}
                      >
                        <Tooltip>{name}</Tooltip>
                      </Path>
                    )
                  })}
                </g>
              )
            })}
          </defs>
          <Group>
            {coordinateSet.map(({ color, id }) => (
              <React.Fragment key={id}>
                <Use
                  id={`part-${id}`}
                  stroke={color}
                  //Use の使い方に注意
                  //strokeWidth={selected === id ? "10" : "2"} 作動せず
                  filter={selected === id ? "idShadow" : ""}
                />
                <Use
                  id={`part-${id}`}
                  stroke={"rgba(255, 255, 255, 0)"}
                  //strokeWidth={10 * RATIO} //作動せず
                  onMouseEnter={() => setSelected(id)}
                  onMouseLeave={() => setSelected(null)}
                />
              </React.Fragment>
            ))}
          </Group>
        </SVG>
      </div>
    </>
  )
}
