import { useState } from "react"
import { UseReturnType } from "~/component"
import { useCheck, useRange, useSelect } from "~/library"

export function useAnimeMotionMpath(): UseReturnType {
  const title = `モーションパス(mpath)による移動`

  const visible = useState<boolean>(false)
  const [isVisible] = visible

  const TextPath = useCheck({
    title: "パス表示",
    extraNote: "animateMotion では xlinkHref='#id' 使用不可",
    initValue: false,
  })

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

  const code = `<svg width="700" height="200">
  <defs>
    <path id="pathWave" d="M100,100 c50,-50 150,-50 200,0 s150,50 200,0" />
  </defs>
  <circle cx="0" cy="0" r="10" fill="green">
    <animateMotion begin="0s" dur="${Duration.value}s" repeatCount="${Repeat.value}">
      <mpath xlinkHref="#pathWave" />
    </animateMotion>
  </circle>
</svg>`

  const jsx = (
    <>
      {isVisible && (
        <svg width="700" height="200">
          <defs>
            <path
              id="pathWave"
              d="M100,100 c50,-50 150,-50 200,0 s150,50 200,0"
            />
          </defs>
          {TextPath.value && (
            <use
              data-testid="Baseパス(Wave)"
              xlinkHref="#pathWave"
              stroke="#aaa"
              fill="none"
              visibility={TextPath.value ? "visible" : "hidden"}
            />
          )}
          <circle cx="0" cy="0" r="10" fill="green">
            <animateMotion
              begin="0s"
              dur={`${Duration.value}s`}
              repeatCount={Repeat.value}
            >
              <mpath xlinkHref="#pathWave" />
            </animateMotion>
          </circle>
        </svg>
      )}
    </>
  )

  return {
    height: 200,
    visible,
    title,
    code,
    options: [TextPath, Duration, Repeat],
    jsx,
  }
}
