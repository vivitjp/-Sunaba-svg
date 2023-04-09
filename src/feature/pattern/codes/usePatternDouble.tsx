import { useId } from "react"
import { colorDark, colorLight } from "~/constants/colors"
import { useRange, useSelect } from "~/library"

export function usePatternDouble() {
  const patternIdFront = useId()
  const patternIdBack = useId()
  const title = `Pattern重ね`

  const PatternSizeFront = useRange({
    title: "[前] パターンサイズ",
    subTitle: "size",
    initValue: 25,
    range: [10, 50],
    step: 1,
  })

  const PatternGapFront = useRange({
    title: "[前] Gap",
    subTitle: "gap",
    initValue: 0,
    range: [0, 20],
    step: 1,
  })

  const StartMarginFront = useRange({
    title: "[前] 開始マージン",
    subTitle: "margin XY",
    initValue: 0,
    range: [0, 40],
    step: 1,
  })

  const MarkerColorFront = useSelect({
    title: "[前] 色",
    subTitle: "fill",
    extraNote: "動的変更が効かない？",
    initValue: colorLight[0],
    values: colorLight,
  })

  const PatternSizeBack = useRange({
    title: "[後] パターンサイズ",
    subTitle: "size",
    initValue: 25,
    range: [10, 50],
    step: 1,
  })

  const PatternGapBack = useRange({
    title: "[後] Gap",
    subTitle: "gap",
    initValue: 0,
    range: [0, 20],
    step: 1,
  })

  const StartMarginBack = useRange({
    title: "[後] 開始マージン",
    subTitle: "margin XY",
    initValue: 0,
    range: [0, 40],
    step: 1,
  })

  const MarkerColorBack = useSelect({
    title: "[前] 色",
    subTitle: "fill",
    extraNote: "動的変更が効かない？",
    initValue: colorDark[0],
    values: colorDark,
  })

  const jsx = (
    <svg width={700} height={400}>
      <defs>
        <g>
          <pattern
            id={patternIdFront}
            x={StartMarginFront.value}
            y={StartMarginFront.value}
            width={PatternSizeFront.value * 2 + PatternGapFront.value}
            height={PatternSizeFront.value * 2 + PatternGapFront.value}
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
          >
            <circle
              cx={PatternSizeFront.value}
              cy={PatternSizeFront.value}
              r={PatternSizeFront.value}
              fill={MarkerColorFront.value}
            />
          </pattern>
        </g>
        <g>
          <pattern
            id={patternIdBack}
            x={StartMarginBack.value}
            y={StartMarginBack.value}
            width={PatternSizeBack.value * 2 + PatternGapBack.value}
            height={PatternSizeBack.value * 2 + PatternGapBack.value}
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
          >
            <circle
              cx={PatternSizeBack.value}
              cy={PatternSizeBack.value}
              r={PatternSizeBack.value}
              fill={MarkerColorBack.value}
            />
          </pattern>
        </g>
      </defs>
      <rect
        fill={`url(#${patternIdBack})`}
        x="0"
        y="0"
        width="680"
        height="380"
      />
      <rect
        fill={`url(#${patternIdFront})`}
        x="0"
        y="0"
        width="680"
        height="380"
      />
    </svg>
  )

  return {
    title,
    options: [
      PatternSizeFront,
      PatternGapFront,
      StartMarginFront,
      MarkerColorFront,
      PatternSizeBack,
      PatternGapBack,
      StartMarginBack,
      MarkerColorBack,
    ],
    jsx,
  }
}
