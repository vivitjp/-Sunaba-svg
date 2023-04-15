import { useMemo } from "react"
import { UseReturnType } from "~/component"
import { useRange } from "~/library"
import { roundFloat } from "~/library/libs/roundFloat"

export function useTangentByXDivide(): UseReturnType {
  const title = `三角関数(Tangent) X基準(分割)`

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

  const YColors = ["red", "blue", "green", "orange", "purple"]

  //Xを100ごとに分割して座標取得
  const XYS = useMemo(() => {
    return [...Array(5)].map((_, index) => {
      const [x1, x2] = [100 * index, 100 * (index + 1)]
      const y1 = roundFloat(Math.tan(theta) * x1, 4)
      const y2 = roundFloat(Math.tan(theta) * x2, 4)
      return [
        [x1, y1],
        [x2, y2],
      ]
    })
  }, [MaxX.value])

  const code = ``

  const cssStyle = { fontSize: "20px", fontWeight: 400 }

  const jsx = (
    <svg width={700} height={300} preserveAspectRatio="xMinYMin slice">
      {/* <g data-note="傾斜線">
        <path
          d={`M0,${MaxY} l${MaxX.value},-${MaxY}`}
          stroke="#aaa"
          fill="none"
        />
      </g> */}
      <g data-note="生成三角形">
        {XYS.map(([[x1, y1], [x2, y2]], index) => (
          <path
            key={index}
            d={`M${x1},${y1} l${x2},${y2}`}
            stroke={YColors[index] ?? "#555"}
            fill="none"
            transform="scale(1,-1)"
            transform-origin="50% 50%"
          />
        ))}
      </g>
      {/* <g data-note="補助線とXY値">
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
      </g> */}
    </svg>
  )

  return {
    title,
    code,
    options: [MaxX],
    jsx,
  }
}
