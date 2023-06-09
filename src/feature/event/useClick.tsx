import { useState } from "react"
import { UseReturnType } from "~/component"
import { useCheck } from "~/library"

export function useClick(): UseReturnType {
  const title = `イベント(event)`

  const Fill = useCheck({
    title: "塗り",
    subTitle: "fill",
    initValue: true,
  })

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

  const [xyInside, setXyInside] = useState<[number, number]>([0, 0])
  const handleClickInside = (e: React.MouseEvent<SVGCircleElement>) => {
    setXyInside([e.clientX, e.clientY])
  }

  const [xyOutside, setXyOutside] = useState<[number, number]>([0, 0])
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    setXyOutside([e.clientX, e.clientY])
  }

  const code = `const handleMouse = (flag: boolean) => {}
const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {}
const handleClickInside = (e: React.MouseEvent<SVGCircleElement>) => {}
   
<div onClick={handleClickOutside}> => ${xyOutside[0]}:${xyOutside[1]}
  <svg width={700} height={200}>
    <circle cx={100} cy={100} r={60} fill="${
      Fill.value ? hover.fill : "none"
    }" stroke="${hover.stroke}" strokeWidth="${hover.strokeWidth}"
      pointerEvents="fill" //Mouse反応対象
      onMouseEnter={() => handleMouse(true)}
      onMouseLeave={() => handleMouse(false)}
      onClick={handleClickInside} => ${xyInside[0]}:${xyInside[1]}
    />
  </svg>
</div>`

  const jsx = (
    <div onClick={handleClickOutside}>
      <svg width={700} height={200}>
        <circle
          cx={100}
          cy={100}
          r={60}
          fill={Fill.value ? hover.fill : "none"}
          stroke={hover.stroke}
          strokeWidth={hover.strokeWidth}
          pointerEvents="fill"
          onMouseEnter={() => handleMouse(true)}
          onMouseLeave={() => handleMouse(false)}
          onClick={handleClickInside}
        />
      </svg>
    </div>
  )

  return { height: 200, title, code, options: [Fill], jsx }
}
