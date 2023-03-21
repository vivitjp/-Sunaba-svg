import React from "react"
import { useState } from "react"
import styled from "styled-components"
import {
  Animate,
  Coordinate,
  FilterShadow,
  Group,
  MarkerCircle,
  SVG,
  Polyline,
  Tooltip,
  getPoints,
} from "~/library"

type Polylines = {
  id: string
  coordinates: Coordinate[]
  name: string
  color: string
}

const RATIO = 3 //VIEW 拡大率

const coordinateSet: Polylines[] = [
  {
    coordinates: [
      [100, 150],
      [200, 220],
      [300, 200],
      [400, 180],
    ],
    name: "Happiness",
    id: "1",
    color: "blue",
  },
  {
    coordinates: [
      [100, 120],
      [200, 250],
      [300, 240],
      [400, 100],
    ],
    name: "Obligation",
    id: "2",
    color: "green",
  },
]

export const PolylineAnime = () => {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <>
      <div>
        <SVG width={500} height={300} ratio={RATIO}>
          <defs>
            <MarkerCircle id="idMarkerCircle" R={10} />
            <FilterShadow id="idShadow" />
          </defs>
          <Group id="lines">
            {coordinateSet.map(({ id, coordinates, name, color }) => {
              const coordinate = getPoints(coordinates, RATIO)
              return (
                <React.Fragment key={id}>
                  <Polyline
                    id={`polyline-${id}`}
                    coordinates={coordinate}
                    strokeWidth={3}
                    stroke={color}
                    marker={"idMarkerCircle"}
                    filter={selected === id ? "idShadow" : ""}
                  >
                    <Tooltip>{name}</Tooltip>
                    {selected === id && (
                      <Animate
                        attributeName="stroke-width"
                        values="2;4;2"
                        dur={4}
                        begin={0}
                      />
                    )}
                  </Polyline>
                  <Polyline
                    id={`polyline-${id}`}
                    coordinates={coordinate}
                    strokeWidth={30}
                    stroke={`rgba(255, 255, 255, 0)`}
                    onMouseEnter={() => setSelected(id)}
                    onMouseLeave={() => setSelected(null)}
                  />
                </React.Fragment>
              )
            })}
          </Group>
        </SVG>
      </div>
    </>
  )
}
