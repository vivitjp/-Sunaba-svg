type MarkerCircle = {
  id: string
  R?: number
  color?: string
} & React.SVGProps<SVGMarkerElement>

export const MarkerCircle: React.FC<MarkerCircle> = ({
  id,
  R = 10,
  color = "#000",
}: MarkerCircle) => {
  return (
    <marker
      id={id}
      viewBox={`0 0 ${R * 2} ${R * 2}`}
      refX={R}
      refY={R}
      markerWidth={R}
      markerHeight={R}
      color={color}
    >
      <circle cx={R} cy={R} r={R} />
    </marker>
  )
}
