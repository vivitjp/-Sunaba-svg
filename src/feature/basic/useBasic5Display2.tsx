import { useMemo } from "react"
import { UseReturnType } from "~/component"
import { useCheck } from "~/library"

export function useBasic5Display2(): UseReturnType {
  const CheckDisplay = useCheck({
    title: "Hooksによる切り替え",
    subTitle: "useState/useMemo",
    initValue: true,
  })

  const isVisible = useMemo(() => {
    return CheckDisplay.value
  }, [CheckDisplay.value])

  const code = `<svg width="600" height="120">
  {isVisible && (
    <rect x="20" y="20" width="80" height="80" fill="orange" stroke="red" />
  )}
</svg>`

  const jsx = (
    <svg width={600} height={120}>
      {isVisible && (
        <rect x={20} y={20} width={80} height={80} fill="orange" stroke="red" />
      )}
    </svg>
  )

  return { code, options: [CheckDisplay], jsx }
}
