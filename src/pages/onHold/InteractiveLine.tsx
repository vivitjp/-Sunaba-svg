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

export const InteractiveLine = () => {
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
            {coordinateSet.map(({ color, coordinates, id, name }) => {
              const newCoordinateSet = getCoordinatesByRatio(coordinates, RATIO)
              return (
                <g key={id} id={`part-${id}`}>
                  {newCoordinateSet.map((coordinate, idx) => {
                    const path = line(coordinate)

                    return (
                      <React.Fragment key={idx}>
                        <Path
                          path={path}
                          marker={"idMarkerCircle"}
                          stroke={color}
                          strokeWidth={selected === id ? "3" : "2"}
                          filter={selected === id ? "idShadow" : ""}
                        >
                          <Tooltip>{name}</Tooltip>
                        </Path>
                        <Path
                          path={path}
                          stroke={"rgba(255, 255, 255, 0)"}
                          strokeWidth={10 * RATIO}
                          onMouseEnter={() => {
                            setSelected(id)
                          }}
                          onMouseLeave={() => {
                            setSelected(null)
                          }}
                        />
                      </React.Fragment>
                    )
                  })}
                </g>
              )
            })}
          </Group>
        </SVG>
      </div>
    </>
  )
}
