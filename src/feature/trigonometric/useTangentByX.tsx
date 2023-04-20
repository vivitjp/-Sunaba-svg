import { useMemo } from "react"
import { UseReturnType } from "~/component"
import { useRange } from "~/library"
import { roundFloat } from "~/library/libs/roundFloat"

export function useTangentByX(): UseReturnType {
  const title = `三角関数(Tangent) X基準`

  const textX = 150

  const MaxY = 300
  const MaxX = useRange({
    title: "X最大値変更による角度定義",
    initValue: 600,
    range: [300, 900],
    step: 10,
  })

  const theta = useMemo(
    () => roundFloat(Math.atan2(MaxY, MaxX.value), 4),
    [MaxX.value]
  )
  const angle = useMemo(
    () => roundFloat((Math.atan2(MaxY, MaxX.value) * 180) / Math.PI, 4),
    [theta]
  )

  const X = useRange({
    title: "X値",
    initValue: 300,
    range: [100, 600],
    step: 10,
  })

  const Y1 = useMemo(() => {
    return roundFloat(Math.tan(theta) * X.value, 4)
  }, [X.value, MaxX.value])

  const code = `θ: ${theta} = Math.atan2(${MaxY}, ${MaxX.value})
y: ${Y1} = Math.tan(${theta} * ${X.value})
 
<svg width={700} height={300}>
  <path d="M0,${MaxY} l${X.value},-${Y1} l0,${Y1}z" stroke="red" fill="#eee" />
</svg>`

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
        />
      </g>
      <g data-note="補助線とXY値">
        <path
          d={`M0,${MaxY - Y1} l${X.value},0`}
          stroke="#aaa"
          strokeDasharray="4 1"
          fill="none"
        />
        <text x={X.value + 10} y={MaxY - 10} style={cssStyle}>
          {X.value}
        </text>
        <text x={10} y={MaxY - Y1 - 10} style={cssStyle}>
          {Y1}
        </text>
      </g>
      <g data-note="角度とθ">
        <text x={textX} y={30} style={cssStyle} textAnchor="end">
          角度:
        </text>
        <text x={textX + 10} y={30} style={cssStyle}>
          {angle}
        </text>
        <text x={textX} y={56} style={cssStyle} textAnchor="end">
          θ:
        </text>
        <text x={textX + 10} y={56} style={cssStyle}>
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
