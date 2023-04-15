#種類

  <animate>
  <animateMotion>
  <animateTransform>

## アニメーションタイミング属性

    begin
    dur
    end
    min
    max
    restart
    repeatCount
    repeatDur
    fill

## アニメーション値属性

    calcMode
    values
    keyTimes
    keySplines
    from
    to
    by

## その他のアニメーション属性(特に重要なもの)

    attributeName
    additive(v2)
    accumulate

## アニメーションイベント属性(特に重要なもの)

    onbegin
    onend
    onrepeat

`<set>` 使用不可？

// attributeName
// additive
// accumulate

//実行期間
// begin="0s" end="8s"
// begin="endButtonId.click" イベントによる開始
// begin="0s;thirdId.end" 0s で開始、その後別の id の終了を受け継ぎ

//実行値、範囲、変化量、変化時間、最終ステートの維持
// from ="0" to ="100" by ="1" dur="10s"

//繰り返し回数

// begin ="8s", "endButtonId.click"
// dur ="1s"
// end ="8s", "endButtonId.click", "accessKey(e)"(動作せず)
// min
// max
// restart
// repeatCount ="1"(default) "2", "indefinite"
// repeatDur

// fill ="freeze"(★ 非サポート多数)
// fill-opacity(★ 非サポート)
// fill-rule(★ 非サポート)

// calcMode
// values
// keyTimes
// keySplines
// from ="0"
// to ="100"
// by ="1"

// keySplines = Bezier Curve(P0 P1 P2 P3:各 0.0~1.0) Safari では「;」で区分

// onbegin
// onend
// onrepeat

// Full clock values:
// 02:30:03 = 2 hours, 30 minutes and 3 seconds
// 50:00:10.25 = 50 hours, 10 seconds and 250 milliseconds

// Partial clock value:
// 02:33 = 2 minutes and 33 seconds
// 00:10.5 = 10.5 seconds = 10 seconds and 500 milliseconds

// Timecount values:
// 3.2h = 3.2 hours = 3 hours and 12 minutes
// 45min = 45 minutes
// 30s = 30 seconds
// 5ms = 5 milliseconds
// 12.467 = 12 seconds and 467 milliseconds

// calcMode discrete | linear | paced | spline
