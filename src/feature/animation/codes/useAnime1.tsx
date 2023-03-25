import { useState } from "react"
import { useRange, useSelect } from "~/library"
import { UseReturnType } from "./type"

export function useAnime1(): UseReturnType {
  const title = `変化(values & keyTimes)`
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

  const KeyTimes = useRange({
    title: "変化区切り",
    subTitle: "keyTimes",
    initValue: 0.5,
    range: [0.2, 0.9],
    step: 0.1,
    valueType: "float",
  })

  const code = `<svg width="700" height="140">
  <path d="M20,20 h100 v100 h-100z" fill="white">
    <animate
      attributeName="fill"
      dur="${Duration.value}s"
      repeatCount="${Repeat.value}"
      values="white;blue;white"  <---- from, to, by より優先
      keyTimes="0;${KeyTimes.value};1"
    />
  </path>
</svg>`

  const jsx = (
    <>
      {isVisible && (
        <svg width="700" height="140">
          <path d="M20,20 h100 v100 h-100z" fill="white">
            <animate
              attributeName="fill"
              dur={`${Duration.value}s`}
              repeatCount={Repeat.value as number}
              values="white;blue;white"
              keyTimes={`0;${KeyTimes.value};1`}
            />
          </path>
        </svg>
      )}
    </>
  )

  return {
    height: 155,
    Visible,
    title,
    code,
    options: [Duration, Repeat, KeyTimes],
    jsx,
  }
}
