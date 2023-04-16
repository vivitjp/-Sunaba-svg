import { useRange } from "~/library"
import { xRulers, yRulers, zeroRulers } from "~/common/SVGContent"
import { SVGRuled, UseReturnType } from "~/component"

export function useBezier2Q_OLD(): UseReturnType {
  const title = `2次ベジェ曲線(Q)`

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

  const [startX, startY] = [50, 250]

  const code = `<svg width={600} height={300}>
  <path d="M${startX},${startY} q${X1.value},${Y1.value} ${X2.value},${Y2.value}" stroke="red" fill="none" />
</svg>`

  const jsx = (
    <SVGRuled
      width={600}
      height={300}
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
          id="markerId2A"
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
      >{`M${startX},${startY} q${X1.value},${Y1.value} ${X2.value},${Y2.value}`}</text>
      <path
        d={`M${startX},${startY} q${X1.value},${Y1.value} ${X2.value},${Y2.value}`}
        stroke="red"
        fill="none"
      />
      <path
        d={
          `M${startX},${startY}` +
          `l${X1.value},${Y1.value}` +
          `l${X2.value - X1.value},${Y2.value - Y1.value}`
        }
        stroke="#555"
        fill="none"
        markerStart="url(#markerId2A)"
        markerMid="url(#markerId2A)"
        markerEnd="url(#markerId2A)"
      />
    </SVGRuled>
  )

  return { height: 320, title, code, options: [X1, Y1, X2, Y2], jsx }
}
