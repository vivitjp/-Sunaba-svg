import { ReactNode } from "react"

type Codes = {
  title: string
  code: string
  jsx: ReactNode
}

export const useCodes: Codes[] = [
  {
    title: `再利用(use)`,
    code: `<svg x={0} y={0} width={700} height={220}>
  <defs>
    <rect id="rect1" width={100} height={100} fill="orange" stroke="red" />
    <rect id="rect2" width={100} height={100} stroke="red" />
  </defs>
  <use xlinkHref="#rect1" x={50} y={50} />
  <use xlinkHref="#rect1" x={200} y={50} fill="blue" />
  <use xlinkHref="#rect2" x={350} y={50} fill="blue" />
</svg>`,
    jsx: (
      <svg x={0} y={0} width={700} height={220}>
        <defs>
          <rect
            id="rect1"
            width={100}
            height={100}
            fill="orange"
            stroke="red"
          />
          <rect id="rect2" width={100} height={100} stroke="red" />
        </defs>
        <use xlinkHref="#rect1" x={50} y={50} />
        <use xlinkHref="#rect1" x={200} y={50} fill="blue" />
        <use xlinkHref="#rect2" x={350} y={50} fill="blue" />
      </svg>
    ),
  },
  /* -------------------------------------------------------- */
  {
    title: `グループ(g)と再利用(use)`,
    code: `<svg x={0} y={0} width={700} height={220}>
  <defs>
    <g id="g1">
      <rect x={0} y={0} width={100} height={100} />
      <rect x={150} y={0} width={100} height={100} />
    </g>
  </defs>
  <use xlinkHref="#g1" x={50} y={50} fill="orange" stroke="red" />
  <use xlinkHref="#g1" x={350} y={50} fill="blue" stroke="red" />
</svg>`,
    jsx: (
      <svg x={0} y={0} width={700} height={220}>
        <defs>
          <g id="g1">
            <rect x={0} y={0} width={100} height={100} />
            <rect x={150} y={0} width={100} height={100} />
          </g>
        </defs>
        <use xlinkHref="#g1" x={50} y={50} fill="orange" stroke="red" />
        <use xlinkHref="#g1" x={350} y={50} fill="blue" stroke="red" />
      </svg>
    ),
  },
]
