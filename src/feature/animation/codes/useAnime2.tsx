import { useState } from "react"
import { useRange, useSelect } from "~/library"

export function useAnime2() {
  const title = `Animation: 変動`
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

  const code = `<svg x="0" y="0" width="700" height="140">
  <circle cx="70" cy="70" r="60" fill="blue">
    <animate 
      attributeName="r"
      from="0"
      to="60"
      dur="${Duration.value}s"
      repeatCount="indefinite"
    />
  </path>
</svg>`

  const jsx = (
    <>
      {isVisible && (
        <svg x="0" y="0" width="700" height="140">
          <circle cx="70" cy="70" r="60" fill="blue">
            <animate
              attributeType="XML"
              attributeName="r"
              from="0"
              to="60"
              dur={`${Duration.value}s`}
              repeatCount={Repeat.value}
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
    options: [Duration, Repeat],
    jsx,
  }
}
