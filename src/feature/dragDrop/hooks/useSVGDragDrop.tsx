import { useState } from "react"

interface TargetElement {
  x: number //targetのLeftTop x,y
  y: number
  active: boolean
  xOffset: number
  yOffset: number
}

type Props = {
  initX?: number
  initY?: number
  svgWidth?: number
  svgHeight?: number
  alignBy?: number
}

const MOVE_OPACITY = "0.3"

export const useSVGDragDrop = ({
  initX = 0,
  initY = 0,
  svgWidth = 0,
  svgHeight = 0,
  alignBy = 0,
}: Props) => {
  const [element, setElement] = useState<TargetElement>({
    x: initX,
    y: initY,
    active: false,
    xOffset: 0,
    yOffset: 0,
  })

  const [elWidth, setElWidth] = useState<number>(0)
  const [elHeight, setElHeight] = useState<number>(0)

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
}

//■ PointerUp 時にターゲットを可視範囲に戻す
const rangeWithin = (
  min: number,
  max: number,
  value: number,
  alignBy: number,
  arrange: number
) => {
  const reValue =
    value < min ? min : value > max - arrange ? max - arrange : value
  return alignBy ? getAlignBy(reValue, alignBy) : reValue
}

//■ ターゲットを整列(Alignment)グリッドに合わせる
const getAlignBy = (value: number, alignBy: number) => {
  const rest = value % alignBy
  const newValue = rest < alignBy / 2 ? value - rest : value + (alignBy - rest)

  const arranged = !rest ? value : newValue
  return arranged
}
