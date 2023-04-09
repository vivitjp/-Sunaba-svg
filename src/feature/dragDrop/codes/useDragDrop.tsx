import { CodeKeyType, useRange } from "~/library"
import { useSVGDragDrop } from "../hooks/useSVGDragDrop"
import { RuledLine } from "~/library/svg/component/Kei"

export function useDragDrop() {
  const title = `Simple Drag and Drop`

  const AlignmentGap = useRange({
    title: "整列グリッド",
    initValue: 40,
    range: [0, 50],
    step: 10,
  })

  const { dragDropProps } = useSVGDragDrop({
    initXY: [80, 80],
    sizeWH: [60, 60],
    svgWH: [720, 300],
    alignBy: AlignmentGap.value,
  })

  const { dragDropProps: squareCenterProps } = useSVGDragDrop({
    initXY: [320, 120],
    sizeWH: [60, 60],
    svgWH: [720, 300],
    alignBy: AlignmentGap.value,
  })

  const { dragDropProps: circleCenterProps } = useSVGDragDrop({
    initXY: [440, 120],
    sizeWH: [20, 20],
    svgWH: [720, 300],
    alignBy: AlignmentGap.value,
  })

  const codeKeyType: CodeKeyType = "JSTS"
  const code = `//Props型,TargetElement型定義省略
export const useSVGDragDrop = ({
  initX = 0, initY = 0, svgWidth = 0, svgHeight = 0, alignBy = 0,
}: Props) => {
  const [element, setElement] = useState<TargetElement>({
    x: initX, y: initY, active: false, xOffset: 0, yOffset: 0,
  })
 
  const [elWidth, setElWidth] = useState<number>(0)
  const [elHeight, setElHeight] = useState<number>(0)
 
  //■ Pointer Down
  const handlePointerDown = (e: React.PointerEvent<SVGElement>) => {
    //キャプチャターゲットとして指定(必須)
    e.currentTarget.setPointerCapture(e.pointerId)
 
    //CSS Style変更
    const targetStyle = e.currentTarget.style
    targetStyle.opacity = "0.5"
 
    const target = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - target.left
    const y = e.clientY - target.top
    setElHeight(target.height)
    setElWidth(target.width)
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
    //グリッド整列
 
    setElement({ ...element, x: x, y: y, active: false })
  }
 
  return {
    dragDropProps: {
      x: element.x,
      y: element.y,
      onPointerDown: handlePointerDown,
      onPointerUp: handlePointerUp,
      onPointerMove: handlePointerMove,
    },
  }
}`

  const jsx = (
    <svg width={720} height={300}>
      <RuledLine width={720} height={300} gap={AlignmentGap.value} />

      {/* 長方形(TopLeft) */}
      <rect {...dragDropProps} fill="orange" stroke="black" />
      <text
        x={dragDropProps.x + 30}
        y={dragDropProps.y + 12}
        textAnchor="middle"
        style={{ fontSize: "12px" }}
      >
        {dragDropProps.x}:{dragDropProps.y}
      </text>

      {/* 長方形(center) */}
      <rect
        {...squareCenterProps}
        x={squareCenterProps.x - Math.round(squareCenterProps.width / 2)}
        y={squareCenterProps.y - Math.round(squareCenterProps.height / 2)}
        // x={squareCenterProps.x}
        // y={squareCenterProps.y}
        fill="lightblue"
        stroke="black"
        strokeWidth="0"
      />
      <text
        x={squareCenterProps.x}
        y={squareCenterProps.y - 12}
        textAnchor="middle"
        style={{ fontSize: "12px" }}
      >
        {squareCenterProps.x}:{squareCenterProps.y}
      </text>

      {/* 円(center) */}
      <circle {...circleCenterProps} fill="lightgreen" stroke="black" />
      <text
        x={circleCenterProps.cx}
        y={circleCenterProps.cy - 12}
        textAnchor="middle"
        style={{ fontSize: "12px" }}
      >
        {circleCenterProps.cx}:{circleCenterProps.cy}
      </text>
    </svg>
  )

  return { title, code, codeKeyType, options: [AlignmentGap], jsx }
}
