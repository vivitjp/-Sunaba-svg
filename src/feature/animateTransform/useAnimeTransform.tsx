import { useId, useState } from "react"
import { useCheck, useCoordinate, useRange, useSelect } from "~/library"
import { UseReturnType } from "~/component"

export function AnimateTransform(): UseReturnType {
  const title = `Animation Transform 各種`

  const visible = useState<boolean>(false)
  const [isVisible] = visible

  const Duration = useRange({
    title: "変化インターバル",
    subTitle: "dur",
    initValue: 3,
    range: [1, 5],
    step: 1,
  })

  const Fill = useSelect({
    title: "終了後の",
    subTitle: "fill",
    initValue: "freeze",
    values: ["freeze", "remove"],
  })

  const Coordinate = useCoordinate({
    title: "回転軸座標",
    subTitle: "クリックで取得",
    initValue: [350, 130],
  })

  const Repeat = useSelect({
    title: "繰り返し",
    subTitle: "repeatCount",
    initValue: "indefinite",
    values: ["indefinite", "1", "2"],
  })

  const CalcMode = useSelect({
    title: "Mode",
    subTitle: "calcMode",
    initValue: "linear",
    values: ["linear", "spline"], //"linear"="paced", "discrete"は無意味？
  })

  const KeySplines = useSelect({
    title: "時間分割制御(0~1)",
    subTitle: "keySplines",
    extraNote: `Bezier Curve(P0 P1 P2 P3:各0.0~1.0) *Safariでは「;」で区分`,
    initValue: "0 0 1 1",
    values: [
      { K: "Linear", V: "0 0 1 1" },
      { K: "Ease", V: "0.25 0.1 0.25 1" },
      { K: "Ease-in", V: "0.42 0 1 1" },
      { K: "Ease-out", V: "0 0 0.58 1" },
      { K: "Ease-in-out", V: "0.42 0 0.58 1" },
    ],
  })

  const CheckRotate = useCheck({
    title: "回転",
    subTitle: 'type="rotate"',
    initValue: false,
  })

  const CheckScale = useCheck({
    title: "拡大縮小",
    subTitle: 'type="scale"',
    extraNote: "座標全体が拡大縮小",
    initValue: false,
  })

  const CheckTranslate = useCheck({
    title: "移動",
    subTitle: 'type="translate"',
    initValue: false,
  })

  const code = `0,${Coordinate.value[0]},${Coordinate.value[1]}`

  const id = useId()
  const jsx = (
    <>
      {isVisible && (
        <svg width="700" height="300" onClick={Coordinate.handleClick}>
          <defs>
            <path id={id} d="M300,80 h100 v100 h-100z" />
          </defs>
          <use href={`#${id}`} fill="green">
            {CheckRotate.value && (
              <animateTransform
                attributeName="transform"
                type="rotate" //回転
                additive="sum" //複数の効果(上書き防止) or "replace"
                begin="0s"
                dur={`${Duration.value}s`}
                from={`0,${Coordinate.value[0]},${Coordinate.value[1]}`}
                to={`360,${Coordinate.value[0]},${Coordinate.value[1]}`}
                //values={"0;90;360"} ??
                //keySplines={KeySplines.value} //変化モード
                fill={Fill.value}
                calcMode={CalcMode.value}
                repeatCount={Repeat.value}
              />
            )}
            {CheckScale.value && (
              <animateTransform
                attributeName="transform"
                type="scale" //サイズ拡大縮小
                additive="sum" //複数の効果(上書き防止)
                begin="0s"
                dur={`${Duration.value}s`}
                values="1,1;0.8,0.8;1,1" //x,yのセット x 3
                keyTimes="0;0.5;1"
                //keySplines={KeySplines.value} //変化モード
                fill={Fill.value}
                repeatCount={Repeat.value}
              />
            )}
            {CheckTranslate.value && (
              <animateTransform
                attributeName="transform"
                type="translate"
                //additive="sum" //複数の効果(上書き防止)
                begin="0s"
                dur={`${Duration.value}s`}
                from="0,0" //x,y {`${Coordinate.value[0]},${Coordinate.value[1]}`}
                to="50,50" //x,y {`${Coordinate.value[0]},${Coordinate.value[1]}`}
                //values="1,1;0.8,0.8;1,1"
                //keyTimes="0;0.5;1"
                //keySplines={KeySplines.value} //変化モード
                fill={Fill.value}
                repeatCount={Repeat.value}
                //		<animateTransform attributeName="transform" type="translate" from="0,0" to="100,0" dur="1s" repeatCount="indefinite" />
              />
            )}
          </use>
        </svg>
      )}
    </>
  )

  return {
    height: 300,
    visible,
    title,
    code,
    options: [
      Fill,
      Duration,
      Repeat,
      CalcMode,
      Coordinate,
      KeySplines,
      CheckRotate,
      CheckScale,
      CheckTranslate,
    ],
    jsx,
  }
}
