import { useRange } from "~/library"
import { useSVGDragDrop } from "../hooks/useSVGDragDrop"

export function useDragDrop() {
  const title = `Simple Drag and Drop`

  const AlignmentGap = useRange({
    title: "整列グリッド",
    initValue: 20,
    range: [0, 50],
    step: 10,
  })

  const { dragDropProps } = useSVGDragDrop({
    initX: 100,
    initY: 100,
    svgWidth: 720,
    svgHeight: 300,
    alignBy: AlignmentGap.value,
  })

  // const Fill = useText({
  //   title: "影の色",
  //   subTitle: "floodColor",
  //   initValue: "#555",
  // })

  const code = `export const useSVGDragDrop = ({
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
 
    //数値調整(SVG表示外チェック、Alignmentチェック)
    const x = !!svgWidth
      ? rangeWithin(1, svgWidth, element.x, alignBy, elWidth)
      : element.x
    const y = !!svgHeight
      ? rangeWithin(1, svgHeight, element.y, alignBy, elHeight)
      : element.y
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

  const arrayWidth = AlignmentGap.value
    ? [...Array(Math.round(720 / AlignmentGap.value))].fill(0)
    : []
  const arrayHeight = AlignmentGap.value
    ? [...Array(Math.round(720 / AlignmentGap.value))].fill(0)
    : []

  const jsx = (
    <svg width={720} height={300}>
      {AlignmentGap.value > 0 &&
        arrayWidth.map((_, index) => (
          <line
            x1={0}
            y1={index * AlignmentGap.value}
            x2={720}
            y2={index * AlignmentGap.value}
            stroke="#eee"
            fill="none"
          />
        ))}
      {AlignmentGap.value > 0 &&
        arrayHeight.map((_, index) => (
          <line
            x1={index * AlignmentGap.value}
            y1={0}
            x2={index * AlignmentGap.value}
            y2={500}
            stroke="#eee"
            fill="none"
          />
        ))}
      <rect
        fill="yellow"
        stroke="blue"
        width={100}
        height={100}
        {...dragDropProps}
      />
    </svg>
  )

  return { title, code, options: [AlignmentGap], jsx }
}
