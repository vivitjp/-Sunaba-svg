import { useRange } from "~/library"

export function useBasic6() {
  const title = `表示範囲`

  const CoordX = useRange({
    title: "X軸",
    subTitle: "x",
    initValue: 120,
    range: [120, 700],
    step: 10,
  })

  const code = `<svg x="0" y="0" width="600" height="120">
  <rect x="20" y="20" width="80" height="80" fill="orange" stroke="red"  />
  <rect x="120" y="20" width="80" height="80" fill="blue" stroke="red"  />
</svg>`

  const jsx = (
    <svg x={0} y={0} width={600} height={120}>
      <rect x={20} y={20} width={80} height={80} fill="orange" stroke="red" />
      <rect
        x={CoordX.value as number}
        y={20}
        width={80}
        height={80}
        fill="blue"
        stroke="red"
      />
    </svg>
  )

  return { title, code, options: [CoordX], jsx }
}
