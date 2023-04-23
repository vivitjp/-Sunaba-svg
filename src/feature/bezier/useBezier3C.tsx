import { useSVGDragDrop } from "~/library"
import { xRulers, yRulers, zeroRulers } from "~/common/SVGContent"
import { SVGRuled, UseReturnType } from "~/component"

export function useBezier3C(): UseReturnType {
  const title = `3次ベジェ曲線(C)`
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
    dragDropProps: { attr: C1, event: C1Event },
  } = useSVGDragDrop({
    initXY: [50, 50],
    sizeWidthHeight: [10, 10],
    svgWidthHeight: [600, 400],
    alignBy: 10,
  })

  const {
    dragDropProps: { attr: C2, event: C2Event },
  } = useSVGDragDrop({
    initXY: [250, 50],
    sizeWidthHeight: [10, 10],
    svgWidthHeight: [600, 400],
    alignBy: 10,
  })

  const {
    dragDropProps: { attr: C3, event: C3Event },
  } = useSVGDragDrop({
    initXY: [250, 250],
    sizeWidthHeight: [10, 10],
    svgWidthHeight: [600, 400],
    alignBy: 10,
  })

  const code = `<svg width={600} height={400}>
  <path d="M${Start.x},${Start.y} C${C1.x},${C1.y} ${C2.x},${C2.y} ${C3.x},${C3.y}" stroke="red" fill="none" />
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
        style={{ fontSize: "18px" }}
      >{`M${Start.x},${Start.y} C${C1.x},${C1.y} ${C2.x},${C2.y} ${C3.x},${C3.y}`}</text>
      <path
        d={`M${Start.x},${Start.y} C${C1.x},${C1.y} ${C2.x},${C2.y} ${C3.x},${C3.y}`}
        stroke="red"
        fill="none"
      />
      <path
        d={`M${Start.x},${Start.y} L${C1.x},${C1.y} L${C2.x},${C2.y} L${C3.x},${C3.y}`}
        stroke="#555"
        fill="none"
      />
      <circle {...Start} {...StartEvent} fill="red" />
      <circle {...C1} {...C1Event} fill="blue" />
      <circle {...C2} {...C2Event} fill="blue" />
      <circle {...C3} {...C3Event} fill="blue" />
    </SVGRuled>
  )

  return { height: 420, title, subTitle, code, options: [], jsx }
}
