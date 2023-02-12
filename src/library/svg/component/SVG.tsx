//--------------------------------------------
// SVG Tag: <SVG>
//--------------------------------------------

import { SVG_URL } from "../const/const"

type SVG = {
  width: number
  height: number
  viewBoxWidth?: number
  viewBoxHeight?: number
  children: React.ReactNode
} & React.SVGProps<SVGSVGElement>

export const SVG: React.FC<SVG> = ({
  width,
  height,
  viewBoxWidth = width,
  viewBoxHeight = height,
  children,
  preserveAspectRatio = "xMinYMin meet",
  ...args
}: SVG) => {
  return (
    <svg
      {...args}
      width={width}
      height={height}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      xmlns={SVG_URL}
      preserveAspectRatio={preserveAspectRatio}
    >
      {children}
    </svg>
  )
}
