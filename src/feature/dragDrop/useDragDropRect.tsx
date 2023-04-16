import { useSVGDragDrop } from "../../library/hooks/useSVGDragDrop"
import { UseReturnType } from "~/component"

export function useDragDropRect(): UseReturnType {
  const title = `Drag and Drop`

  const { dragDropProps: rectDD } = useSVGDragDrop({
    initXY: [100, 100],
    sizeWidthHeight: [60, 60],
    svgWidthHeight: [720, 200],
  })

  const { dragDropProps: circleDD } = useSVGDragDrop({
    initXY: [200, 100],
    sizeWidthHeight: [30, 30],
    svgWidthHeight: [720, 200],
  })

  const code = `<svg width={720} height={200}>
  <rect {...dragDropProps1} x="${rectDD.x - Math.round(rectDD.width / 2)}" y="${
    rectDD.y - Math.round(rectDD.height / 2)
  }" fill="green" />
  <text x="${rectDD.x}" y="${rectDD.y + rectDD.height / 2}" >${rectDD.x}:${
    rectDD.y
  }</text>
  <circle {...dragDropProps2} fill="orange" />
  <text x="${circleDD.cx}" y="${circleDD.cy + circleDD.height}">${
    circleDD.cx
  }:${circleDD.cy}</text>
</svg>`

  const jsx = (
    <svg width={720} height={200}>
      <rect
        {...rectDD}
        x={rectDD.x - Math.round(rectDD.width / 2)}
        y={rectDD.y - Math.round(rectDD.height / 2)}
        fill="green"
      />
      <text
        x={rectDD.x}
        y={rectDD.y + rectDD.height / 2}
        textAnchor="middle"
        dominantBaseline="hanging"
        style={{ fontSize: "12px" }}
      >
        {rectDD.x}:{rectDD.y}
      </text>
      <circle {...circleDD} fill="orange" />
      <text
        x={circleDD.cx}
        y={circleDD.cy + circleDD.height}
        textAnchor="middle"
        dominantBaseline="hanging"
        style={{ fontSize: "12px" }}
      >
        {circleDD.cx}:{circleDD.cy}
      </text>
    </svg>
  )

  return { height: 200, code, title, options: [], jsx }
}
