import { useMemo } from "react"
import { useRange } from "~/library"
import { roundFloat } from "~/library/libs/roundFloat"

export function useTangentByY() {
  const title = `三角関数(Tangent) Y基準`

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
    [theta, MaxX.value]
  )

  const Y = useRange({
    title: "Y値",
    initValue: 200,
    range: [100, 280],
    step: 10,
  })

  const X1 = useMemo(() => {
    return roundFloat(Y.value / Math.tan(theta), 4) // X取得
  }, [theta, Y.value])

  const code = `θ: ${theta} = Math.atan2(${MaxY}, ${MaxX.value})
x: ${X1} = Math.tan(${Y.value} / ${theta})
 
<svg width={700} height={300}>
  <path
    d={"M0,${MaxY} l${X1},-${Y.value} l0,${Y.value}z"}
    stroke="red"
    fill="#eee"
  />
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
          d={`M0,${MaxY} l${X1},-${Y.value} l0,${Y.value}z`}
          stroke="red"
          fill="#eee"
        />
        <path
          d={`M0,${MaxY - Y.value} h${X1}`}
          stroke="#aaa"
          strokeDasharray="4 1"
        />
      </g>

      <g data-note="XY値">
        <text x={X1 + 10} y={MaxY - 10} style={cssStyle}>
          {X1}
        </text>
        <text x={10} y={MaxY - Y.value} style={cssStyle} textAnchor="start">
          {Y.value}
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
    options: [MaxX, Y],
    jsx,
  }
}
