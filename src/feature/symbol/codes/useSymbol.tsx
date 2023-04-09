import { useId } from "react"
import { useCheck, useRange, useSelect } from "~/library"

export function useSymbol() {
  const symbolId = useId()
  const title = `Symbol`
  const subTitle = "viewbox付きのグループ<g>"

  const AspectRatio = useSelect<string>({
    title: "方向",
    subTitle: "orient",
    initValue: "xMinYMin meet",
    values: ["none", "xMinYMin meet", "xMinYMin slice"],
  })

  const SizeWidth = useRange({
    title: "コピー先サイズ(幅)",
    subTitle: "width",
    initValue: 100,
    range: [50, 600],
    step: 10,
  })

  const SizeHeight = useRange({
    title: "コピー先サイズ(高)",
    subTitle: "height",
    initValue: 100,
    range: [50, 360],
    step: 10,
  })

  const CheckWHSync = useCheck({
    title: "WidthにHeightをシンクロ",
    initValue: true,
  })

  const Color = useSelect<string>({
    title: "塗り色",
    subTitle: "fill",
    extraNote: "Symbolに fill 定義済の場合は無効",
    initValue: "red",
    values: ["green", "red", "blue", "orange"],
  })

  const code = ``

  const jsx = (
    <svg width={700} height={400}>
      <defs>
        <symbol
          id={symbolId}
          viewBox="0 0 100 100"
          preserveAspectRatio={AspectRatio.value}
        >
          <rect x="0" y="0" width="40" height="40" fill="red" />
          <rect x="50" y="0" width="40" height="40" fill="yellow" />
          <rect x="0" y="50" width="40" height="40" fill="green" />
          <rect x="50" y="50" width="40" height="40" />
        </symbol>
      </defs>

      <use
        xlinkHref={`#${symbolId}`}
        x="20"
        y="20"
        width={SizeWidth.value}
        height={CheckWHSync.value ? SizeWidth.value : SizeHeight.value}
        fill={Color.value}
      />
      <rect
        x="20"
        y="20"
        width={SizeWidth.value}
        height={CheckWHSync.value ? SizeWidth.value : SizeHeight.value}
        stroke={"#ddd"}
        fill="none"
      />
    </svg>
  )

  return {
    title,
    subTitle,
    code,
    options: [AspectRatio, SizeWidth, SizeHeight, CheckWHSync, Color],
    jsx,
  }
}
