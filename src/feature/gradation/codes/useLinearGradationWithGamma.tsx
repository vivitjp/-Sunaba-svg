import { useRange, useText } from "~/library"

export function useLinearGradationWithGamma() {
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
    valueType: "float",
  })

  const code = `<svg x={0} y={0} width={700} height={140}>
  <defs>
    <filter id="expoId" x="0" y="0" width="100%" height="100%">
      <feComponentTransfer>
        <feFuncR type="gamma" exponent="${Exponent.value}" />
        <feFuncG type="gamma" exponent="${Exponent.value}" />
        <feFuncB type="gamma" exponent="${Exponent.value}" />
      </feComponentTransfer>
    </filter>
    <linearGradient id="linearGradGamma">
      <stop offset="0" stopColor="${ColorLeft.value}" />
      <stop offset="0.5" stopColor="white" />
      <stop offset="1" stopColor="${ColorRight.value}" />
    </linearGradient>
  </defs>
  <path
    d="M10,10 h120 v120 h-120z"
    fill="url(#linearGradGamma)"
    filter="url(#expoId)"
  />
</svg>`

  const jsx = (
    <svg x={0} y={0} width={700} height={140}>
      <defs>
        <filter id="expoId" x="0" y="0" width="100%" height="100%">
          <feComponentTransfer>
            <feFuncR type="gamma" exponent={Exponent.value as number} />
            <feFuncG type="gamma" exponent={Exponent.value as number} />
            <feFuncB type="gamma" exponent={Exponent.value as number} />
          </feComponentTransfer>
        </filter>
        <linearGradient id="linearGradGamma">
          <stop offset="0" stopColor={ColorLeft.value as string} />
          <stop offset="1" stopColor={ColorRight.value as string} />
        </linearGradient>
      </defs>
      <path
        d="M10,10 h120 v120 h-120z"
        fill="url(#linearGradGamma)"
        filter="url(#expoId)"
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
