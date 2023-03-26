import { SVG, useCheck } from "~/library"
import { useText } from "~/library/hooks/useText"
import { useRange } from "~/library/hooks/useRange"
import { useSelect } from "~/library/hooks/useSelect"
import { useMemo } from "react"
import { CSSProperties } from "styled-components"

export const useTextPath = () => {
  const title = `TextPath`

  const TextPath = useCheck({
    title: "パス表示",
    initValue: false,
  })

  const Sample = useText({
    title: "さくら",
    initValue:
      "さくら さくら 今、咲き誇る刹那に散りゆく運命と知って さらば友よ 旅立ちの刻 変わらないその想いを 今 今なら言えるだろ",
  })

  const DominantBaseline = useSelect({
    title: "アンカー(上下)",
    subTitle: "dominantBaseline",
    initValue: "auto",
    values: ["auto", "central", "hanging"],
  })

  const FontSize = useRange({
    title: "フォントSize",
    subTitle: "fontSize",
    initValue: 12,
    range: [6, 24],
    step: 1,
  })

  const StartOffset = useRange({
    title: "テキスト開始位置",
    subTitle: "startOffset",
    initValue: 0,
    range: [0, 100],
    step: 1,
  })

  const CSSProps: CSSProperties = useMemo(() => {
    let style: CSSProperties = {}
    if (FontSize.value) style = { fontSize: FontSize.value }
    return style
  }, [FontSize.value])

  const jsx = (
    <SVG width={640} height={260} preserveAspectRatio="xMinYMin slice">
      <defs>
        <path
          id="target"
          d="M140,40 a100,100 0,1 1 0,200 a100,100 0,0 1 0,-200z"
          fill="none"
        />
      </defs>
      <use
        xlinkHref="#target"
        stroke="#aaa"
        visibility={TextPath.value ? "visible" : "hidden"}
      />
      <text
        fill="#777"
        fontSize={FontSize.value}
        dominantBaseline={DominantBaseline.value}
      >
        <textPath
          xlinkHref="#target"
          startOffset={`${StartOffset.value}%`}
          style={CSSProps}
        >
          {Sample.value}
        </textPath>
      </text>

      <path id="targetWave" d="M40,40 " fill="blue" />
    </SVG>
  )

  return {
    height: 300,
    title,
    options: [Sample, TextPath, DominantBaseline, FontSize, StartOffset],
    jsx,
  }
}
