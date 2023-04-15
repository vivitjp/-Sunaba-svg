import { ReactNode } from "react"
import { Circle } from "../Circle"
import { Ellipse } from "../Ellipse"
import { Line } from "../Line"
import { Polygon } from "../Polygon"
import { Polyline } from "../Polyline"
import { Rectangle } from "../Rectangle"
import { RectangleRadius } from "../RectangleRadius"
import { Options } from "~/component/SelectSet"

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
  Polyline,
  Polygon,
  Rectangle,
  Circle,
  Ellipse,
  RectangleRadius,
]

export const shapesOptions: Options<string>[] = shapes.map(({ title }) => ({
  title: title,
  value: title,
}))
