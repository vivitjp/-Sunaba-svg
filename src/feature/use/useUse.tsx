import { useId } from "react"
import { UseReturnType } from "~/component"

export function useUse(): UseReturnType {
  const title = `再利用(use)`
  const subTitle = `id は重複を回避するため、useId() の使用を推奨`

  const code = `const id1 = useId()
const id2 = useId()
<svg width="700" height="220">
  <defs>
    <rect id={id1} width="100" height="100" fill="orange" stroke="red" />
    <rect id={id2} width="100" height="100" stroke="red" />
  </defs>
  <use href={\`#\${id1}\`} x="50" y="50" />
  <use href={\`#\${id1}\`} x="200" y="50" fill="blue" />
  <use href={\`#\${id2}\`} x="350" y="50" fill="blue" />
</svg>`

  const id1 = useId()
  const id2 = useId()

  const jsx = (
    <svg width={700} height={220}>
      <defs>
        <rect id={id1} width={100} height={100} fill="orange" stroke="red" />
        <rect id={id2} width={100} height={100} stroke="red" />
      </defs>
      <use href={`#${id1}`} x={50} y={50} />
      <use href={`#${id1}`} x={200} y={50} fill="blue" />
      <use href={`#${id2}`} x={350} y={50} fill="blue" />
    </svg>
  )

  return {
    title,
    subTitle,
    code,
    jsx,
  }
}
