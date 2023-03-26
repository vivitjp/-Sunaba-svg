import { useRange } from "~/library"
import { xRulers, yRulers, zeroRulers } from "~/common/SVGContent"
import { SVGRuled } from "~/component"

export function useBezier3B() {
  const title = `3次ベジェ曲線(C & S)`

  const X1 = useRange({
    title: "第1線相対座標",
    subTitle: "x1",
    initValue: 0,
    range: [0, 200],
    step: 10,
  })

  const Y1 = useRange({
    subTitle: "y1",
    initValue: -200,
    range: [-300, -100],
    step: 10,
  })

  const X2 = useRange({
    title: "第2線相対座標",
    subTitle: "x2",
    initValue: 200,
    range: [100, 300],
    step: 10,
  })

  const Y2 = useRange({
    subTitle: "y2",
    initValue: -200,
    range: [-300, -100],
    step: 10,
  })

  const X3 = useRange({
    title: "第3線相対座標",
    subTitle: "x3",
    initValue: 200,
    range: [100, 300],
    step: 10,
  })

  const Y3 = useRange({
    subTitle: "y3",
    initValue: 0,
    range: [-100, 100],
    step: 10,
  })

  const X4 = useRange({
    title: "第4線相対座標",
    subTitle: "x4",
    initValue: 200,
    range: [100, 300],
    step: 10,
  })

  const Y4 = useRange({
    subTitle: "y4",
    initValue: 0,
    range: [-100, 100],
    step: 10,
  })

  const X5 = useRange({
    title: "第5線相対座標",
    subTitle: "x5",
    initValue: 200,
    range: [100, 300],
    step: 10,
  })

  const Y5 = useRange({
    subTitle: "y5",
    initValue: 0,
    range: [-100, 100],
    step: 10,
  })

  const [startX, startY] = [50, 250]

  const code = `<svg width={600} height={400}>
  <path d="M${startX},${startY} c${X1.value},${Y1.value} ${X2.value},${Y2.value} ${X3.value},${Y3.value} s${X4.value},${Y4.value} ${X5.value},${Y5.value}" stroke="red" fill="none" />
</svg>`

  const jsx = (
    <SVGRuled
      width={600}
      height={400}
      ratio={1}
      xRulers={xRulers}
      yRulers={yRulers}
      zeroRulers={zeroRulers}
      margin={30}
      marginTLOnly={true}
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
      >{`M${startX},${startY} c${X1.value},${Y1.value} ${X2.value},${Y2.value} ${X3.value},${Y3.value}`}</text>
      <path
        d={`M${startX},${startY} c${X1.value},${Y1.value} ${X2.value},${Y2.value} ${X3.value},${Y3.value} s${X4.value},${Y4.value} ${X5.value},${Y5.value}`}
        stroke="red"
        fill="none"
      />
      <path
        d={
          `M${startX},${startY} l${X1.value},${Y1.value} ` +
          `l${X2.value - X1.value},${Y2.value - Y1.value} ` +
          `l${X3.value - X2.value},${Y3.value - Y2.value}`
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
    height: 420,
    title,
    code,
    options: [X1, Y1, X2, Y2, X3, Y3, X4, Y4, X5, Y5],
    jsx,
  }
}
