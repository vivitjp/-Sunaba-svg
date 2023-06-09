import { UseReturnType } from "~/component"
import { useRange, useText } from "~/library"

export function useShadow(): UseReturnType {
  const title = `Filter: Shadow`

  const Deviation = useRange({
    title: "影の範囲",
    subTitle: "stdDeviation",
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
    </svg>
  )

  return { title, code, options: [Deviation, Fill], jsx }
}

// filterUnits="userSpaceOnUse" x="20" y="20" width="160" height="160"
