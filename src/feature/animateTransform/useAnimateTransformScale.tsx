import { useState } from "react"
import { useCheck, useCoordinate, useRange, useSelect } from "~/library"
import { UseReturnType } from "~/component"

export function useAnimateTransformScale(): UseReturnType {
  const title = `軸固定で拡大縮小`
  const subTitle = `type="scale"は左上を中心に全体が拡大縮小するのでグループ処理が楽`

  const visible = useState<boolean>(false)
  const [isVisible] = visible

  const Coordinate = useCoordinate({
    title: "中心座標",
    subTitle: "クリックで取得",
    initValue: [150, 150],
  })
  const [width, height] = [20, 20]
  const [x, y] = [
    Coordinate.value[0] - width / 2, //Click点を中心に
    Coordinate.value[1] - height / 2,
  ]

  const Fill = useSelect({
    title: "終了時処理",
    subTitle: "fill",
    initValue: "freeze",
    values: ["freeze", "remove"],
  })

  const Repeat = useSelect({
    title: "繰り返し",
    subTitle: "repeatCount",
    initValue: "indefinite",
    values: ["indefinite", "1", "2"],
  })

  const ScaleSize = useRange({
    title: "変化量",
    subTitle: "to",
    initValue: 3,
    range: [1.1, 10],
    step: 0.1,
  })

  const Duration = useRange({
    title: "変化インターバル",
    subTitle: "dur",
    initValue: 1.5,
    range: [0.5, 3],
    step: 0.1,
  })

  const CheckOpacity = useCheck({
    title: "透明追加",
    subTitle: "opacity",
    initValue: false,
  })

  const code = `<svg width="700" height="300" onClick={Coordinate.handleClick}>
  <g transform="translate(${x + width / 2},${y + width / 2})">
    <g>
      <g transform="translate(-${x + width / 2},-${y + width / 2})">
        <rect x=${x} y=${y} width=${width} height=${height} fill="Orange" stroke="red" >
          <animate
            attributeName="opacity"
            dur="${Duration.value}s"
            values="0;0.4;1" //透明時間を長く保持
            keyTimes="0;0.6;1"
            repeatCount="${Repeat.value}"
          />
        </rect>
      </g>
      <animateTransform
        attributeName="transform"
        type="scale"
        from="0.5"
        to="${ScaleSize.value}"
        dur="${Duration.value}s"
        fill="${Fill.value}"
        repeatCount="${Repeat.value}"
      />
    </g>
  </g>
</svg>`

  const jsx = (
    <>
      {isVisible && (
        <svg width="700" height="300" onClick={Coordinate.handleClick}>
          <g transform={`translate(${x + width / 2},${y + width / 2})`}>
            <g>
              <g transform={`translate(-${x + width / 2},-${y + width / 2})`}>
                <rect
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  fill="Orange"
                  stroke="red"
                >
                  {CheckOpacity.value && (
                    <animate
                      attributeName="opacity"
                      dur={`${Duration.value}s`}
                      repeatCount={Repeat.value}
                      values="0;0.4;1" //透明時間を長く保持
                      keyTimes={`0;0.6;1`}
                    />
                  )}
                </rect>
              </g>
              <animateTransform
                attributeName="transform"
                type="scale"
                from="0.5"
                to={ScaleSize.value}
                dur={`${Duration.value}s`}
                fill={Fill.value}
                repeatCount={Repeat.value}
              />
            </g>
          </g>
        </svg>
      )}
    </>
  )

  return {
    height: 300,
    visible,
    subTitle,
    title,
    code,
    options: [ScaleSize, Duration, Repeat, Fill, Coordinate, CheckOpacity],
    jsx,
  }
}
