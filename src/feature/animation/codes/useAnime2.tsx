import { useState } from "react"
import { useRange, useSelect } from "~/library"
import { UseReturnType } from "./type"

export function useAnime2(): UseReturnType {
  const title = `変化(from-to/by)`
  const visible = useState<boolean>(false)
  const [isVisible] = visible

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
    values: ["linear", "discrete", "spline", "paced"],
  })

  const code = `<svg width="700" height="140">
  <circle cx="70" cy="70" r="60" fill="blue"> // 初期値 r="60"
    <animate 
      attributeName="r"
      dur="${Duration.value}s"
      repeatCount="indefinite"
      from="0"
      to="60" or by="60" // to が優先
      calcMode="${CalcMode.value}"
    />
  </circle>
</svg>`

  const jsx = (
    <>
      {isVisible && (
        <svg width="700" height="140">
          <circle cx="70" cy="70" r="60" fill="blue">
            <animate
              attributeName="r"
              from="0"
              to="60"
              dur={`${Duration.value}s`}
              repeatCount="indefinite"
              calcMode={CalcMode.value as string}
            />
          </circle>
          <circle cx="220" cy="70" r="60" fill="blue">
            <animate
              attributeName="r"
              from="0"
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
    visible,
    title,
    code,
    options: [Duration, CalcMode],
    jsx,
  }
}
