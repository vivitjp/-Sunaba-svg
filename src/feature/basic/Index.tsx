import styled from "styled-components"
import { Column, Div, Section } from "../../common/styleDiv"
import { basicCodes } from "./codes"
import { syntaxHighlight } from "~/library/syntaxHighlighter/syntaxHighlighter"
import { keysSVG } from "~/library/syntaxHighlighter/keys/SVG"

export const FeatureBasic = () => {
  return (
    <Section>
      <Column padding={6} gap={20}>
        {basicCodes.map(({ code, jsx, title }, idx) => {
          console.log(code.split("\n").length)

          return (
            <Column key={idx}>
              <Title>{title}</Title>
              <Div padding={10}>
                <CodeBox code={code} />
              </Div>
              <Div border="#ccc" marginTop={10}>
                {jsx}
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
