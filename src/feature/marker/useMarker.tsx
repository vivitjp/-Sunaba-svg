import { useId } from "react"
import { UseReturnType } from "~/component"
import { useRange, useSelect } from "~/library"

export const useMarker = (): UseReturnType => {
  const circleId = useId()
  const squareId = useId()
  const arrowId = useId()

  const title = "Marker"
  const subTitle = `一般的に <polyline>,<path> で使用される`

  const MarkerType = useSelect({
    title: "タイプ",
    initValue: circleId,
    values: [
      { K: "circle", V: circleId },
      { K: "rectangle", V: squareId },
      { K: "arrow", V: arrowId },
    ],
  })

  const Orient = useSelect({
    title: "方向",
    subTitle: "orient",
    initValue: "auto",
    values: ["auto", "auto-start-reverse", 0, 45, 90],
  })

  const StrokeWidth = useRange({
    title: "ベース線の太さ",
    subTitle: "strokeWidth",
    extraNote: "ベース線の太さに合わせてマーカーのサイズも相対的に決まる",
    initValue: 1,
    range: [1, 5],
    step: 1,
  })

  const MarkerSize = useRange({
    title: "サイズ",
    subTitle: "size",
    initValue: 10,
    range: [1, 20],
    step: 1,
  })

  const MarkerColor = useSelect({
    title: "色",
    subTitle: "fill",
    initValue: "blue",
    values: ["blue", "red", "green"],
  })

  const MarkerStrokeWidth = useRange({
    title: "マーカー線の太さ",
    subTitle: "strokeWidth",
    initValue: 0,
    range: [0, 10],
    step: 1,
  })

  const Overflow = useSelect<string>({
    title: "オーバーフロー",
    subTitle: "overflow",
    extraNote: "auto=hidden",
    initValue: "auto",
    values: ["auto", "visible", "hidden"],
  })

  const MarkerStroke = useSelect({
    title: "マーカー線色",
    subTitle: "stroke",
    initValue: "black",
    values: ["none", "black", "blue", "red", "green"],
  })

  const code = `<svg width={800} height={300}>
  <defs>
    <marker id="circleId" viewBox="0 0 ${MarkerSize.value * 2} ${
    MarkerSize.value * 2
  }" refX="${MarkerSize.value}" refY="${MarkerSize.value}" 
      markerWidth="${MarkerSize.value}" markerHeight="${
    MarkerSize.value
  }" orient="${Orient.value}" overflow="${Overflow.value}">
      <circle cx="${MarkerSize.value}" cy="${MarkerSize.value}" r="${
    MarkerSize.value
  }" fill="${MarkerColor.value}" />
    </marker>
 
    <marker id="squareId" viewBox="0 0 ${MarkerSize.value * 2} ${
    MarkerSize.value * 2
  }" refX="${MarkerSize.value}" refY="${MarkerSize.value}" 
      markerWidth="${MarkerSize.value}" markerHeight="${
    MarkerSize.value
  }" orient="${Orient.value}" overflow="${Overflow.value}">
      <rect x="0" y="0" width="${MarkerSize.value * 2}" height="${
    MarkerSize.value * 2
  }" fill="${MarkerColor.value}"/>
    </marker>
 
    <marker id="arrowId" viewBox="0 0 ${MarkerSize.value} ${
    MarkerSize.value
  }" refX="${MarkerSize.value / 2}" refY="${MarkerSize.value / 2}"
      markerWidth="${MarkerSize.value}" markerHeight="${
    MarkerSize.value
  }" orient="${Orient.value}" overflow="${Overflow.value}">
      <path d="M 0,0 L${MarkerSize.value},${MarkerSize.value / 2} L0,${
    MarkerSize.value
  }z" fill="${MarkerColor.value}" />
    </marker>
  </defs>
 
  <polyline
    points="100,100 150,200 200,100, 250,200 300,100"
    fill="none" stroke="#777" strokeWidth="${StrokeWidth.value}"
    markerStart="url(#MARKER_ID_HERE)" //NG! marker={url(#MARKER_ID_HERE)}
    markerMid="url(#MARKER_ID_HERE)"
    markerEnd="url(#MARKER_ID_HERE)"
  />
</svg>`

  const jsx = (
    <svg width={800} height={300} preserveAspectRatio="xMinYMin slice">
      <defs>
        <marker
          id={circleId}
          markerWidth={MarkerSize.value}
          markerHeight={MarkerSize.value}
          viewBox={`0 0 ${MarkerSize.value * 2} ${MarkerSize.value * 2}`}
          refX={MarkerSize.value}
          refY={MarkerSize.value}
          orient={Orient.value}
          overflow={Overflow.value}
        >
          <circle
            cx={MarkerSize.value}
            cy={MarkerSize.value}
            r={MarkerSize.value}
            fill={MarkerColor.value}
            stroke={MarkerStroke.value}
            strokeWidth={MarkerStrokeWidth.value}
          />
        </marker>
        <marker
          id={squareId}
          markerWidth={MarkerSize.value}
          markerHeight={MarkerSize.value}
          viewBox={`0 0 ${MarkerSize.value * 2} ${MarkerSize.value * 2}`}
          refX={MarkerSize.value}
          refY={MarkerSize.value}
          orient={Orient.value}
          vectorEffect="non-scaling-stroke" //none
          overflow={Overflow.value}
        >
          <rect
            x="0"
            y="0"
            width={MarkerSize.value * 2}
            height={MarkerSize.value * 2}
            fill={MarkerColor.value}
            stroke={MarkerStroke.value}
            strokeWidth={MarkerStrokeWidth.value}
          />
        </marker>
        <marker
          id={arrowId}
          markerWidth={MarkerSize.value}
          markerHeight={MarkerSize.value}
          viewBox={`0 0 ${MarkerSize.value} ${MarkerSize.value}`}
          refX={MarkerSize.value / 2}
          refY={MarkerSize.value / 2}
          orient={Orient.value}
        >
          <path
            d={
              `M 0,0 L${MarkerSize.value},${MarkerSize.value / 2} ` +
              `L0,${MarkerSize.value} z`
            }
            fill={MarkerColor.value}
            stroke={MarkerStroke.value}
            strokeWidth={MarkerStrokeWidth.value}
          />
        </marker>
      </defs>

      <polyline
        points="100,100 150,200 200,100, 250,200 300,100"
        fill="none"
        stroke="#777"
        strokeWidth={StrokeWidth.value}
        //marker= {`url(#${MarkerType.value})`}存在せず
        markerStart={`url(#${MarkerType.value})`}
        markerMid={`url(#${MarkerType.value})`}
        markerEnd={`url(#${MarkerType.value})`}
        //markerUnits={MarkerUnit.value}
      />
      {/* <path
        d="M400,100 l50,100 l50,-100 l50,100 l50,-100"
        fill="none"
        stroke="#777"
        strokeWidth={StrokeWidth.value}
        //marker={`url(#${MarkerType.value})`}
        markerStart={`url(#${MarkerType.value})`}
        markerMid={`url(#${MarkerType.value})`}
        markerEnd={`url(#${MarkerType.value})`}
        //markerUnits={MarkerUnit.value}
      /> */}
    </svg>
  )

  return {
    height: 300,
    title,
    subTitle,
    code,
    options: [
      StrokeWidth,
      MarkerType,
      //MarkerUnit,
      Orient,
      MarkerSize,
      MarkerColor,
      MarkerStrokeWidth,
      MarkerStroke,
      Overflow,
    ],
    jsx,
  }
}
