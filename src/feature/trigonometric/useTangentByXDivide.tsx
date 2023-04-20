import { useMemo } from "react"
import { UseReturnType } from "~/component"
import { useRange } from "~/library"
import { roundFloat } from "~/library/libs/roundFloat"

export function useTangentByXDivide(): UseReturnType {
  const title = `Y基準による線分割`

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

  const YAxis = [
    { start: 0, end: 60, color: "red" },
    { start: 60, end: 120, color: "blue" },
    { start: 120, end: 180, color: "green" },
    { start: 180, end: 240, color: "orange" },
    { start: 240, end: 300, color: "purple" },
  ]

  //Xを100ごとに分割して座標取得
  const XYS = useMemo(() => {
    return YAxis.map((Y) => {
      const x1 = roundFloat(Y.start / Math.tan(theta), 4)
      const x2 = roundFloat(Y.end / Math.tan(theta), 4)
      return [
        [x1, Y.start],
        [x2, Y.end],
      ]
    })
  }, [MaxX.value])

  const code = `<svg width={700} height={300} preserveAspectRatio="xMinYMin slice">
  <g fillOpacity="0.1">
    ${YAxis.map(
      ({ start, end, color }) =>
        `<rect x="0" y="${MaxY - end}" width="700" height="${
          end - start
        }" fill="${color}" />`
    )
      .join("\n    ")
      .replaceAll(",", "")}
  </g>
  <g width={700} height={300} preserveAspectRatio="xMinYMin slice">
    ${XYS.map(
      ([[x1, y1], [x2, y2]], index) =>
        `<path d="M${x1},${y1} l${x2},${y2}" stroke="${YAxis[index].color}"`
    )
      .join("\n    ")
      .replaceAll(",", "")}
  </g>
</svg>`

  const jsx = (
    <svg width={700} height={300} preserveAspectRatio="xMinYMin slice">
      <g fillOpacity="0.1">
        {YAxis.map(({ start, end, color }, index) => (
          <rect
            key={index}
            x={0}
            y={MaxY - end}
            width={700}
            height={end - start}
            fill={color}
          />
        ))}
      </g>
      <g
        strokeWidth={1.3}
        strokeOpacity={0.8}
        fill="none"
        transform="scale(1,-1)"
        transform-origin="50% 50%"
      >
        {XYS.map(([[x1, y1], [x2, y2]], index) => (
          <path
            key={index}
            d={`M${x1},${y1} l${x2},${y2}`}
            stroke={YAxis[index].color ?? "#555"}
          />
        ))}
      </g>
    </svg>
  )

  return {
    title,
    code,
    options: [MaxX],
    jsx,
  }
}
