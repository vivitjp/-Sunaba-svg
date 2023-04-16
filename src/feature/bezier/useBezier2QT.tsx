import { useSVGDragDrop } from "~/library"
import { xRulers, yRulers, zeroRulers } from "~/common/SVGContent"
import { SVGRuled, UseReturnType } from "~/component"

export function useBezier2QT(): UseReturnType {
  const title = `2次ベジェ曲線(Q & T)`
  const subTitle = `座標をDrag&Dropで移動`

  const { dragDropProps: START } = useSVGDragDrop({
    initXY: [50, 250],
    sizeWidthHeight: [10, 10],
    svgWidthHeight: [600, 400],
    alignBy: 10,
  })

  const { dragDropProps: Q1 } = useSVGDragDrop({
    initXY: [50, 50],
    sizeWidthHeight: [10, 10],
    svgWidthHeight: [600, 400],
    alignBy: 10,
  })

  const { dragDropProps: Q2 } = useSVGDragDrop({
    initXY: [250, 50],
    sizeWidthHeight: [10, 10],
    svgWidthHeight: [600, 400],
    alignBy: 10,
  })

  const { dragDropProps: T } = useSVGDragDrop({
    initXY: [450, 250],
    sizeWidthHeight: [10, 10],
    svgWidthHeight: [600, 400],
    alignBy: 10,
  })

  const [startX, startY] = [50, 250]

  const code = `<svg width={600} height={400}>
  <path d="M${startX},${startY} Q${Q1.x},${Q1.y} ${Q2.x},${Q2.y} T${T.x},${T.y}" stroke="red" fill="none" />
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
      <text
        x="10"
        y="22"
        style={{ fontSize: "18px" }}
      >{`M${START.x},${START.y} Q${Q1.x},${Q1.y} ${Q2.x},${Q2.y} T${T.x},${T.y}`}</text>
      <path
        d={`M${START.x},${START.y} Q${Q1.x},${Q1.y} ${Q2.x},${Q2.y} T${T.x},${T.y}`}
        stroke="red"
        fill="none"
      />
      <path
        d={`M${START.x},${START.y} L${Q1.x},${Q1.y} L${Q2.x},${Q2.y}`}
        stroke="#555"
        fill="none"
      />
      <circle {...START} fill="blue" />
      <circle {...Q1} fill="blue" />
      <circle {...Q2} fill="blue" />
      <circle {...T} fill="blue" />
    </SVGRuled>
  )

  return { height: 420, title, subTitle, code, options: [], jsx }
}
