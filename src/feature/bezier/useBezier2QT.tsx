import { useSVGDragDrop } from "~/library"
import { xRulers, yRulers, zeroRulers } from "~/common/SVGContent"
import { SVGRuled, UseReturnType } from "~/component"

export function useBezier2QT(): UseReturnType {
  const title = `2次ベジェ曲線(Q & T)`
  const subTitle = `座標をDrag&Dropで移動`

  const {
    dragDropProps: { attr: Start, event: StartEvent },
  } = useSVGDragDrop({
    initXY: [50, 250],
    sizeWidthHeight: [10, 10],
    svgWidthHeight: [600, 400],
    alignBy: 10,
  })

  const {
    dragDropProps: { attr: Q1, event: Q1Event },
  } = useSVGDragDrop({
    initXY: [50, 50],
    sizeWidthHeight: [10, 10],
    svgWidthHeight: [600, 400],
    alignBy: 10,
  })

  const {
    dragDropProps: { attr: Q2, event: Q2Event },
  } = useSVGDragDrop({
    initXY: [250, 50],
    sizeWidthHeight: [10, 10],
    svgWidthHeight: [600, 400],
    alignBy: 10,
  })

  const {
    dragDropProps: { attr: T, event: TEvent },
  } = useSVGDragDrop({
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
      >{`M${Start.x},${Start.y} Q${Q1.x},${Q1.y} ${Q2.x},${Q2.y} T${T.x},${T.y}`}</text>
      <path
        d={`M${Start.x},${Start.y} Q${Q1.x},${Q1.y} ${Q2.x},${Q2.y} T${T.x},${T.y}`}
        stroke="red"
        fill="none"
      />
      <path
        d={`M${Start.x},${Start.y} L${Q1.x},${Q1.y} L${Q2.x},${Q2.y}`}
        stroke="#555"
        fill="none"
      />
      <circle {...Start} {...StartEvent} fill="red" />
      <circle {...Q1} {...Q1Event} fill="blue" />
      <circle {...Q2} {...Q2Event} fill="blue" />
      <circle {...T} {...TEvent} fill="green" />
    </SVGRuled>
  )

  return { height: 420, title, subTitle, code, options: [], jsx }
}
