import { useRange } from "~/library"
import { xRulers, yRulers, zeroRulers } from "~/common/SVGContent"
import { SVGRuled, UseReturnType } from "~/component"

export function useBezier3A(): UseReturnType {
  const title = `3次ベジェ曲線(C)`

  const X1 = useRange({
    title: "第1線相対座標",
    subTitle: "cx1",
    initValue: 0,
    range: [0, 200],
    step: 10,
  })

  const Y1 = useRange({
    subTitle: "cy1",
    initValue: -200,
    range: [-300, -100],
    step: 10,
  })

  const X2 = useRange({
    title: "第2線相対座標",
    subTitle: "cx2",
    initValue: 200,
    range: [100, 300],
    step: 10,
  })

  const Y2 = useRange({
    subTitle: "cy2",
    initValue: -200,
    range: [-300, -100],
    step: 10,
  })

  const X3 = useRange({
    title: "第3線相対座標",
    subTitle: "cx3",
    initValue: 200,
    range: [100, 300],
    step: 10,
  })

  const Y3 = useRange({
    subTitle: "cy3",
    initValue: 0,
    range: [-100, 100],
    step: 10,
  })

  const [startX, startY] = [50, 250]

  const code = `<svg width={600} height={400}>
  <path d="M${startX},${startY} c${X1.value},${Y1.value} ${X2.value},${Y2.value} ${X3.value},${Y3.value}" stroke="red" fill="none" />
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
        d={`M${startX},${startY} c${X1.value},${Y1.value} ${X2.value},${Y2.value} ${X3.value},${Y3.value}`}
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

  return { height: 420, title, code, options: [X1, Y1, X2, Y2, X3, Y3], jsx }
}
