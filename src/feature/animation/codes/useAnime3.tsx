import { useState } from "react"
import { useRange, useSelect } from "~/library"
import { UseReturnType } from "./type"

export function useAnime3(): UseReturnType {
  const title = `変化(to/by)`
  const Visible = useState<boolean>(false)
  const [isVisible] = Visible

  const Duration = useRange({
    title: "変化インターバル",
    subTitle: "dur",
    initValue: 3,
    range: [1, 5],
    step: 1,
  })

  const CalcMode = useSelect({
    title: "Mode",
    subTitle: "calcMode",
    initValue: "linear",
    values: ["linear", "discrete"],
  })

  const code = `<svg x="0" y="0" width="700" height="140">
  <circle cx="70" cy="70" r="0" fill="blue"> // 初期値 r="0"
    <animate 
      attributeName="r"
      dur="${Duration.value}s"
      repeatCount="indefinite"
      to="60" or by="60" // to が優先
      calcMode="${CalcMode.value}"
    />
  </circle>
</svg>`

  const jsx = (
    <>
      {isVisible && (
        <svg x="0" y="0" width="700" height="140">
          <circle cx="70" cy="70" r="0" fill="blue">
            <animate
              attributeName="r"
              to="60"
              dur={`${Duration.value}s`}
              repeatCount="indefinite"
              calcMode={CalcMode.value as string}
            />
          </circle>
          <circle cx="220" cy="70" r="0" fill="blue">
            <animate
              attributeName="r"
              by="60"
              dur={`${Duration.value}s`}
              repeatCount="indefinite"
              calcMode={CalcMode.value as string}
            />
          </circle>
        </svg>
      )}
    </>
  )

  return {
    height: 155,
    Visible,
    title,
    code,
    options: [Duration, CalcMode],
    jsx,
  }
}
