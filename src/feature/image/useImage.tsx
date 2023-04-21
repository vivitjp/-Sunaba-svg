import { UseReturnType } from "~/component"
import { Column, Div, Row, SpanRed, Section } from "../../common/styleDiv"
import { SVG, useSelect } from "~/library"

export const useImage = (): UseReturnType => {
  const title = `イメージ表示と比率(viewbox)`

  const X = useSelect({
    title: "",
    initValue: "xMin",
    values: ["xMin", "xMid", "xMax"],
    width: 100,
  })

  const Y = useSelect({
    title: "",
    initValue: "YMin",
    values: ["YMin", "YMid", "YMax"],
    width: 100,
  })

  const Aspect = useSelect({
    title: "",
    initValue: "meet",
    values: ["meet", "slice"],
    width: 100,
  })

  const code = `<SVG width=${500} height=${360} viewBox="0 0 400 400" >
  <image width=${500} height=${360} href="hakuba.jpg" preserveAspectRatio="${
    X.value
  }${Y.value} ${Aspect.value}" />
</SVG>`

  const jsx = (
    <Section padding={20}>
      <Row padding={10}>
        <Div fontSize={18}>
          preserveAspectRatio <SpanRed fontSize={"20px"}>X</SpanRed>:
        </Div>
        {X.JSX}
        {Y.JSX}
        {Aspect.JSX}
      </Row>

      <Column padding={5} gap={20} border="#ccc" width={510} height={370}>
        <SVG
          width={500}
          height={360}
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <image
            width={500}
            height={360}
            href="images/hakuba.jpg"
            preserveAspectRatio={`${X.value}${Y.value} ${Aspect.value}`}
          />
        </SVG>
      </Column>
    </Section>
  )

  return {
    title,
    code,
    options: [],
    jsx,
  }
}
