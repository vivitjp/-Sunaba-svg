import { useRange } from "~/library"

export function useMask1() {
  const title = `mask`

  const ClipY = useRange({
    title: "Mask Y軸",
    subTitle: "y",
    initValue: 100,
    range: [40, 200],
    step: 10,
  })
  const code = ``

  const jsx = (
    <svg x={0} y={0} width={700} height={200}>
      <mask
        id="mask1"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="700"
        height="200"
      >
        <g fill="white" fillRule="evenodd">
          <rect x={0} y={ClipY.value as number} width={700} height={20} />
          <rect
            x={0}
            y={(ClipY.value as number) + 30}
            width={700}
            height={20}
          />
        </g>
      </mask>

      <circle
        mask="url(#mask1)"
        cx={100}
        cy={100}
        r={60}
        fill="Tomato"
        stroke="white"
        strokeWidth={3}
      />
    </svg>
  )

  return { height: 200, title, code, options: [ClipY], jsx }
}
