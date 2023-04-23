import { UseReturnType } from "~/component"
import { useRange, useText } from "~/library"

export function useShadow(): UseReturnType {
  const title = `Filter: Shadow`

  const Deviation = useRange({
    title: "影の範囲",
    subTitle: "stdDeviation",
    extraNote:
      "SVG feDropShadow の特質として、対象サイズの大きさに影響を受けることがある。細すぎると影が生成されない",
    initValue: 3,
    range: [1, 5],
    step: 1,
  })
  const Fill = useText({
    title: "影の色",
    subTitle: "floodColor",
    initValue: "#555",
  })

  const code = `<svg width="700" height="140">
  <defs>
    <filter id="filter1">
      <feDropShadow stdDeviation="${Deviation.value}" floodColor="${Fill.value}" />
    </filter>
  </defs>
  <path filter="url(#filter1)" d="M20,20 h100 v100 h-100z" fill="orange" />
</svg>`

  const jsx = (
    <svg width={700} height={140}>
      <defs>
        <filter id="filter1">
          <feDropShadow
            stdDeviation={Deviation.value}
            floodColor={Fill.value}
          />
        </filter>
      </defs>
      <path filter="url(#filter1)" d="M20,20 h100 v100 h-100z" fill="orange" />
      <path filter="url(#filter1)" d="M160,60 h200 v10 h-200z" fill="blue" />
    </svg>
  )

  return { title, code, options: [Deviation, Fill], jsx }
}

// filterUnits="userSpaceOnUse" x="20" y="20" width="160" height="160"
