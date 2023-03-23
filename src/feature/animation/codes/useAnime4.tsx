import { useState } from "react"
import { UseReturnType } from "./type"
import { useSelect } from "~/library"

export function useAnime4(): UseReturnType {
  const title = `変化スタイル(keySplines)`
  const Visible = useState<boolean>(false)
  const [isVisible] = Visible

  const keySplines = useSelect({
    title: "keySplines",
    subTitle: "keySplines",
    initValue: "Linear",
    values: [
      { K: "Linear", V: "0.0 0.0 1.0 1.0" },
      { K: "Ease", V: "0.25 0.1 0.25 1.0" },
      { K: "Ease-in", V: "0.42 0 1.0 1.0" },
      { K: "Ease-out", V: "0.0 0.0 0.58 1.0" },
      { K: "Ease-in-out", V: "0.42 0.0 0.58 1.0" },
      //Safari has issues: "0.42; 0.0; 0.58; 1.0"
    ],
  })

  const code = `<svg x="0" y="0" width="700" height="220">
  <circle cx="30" cy="30" r="10" fill="red">
    <animate
      attributeName="cx"
      calcMode="spline"
      keyTimes="0;1"
      keySplines="${keySplines.value}"
      from="30"
      to="580"
      begin="1s"
      dur="3s"
      repeatCount="indefinite"
    />
  </circle>
</svg>`

  const jsx = (
    <>
      {isVisible && (
        <svg x="0" y="0" width="700" height="220">
          <circle cx="30" cy={30} r="10" fill="red">
            <animate
              attributeName="cx"
              calcMode="spline"
              keyTimes="0;1"
              keySplines={keySplines.value as string}
              from="30"
              to="680"
              begin="0s"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      )}
    </>
  )

  return {
    height: 60,
    Visible,
    title,
    code,
    options: [keySplines],
    jsx,
  }
}

// const Movement = ({
//   name,
//   y,
//   keySplines,
// }: {
//   name: string
//   y: number
//   keySplines: string
// }) => {
//   return (
//     <>
//       <text x="10" y={y}>
//         {name}
//       </text>
//       <circle cx="100" cy={y} r="10" fill="red">
//         <animate
//           attributeName="cx"
//           calcMode="spline"
//           keyTimes="0;1"
//           keySplines={keySplines}
//           from="100"
//           to="580"
//           begin="1s"
//           dur="3s"
//           repeatCount="indefinite"
//         />
//       </circle>
//     </>
//   )
// }

// <Movement y={20} keySplines="0.0 0.0 1.0 1.0" name="Linear" />
// <Movement y={50} keySplines="0.25 0.1 0.25 1.0" name="Ease" />
// <Movement y={80} keySplines="0.42 0 1.0 1.0" name="Ease-in" />
// <Movement y={110} keySplines="0.0 0.0 0.58 1.0" name="Ease-out" />
// <Movement y={140} keySplines="0.42 0.0 0.58 1.0" name="Ease-in-out" />
