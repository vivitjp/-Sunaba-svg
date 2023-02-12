//--------------------------------------------
// SVG Tag: <Polyline>
//--------------------------------------------
type Polyline = {
  points: string
  marker?: string
} & React.SVGProps<SVGPolylineElement>

export const Polyline: React.FC<Polyline> = ({
  points,
  stroke = "#777",
  fill = "none",
  strokeWidth = 1,
  filter,
  children,
  marker,
  ...arg
}: Polyline) => {
  if (!points) return <></>

  return (
    <polyline
      points={points}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      filter={filter && `url(#${filter})`}
      markerStart={marker ? `url(#${marker})` : ""}
      markerMid={marker ? `url(#${marker})` : ""}
      markerEnd={marker ? `url(#${marker})` : ""}
      {...arg}
    />
  )
}
