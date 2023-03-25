import { useRange } from "~/library"

export function useBasic7() {
  const title = `線の太さ`

  const Ratio = useRange({
    title: "精密度",
    subTitle: "ratio",
    initValue: 1,
    range: [1, 3],
    step: 1,
  })

  const StrokeWidth = useRange({
    title: "線の太さ",
    subTitle: "strokeWidth",
    initValue: 1,
    range: [1, 3],
    step: 1,
  })

  const code = ``

  const jsx = (
    <svg
      width={600}
      height={120}
      viewBox={`0 0 ${600 * Ratio.value} ${120 * Ratio.value}`}
    >
      <line
        x1={20 * Ratio.value}
        x2={560 * Ratio.value}
        y1={20 * Ratio.value}
        y2={20 * Ratio.value}
        fill="none"
        stroke="red"
        strokeWidth={StrokeWidth.value}
      />
    </svg>
  )

  return { title, code, options: [Ratio, StrokeWidth], jsx }
}
