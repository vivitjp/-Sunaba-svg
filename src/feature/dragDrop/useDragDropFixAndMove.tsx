import { useCheck } from "~/library"
import { useSVGDragDrop } from "../../library/hooks/useSVGDragDrop"
import { UseReturnType } from "~/component"
import { useEffect, useId } from "react"

export function useDragDropFixAndMove(): UseReturnType {
  const title = `固定と移動制限`

  const svgSize: [number, number] = [720, 200]
  const [svgWidth, svgHeight] = svgSize

  const {
    dragDropProps: { attr: DDRect, event: DDRectEvent, method: DDRectMethod },
  } = useSVGDragDrop({
    initXY: [60, 70],
    sizeWidthHeight: [60, 60],
    svgWidthHeight: svgSize,
  })
  const {
    dragDropProps: {
      attr: DDCircle,
      event: DDCircleEvent,
      method: DDCircleMethod,
    },
  } = useSVGDragDrop({
    initXY: [200, 100],
    sizeWidthHeight: [30, 30],
    svgWidthHeight: svgSize,
  })

  //Drag&Drop 固定
  const CheckFix = useCheck({
    title: "Drag&Drop 固定",
    initValue: false,
  })
  useEffect(() => {
    DDRectMethod.setIsFixed(CheckFix.value)
    DDCircleMethod.setIsFixed(CheckFix.value)
  }, [CheckFix.value])

  //移動制限
  const CheckXMoveRect = useCheck({
    title: "Rectangle: X軸移動",
    initValue: true,
    callback: DDRectMethod.setIsEnabledXMove,
  })

  const CheckYMoveRect = useCheck({
    title: "Rectangle: Y軸移動",
    initValue: true,
    callback: DDRectMethod.setIsEnabledYMove,
  })

  //移動制限
  const CheckXMoveCircle = useCheck({
    title: "Circle: X軸移動",
    initValue: true,
    callback: DDCircleMethod.setIsEnabledXMove,
  })

  const CheckYMoveCircle = useCheck({
    title: "Circle: Y軸移動",
    initValue: true,
    callback: DDCircleMethod.setIsEnabledYMove,
  })

  const code = `<svg width="${svgWidth}" height="${svgHeight}">
  <rect {...Drag&DropHooks} x="${DDRect.x}" y="${DDRect.y}" fill="green" />
  <circle {...Drag&DropHooks} x="${DDCircle.cx}" y="${DDCircle.cy}" fill="orange" />
</svg>`
  const id = useId()
  const jsx = (
    <svg width={svgWidth} height={200}>
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
      <g {...DDRectEvent}>
        <rect {...DDRect} fill="blue" />
        <use
          xlinkHref={`#${id}`}
          x={DDRect.x - 8}
          y={DDRect.y - 8}
          width="16"
          height="16"
          stroke="#333"
        />
        <text
          x={DDRect.x + DDRect.width / 2}
          y={DDRect.y + DDRect.height}
          textAnchor="middle"
          dominantBaseline="hanging"
          style={{ fontSize: "12px" }}
        >
          {DDRect.x}:{DDRect.y}
        </text>
      </g>

      <g {...DDCircleEvent}>
        <circle {...DDCircle} fill="orange" />
        <use
          xlinkHref={`#${id}`}
          x={DDCircle.x - 8}
          y={DDCircle.y - 8}
          width="16"
          height="16"
          stroke="red"
        />
        <text
          x={DDCircle.cx}
          y={DDCircle.cy + DDCircle.height}
          textAnchor="middle"
          dominantBaseline="hanging"
          style={{ fontSize: "12px" }}
        >
          {DDCircle.cx}:{DDCircle.cy}
        </text>
      </g>
    </svg>
  )

  return {
    height: 200,
    code,
    title,
    options: [
      CheckFix,
      CheckXMoveRect,
      CheckYMoveRect,
      CheckXMoveCircle,
      CheckYMoveCircle,
    ],
    jsx,
  }
}
