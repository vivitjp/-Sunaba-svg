//--------------------------------------------
// SVG Tag: <Path>
//
// stroke-dasharray="4 4" 破線
//--------------------------------------------
type Path = {
  path: string
} & React.SVGProps<SVGPathElement>

export const Path: React.FC<Path> = ({
  path,
  stroke = "#777",
  fill = "none",
  fillRule = "evenodd",
  strokeWidth = 1,
  filter,
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
      {...arg}
    >
      {children}
    </path>
  )
}
