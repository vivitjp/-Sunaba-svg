import { useId } from "react"
import { UseReturnType } from "~/component"
import { useRange } from "~/library"

export function usePatternRatio(): UseReturnType {
  const patternId = useId()
  const title = `Pattern(objectBoundingBox:比率)`

  const PatternSize = useRange({
    title: "パターンサイズ",
    subTitle: "width,height(%)",
    initValue: 0.05,
    range: [0.01, 0.2],
    step: 0.01,
  })

  const PatternGap = useRange({
    title: "描画範囲拡張",
    subTitle: "gap(%)",
    initValue: 0.01,
    range: [0, 0.2],
    step: 0.01,
  })

  const StartMargin = useRange({
    title: "開始マージン",
    subTitle: "x,y(%)",
    initValue: 0,
    range: [0, 0.2],
    step: 0.01,
  })

  const ExtraWidth = useRange({
    title: "描画範囲(幅)の縮小拡張",
    subTitle: "width",
    initValue: 0,
    range: [-200, 300],
    step: 10,
  })

  const code = `<svg width={700} height={400}>
  <defs>
    <g>
      <pattern id={patternId} x="${StartMargin.value}" y="${
    StartMargin.value
  }" width="${PatternSize.value * 2 + PatternGap.value}" height="${
    PatternSize.value * 2 + PatternGap.value
  }"
        patternUnits="objectBoundingBox" patternContentUnits="objectBoundingBox">
        <circle cx="${PatternSize.value}" cy="${PatternSize.value}" r="${
    PatternSize.value
  }" fill="orange"/>
      </pattern>
    </g>
  </defs>
  <rect fill="url(#patternId)" x="0" y="0" width="${
    380 + ExtraWidth.value
  }" height="380" />
</svg>`

  const jsx = (
    <svg width={700} height={400}>
      <defs>
        <pattern
          id={patternId}
          x={StartMargin.value}
          y={StartMargin.value}
          width={PatternSize.value * 2 + PatternGap.value}
          height={PatternSize.value * 2 + PatternGap.value}
          patternUnits="objectBoundingBox"
          patternContentUnits="objectBoundingBox"
        >
          <circle
            cx={PatternSize.value}
            cy={PatternSize.value}
            r={PatternSize.value}
            fill="orange"
          />
        </pattern>
      </defs>
      <rect
        fill={`url(#${patternId})`}
        x="0"
        y="0"
        width={`${380 + ExtraWidth.value}`}
        height="380"
        stroke="#aaa"
        strokeWidth="1"
      />
    </svg>
  )

  return {
    title,
    code,
    options: [PatternSize, PatternGap, StartMargin, ExtraWidth],
    jsx,
  }
}
