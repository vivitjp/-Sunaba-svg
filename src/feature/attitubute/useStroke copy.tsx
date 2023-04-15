import { UseReturnType } from "~/component"
import { useSelect } from "~/library"

export function useStroke(): UseReturnType {
  const title = `Stroke(線色)`

  const Color = useSelect<string>({
    title: "線色",
    subTitle: "stroke",
    initValue: "DarkCyan",
    values: [
      "DarkCyan",
      "green",
      "red",
      "blue",
      "orange",
      "currentColor",
      "unknown",
    ],
  })

  const code = `<path d="M20,20 h600" stroke="${Color.value}" />`

  const jsx = (
    <svg width={640} height={40}>
      <path d="M20,20 h600" stroke={Color.value} />
    </svg>
  )

  return { title, code, options: [Color], jsx }
}

// const SizeHeight = useRange({
//   title: "コピー先サイズ(高)",
//   subTitle: "height",
//   initValue: 100,
//   range: [50, 360],
//   step: 10,
// })

// const CheckWHSync = useCheck({
//   title: "WidthにHeightをシンクロ",
//   initValue: true,
// })

// const Color = useSelect<string>({
//   title: "塗り色",
//   subTitle: "fill",
//   extraNote: "Symbolに fill 定義済の場合は無効",
//   initValue: "red",
//   values: ["green", "red", "blue", "orange"],
// })
