import { useRange } from "~/library"
import { xRulers, yRulers, zeroRulers } from "~/common/SVGContent"
import { SVGRuled, UseReturnType } from "~/component"
import { useMemo } from "react"

export function useBezier3B(): UseReturnType {
  const title = `3次ベジェ曲線(C & S)`

  const CX1 = useRange({
    title: "C 第1線相対座標",
    subTitle: "cx1",
    initValue: 0,
    range: [-100, 100],
    step: 10,
  })

  const CY1 = useRange({
    subTitle: "cy1",
    initValue: -150,
    range: [-250, -50],
    step: 10,
  })

  const CX2 = useRange({
    title: "C 第2線相対座標",
    subTitle: "cx2",
    initValue: 200,
    range: [100, 300],
    step: 10,
  })

  const CY2 = useRange({
    subTitle: "cy2",
    initValue: -150,
    range: [-250, -50],
    step: 10,
  })

  const CX3 = useRange({
    title: "C 第3線相対座標",
    subTitle: "cx3",
    initValue: 200,
    range: [100, 300],
    step: 10,
  })

  const CY3 = useRange({
    subTitle: "cy3",
    initValue: 0,
    range: [-100, 100],
    step: 10,
  })

  const SX1 = useRange({
    title: "S 第1線相対座標(C第3線基準)",
    subTitle: "sx1",
    initValue: 200,
    range: [100, 300],
    step: 10,
  })

  const SY1 = useRange({
    subTitle: "sy1",
    initValue: 150,
    range: [0, 300],
    step: 10,
  })

  const SX2 = useRange({
    title: "S 第2線相対座標(C第3線基準)",
    subTitle: "sx2",
    initValue: 200,
    range: [100, 300],
    step: 10,
  })

  const SY2 = useRange({
    subTitle: "sy2",
    initValue: 0,
    range: [-100, 100],
    step: 10,
  })

  const [startX, startY] = [50, 200]

  const code = `<svg width={600} height={500}>
  <path d="M${startX},${startY} c${CX1.value},${CY1.value} ${CX2.value},${CY2.value} ${CX3.value},${CY3.value} s${SX1.value},${SY1.value} ${SX2.value},${SY2.value}" stroke="red" fill="none" />
<svg>`

  const [MX, MY] = useMemo(() => {
    return [
      startX + CX3.value - CX2.value + CX3.value,
      startY + CY2.value * -1 + CY3.value,
    ]
  }, [CX2.value, CY2.value, CX3.value, CY3.value])

  const jsx = (
    <SVGRuled
      width={600}
      height={500}
      ratio={1}
      xRulers={xRulers}
      yRulers={yRulers}
      zeroRulers={zeroRulers}
      margin={30}
      marginTLOnly={true}
      preserveAspectRatio="xMinYMin slice"
    >
      <defs>
        <marker
          id="markerId3A"
          markerWidth="10"
          markerHeight="10"
          viewBox="0 0 20 20"
          refX="10"
          refY="10"
        >
          <circle cx="10" cy="10" r="10" fill="blue" />
        </marker>
      </defs>
      <text
        x="10"
        y="20"
        fontSize="14px"
      >{`M${startX},${startY} c${CX1.value},${CY1.value} ${CX2.value},${CY2.value} ${CX3.value},${CY3.value} s${SX1.value},${SY1.value} ${SX2.value},${SY2.value}`}</text>
      <path
        d={
          `M${startX},${startY} c${CX1.value},${CY1.value} ${CX2.value},${CY2.value} ${CX3.value},${CY3.value}` +
          `s${SX1.value},${SY1.value} ${SX2.value},${SY2.value}`
        }
        stroke="red"
        fill="none"
      />
      <path
        d={
          `M${startX},${startY}` +
          `L${startX + CX1.value},${startY + CY1.value}` +
          `L${startX + CX2.value},${startY + CY2.value}` +
          `L${startX + CX3.value},${startY + CY3.value}` +
          `M${MX},${MY}` +
          `L${MX + SX1.value - (CX3.value - CX2.value)},${
            startY + CY3.value + SY1.value
          }` +
          `L${MX + SX2.value - (CX3.value - CX2.value)},${
            startY + CY3.value + SY2.value
          }`
        }
        stroke="#555"
        fill="none"
        markerStart="url(#markerId3A)"
        markerMid="url(#markerId3A)"
        markerEnd="url(#markerId3A)"
      />
    </SVGRuled>
  )

  return {
    height: 520,
    title,
    code,
    options: [CX1, CY1, CX2, CY2, CX3, CY3, SX1, SY1, SX2, SY2],
    jsx,
  }
}
