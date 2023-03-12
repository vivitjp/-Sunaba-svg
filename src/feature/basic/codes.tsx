import { ReactNode } from "react"

type Codes = {
  title: string
  code: string
  jsx: ReactNode
}

export const basicCodes: Codes[] = [
  {
    title: `SVG基本構文`,
    code: `<svg x={0} y={0} width={200} height={120}
  viewBox="0 0 200 120"
  xmlns="http://www.w3.org/2000/svg">
  <path d="M10,10 h80 v80 h-80z" fill="orange" stroke="red" />
</svg>`,
    jsx: (
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
    ),
  },
  /* -------------------------------------------------------- */
  {
    title: `SVG基本構文(略)`,
    code: `<svg width={200} height={120}>
  <path d="M10,10 h80 v80 h-80z" fill="orange" stroke="red" />
</svg>`,
    jsx: (
      <svg width={200} height={120}>
        <path d="M10,10 h80 v80 h-80z" fill="orange" stroke="red" />
      </svg>
    ),
  },
  /* -------------------------------------------------------- */
  {
    title: `グループ(g)`,
    code: `<svg width={200} height={120}>
  <g id="group-a" fill="orange" stroke="red">
    <path d="M10,10 h80 v80 h-80z" />
    <path d="M60,60 h80 v80 h-80z" fill="blue" />
  </g>
</svg>`,
    jsx: (
      <svg width={200} height={120}>
        <g id="group-a" fill="orange" stroke="red">
          <path d="M10,10 h80 v80 h-80z" />
          <path d="M80,30 h80 v80 h-80z" fill="blue" />
        </g>
      </svg>
    ),
  },
  /* -------------------------------------------------------- */
  {
    title: `SVG in SVG`,
    code: `<svg width={200} height={120}>
  <path d="M10,10 h80 v80 h-80z" fill="orange" stroke="red" />
  <svg x={70} y={20} width={100} height={100}>
    <path d="M10,10 h80 v80 h-80z" fill="green" stroke="red" />
  </svg>
</svg>`,
    jsx: (
      <svg width={200} height={120}>
        <path d="M10,10 h80 v80 h-80z" fill="orange" stroke="red" />
        <svg x={70} y={20} width={100} height={100}>
          <path d="M10,10 h80 v80 h-80z" fill="green" stroke="red" />
        </svg>
      </svg>
    ),
  },
]
