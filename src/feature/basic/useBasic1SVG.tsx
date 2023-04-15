import { UseReturnType } from "~/component"

export function useBasic1SVG(): UseReturnType {
  const title = `SVG基本構文`

  const code = `<svg
  x="0"
  y="0"
  width="600"
  height="120"
  viewBox="0 0 600 120"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="xMinYMin slice"
>
  <rect x="20" y="20" width="80" height="80" fill="orange" stroke="red" />
</svg>`

  const jsx = (
    <svg
      x={0}
      y={0}
      width={600}
      height={120}
      viewBox="0 0 600 120"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin slice"
    >
      <rect x={20} y={20} width={80} height={80} fill="orange" stroke="red" />
    </svg>
  )

  return { title, code, jsx }
}
