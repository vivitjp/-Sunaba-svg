import { UseReturnType } from "~/component"
import { roundFloat, useCheck, useRange } from "~/library"

export const useScale = (): UseReturnType => {
  const title = `scale()による座標転換`
  const subTitle = `SVGは左上座標が{0,0}。グラフなどの座標系ではY軸値の上下逆転が必要。値の逆算は面倒なので、グラフ全体をフリップさせる。ただし文字列も反転するので再反転させる。*ここで反転軸中心座標属性名 transform-origin(x,y) はキャメルケースにせずこのまま使用`

  const XFlip = useCheck({
    title: "X座標の左右転換",
    subTitle: "transform-origin",
    initValue: false,
  })

  const YFlip = useCheck({
    title: "Y座標の上下転換",
    subTitle: "transform-origin",
    initValue: true,
  })

  const X = useRange({
    title: "X値",
    initValue: 200,
    range: [0, 500],
    step: 10,
  })

  const [maxX, maxY] = [500, 250]

  const theta = roundFloat(Math.atan2(maxX, maxY), 4)
  const y = roundFloat(X.value / Math.tan(theta), 4)

  const code = `<svg width="800" height="300">
  <g transform="scale(${XFlip.value ? -1 : 1},${
    YFlip.value ? -1 : 1
  })" transform-origin="50% 50%"> //group全体を上下反転
    <path d="M0,0 l${maxX},${maxY}" fill="none" stroke="blue" />
    <circle cx="${X.value}" cy="${y}" r="5" fill="red" />
    <text x="${X.value + 10}" y="${y}" dominantBaseline="central"
      transform="scale(${XFlip.value ? -1 : 1},${
    YFlip.value ? -1 : 1
  })" transform-origin="${X.value} ${y}"
    >${X.value},${y} 文字列は再反転</text>
  </g>
</svg>`

  const jsx = (
    <svg width="800" height="300" preserveAspectRatio="xMinYMin slice">
      <g
        transform={`scale(${XFlip.value ? -1 : 1},${YFlip.value ? -1 : 1})`}
        transform-origin="50% 50%" //transform-origin はケバブ
      >
        <path
          d={`M0,0 l${maxX},${maxY}`}
          fill="none"
          stroke="blue"
          strokeWidth="1.2"
        />
        <circle cx={X.value} cy={y} r="5" fill="red" />
        <text
          x={X.value + 20}
          y={y}
          dominantBaseline="central"
          transform={`scale(${XFlip.value ? -1 : 1},${YFlip.value ? -1 : 1})`}
          transform-origin={`${X.value} ${y}`}
          style={{ fontSize: "18px" }}
        >
          {X.value},{y}: 文字列は再反転
        </text>
      </g>
    </svg>
  )

  return {
    height: 300,
    title,
    subTitle,
    code,
    options: [YFlip, XFlip, X],
    jsx,
  }
}
