import { UseReturnType } from "~/component"

export function useBasic3Group2(): UseReturnType {
  const subTitle = `x, y, width, heightなどの属性は非継承\n`

  const code = `<svg width="600" height="120">
  <g fill="orange" stroke="red" x="10" y="100" width="80" height="80">
    <rect x="20" y="20" fill="green" />    <--- width,height グループ値非継承(非表示)
    <rect width="80" height="80" fill="orange" />    <--- x,y グループ値非継承(0,0)
    <rect x="120" y="20" width="80" height="80" fill="blue" />  <--- fill グループ値上書
  </g>
</svg>`

  const jsx = (
    <svg width={600} height={120}>
      <g fill="orange" stroke="red" x={10} y={100} width={80} height={80}>
        <rect x="20" y="20" fill="green" />
        <rect width={80} height={80} fill="orange" />
        <rect x={120} y={20} width={80} height={80} fill="blue" />
      </g>
    </svg>
  )

  return { subTitle, code, jsx }
}
