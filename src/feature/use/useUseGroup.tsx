import { useId } from "react"
import { UseReturnType } from "~/component"

export function useUseGroup(): UseReturnType {
  const title = `グループ(g)と再利用(use)`

  const code = `const id = useId()
<svg width="700" height="220">
  <defs>
    <g id={id}>
      <rect x="0" y="0" width="100" height="100" />
      <rect x="150" y="0" width="100" height="100" />
    </g>
  </defs>
  <use href={\`#\${id}\`} x="50" y="50" fill="orange" stroke="red" />
  <use href={\`#\${id}\`} x="350" y="50" fill="blue" stroke="red" />
</svg>`

  const id = useId()
  const jsx = (
    <svg width={700} height={220}>
      <defs>
        <g id={id}>
          <rect x={0} y={0} width={100} height={100} />
          <rect x={150} y={0} width={100} height={100} />
        </g>
      </defs>
      <use href={`#${id}`} x={50} y={50} fill="orange" stroke="red" />
      <use href={`#${id}`} x={350} y={50} fill="blue" stroke="red" />
    </svg>
  )

  return {
    title,
    code,
    jsx,
  }
}
