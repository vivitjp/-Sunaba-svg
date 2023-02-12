type FilterShadow = {
  id: string
  d?: number[]
  deviation?: number
  color?: string
}

export const FilterShadow: React.FC<FilterShadow> = ({
  id,
  d = [0, 0],
  deviation = 5,
  color = "#000",
}: FilterShadow) => {
  return (
    <filter id={id}>
      <feDropShadow
        dx={d[0]}
        dy={d[1]}
        stdDeviation={deviation}
        floodColor={color}
      />
    </filter>
  )
}
