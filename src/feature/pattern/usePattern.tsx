import { useId } from "react"
import { useRange } from "~/library"

export function usePattern() {
  const patternId = useId()
  const title = `Pattern(userSpaceOnUse:実数)`

  const PatternSize = useRange({
    title: "パターンサイズ",
    subTitle: "size",
    initValue: 25,
    range: [10, 50],
    step: 1,
  })

  const PatternGap = useRange({
    title: "描画範囲拡張",
    subTitle: "gap",
    initValue: 0,
    range: [0, 20],
    step: 1,
  })

  const StartMargin = useRange({
    title: "開始マージン",
    subTitle: "x,y",
    initValue: 0,
    range: [0, 40],
    step: 1,
  })

  const code = `<svg width={700} height={400}>
  <defs>
    <pattern id={patternId} x="${StartMargin.value}" y="${
    StartMargin.value
  }" width="${PatternSize.value * 2 + PatternGap.value}" height="${
    PatternSize.value * 2 + PatternGap.value
  }"
      patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
      <circle cx="${PatternSize.value}" cy="${PatternSize.value}" r="${
    PatternSize.value
  }" fill="orange"/>
    </pattern>
  </defs>
  <rect fill="url(#patternId)" x="0" y="0" width="700" height="380" />
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
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
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
        width="680"
        height="380"
        stroke="#aaa"
        strokeWidth="1"
      />
    </svg>
  )

  return {
    title,
    code,
    options: [PatternSize, PatternGap, StartMargin],
    jsx,
  }
}
