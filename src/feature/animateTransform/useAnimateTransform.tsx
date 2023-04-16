import { useId, useState } from "react"
import { useCheck, useCoordinate, useRange, useSelect } from "~/library"
import { UseReturnType } from "~/component"

export function useAnimateTransform(): UseReturnType {
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

  const [width, height] = [100, 100]
  const Coordinate = useCoordinate({
    title: "回転軸座標",
    subTitle: "クリックで取得",
    initValue: [150, 150],
  })
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

  const TranslateDistance = useRange({
    title: "変化距離",
    subTitle: "to",
    initValue: 200,
    range: [10, 500],
    step: 10,
  })

  const CheckTranslate = useCheck({
    title: "移動",
    subTitle: 'type="translate"',
    initValue: true,
  })

  const CheckRotate = useCheck({
    title: "回転",
    subTitle: 'type="rotate"',
    extraNote: "要注意: rotateとtranslateを混ぜる時は「先」に translate を指定",
    initValue: true,
  })

  //回転の変化 values & keyTimes 配列数とKeyTimes数が一致すること
  const rotateValues = [0, 180, 360]
    .map((value) => `${value},${x + width / 2},${y + height / 2}`) //{角度,中心X,中心Y}
    .join(";")
  const rotateKeyTimes = "0;0.4;1" //タイミング(0~1)

  const code = `<svg width="700" height="300" onClick={HandleCoordinate}>
  <defs>
    <path id={id} d="M${x},${y} h${width} v${height} h-${width}z" />
  </defs>
  <use href="#{id}">
    <animateTransform
      attributeName="transform"
      type="translate"
      additive="sum" //複数の効果(上書き防止)
      //begin="0s" デフォルト:"0"
      dur="${Duration.value}s"
      //from="0" デフォルト:"0"
      to="${TranslateDistance.value}" //移動距離
      fill="${Fill.value}"
      repeatCount="${Repeat.value}"
    />
    <animateTransform
      attributeName="transform"
      type="rotate" //回転
      additive="sum" //複数の効果(上書き防止) or "replace"
      begin="0.2s"
      dur="${Duration.value}s"
      from="0,${x + width / 2},${y + width / 2}" //角度,中心X,中心Y
      to="360,${x + height / 2},${y + height / 2}"
      values="${rotateValues}" //変化パラメタ記述
      keyTimes="${rotateKeyTimes}" //変化パラメタ記述(時間分割)
      fill="${Fill.value}"
      repeatCount="${Repeat.value}"
    />
  </use>
</svg>`

  const id = useId()
  const jsx = (
    <>
      {isVisible && (
        <svg width="700" height="300" onClick={Coordinate.handleClick}>
          <defs>
            <path id={id} d={`M${x},${y} h${width} v${height} h-${width}z`} />
          </defs>
          <use href={`#${id}`}>
            {CheckTranslate.value && (
              <animateTransform
                attributeName="transform"
                type="translate"
                additive="sum" //複数の効果(上書き防止)
                begin="0s"
                dur={`${Duration.value}s`}
                //from="0" 初期値はほぼ"0"
                to={TranslateDistance.value} //移動距離
                fill={Fill.value}
                repeatCount={Repeat.value}
              />
            )}
            {CheckRotate.value && (
              <animateTransform
                attributeName="transform"
                type="rotate" //回転
                additive="sum" //複数の効果(上書き防止) or "replace"
                begin="0.2s"
                dur={`${Duration.value}s`}
                from={`0,${x + width / 2},${y + width / 2}`} //{角度,中心X,中心Y}
                to={`360,${x + height / 2},${y + height / 2}`}
                values={rotateValues} //変化パラメタ記述
                keyTimes={rotateKeyTimes} //変化パラメタ記述(時間分割)
                fill={Fill.value}
                repeatCount={Repeat.value}
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
      Duration,
      TranslateDistance,
      Repeat,
      Fill,
      CheckTranslate,
      CheckRotate,
    ],
    jsx,
  }
}

{
  /* 稼働サンプル
 <rect width="100" height="100" y="50">
<animateTransform
  attributeName="transform"
  type="translate"
  to="100"
  dur="2s"
  repeatCount="indefinite"
/>
<animateTransform
  attributeName="transform"
  type="rotate"
  from="0,50,100"
  to="180,50,100"
  additive="sum"
  dur="1s"
  repeatCount="indefinite"
/>
</rect> */
}
