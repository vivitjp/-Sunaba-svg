import { useId } from "react"
import { UseReturnType } from "~/component"
import { useRange, useText } from "~/library"

export function useCircleGradation(): UseReturnType {
  const filterId = useId()
  const title = `Gradation(Circle)`

  const ColorCenter = useText({
    title: "背景色:中央",
    subTitle: "stopColor",
    initValue: "white",
  })
  const ColorEdge = useText({
    title: "背景色:縁",
    subTitle: "stopColor",
    initValue: "blue",
  })

  const CenterValue = useRange({
    title: "中央値",
    subTitle: "offset",
    initValue: 0.5,
    range: [0.1, 0.9],
    step: 0.1,
  })
  const code = `<svg width={700} height={140}>
  <defs>
    <radialGradient id="filterId">
      <stop offset="0" stopColor="${ColorCenter.value}" />
      <stop offset="${CenterValue.value}" stopColor="DodgerBlue" />
      <stop offset="1" stopColor="${ColorEdge.value}" />
    </radialGradient>
  </defs>
  <circle cx="70" cy="70" r="60" fill="url(#filterId)" />
</svg>`

  const jsx = (
    <svg width={700} height={140}>
      <defs>
        <radialGradient id={filterId}>
          <stop offset={0} stopColor={ColorCenter.value as string} />
          <stop offset={CenterValue.value} stopColor="DodgerBlue" />
          <stop offset={1} stopColor={ColorEdge.value as string} />
        </radialGradient>
      </defs>
      <circle cx="70" cy="70" r="60" fill={`url(#${filterId})`} />
    </svg>
  )

  return { title, code, options: [ColorCenter, ColorEdge, CenterValue], jsx }
}
