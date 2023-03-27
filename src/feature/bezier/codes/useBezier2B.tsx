import { useRange } from "~/library"
import { xRulers, yRulers, zeroRulers } from "~/common/SVGContent"
import { SVGRuled } from "~/component"

export function useBezier2B() {
  const title = `2次ベジェ曲線(Q & T)`

  const X1 = useRange({
    title: "Q 第1線相対座標",
    subTitle: "qx1",
    initValue: 0,
    range: [0, 200],
    step: 10,
  })

  const Y1 = useRange({
    subTitle: "qy1",
    initValue: -200,
    range: [-300, -100],
    step: 10,
  })

  const X2 = useRange({
    title: "Q 第2線相対座標",
    subTitle: "qx2",
    initValue: 200,
    range: [100, 300],
    step: 10,
  })

  const Y2 = useRange({
    subTitle: "qy2",
    initValue: -200,
    range: [-300, -100],
    step: 10,
  })

  const X3 = useRange({
    title: "T 第1線相対座標(Q第2線基準)",
    subTitle: "tx1",
    initValue: 200,
    range: [100, 300],
    step: 10,
  })

  const Y3 = useRange({
    subTitle: "ty1",
    initValue: 200,
    range: [100, 300],
    step: 10,
  })

  const [startX, startY] = [50, 250]

  const code = `<svg width={600} height={400}>
  <path d="M${startX},${startY} q${X1.value},${Y1.value} ${X2.value},${Y2.value} t${X3.value},${Y3.value}" stroke="red" fill="none" />
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
      preserveAspectRatio="xMinYMin slice"
    >
      <defs>
        <marker
          id="markerId2B"
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
      >{`M${startX},${startY} q${X1.value},${Y1.value} ${X2.value},${Y2.value} t${X3.value},${Y3.value}`}</text>
      <path
        d={`M${startX},${startY} q${X1.value},${Y1.value} ${X2.value},${Y2.value} t${X3.value},${Y3.value}`}
        stroke="red"
        fill="none"
      />
      <path
        d={
          `M${startX},${startY}` +
          `l${X1.value},${Y1.value}` +
          `l${X2.value - X1.value},${Y2.value - Y1.value}` +
          `m${X2.value - X1.value},${Y2.value - Y1.value}` +
          `l${X3.value + (X1.value - X2.value)},${
            Y3.value + (Y1.value - Y2.value)
          }`
        }
        stroke="#555"
        fill="none"
        markerStart="url(#markerId2B)"
        markerMid="url(#markerId2B)"
        markerEnd="url(#markerId2B)"
      />
    </SVGRuled>
  )

  return { height: 420, title, code, options: [X1, Y1, X2, Y2, X3, Y3], jsx }
}
