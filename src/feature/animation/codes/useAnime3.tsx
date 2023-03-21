import { useState } from "react"
import { useRange, useSelect } from "~/library"

export function useAnime3() {
  const title = `変化(calcMode)`
  const Visible = useState<boolean>(false)
  const [isVisible] = Visible

  const code = `<svg x="0" y="0" width="700" height="140">
  <line d="M20,20 h" >
    <animate 
      attributeName="r"
      dur="5s"
      repeatCount="indefinite"
      from="0"
      to="60"
      calcMode= "{CalcMode.value}" //["discrete", "linear", "paced", "spline"]
    />
  </path>
</svg>`

  const jsx = (
    <>
      {isVisible && (
        <svg x="0" y="0" width="700" height="140">
          <line x="20" y="20" width="500" stroke="blue">
            <animate
              attributeName="width"
              begin="0s"
              from="0"
              to="500"
              dur="5s"
              repeatCount="indefinite"
              calcMode="linear"
            />
          </line>
        </svg>
      )}
    </>
  )

  return {
    Visible,
    title,
    code,
    options: [],
    jsx,
  }
}
