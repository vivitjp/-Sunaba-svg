//--------------------------------------------
// SVG Tag: <Polyline>
//--------------------------------------------

import { ReactNode } from "react"
import { getPoints } from "../lib/points"
import { Coordinate } from "../type/type"

type Polyline = {
  coordinates: Coordinate[]
  marker?: string
  children: ReactNode
} & React.SVGProps<SVGPolylineElement>

export const Polyline: React.FC<Polyline> = ({
  coordinates,
  stroke = "#777",
  fill = "none",
  strokeWidth = 1,
  filter,
  marker,
  children,
  ...arg
}: Polyline) => {
  if (!coordinates.length) return <></>

  return (
    <polyline
      points={getPoints(coordinates)}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      filter={filter && `url(#${filter})`}
      markerStart={marker ? `url(#${marker})` : ""}
      markerMid={marker ? `url(#${marker})` : ""}
      markerEnd={marker ? `url(#${marker})` : ""}
      {...arg}
    >
      {children}
    </polyline>
  )
}
