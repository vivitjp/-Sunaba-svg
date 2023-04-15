import { UseReturnType } from "~/component"
import { useCheck } from "~/library"

export function useBasic5Display1(): UseReturnType {
  const title = `表示切り替え`

  const CheckDisplay = useCheck({
    title: "属性による切り替え",
    subTitle: "display(block/none)",
    initValue: true,
  })

  const CheckVisible = useCheck({
    title: "属性による表示切り替え",
    subTitle: "visibility(visible/hidden)",
    initValue: true,
  })

  const code = `<svg width="600" height="120">
  <rect x="20" y="20" width="80" height="80" fill="orange" stroke="red"
    display="${CheckDisplay.value ? "block" : "none"}"
  />
  <rect x="120" y="20" width="80" height="80" fill="blue" stroke="red"
    visibility="${CheckVisible.value ? "visible" : "hidden"}"
  />
</svg>`

  const jsx = (
    <svg width={600} height={120}>
      <rect
        x={20}
        y={20}
        width={80}
        height={80}
        fill="orange"
        stroke="red"
        display={CheckDisplay.value ? "block" : "none"}
      />
      <rect
        x={120}
        y={20}
        width={80}
        height={80}
        fill="blue"
        stroke="red"
        visibility={CheckVisible.value ? "visible" : "hidden"}
      />
    </svg>
  )

  return { title, code, options: [CheckDisplay, CheckVisible], jsx }
}
