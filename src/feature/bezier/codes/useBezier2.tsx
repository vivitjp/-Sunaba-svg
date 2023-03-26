import { useRange, useText } from "~/library"
import { xRulers, yRulers, zeroRulers } from "~/common/SVGContent"
import { SVGRuled } from "~/component"

export function useBezier2() {
  const title = `2次ベジェ曲線(Q,T)`

  const X1 = useRange({
    title: "第１線 座標",
    subTitle: "x1",
    initValue: 200,
    range: [0, 400],
    step: 10,
  })

  const Y1 = useRange({
    subTitle: "y1",
    initValue: 0,
    range: [0, 200],
    step: 10,
  })

  const X2 = useRange({
    title: "第２線 座標",
    subTitle: "x2",
    initValue: 200,
    range: [0, 300],
    step: 10,
  })

  const Y2 = useRange({
    subTitle: "y2",
    initValue: 200,
    range: [0, 300],
    step: 10,
  })

  const [startX, startY] = [50, 50]

  const code = ``

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
    >
      <defs>
        <marker
          id="markerId"
          markerUnits="strokeWidth"
          markerWidth="20"
          markerHeight="20"
          viewBox="0 0 20 20"
          refX="0"
          refY="0"
        >
          <circle x="10" y="10" r="10" fill="blue" stroke="none" />
        </marker>
      </defs>
      <text
        x="10"
        y="20"
        fontSize="14px"
      >{`M20,20 q${X1.value},${Y1.value} ${X2.value},${Y2.value}`}</text>
      <path
        d={`M${startX},${startY} q${X1.value},${Y1.value} ${X2.value},${Y2.value}`}
        stroke="red"
        fill="none"
      />
      <path
        d={`M${startX},${startY} l${X1.value},${Y1.value} l${
          X2.value - X1.value
        },${Y2.value - Y1.value}`}
        stroke="#555"
        fill="none"
        markerStart="url(#markerId)"
        markerMid="url(#markerId)"
        markerEnd="url(#markerId)"
      />
      {/* <path
        d={`M${startX + X1.value},${startY + Y1.value} l${
          X2.value - X1.value
        },${Y2.value - Y1.value}`}
        stroke="#555"
        fill="none"
      /> */}
    </SVGRuled>
  )

  return { height: 320, title, code, options: [X1, Y1, X2, Y2], jsx }
}
