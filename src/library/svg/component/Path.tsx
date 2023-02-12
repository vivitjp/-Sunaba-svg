//--------------------------------------------
// SVG Tag: <Path>
//--------------------------------------------

type Path = {
  path: string
  marker?: string
} & React.SVGProps<SVGPathElement>

export const Path: React.FC<Path> = ({
  path,
  stroke = "#777",
  fill = "none",
  fillRule = "evenodd",
  strokeWidth = 1,
  filter,
  marker,
  children,
  ...arg
}: Path) => {
  if (!path) return <></>

  return (
    <path
      d={path}
      fillRule={fillRule}
      stroke={stroke}
      fill={fill}
      strokeWidth={strokeWidth}
      filter={filter && `url(#${filter})`}
      markerStart={marker ? `url(#${marker})` : ""}
      markerMid={marker ? `url(#${marker})` : ""}
      markerEnd={marker ? `url(#${marker})` : ""}
      {...arg}
    >
      {children}
    </path>
  )
}
