import { useRange } from "~/library"
import { useSVGDragDrop } from "../../library/hooks/useSVGDragDrop"
import { RuledLine } from "~/library/svg/component/Kei"
import { UseReturnType } from "~/component"
import { useId } from "react"

export function useDragDrop(): UseReturnType {
  const title = `Drag and Drop Hooks`

  const AlignmentGap = useRange({
    title: "整列グリッド",
    initValue: 40,
    range: [0, 50],
    step: 10,
  })

  const {
    dragDropProps: { attr: DDSquareCorner, event: DDSquareCornerEvent },
  } = useSVGDragDrop({
    initXY: [80, 80],
    sizeWidthHeight: [60, 60],
    svgWidthHeight: [720, 300],
    alignBy: AlignmentGap.value,
  })

  const {
    dragDropProps: { attr: DDSquareCenter, event: DDSquareCenterEvent },
  } = useSVGDragDrop({
    initXY: [240, 120],
    sizeWidthHeight: [60, 60],
    svgWidthHeight: [720, 300],
    alignBy: AlignmentGap.value,
  })

  const {
    dragDropProps: { attr: DDCircleCenter, event: DDCircleCenterEvent },
  } = useSVGDragDrop({
    initXY: [360, 120],
    sizeWidthHeight: [30, 30],
    svgWidthHeight: [720, 300],
    alignBy: AlignmentGap.value,
  })

  const code = `<svg width={720} height={300}>
  <RuledLine width={720} height={300} gap="${AlignmentGap.value}" />

  <rect {...Drag&DropHooks} fill="blue" />
  <rect {...Drag&DropHooks} fill="blue" stroke="orange" strokeWidth="2" />
  <circle {...Drag&DropHooks} fill="orange" />
</svg>
`
  const id = useId()
  const jsx = (
    <svg width={720} height={300}>
      <defs>
        <symbol id={id} viewBox="0 0 16 16">
          <path
            d="M0,0 L16,16 M0,16 L16,0"
            fill="none"
            strokeWidth={2}
            cursor="pointer"
          />
        </symbol>
      </defs>

      <RuledLine width={720} height={300} gap={AlignmentGap.value} />

      {/* 長方形(TopLeft) */}
      <g {...DDSquareCornerEvent}>
        <rect {...DDSquareCorner} fill="blue" />
        <use
          xlinkHref={`#${id}`}
          x={DDSquareCorner.x - 8}
          y={DDSquareCorner.y - 8}
          width="16"
          height="16"
          stroke="#333"
        />
        <text
          x={DDSquareCorner.x + 30}
          y={DDSquareCorner.y + DDSquareCorner.height + 20}
          textAnchor="miDDle"
          style={{ fontSize: "12px" }}
        >
          {DDSquareCorner.x}:{DDSquareCorner.y}
        </text>
      </g>

      {/* 長方形(center: x,y をセンターに調整) */}
      <g {...DDSquareCenterEvent}>
        <rect
          {...DDSquareCenter}
          x={DDSquareCenter.x - Math.round(DDSquareCenter.width / 2)}
          y={DDSquareCenter.y - Math.round(DDSquareCenter.height / 2)}
          fill="blue"
          stroke="orange"
          strokeWidth="2"
        />
        <use
          xlinkHref={`#${id}`}
          x={DDSquareCenter.x - 8}
          y={DDSquareCenter.y - 8}
          width="16"
          height="16"
          stroke="#fff"
        />
        <text
          x={DDSquareCenter.x}
          y={DDSquareCenter.y + DDSquareCenter.height - 12}
          textAnchor="miDDle"
          style={{ fontSize: "12px" }}
        >
          {DDSquareCenter.x}:{DDSquareCenter.y}
        </text>
      </g>

      {/* 円(center) */}
      <g {...DDCircleCenterEvent}>
        <circle {...DDCircleCenter} fill="orange" />
        <use
          xlinkHref={`#${id}`}
          x={DDCircleCenter.x - 8}
          y={DDCircleCenter.y - 8}
          width="16"
          height="16"
          stroke="red"
        />
        <text
          x={DDCircleCenter.cx}
          y={DDCircleCenter.cy + DDCircleCenter.height + 20}
          textAnchor="miDDle"
          style={{ fontSize: "12px" }}
        >
          {DDCircleCenter.cx}:{DDCircleCenter.cy}
        </text>
      </g>
    </svg>
  )

  return {
    title,
    code,
    options: [AlignmentGap],
    jsx,
  }
}
