import React, { ReactNode } from "react"
import { Options } from "~/component/SelectSet"
import { Rectangle } from "./Shapes/Rectangle"
import { Circle } from "./Shapes/Circle"
import { Ellipse } from "./Shapes/Ellipse"
import { Line } from "./Shapes/Line"
import { RectangleRadius } from "./Shapes/RectangleRadius"
import { Polyline } from "./Shapes/Polyline"
import { Polygon } from "./Shapes/Polygon"

type CodeJsx = {
  code: string
  jsx: ReactNode
}

export type Shape = {
  title: string
  shape?: CodeJsx
  absolute?: CodeJsx
  relative?: CodeJsx
}

export const shapes: Shape[] = [
  Line,
  Rectangle,
  RectangleRadius,
  Circle,
  Ellipse,
  Polyline,
  Polygon,
]

export const shapesOptions: Options[] = shapes.map(({ title }) => ({
  title: title,
  value: title,
}))
