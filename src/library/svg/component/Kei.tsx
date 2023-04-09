import { FC } from "react"

type RuledLine = {
  width: number
  height: number
  gap: number
}

export const RuledLine: FC<RuledLine> = ({ width, height, gap }) => {
  const arrayWidth = gap ? [...Array(Math.round(width / gap))].fill(0) : []
  const arrayHeight = gap ? [...Array(Math.round(width / gap))].fill(0) : []
  return (
    <>
      {gap > 0 &&
        arrayWidth.map((_, index) => (
          <line
            key={index}
            x1={0}
            y1={index * gap}
            x2={width}
            y2={index * gap}
            stroke="#eee"
            fill="none"
          />
        ))}
      {gap > 0 &&
        arrayHeight.map((_, index) => (
          <line
            key={index}
            x1={index * gap}
            y1={0}
            x2={index * gap}
            y2={height}
            stroke="#eee"
            fill="none"
          />
        ))}
    </>
  )
}
