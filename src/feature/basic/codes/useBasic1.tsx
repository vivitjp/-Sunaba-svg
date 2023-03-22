import { UseReturnType } from "~/feature/animation/codes/type"

export function useBasic1(): UseReturnType {
  const title = `SVG基本構文`

  const code = `<svg x="0" y="0" width="200" height="120"
  viewBox="0 0 200 120"
  xmlns="http://www.w3.org/2000/svg">
  <path d="M10,10 h80 v80 h-80z" fill="orange" stroke="red" />
</svg>`

  const jsx = (
    <svg
      x={0}
      y={0}
      width={200}
      height={120}
      viewBox="0 0 200 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10,10 h80 v80 h-80z" fill="orange" stroke="red" />
    </svg>
  )

  return { title, code, jsx }
}
