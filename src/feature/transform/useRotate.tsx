import { UseReturnType } from "~/component"
import { SVG } from "~/library"
import { useCoordinate } from "~/library/hooks/useCoordinate"
import { useRange } from "~/library/hooks/useRange"

export const useRotate = (): UseReturnType => {
  const title = `Rotate`

  const Rotate = useRange({
    title: "回転",
    subTitle: "rotate(deg[0-360],x,y)",
    initValue: 0,
    range: [-360, 360],
    step: 1,
  })

  const Coordinate = useCoordinate({
    title: "座標取得",
    subTitle: "クリックで取得",
    initValue: [0, 0],
  })

  const code = `<SVG width="800" height="300" onClick={CLICK_HANDLER}>
  <circle cx="300" cy="150" r="50" fill="tomato" transform="rotate(${Rotate.value},${Coordinate.value[0]},${Coordinate.value[1]})" />
</SVG>`

  const jsx = (
    <SVG
      width={800}
      height={300}
      preserveAspectRatio="xMinYMin slice"
      onClick={Coordinate.handleClick}
    >
      <circle
        cx={300}
        cy={150}
        r={50}
        fill="tomato"
        transform={`rotate(${Rotate.value},${Coordinate.value[0]},${Coordinate.value[1]})`}
      />
    </SVG>
  )

  return {
    height: 300,
    title,
    code,
    options: [Rotate, Coordinate],
    jsx,
  }
}
