import { useState } from "react"
import { UseReturnType } from "./type"

export function useAnime4(): UseReturnType {
  const title = `変化(keySplines)`
  const Visible = useState<boolean>(false)
  const [isVisible] = Visible

  const code = `<svg x="0" y="0" width="700" height="140">
  <circle cx="70" cy="70" r="0" fill="blue"> // 初期値 r="0"
    <animate 
      attributeName="r"
      begin="0s"
      dur="5s"
      repeatCount="indefinite"
      to="60" or by="60" // to が優先
      calcMode="spline"
    />
  </circle>
</svg>`

  const jsx = (
    <>
      {isVisible && (
        <svg x="0" y="0" width="700" height="220">
          <Movement y={20} keySplines="0.25 0.1 0.25 1.0" name="Ease" />
          <Movement y={50} keySplines="0.0 0.0 1.0 1.0" name="Linear" />
          <Movement y={80} keySplines="0.42 0 1.0 1.0" name="Ease-in" />
          <Movement y={110} keySplines="0.0 0.0 0.58 1.0" name="Ease-out" />
          <Movement y={140} keySplines="0.42 0.0 0.58 1.0" name="Ease-in-out" />
        </svg>
      )}
    </>
  )

  return {
    height: 220,
    Visible,
    title,
    code,
    options: [],
    jsx,
  }
}

const Movement = ({
  name,
  y,
  keySplines,
}: {
  name: string
  y: number
  keySplines: string
}) => {
  return (
    <>
      <text x="10" y={y}>
        {name}
      </text>
      <circle cy={y} r="10" fill="red">
        <animate
          attributeName="cx"
          calcMode="spline"
          keyTimes="0;1"
          keySplines={keySplines}
          from="100"
          to="580"
          begin="0s"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
    </>
  )
}
