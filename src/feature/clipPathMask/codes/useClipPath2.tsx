import { useId } from "react"
import { useRange } from "~/library"

export function useClipPath2() {
  const clipId = useId()
  const title = `グループと Use の応用`

  const ClipY = useRange({
    title: "クリップ Y軸",
    subTitle: "y",
    initValue: 100,
    range: [20, 120],
    step: 10,
  })
  const code = `<svg width="700" height="200">
  <defs>
    <rect id="cp1" x="0" y="0" width="150" height="60" />
    <clipPath id="uniqueId">
      <use href="#cp1" x="20" y="${ClipY.value as number}" />
      <use href="#cp1" x="190" y="${ClipY.value as number}" />
    </clipPath>
  </defs>
  <g clipPath="url(#uniqueId)" fill="Tomato">
    <circle cx="160" cy="80" r="60" />
    <circle cx="340" cy="120" r="60" />
  </g>
  <g fill="none" strokeWidth="1" stroke="#ddd">   <-- ClipPath可視化
    <use href="#cp1" x="20" y="${ClipY.value as number}" />
    <use href="#cp1" x="190" y="${ClipY.value as number}" />
  </g>
</svg>`

  const jsx = (
    <svg width={700} height={200}>
      <defs>
        <rect id="cp1" x={0} y={0} width={150} height={60} />
        <clipPath id={clipId}>
          <use href="#cp1" x={20} y={ClipY.value as number} />
          <use href="#cp1" x={190} y={ClipY.value as number} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`} fill="Tomato">
        <circle cx={160} cy={80} r={60} />
        <circle cx={340} cy={120} r={60} />
      </g>
      <g fill="none" strokeWidth="1" stroke="#ddd">
        <use href="#cp1" x={20} y={ClipY.value as number} />
        <use href="#cp1" x={190} y={ClipY.value as number} />
      </g>
    </svg>
  )

  return { height: 200, title, code, options: [ClipY], jsx }
}
