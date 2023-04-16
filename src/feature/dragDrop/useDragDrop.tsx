import { CodeKeyType, useRange } from "~/library"
import { useSVGDragDrop } from "../../library/hooks/useSVGDragDrop"
import { RuledLine } from "~/library/svg/component/Kei"
import { UseReturnType } from "~/component"

export function useDragDrop(): UseReturnType {
  const title = `Drag and Drop Hooks`

  const AlignmentGap = useRange({
    title: "整列グリッド",
    initValue: 40,
    range: [0, 50],
    step: 10,
  })

  const { dragDropProps } = useSVGDragDrop({
    initXY: [80, 80],
    sizeWidthHeight: [60, 60],
    svgWidthHeight: [720, 300],
    alignBy: AlignmentGap.value,
  })

  const { dragDropProps: squareCenterProps } = useSVGDragDrop({
    initXY: [320, 120],
    sizeWidthHeight: [60, 60],
    svgWidthHeight: [720, 300],
    alignBy: AlignmentGap.value,
  })

  const { dragDropProps: circleCenterProps } = useSVGDragDrop({
    initXY: [440, 120],
    sizeWidthHeight: [20, 20],
    svgWidthHeight: [720, 300],
    alignBy: AlignmentGap.value,
  })

  const codeKeyType: CodeKeyType = "JSTS"
  const code = `//Props型,TargetElement型定義省略
export const useSVGDragDrop = ({
  initXY: [initX, initY] = [0, 0],
  sizeWidthHeight: [sizeWidth, sizeHeight],
  svgWidthHeight: [svgWidth, svgHeight] = [0, 0],
  alignBy = 0,
}: Props) => {
  const [element, setElement] = useState<TargetElement>({
    x: initX,
    y: initY,
    active: false,
    xOffset: 0,
    yOffset: 0,
  })
 
  //■ Pointer Down
  const handlePointerDown = (e: React.PointerEvent<SVGElement>) => {
    //キャプチャターゲットとして指定(必須)
    e.currentTarget.setPointerCapture(e.pointerId)
 
    //CSS Style変更
    const targetStyle = e.currentTarget.style
    targetStyle.opacity = MOVE_OPACITY
 
    const target = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - target.left
    const y = e.clientY - target.top
    setElement({ ...element, xOffset: x, yOffset: y, active: true })
  }
 
  //■ Pointer Move
  const handlePointerMove = (e: React.PointerEvent<SVGElement>) => {
    if (element.active !== true) return
    const target = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - target.left
    const y = e.clientY - target.top
 
    setElement({
      ...element,
      x: element.x - (element.xOffset - x),
      y: element.y - (element.yOffset - y),
    })
  }
 
  //■ Pointer Up
  const handlePointerUp = (e: React.PointerEvent<SVGElement>) => {
    //キャプチャターゲット解放
    e.currentTarget.releasePointerCapture
 
    //CSS Style変更
    const targetStyle = e.currentTarget.style
    targetStyle.opacity = "1"
 
    let [x, y] = [element.x, element.y]
 
    //SVG表示範囲内外調整
    x = svgWidth && rangeWithin(x, 1, svgWidth, sizeWidth)
    y = svgHeight && rangeWithin(y, 1, svgHeight, sizeHeight)
 
    //グリッド整列
    x = alignBy ? getAlignBy(x, alignBy) : x
    y = alignBy ? getAlignBy(y, alignBy) : y

    setElement({ ...element, x: x, y: y, active: false })
  }
 
  return {
    dragDropProps: {
      width: sizeWidth,
      height: sizeHeight,
      x: element.x,
      y: element.y,
      cx: element.x,
      cy: element.y,
      r: sizeWidth,
      onPointerDown: handlePointerDown,
      onPointerUp: handlePointerUp,
      onPointerMove: handlePointerMove,
    },
  }
}
`

  const jsx = (
    <svg width={720} height={300}>
      <RuledLine width={720} height={300} gap={AlignmentGap.value} />

      {/* 長方形(TopLeft) */}
      <rect {...dragDropProps} fill="orange" stroke="black" />
      <text
        x={dragDropProps.x + 30}
        y={dragDropProps.y + dragDropProps.height + 20}
        textAnchor="middle"
        style={{ fontSize: "12px" }}
      >
        {dragDropProps.x}:{dragDropProps.y}
      </text>

      {/* 長方形(center: x,y をセンターに調整) */}
      <rect
        {...squareCenterProps}
        x={squareCenterProps.x - Math.round(squareCenterProps.width / 2)}
        y={squareCenterProps.y - Math.round(squareCenterProps.height / 2)}
        fill="lightblue"
        stroke="black"
        strokeWidth="0"
      />
      <text
        x={squareCenterProps.x}
        y={squareCenterProps.y + squareCenterProps.height - 12}
        textAnchor="middle"
        style={{ fontSize: "12px" }}
      >
        {squareCenterProps.x}:{squareCenterProps.y}
      </text>

      {/* 円(center) */}
      <circle {...circleCenterProps} fill="lightgreen" stroke="black" />
      <text
        x={circleCenterProps.cx}
        y={circleCenterProps.cy + circleCenterProps.height + 20}
        textAnchor="middle"
        style={{ fontSize: "12px" }}
      >
        {circleCenterProps.cx}:{circleCenterProps.cy}
      </text>
    </svg>
  )

  return { title, code, codeKeyType, options: [AlignmentGap], jsx }
}
