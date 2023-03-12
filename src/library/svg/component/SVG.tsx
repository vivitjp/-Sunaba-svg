//--------------------------------------------
// SVG Tag: <SVG>
//--------------------------------------------

import { useMemo } from "react"
import { SVG_URL } from "../const/const"
import { getViewbox } from "~/library"

export type SVG = {
  width: number
  height: number
  ratio?: number
  margin?: number
  children: React.ReactNode
  viewbox?: string
  marginTLOnly?: boolean
} & React.SVGProps<SVGSVGElement>

export const SVG: React.FC<SVG> = ({
  width,
  height,
  ratio = 1,
  margin = 0,
  children,
  viewbox,
  preserveAspectRatio = "xMinYMin meet",
  marginTLOnly = false,
  ...args
}: SVG) => {
  const viewboxByRatio = useMemo(() => {
    return getViewbox({ width, height, margin, ratio, marginTLOnly })
  }, [width, height, margin, ratio])

  return (
    <svg
      {...args}
      width={width}
      height={height}
      viewBox={viewbox ?? viewboxByRatio}
      xmlns={SVG_URL}
      preserveAspectRatio={preserveAspectRatio}
    >
      {children}
    </svg>
  )
}
