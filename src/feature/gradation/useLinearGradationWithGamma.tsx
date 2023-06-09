import { useId } from "react"
import { UseReturnType } from "~/component"
import { useRange, useText } from "~/library"

export function useLinearGradationWithGamma(): UseReturnType {
  const expoId = useId()
  const filterId = useId()

  const title = `Gradation(Linear)+Filter(Gamma)`
  const ColorLeft = useText({
    title: "背景色:左",
    subTitle: "stopColor",
    initValue: "red",
  })
  const ColorRight = useText({
    title: "背景色:右",
    subTitle: "stopColor",
    initValue: "blue",
  })
  const Exponent = useRange({
    title: "指数",
    subTitle: "exponent",
    initValue: 1,
    range: [0, 2],
    step: 0.1,
  })

  const code = `<svg width={700} height={140}>
  <defs>
    <filter id="expoId">
      <feComponentTransfer>
        <feFuncR type="gamma" exponent="${Exponent.value}" />
        <feFuncG type="gamma" exponent="${Exponent.value}" />
        <feFuncB type="gamma" exponent="${Exponent.value}" />
      </feComponentTransfer>
    </filter>
    <linearGradient id="filterId">
      <stop offset="0" stopColor="${ColorLeft.value}" />
      <stop offset="0.5" stopColor="white" />
      <stop offset="1" stopColor="${ColorRight.value}" />
    </linearGradient>
  </defs>
  <path
    d="M10,10 h120 v120 h-120z"
    filter="url(#expoId)"
    fill="url(#filterId)"
  />
</svg>`

  const jsx = (
    <svg width={700} height={140}>
      <defs>
        <filter id={expoId}>
          <feComponentTransfer>
            <feFuncR type="gamma" exponent={Exponent.value} />
            <feFuncG type="gamma" exponent={Exponent.value} />
            <feFuncB type="gamma" exponent={Exponent.value} />
          </feComponentTransfer>
        </filter>
        <linearGradient id={filterId}>
          <stop offset="0" stopColor={ColorLeft.value} />
          <stop offset="1" stopColor={ColorRight.value} />
        </linearGradient>
      </defs>
      <path
        d="M10,10 h120 v120 h-120z"
        filter={`url(#${expoId})`}
        fill={`url(#${filterId})`}
      />
    </svg>
  )

  return {
    title,
    code,
    options: [ColorLeft, ColorRight, Exponent],
    jsx,
  }
}
