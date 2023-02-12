const URL = "http://www.w3.org/2000/svg"

//--------------------------------------------
// SVG Tag: <SVG>
//--------------------------------------------
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
      xmlns={URL}
      preserveAspectRatio={preserveAspectRatio}
    >
      {children}
    </svg>
  )
}
