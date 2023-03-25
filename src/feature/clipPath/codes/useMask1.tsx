import { useRange } from "~/library"

export function useMask1() {
  const title = `mask`

  const MaskY = useRange({
    title: "Mask Y軸",
    subTitle: "y",
    initValue: 20,
    range: [20, 130],
    step: 10,
  })
  const code = ``

  const jsx = (
    <svg x={0} y={0} width={700} height={200}>
      <mask id="mask1" x="0" y="0" width="300" height="200" fill="white">
        <g fillRule="evenodd">
          <rect x={20} y={MaskY.value as number} width={300} height={20} />
          <rect
            x={20}
            y={(MaskY.value as number) + 30}
            width={300}
            height={20}
          />
        </g>
      </mask>

      <circle mask="url(#mask1)" cx={100} cy={100} r={60} fill="Tomato" />
      <g id="g1" fill="none" stroke="#ccc">
        <rect x={20} y={MaskY.value as number} width={300} height={20} />
        <rect x={20} y={(MaskY.value as number) + 30} width={300} height={20} />
      </g>
    </svg>
  )

  return { height: 200, title, code, options: [MaskY], jsx }
}
