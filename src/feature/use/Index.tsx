import styled from "styled-components"
import { Column, Div, Section } from "../../common/styleDiv"
import { useCodes } from "./codes"
import { syntaxHighlight } from "~/library/syntaxHighlighter/syntaxHighlighter"
import { keysSVG } from "~/library/syntaxHighlighter/keys/SVG"
import { SVGRuled } from "~/component"
import { xRulers, yRulers, zeroRulers } from "~/common/SVGContent"

const MARGIN = 30

export const FeatureUse = () => {
  return (
    <Section>
      <Column padding={6} gap={40}>
        {useCodes.map(({ code, jsx, title }, idx) => {
          return (
            <Column key={idx}>
              <Title>{title}</Title>
              <Div padding={10} width={"100%"}>
                <CodeBox code={code} />
              </Div>
              <Div>
                <SVGRuled
                  width={700}
                  height={220}
                  ratio={1}
                  xRulers={xRulers}
                  yRulers={yRulers}
                  zeroRulers={zeroRulers}
                  margin={MARGIN}
                  marginTLOnly={true}
                  preserveAspectRatio={"xMinYMin slice"}
                >
                  {jsx}
                </SVGRuled>
              </Div>
            </Column>
          )
        })}
      </Column>
    </Section>
  )
}

//----------------------------------------
// タイトル
//----------------------------------------
const Title = styled.div`
  font-size: 20px;
  color: var(--main-color);
  :before {
    content: "■";
    margin-right: 5px;
    color: var(--main-color);
  }
`

//----------------------------------------
// コード
//----------------------------------------
const CodeBox = ({ code }: { code: string }) => {
  const result = syntaxHighlight({ keyDef: keysSVG, target: code })
  return (
    <Column gap={2} shadow={10} padding={10}>
      {result}
    </Column>
  )
}
