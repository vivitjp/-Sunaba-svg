import { UseReturnType } from "~/component"
import { useCheck, useRange } from "~/library"

export function useBasic8CrispEdges(): UseReturnType {
  const title = `図形描画の品質`

  const CrispEdges = useCheck({
    title: "精密さ(アンチエイリアス)Off",
    subTitle: "CrispEdges",
    initValue: false,
  })

  const StrokeWidth = useRange({
    title: "線の太さ",
    subTitle: "strokeWidth",
    initValue: 1,
    range: [0.1, 5],
    step: 0.1,
  })

  const [width, height] = [600, 100]
  const margin = 20

  const code = `<svg width="${width}" height="${height}">
${["red", "blue", "#999"]
  .map(
    (color, idx) =>
      `  <path d="${`M${margin} ${margin * (idx + 1)},${width} ${
        margin * (idx + 1)
      }`}" stroke="${color}" strokeWidth="${StrokeWidth.value}"` +
      `${CrispEdges.value ? ` shapeRendering="CrispEdges"` : ""} />\n`
  )
  .join()
  .replaceAll(",", "")}
</svg>`

  const jsx = (
    <svg width={width} height={height}>
      {["red", "blue", "#999"].map((color, idx) => (
        <path
          key={color}
          d={`M${margin} ${margin * (idx + 1)},${width} ${margin * (idx + 1)}`}
          stroke={color}
          strokeWidth={StrokeWidth.value}
          shapeRendering={CrispEdges.value ? "CrispEdges" : ""}
        />
      ))}
    </svg>
  )

  return { height: 100, title, code, options: [CrispEdges, StrokeWidth], jsx }
}
