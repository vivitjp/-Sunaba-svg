//--------------------------------------------
// SVG Tag: <Text>
//--------------------------------------------
type Text = {
  x: number
  y: number
  text: string
} & React.SVGProps<SVGTextElement>

export const Text: React.FC<Text> = ({
  x,
  y,
  text,
  className = "",
  fontSize = 12,
  fill = "#555",
  stroke = "none",
  strokeWidth = 0,
  textAnchor = "start",
  fontWeight = "normal",
  fontFamily = "sans-serif",
  filter,
  ...args
}: Text) => {
  if (!x || !y || !text) return <></>

  return (
    <text
      {...args}
      x={x}
      y={y}
      className={className}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      textAnchor={textAnchor}
      fontWeight={fontWeight}
      fontFamily={fontFamily}
      style={fontSize ? { fontSize: `${fontSize}px` } : {}}
      filter={filter && `url(#${filter})`}
    >
      {text}
    </text>
  )
}
