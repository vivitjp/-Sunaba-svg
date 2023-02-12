type FilterShadow = {
  id: string
  deviation?: number
  color?: string
} & React.SVGProps<SVGFilterElement>

export const FilterShadow: React.FC<FilterShadow> = ({
  id,
  deviation = 5,
  color = "#000",
}: FilterShadow) => {
  return (
    <filter id={id}>
      <feDropShadow stdDeviation={deviation} floodColor={color} />
    </filter>
  )
}
