import { useState } from "react"
import { roundFloat } from "../libs/roundFloat"

interface TargetElement {
  x: number //targetのLeftTop x,y
  y: number
  active: boolean
  xOffset: number
  yOffset: number
}

type Props = {
  initXY?: [number, number]
  sizeWidthHeight: [number, number]
  svgWidthHeight: [number, number]
  alignBy?: number
}

const MOVE_OPACITY = "0.3"

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

  //■ ターゲット
  const [isFixed, setIsFixed] = useState(false)

  //■ ターゲット
  const [isEnabledXMove, setIsEnabledXMove] = useState(true)
  const [isEnabledYMove, setIsEnabledYMove] = useState(true)

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
    if (isFixed) return

    if (element.active !== true) return
    const target = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - target.left
    const y = e.clientY - target.top

    //移動制限
    const newElement = {
      ...element,
      x: isEnabledXMove
        ? roundFloat(element.x - (element.xOffset - x))
        : element.x,
      y: isEnabledYMove
        ? roundFloat(element.y - (element.yOffset - y))
        : element.y,
    }
    setElement(newElement)
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
      attr: {
        width: sizeWidth,
        height: sizeHeight,
        x: element.x,
        y: element.y,
        cx: element.x,
        cy: element.y,
        r: sizeWidth,
        style: { cursor: "pointer" },
      },
      event: {
        onPointerDown: handlePointerDown,
        onPointerUp: handlePointerUp,
        onPointerMove: handlePointerMove,
      },
      method: {
        setIsFixed,
        setIsEnabledXMove,
        setIsEnabledYMove,
      },
    },
  }
}

//■ ターゲットを PointerUp 時に可視範囲に戻す
const rangeWithin = (
  value: number,
  min: number,
  max: number,
  targetSize: number
) => {
  return value < min ? min : value > max - targetSize ? max - targetSize : value
}

//■ ターゲットを グリッドに整列(Alignment)
const getAlignBy = (value: number, alignBy: number) => {
  const rest = value % alignBy

  const newValue = rest < alignBy / 2 ? value - rest : value + (alignBy - rest)
  const arranged = !rest ? value : newValue
  return arranged
}
