import { useCheck } from "~/library"
import { useText } from "~/library/hooks/useText"
import { useRange } from "~/library/hooks/useRange"
import { useSelect } from "~/library/hooks/useSelect"
import { useMemo } from "react"
import { CSSProperties } from "styled-components"
import { UseReturnType } from "~/component"

export const useTextPath = (): UseReturnType => {
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
    range: [-140, 100],
    step: 1,
  })

  const CSSProps: CSSProperties = useMemo(() => {
    let style: CSSProperties = {}
    if (FontSize.value) style = { fontSize: FontSize.value }
    return style
  }, [FontSize.value])

  const code = `<svg width="640" height="260">
  <defs>
    <path id="targetCircle" d="M140,20 a100,100 0,1 1 0,200 a100,100 0,0 1 0,-200z" />
    <path id="targetWave"   d="M300,150 c50,-50 150,-50 200,0 s150,50 200,0" />
  </defs>
 
  <use xlinkHref="#targetCircle" stroke="#aaa" visibility="${
    TextPath.value ? "visible" : "hidden"
  }" />
  <text fill="#777" dominantBaseline="${DominantBaseline.value}" >
    <textPath  xlinkHref="#targetCircle" startOffset="${
      StartOffset.value
    }%" style=${JSON.stringify(CSSProps)} >
      ${Sample.value.substring(0, 40)}...
    </textPath>
  </text>
 
  <use xlinkHref="#targetWave" stroke="#aaa" visibility="${
    TextPath.value ? "visible" : "hidden"
  }" />
  <text fill="#777" dominantBaseline="${DominantBaseline.value}" >
    <textPath xlinkHref="#targetWave" startOffset="${
      StartOffset.value
    }%" style=${JSON.stringify(CSSProps)} >
      ${Sample.value.substring(0, 40)}...
    </textPath>
  </text>
</svg>`

  const jsx = (
    <svg width={640} height={260} preserveAspectRatio="xMinYMin slice">
      <defs>
        <path
          id="targetCircle"
          d="M140,20 a100,100 0,1 1 0,200 a100,100 0,0 1 0,-200z"
        />
        <path
          id="targetWave"
          d="M300,150 c50,-50 150,-50 200,0 s150,50 200,0"
        />
      </defs>

      {/* Circle */}
      <use
        data-testid="Baseパス(circle)"
        xlinkHref="#targetCircle"
        stroke="#aaa"
        visibility={TextPath.value ? "visible" : "hidden"}
        fill="none"
      />
      <text fill="#777" dominantBaseline={DominantBaseline.value}>
        <textPath
          xlinkHref="#targetCircle"
          startOffset={`${StartOffset.value}%`}
          style={CSSProps}
        >
          {Sample.value}
        </textPath>
      </text>

      {/* Wave */}
      <use
        data-testid="Baseパス(Wave)"
        xlinkHref="#targetWave"
        stroke="#aaa"
        visibility={TextPath.value ? "visible" : "hidden"}
        fill="none"
      />
      <text fill="#777" dominantBaseline={DominantBaseline.value}>
        <textPath
          xlinkHref="#targetWave"
          startOffset={`${StartOffset.value}%`}
          style={CSSProps}
        >
          {Sample.value}
        </textPath>
      </text>
    </svg>
  )

  return {
    height: 300,
    title,
    code,
    options: [Sample, TextPath, DominantBaseline, FontSize, StartOffset],
    jsx,
  }
}
