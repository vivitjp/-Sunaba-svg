import { useState } from "react"

interface TargetElement {
  x: number //targetのLeftTop x,y
  y: number
  active: boolean
  xOffset: number
  yOffset: number
}

type Props = {
  initXY?: [number, number]
  sizeWH: [number, number]
  svgWH: [number, number]
  alignBy?: number
}

const MOVE_OPACITY = "0.3"

export const useSVGDragDrop = ({
  initXY = [0, 0],
  sizeWH,
  svgWH = [0, 0],
  alignBy = 0,
}: Props) => {
  const [element, setElement] = useState<TargetElement>({
    x: initXY[0],
    y: initXY[1],
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
    x = svgWH[0] && rangeWithin(x, 1, svgWH[0], sizeWH[0])
    y = svgWH[1] && rangeWithin(y, 1, svgWH[1], sizeWH[1])

    //グリッド整列
    x = alignBy && getAlignBy(x, alignBy)
    y = alignBy && getAlignBy(y, alignBy)

    setElement({ ...element, x: x, y: y, active: false })
  }

  console.log(element.x, sizeWH[0], element.x + Math.round(sizeWH[0] / 2))
  return {
    dragDropProps: {
      width: sizeWH[0],
      height: sizeWH[1],
      x: element.x,
      y: element.y,
      cx: element.x,
      cy: element.y,
      r: sizeWH[0],
      onPointerDown: handlePointerDown,
      onPointerUp: handlePointerUp,
      onPointerMove: handlePointerMove,
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
  // const reMin = fit === "topLeft" ? min : min - roundFloat(targetSize / 2)
  // const reMax = fit === "topLeft" ? max : max + roundFloat(targetSize / 2)

  return value < min ? min : value > max - targetSize ? max - targetSize : value
}

//■ ターゲットを グリッドに整列(Alignment)
const getAlignBy = (value: number, alignBy: number) => {
  const rest = value % alignBy

  const newValue = rest < alignBy / 2 ? value - rest : value + (alignBy - rest)
  const arranged = !rest ? value : newValue
  return arranged
}
