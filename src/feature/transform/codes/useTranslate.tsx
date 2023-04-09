import { SVG } from "~/library"
import { useRange } from "~/library/hooks/useRange"

export const useTransform = () => {
  const title = `Translate`

  const TranslateX = useRange({
    title: "X軸移動",
    subTitle: "translate(x,y)",
    initValue: 250,
    range: [-100, 300],
    step: 5,
  })

  const TranslateY = useRange({
    title: "Y軸移動",
    subTitle: "translate(x,y)",
    extraNote: "XYに同値をまとめて指定も可 translate(x)",
    initValue: 0,
    range: [-50, 50],
    step: 5,
  })

  const ScaleX = useRange({
    title: "X軸サイズ変更(拡大縮小)",
    subTitle: "scale(x,y)",
    initValue: 1,
    range: [-1, 2],
    step: 0.1,
  })

  const ScaleY = useRange({
    title: "Y軸サイズ変更(拡大縮小)",
    subTitle: "scale(x,y)",
    extraNote: "マイナス値で反転",
    initValue: 1,
    range: [0, 2],
    step: 0.1,
  })

  const code = `<SVG width={800} height={300}>
  <circle cx={300} cy={150} r={50} fill="tomato"
    transform="translate(${TranslateX.value},${TranslateY.value}) scale(${ScaleX.value},${ScaleY.value})" />
</SVG>`

  const jsx = (
    <SVG width={800} height={300} preserveAspectRatio="xMinYMin slice">
      <circle
        cx={300}
        cy={150}
        r={50}
        fill="tomato"
        transform={
          `translate(${TranslateX.value},${TranslateY.value})` +
          `scale(${ScaleX.value},${ScaleY.value}) `
        }
      />
    </SVG>
  )

  return {
    height: 300,
    title,
    code,
    options: [TranslateX, TranslateY, ScaleX, ScaleY],
    jsx,
  }
}
