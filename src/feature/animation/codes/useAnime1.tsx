import { useState } from "react"
import { useRange, useSelect, useText } from "~/library"

export function useAnime1() {
  const title = `変化(values)`
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

  const Values = useText({
    title: "背景色(複数値区切り ; )",
    subTitle: "values",
    initValue: "white;blue;white",
  })

  const code = `<svg x="0" y="0" width="700" height="140">
  <path d="M140,20 h100 v100 h-100z" fill="white">
    <animate
      attributeName="fill"
      begin="0s"
      dur="${Duration.value}s"
      repeatCount="${Repeat.value}"
      values="${Values.value}"  <---- from，to，by より優先
    />
  </path>
</svg>`

  const jsx = (
    <>
      {isVisible && (
        <svg x="0" y="0" width="700" height="140">
          <path d="M20,20 h100 v100 h-100z" fill="white">
            <animate
              attributeName="fill"
              begin="0s"
              dur={`${Duration.value}s`}
              repeatCount={Repeat.value}
              values={Values.value as string}
            />
          </path>
        </svg>
      )}
    </>
  )

  return { Visible, title, code, options: [Duration, Repeat, Values], jsx }
}
