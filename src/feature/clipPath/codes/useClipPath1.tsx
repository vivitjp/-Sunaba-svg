import { useRange } from "~/library"

export function useClipPath1() {
  const title = `ClipPath`

  const ClipY = useRange({
    title: "クリップ Y軸",
    subTitle: "y",
    initValue: 100,
    range: [40, 200],
    step: 10,
  })
  const code = `<svg x={0} y={0} width={700} height={280}>
  <defs>
    <clipPath id="myClip1">
      <rect x={50} y="${ClipY.value}" width={300} height={60} />
    </clipPath>
    <circle id="square1" cx={160} cy={120} r={60}
      fill="Tomato" stroke="white" strokeWidth={3} />
  </defs>
  <use clipPath="url(#myClip)" href="#square1" />
</svg>`

  const jsx = (
    <svg x={0} y={0} width={700} height={200}>
      <defs>
        <clipPath id="myClip1">
          <rect x={0} y={ClipY.value as number} width={700} height={60} />
        </clipPath>
        <circle
          id="square1"
          cx={100}
          cy={100}
          r={60}
          fill="Tomato"
          stroke="white"
          strokeWidth={3}
        />
      </defs>
      <use clipPath="url(#myClip1)" href="#square1" />
    </svg>
  )

  return { height: 200, title, code, options: [ClipY], jsx }
}
