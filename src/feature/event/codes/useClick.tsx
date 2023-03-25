import { useId } from "react"
import { useRange } from "~/library"

export function useClick() {
  const clipId = useId()
  const title = `可視範囲の定義(ClipPath)`

  const code = `<svg width="700" height="280">
  <defs>
    <clipPath id="uniqueId">
      <rect x="20" y="{ClipY.value}" width="680" height="60" />
    </clipPath>
    <circle clipPath="url(#uniqueId)" cx="100" cy="100" r="60" fill="Tomato" />
    <circle cx="240" cy="100" r="60" fill="blue" />
    <rect x="20" y="{ClipY.value}" width="680" height="60" />   <-- ClipPath可視化
  </defs>
</svg>`

  const handleClick = (e: React.MouseEvent<SVGCircleElement>) => {
    console.log("Clicked: ", e.clientX, e.clientY)
  }

  const handleMouseEnter = (e: React.MouseEvent<SVGCircleElement>) => {
    console.log("Mouse Enter")
    e.stopPropagation()
  }

  const jsx = (
    <svg width={700} height={200}>
      <circle
        clipPath={`url(#${clipId})`}
        cx={100}
        cy={100}
        r={60}
        fill="Tomato"
        pointer-events="fill"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
      />
    </svg>
  )

  return { height: 200, title, code, options: [], jsx }
}
