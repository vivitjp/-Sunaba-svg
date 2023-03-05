import { ReactNode } from "react"

type BasicCodes = {
  title: string
  code: string
  jsx: ReactNode
}

export const basicCodes: BasicCodes[] = [
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
        <rect x={0} y={0} width={200} height={120} fill="none" stroke="grey" />
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
        <rect x={0} y={0} width={200} height={120} fill="none" stroke="grey" />
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
    <path d="M60,60 h80 v80 h-80z" stroke="yellow" />
  </g>
</svg>`,
    jsx: (
      <svg width={200} height={120}>
        <rect x={0} y={0} width={200} height={120} fill="none" stroke="grey" />
        <g id="group-a" fill="orange" stroke="red">
          <path d="M10,10 h80 v80 h-80z" />
          <path d="M80,30 h80 v80 h-80z" stroke="yellow" />
        </g>
      </svg>
    ),
  },
  /* -------------------------------------------------------- */
  {
    title: ``,
    code: ``,
    jsx: <></>,
  },
]
