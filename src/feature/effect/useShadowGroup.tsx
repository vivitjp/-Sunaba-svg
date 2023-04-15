import { UseReturnType } from "~/component"
import { useRange, useText } from "~/library"

export function useShadowGroup(): UseReturnType {
  const title = `Filter: Group shadow`

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
    <filter id="filter2">
      <feDropShadow stdDeviation="${Deviation.value}" floodColor="${Fill.value}" />
    </filter>
  </defs>
  <g filter="url(#filter2)" fillRule="nonzero">
    <path d="M20,20 h100 v80 h-100z M100,40 h100 v80 h-100z"
      fill="orange" filter="url(#filter2)"
    />
  </g>
  <g filter="url(#filter2)" fillRule="evenodd">
    <path d="M260,20 h100 v80 h-100z M340,40 h100 v80 h-100z"
      fill="orange" filter="url(#filter2)"
    />
  </g>
</svg>`

  const jsx = (
    <svg width={700} height={140}>
      <defs>
        <filter id="filter2">
          <feDropShadow
            stdDeviation={Deviation.value}
            floodColor={Fill.value}
          />
        </filter>
      </defs>
      <g filter="url(#filter2)" fillRule="nonzero">
        <path
          d="M20,20 h100 v80 h-100z M100,40 h100 v80 h-100z"
          fill="orange"
          filter="url(#filter2)"
        />
      </g>
      <g filter="url(#filter2)" fillRule="evenodd">
        <path
          d="M260,20 h100 v80 h-100z M340,40 h100 v80 h-100z"
          fill="orange"
          filter="url(#filter2)"
        />
      </g>
    </svg>
  )

  return { title, code, options: [Deviation, Fill], jsx }
}
