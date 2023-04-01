import { useMemo } from "react"
import { useRange } from "~/library"
import { roundFloat2 } from "~/library/libs/roundFloat"

export function useTangentByX() {
  const title = `三角関数(Tangent)`

  const MaxY = 300
  const MaxX = useRange({
    title: "X最大値変更による角度定義",
    initValue: 600,
    range: [300, 900],
    step: 10,
  })

  const theta = useMemo(
    () => roundFloat2(Math.atan2(MaxY, MaxX.value), 4),
    [MaxX.value]
  )
  const angle = useMemo(
    () => roundFloat2((Math.atan2(MaxY, MaxX.value) * 180) / Math.PI, 4),
    [theta]
  )

  const X = useRange({
    title: "X値",
    initValue: 300,
    range: [100, 600],
    step: 10,
  })

  const Y1 = useMemo(() => {
    return roundFloat2(Math.tan(theta) * X.value, 4)
  }, [X.value, MaxX.value])

  const code = `
  const θ:${theta} = Math.atan2(${MaxY}, ${MaxX.value})
  const y:${Y1} = Math.tan(${theta} * ${X.value})
 
  <svg width={700} height={300}>
  <path
    d={"M0,${MaxY} l${X.value},-${Y1} l0,${Y1}z"}
    stroke="red"
    fill="#eee"
  />
</svg>`

  const handleClick = (e: React.MouseEvent<SVGPathElement>) => {
    console.log(123)
    //e.stopPropagation()
  }

  const cssStyle = { fontSize: "20px", fontWeight: 400 }

  const jsx = (
    <svg width={700} height={300} preserveAspectRatio="xMinYMin slice">
      <g data-note="傾斜線">
        <path
          d={`M0,${MaxY} l${MaxX.value},-${MaxY}`}
          stroke="#aaa"
          fill="none"
        />
      </g>
      <g data-note="生成三角形">
        <path
          d={`M0,${MaxY} l${X.value},-${Y1} l0,${Y1}z`}
          stroke="red"
          fill="#eee"
          onClick={handleClick}
        />
        <text
          x={X.value + 10}
          y={MaxY - 10}
          style={cssStyle}
          textAnchor="start"
        >
          {X.value}
        </text>
      </g>
      <g data-note="角度とθ">
        <text x={60} y={30} style={cssStyle} textAnchor="end">
          角度:
        </text>
        <text x={70} y={30} style={cssStyle}>
          {angle}
        </text>
        <text x={60} y={56} style={cssStyle} textAnchor="end">
          θ:
        </text>
        <text x={70} y={56} style={cssStyle}>
          {theta}
        </text>
      </g>
    </svg>
  )

  return {
    title,
    code,
    options: [MaxX, X],
    jsx,
  }
}
