import { useRange } from "~/library"

export function useClipPath1() {
  const title = `可視範囲の定義(ClipPath)`

  const ClipY = useRange({
    title: "クリップ Y軸",
    subTitle: "y",
    initValue: 100,
    range: [20, 120],
    step: 10,
  })
  const code = `<svg x="0" y="0" width="700" height="280">
  <defs>
    <clipPath id="clip1">
      <rect x="20" y="${ClipY.value}" width="680" height="60" />
    </clipPath>
    <circle clipPath="url(#clip1)" cx="100" cy="100" r="60" fill="Tomato" />
    <circle cx="240" cy="100" r="60" fill="blue" />
    <rect x="20" y="${ClipY.value}" width="680" height="60" />   <-- ClipPath可視化
  </defs>
</svg>`

  const jsx = (
    <svg x={0} y={0} width={700} height={200}>
      <defs>
        <clipPath id="clip1">
          <rect x={20} y={ClipY.value as number} width={200} height={60} />
          <rect x={240} y={ClipY.value as number} width={200} height={60} />
        </clipPath>
      </defs>
      <circle clipPath="url(#clip1)" cx={100} cy={100} r={60} fill="Tomato" />
      <circle cx={240} cy={100} r={60} fill="blue" />
      <rect
        x={20}
        y={ClipY.value as number}
        width={680}
        height={60}
        fill="none"
        strokeWidth="1"
        stroke="#ddd"
      />
    </svg>
  )

  return { height: 200, title, code, options: [ClipY], jsx }
}
