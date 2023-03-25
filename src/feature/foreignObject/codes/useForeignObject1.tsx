import styled from "styled-components"
import { useRange } from "~/library"

export function useForeignObject1() {
  const title = `HTML 埋め込み: ForeignObject`

  const ObjectWidth = useRange({
    title: "埋め込み幅",
    subTitle: "width",
    initValue: 200,
    range: [100, 600],
    step: 10,
  })

  const code = `<svg width={700} height={200}>
  <foreignObject x="10" y="10" width="${ObjectWidth.value}" height="200"
    requiredExtensions="http://www.w3.org/1999/xhtml"    <--Optional
  >
    <div>${sampleText.substring(0, 20)}...</div>
  </foreignObject>
</svg>`

  const jsx = (
    <svg width={700} height={200}>
      <foreignObject
        x="10"
        y="10"
        width={ObjectWidth.value as number}
        height="200"
        requiredExtensions="http://www.w3.org/1999/xhtml"
      >
        <ForeignDiv>{sampleText}</ForeignDiv>
      </foreignObject>
    </svg>
  )

  return { height: 200, title, code, options: [ObjectWidth], jsx }
}

const ForeignDiv = styled.div`
  height: 180px;
  overflow-x: hidden;
  overflow-y: scroll;
`

const sampleText =
  "吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。この書生というのは時々我々を捕えて煮て食うという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ彼の掌に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。掌の上で少し落ちついて書生の顔を見たのがいわゆる人間というものの見始であろう。この時妙なものだと思った感じが今でも残っている。第一毛をもって装飾されべきはずの顔がつるつるしてまるで薬缶だ。その後猫にもだいぶ逢ったがこんな片輪には一度も出会わした事がない。のみならず顔の真中があまりに突起している。そうしてその穴の中から時々ぷうぷうと煙を"
