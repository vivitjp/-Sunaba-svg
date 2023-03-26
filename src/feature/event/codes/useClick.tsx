import { useState } from "react"

export function useClick() {
  const title = `イベント(event)`

  const handleClick = (e: React.MouseEvent<SVGCircleElement>) => {
    setCoordinates([e.clientX, e.clientY])
  }

  type Hover = {
    fill: string
    stroke: string
    strokeWidth: number
  }

  const hoverDefault: Hover = {
    fill: "tomato",
    stroke: "none",
    strokeWidth: 0,
  }
  const hoverEntered: Hover = {
    fill: "orange",
    stroke: "red",
    strokeWidth: 3,
  }

  const [hover, setHover] = useState<Hover>(hoverDefault)
  const handleMouse = (flag: boolean) => {
    setHover(flag ? hoverEntered : hoverDefault)
  }

  const [coordinates, setCoordinates] = useState<[number, number]>([0, 0])

  const code = `<svg width={700} height={200}>
  <text x={5} y={5} fill="#555" textAnchor="start"> ${coordinates[0]}:${coordinates[1]} </text>

  {/* fill="none" には onClick が反応しない */}
  <path d="M0,0 h700v200h-700z" fill="white" onClick={handleClick} />

  <circle cx={100} cy={100} r={60} fill="${hover.fill}" stroke="${hover.stroke}" strokeWidth="${hover.strokeWidth}"
    pointerEvents="fill"
    onMouseEnter={() => handleMouse(true)}
    onMouseLeave={() => handleMouse(false)}
  />
</svg>`

  const jsx = (
    <svg width={700} height={200}>
      {/* fill="none" には onClick が反応しない */}
      <path d="M0,0 h700v200h-700z" fill="white" onClick={handleClick} />

      <circle
        cx={100}
        cy={100}
        r={60}
        fill={hover.fill}
        stroke={hover.stroke}
        strokeWidth={hover.strokeWidth}
        pointerEvents="fill"
        onMouseEnter={() => handleMouse(true)}
        onMouseLeave={() => handleMouse(false)}
      />

      <text x={5} y={5} fill="#555" textAnchor="start">
        {`${coordinates[0]}:${coordinates[1]}`}
      </text>
    </svg>
  )

  return { height: 200, title, code, options: [], jsx }
}
