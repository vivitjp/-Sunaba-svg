import { useId } from "react"
import { useRange } from "~/library"

export function useMask1() {
  const rectId = useId()
  const maskId1 = useId()
  const maskId2 = useId()

  const title = `mask`
  const subTitle = `clip-pathとの違いは「通過」`

  const MaskY = useRange({
    title: "Mask Y軸",
    subTitle: "y",
    initValue: 20,
    range: [20, 130],
    step: 10,
  })

  const code = `<svg width={700} height={200}>
  <defs>
    <rect id="uniqueId" width={150} height={60} />
  </defs>

  <mask id="maskId1" x="0" y="0" width="300" height="200" fill="white">
    <use href="#uniqueId" x={20} y="${MaskY.value as number}" />
  </mask>

  <mask id="maskId2" x="0" y="0" width="300" height="200" fill="#aaa">
    <use href="#uniqueId" x={190} y="${MaskY.value as number}" />
  </mask>

  <circle cx={260} cy={120} r={60} fill="blue" />

  <circle mask="url(#maskId1)" cx={150} cy={100} r={60} fill="Tomato" />
  <circle mask="url(#maskId2)" cx={320} cy={100} r={60} fill="Tomato" />

  <g fill="none" stroke="#ccc">
    <use href="#uniqueId" x={20} y="${MaskY.value as number}" />
    <use href="#uniqueId" x={190} y="${MaskY.value as number}" />
  </g>
</svg>`

  const jsx = (
    <svg width={700} height={200}>
      <defs>
        <rect id={rectId} width={150} height={60} />
      </defs>

      <mask
        id={maskId1}
        x="0"
        y="0"
        width="300"
        height="200"
        fill="white"
        //maskContentUnits="objectBoundingBox"
        //style={{ maskType: MaskType.value as MaskType }} v2
      >
        <use href={`#${rectId}`} x={20} y={MaskY.value as number} />
      </mask>
      <mask id={maskId2} x="0" y="0" width="300" height="200" fill="#aaa">
        <use href={`#${rectId}`} x={190} y={MaskY.value as number} />
      </mask>

      <circle cx={100} cy={120} r={60} fill="blue" />
      <circle cx={260} cy={120} r={60} fill="blue" />

      <circle
        mask={`url(#${maskId1})`}
        cx={150}
        cy={100}
        r={60}
        fill="Tomato"
      />
      <circle
        mask={`url(#${maskId2})`}
        cx={320}
        cy={100}
        r={60}
        fill="Tomato"
      />

      <g fill="none" stroke="#ccc">
        <use href={`#${rectId}`} x={20} y={MaskY.value as number} />
        <use href={`#${rectId}`} x={190} y={MaskY.value as number} />
      </g>
    </svg>
  )

  return { height: 200, title, subTitle, code, options: [MaskY], jsx }
}
