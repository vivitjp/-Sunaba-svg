import { CSSProperties, useId } from "react"
import { UseReturnType } from "~/component"
import { useRange, useSelect } from "~/library"

export function useMask1(): UseReturnType {
  const maskId = useId()

  const title = `mask`
  const subTitle = `clip-pathとの違いは「通過」`

  const MaskY = useRange({
    title: "Mask Y軸",
    subTitle: "y",
    initValue: 70,
    range: [-30, 170],
    step: 10,
  })

  const MaskType = useSelect({
    title: "maskの通過設定",
    subTitle: "maskType",
    initValue: "luminance",
    values: ["luminance", "alpha"],
  })

  const code = `<svg width={700} height={200}>
  {/* 背景 */}
  <rect x={10} y={10} width={120} height={180} fill="Tomato" />
  <rect x={180} y={10} width={120} height={180} fill="Tomato" />
 
  {/* Mask fill=通過レベル */}
  <mask id="maskId" fill="#aaa" style={{ maskType: ${MaskType.value} } as CSSProperties} >
    <rect x={10} y={${MaskY.value}} width={300} height={60} />
  </mask>
  <rect x={10} y={${MaskY.value}} width={290} height={60} fill="none" stroke="#777" />
 
  {/* Mask適用 */}
  <circle mask={url(#maskId)} cx={155} cy={100} r={70} fill="blue" />
</svg>
 
{/* Gray枠はmaskの位置を示す補助線 */}
`

  const jsx = (
    <svg width={700} height={200}>
      <rect x={10} y={10} width={120} height={180} fill="Tomato" />
      <rect x={180} y={10} width={120} height={180} fill="Tomato" />

      <mask
        id={maskId}
        fill="#777" //通過レベル
        style={{ maskType: MaskType.value } as CSSProperties}
      >
        <rect x={10} y={MaskY.value} width={300} height={60} />
      </mask>
      <rect
        x={10}
        y={MaskY.value}
        width={290}
        height={60}
        fill="none"
        stroke="#777"
      />

      <circle mask={`url(#${maskId})`} cx={155} cy={100} r={70} fill="blue" />
    </svg>
  )

  return { height: 200, title, subTitle, code, options: [MaskY, MaskType], jsx }
}
