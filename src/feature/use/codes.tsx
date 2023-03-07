import { ReactNode } from "react"

type Codes = {
  title: string
  code: string
  jsx: ReactNode
}

export const codes: Codes[] = [
  {
    title: `再利用(use)`,
    code: `<svg x={0} y={0} width={600} height={120} viewBox="0 0 600 120">
  <defs>
    <rect id="rect1" width={100} height={100} fill="orange" stroke="red" />
    <rect id="rect2" width={100} height={100} stroke="red" />
  </defs>
  <use xlinkHref="#rect1" x={20} y={10} />
  <use xlinkHref="#rect1" x={140} y={10} fill="blue" />  👈 <defs>優先なので効果なし
  <use xlinkHref="#rect2" x={260} y={10} fill="blue" />
</svg>`,
    jsx: (
      <svg x={0} y={0} width={600} height={120} viewBox="0 0 600 120">
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
        <use xlinkHref="#rect1" x={20} y={10} />
        <use xlinkHref="#rect1" x={140} y={10} fill="blue" />
        <use xlinkHref="#rect2" x={260} y={10} fill="blue" />
      </svg>
    ),
  },
  /* -------------------------------------------------------- */
]
