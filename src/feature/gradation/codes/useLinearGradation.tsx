import { useRange, useText } from "~/library"

export function useLinearGradation() {
  const title = `Gradation(Linear)`
  const CenterValue = useRange({
    title: "中央値",
    subTitle: "offset",
    initValue: 0.5,
    range: [0.3, 0.7],
    step: 0.1,
    valueType: "float",
  })
  const ColorLeft = useText<string>({
    title: "背景色:左",
    subTitle: "stopColor",
    initValue: "red",
  })
  const ColorRight = useText<string>({
    title: "背景色:右",
    subTitle: "stopColor",
    initValue: "blue",
  })

  const code = `<svg width={700} height={140}>
  <defs>
    <linearGradient id="linearGradId">
      <stop offset="0" stopColor="${ColorLeft.value}" />
      <stop offset="${CenterValue.value}" stopColor="white" />
      <stop offset="1" stopColor="${ColorRight.value}" />
    </linearGradient>
  </defs>
  <path
    d="M10,10 h120 v120 h-120z"
    fill="url(#linearGradId)"
    filter="url(#expoId)"
  />
</svg>`

  const jsx = (
    <svg width={700} height={140}>
      <defs>
        <linearGradient id="linearGradId">
          <stop offset="0" stopColor={ColorLeft.value} />
          <stop offset={CenterValue.value} stopColor="white" />
          <stop offset="1" stopColor={ColorRight.value} />
        </linearGradient>
      </defs>
      <path
        d="M10,10 h120 v120 h-120z"
        fill="url(#linearGradId)"
        filter="url(#expoId)"
      />
    </svg>
  )

  return {
    title,
    code,
    options: [CenterValue, ColorLeft, ColorRight],
    jsx,
  }
}
