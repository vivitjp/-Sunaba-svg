import { useRange, useText } from "~/library"

export function useCircleGradation() {
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
    initValue: 50,
    range: [30, 80],
    step: 5,
  })
  const code = `<svg x={0} y={0} width={700} height={140}>
  <defs>
    <radialGradient id="circleGradId">
      <stop offset="0%" stopColor="${ColorCenter.value}" />
      <stop offset="${CenterValue.value}%" stopColor="DodgerBlue" />
      <stop offset="100%" stopColor="${ColorEdge.value}" />
    </radialGradient>
  </defs>
  <circle cx="70" cy="70" r="60" fill="url(#circleGradId)" />
</svg>`

  const jsx = (
    <svg x={0} y={0} width={700} height={140}>
      <defs>
        <radialGradient id="circleGradId">
          <stop offset="0%" stopColor={ColorCenter.value as string} />
          <stop offset={`${CenterValue.value}%`} stopColor="DodgerBlue" />
          <stop offset="100%" stopColor={ColorEdge.value as string} />
        </radialGradient>
      </defs>
      <circle cx="70" cy="70" r="60" fill="url(#circleGradId)" />
    </svg>
  )

  return { title, code, options: [ColorCenter, ColorEdge, CenterValue], jsx }
}
