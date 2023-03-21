import { useState } from "react"
import { useRange, useSelect } from "~/library"

export function useAnime2() {
  const title = `変化(from-to)`
  const Visible = useState<boolean>(false)
  const [isVisible] = Visible

  const Duration = useRange({
    title: "変化インターバル",
    subTitle: "dur",
    initValue: 3,
    range: [1, 5],
    step: 1,
  })

  const Repeat = useSelect({
    title: "繰り返し",
    subTitle: "repeatCount",
    initValue: "indefinite",
    values: ["indefinite", "1", "2"],
  })

  const CalcMode = useSelect({
    title: "変化の関数",
    subTitle: "calcMode",
    initValue: "linear",
    values: ["discrete", "linear", "paced", "spline"],
  })

  const code = `<svg x="0" y="0" width="700" height="140">
  <circle cx="70" cy="70" r="60" fill="blue">
    <animate 
      attributeName="r"
      begin="1s" <--- 初期値が0sでないと、animateなしのdefault属性表示
      dur="${Duration.value}s"
      repeatCount="indefinite"
      from="0"
      to="60"
      calcMode="${CalcMode.value}"
    />
  </path>
</svg>`

  const jsx = (
    <>
      {isVisible && (
        <svg x="0" y="0" width="700" height="140">
          <circle cx="70" cy="70" r="60" fill="blue">
            <animate
              attributeName="r"
              begin="1s"
              from="0"
              to="60"
              dur={`${Duration.value}s`}
              repeatCount={Repeat.value}
              calcMode={CalcMode.value}
            />
          </circle>
        </svg>
      )}
    </>
  )

  return {
    Visible,
    title,
    code,
    options: [Duration, Repeat, CalcMode],
    jsx,
  }
}
