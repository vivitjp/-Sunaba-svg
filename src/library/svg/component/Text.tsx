//--------------------------------------------
// SVG Tag: <Text>
//--------------------------------------------

type Text = {
  x: number
  y: number
} & React.SVGProps<SVGTextElement>

export const Text: React.FC<Text> = ({
  x,
  y,
  className = "",
  fontSize = 12,
  fill = "#555",
  stroke = "none",
  strokeWidth = 0,
  textAnchor = "start", //"middle","end"
  fontWeight = "normal",
  fontFamily = "sans-serif",
  filter,
  children,
  ...args
}: Text) => {
  if (!x || !y) return <></>

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
      {children}
    </text>
  )
}
