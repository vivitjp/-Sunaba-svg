import { UseReturnType } from "~/component"

export function useBasic3Group1(): UseReturnType {
  const title = `グループ(g)`

  const code = `<svg width="600" height="120">
  <g fill="orange" stroke="red">
    <rect x="20" y="20" width="80" height="80" />
    <rect x="120" y="20" width="80" height="80" fill="blue" />
  </g>
</svg>`

  const jsx = (
    <svg width={600} height={120}>
      <g fill="orange" stroke="red">
        <rect x={20} y={20} width={80} height={80} />
        <rect x={120} y={20} width={80} height={80} fill="blue" />
      </g>
    </svg>
  )

  return { title, code, jsx }
}
