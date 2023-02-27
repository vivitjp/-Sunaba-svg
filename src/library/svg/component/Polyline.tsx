//--------------------------------------------
// SVG Tag: <Polyline>
//--------------------------------------------

type Polyline = {
  coordinates: string
  marker?: string
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
      {...arg}
      points={coordinates}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      filter={filter && `url(#${filter})`}
      markerStart={marker ? `url(#${marker})` : ""}
      markerMid={marker ? `url(#${marker})` : ""}
      markerEnd={marker ? `url(#${marker})` : ""}
    >
      {children}
    </polyline>
  )
}
