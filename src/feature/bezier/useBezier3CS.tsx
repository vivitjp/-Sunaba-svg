import { useSVGDragDrop } from "~/library"
import { xRulers, yRulers, zeroRulers } from "~/common/SVGContent"
import { SVGRuled, UseReturnType } from "~/component"

export function useBezier3CS(): UseReturnType {
  const title = `3次ベジェ曲線(C & S)`
  const subTitle = `座標をDrag&Dropで移動`

  const { dragDropProps: START } = useSVGDragDrop({
    initXY: [50, 250],
    sizeWidthHeight: [10, 10],
    svgWidthHeight: [600, 500],
    alignBy: 10,
  })

  const { dragDropProps: C1 } = useSVGDragDrop({
    initXY: [50, 50],
    sizeWidthHeight: [10, 10],
    svgWidthHeight: [600, 500],
    alignBy: 10,
  })

  const { dragDropProps: C2 } = useSVGDragDrop({
    initXY: [250, 50],
    sizeWidthHeight: [10, 10],
    svgWidthHeight: [600, 500],
    alignBy: 10,
  })

  const { dragDropProps: C3 } = useSVGDragDrop({
    initXY: [250, 250],
    sizeWidthHeight: [10, 10],
    svgWidthHeight: [600, 500],
    alignBy: 10,
  })

  const { dragDropProps: S1 } = useSVGDragDrop({
    initXY: [450, 450],
    sizeWidthHeight: [10, 10],
    svgWidthHeight: [600, 500],
    alignBy: 10,
  })

  const { dragDropProps: S2 } = useSVGDragDrop({
    initXY: [450, 250],
    sizeWidthHeight: [10, 10],
    svgWidthHeight: [600, 500],
    alignBy: 10,
  })

  const code = `<svg width={600} height={500}>
  <path d="M${START.x},${START.y} C${C1.x},${C1.y} ${C2.x},${C2.y} ${C3.x},${C3.y} S${S1.x},${S1.y} ${S2.x},${S2.y}" stroke="red" fill="none" />
<svg>`

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
      >{`M${START.x},${START.y} C${C1.x},${C1.y} ${C2.x},${C2.y} ${C3.x},${C3.y} S${S1.x},${S1.y} ${S2.x},${S2.y}`}</text>
      <path
        d={
          `M${START.x},${START.y} C${C1.x},${C1.y} ${C2.x},${C2.y} ${C3.x},${C3.y}` +
          `S${S1.x},${S1.y} ${S2.x},${S2.y}`
        }
        stroke="red"
        fill="none"
      />
      <path
        d={
          `M${START.x},${START.y} L${C1.x},${C1.y} L${C2.x},${C2.y} L${C3.x},${C3.y}` +
          `M${S1.x},${S1.y} L${S2.x},${S2.y}`
        }
        stroke="#555"
        fill="none"
      />
      <circle {...START} fill="blue" />
      <circle {...C1} fill="blue" />
      <circle {...C2} fill="blue" />
      <circle {...C3} fill="blue" />
      <circle {...S1} fill="blue" />
      <circle {...S2} fill="blue" />
    </SVGRuled>
  )

  return {
    height: 520,
    title,
    subTitle,
    code,
    options: [],
    jsx,
  }
}
