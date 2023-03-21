import styled from "styled-components"
import { Column, Div, Row, Section, Title } from "../../common/styleDiv"
import { syntaxHighlight } from "~/library/syntaxHighlighter/syntaxHighlighter"
import { keysSVG } from "~/library/syntaxHighlighter/keys/SVG"
import { useLinearGradation } from "./codes/useLinearGradation"
import { useCircleGradation } from "./codes/useCircleGradation"
import { useLinearGradationWithGamma } from "./codes/useLinearGradationWithGamma"

const codes = [
  useCircleGradation,
  useLinearGradation,
  useLinearGradationWithGamma,
]

export const FeatureGradation = () => {
  return (
    <Section>
      <Column padding={6} gap={20}>
        {codes.map((useCode, idx) => {
          const { code, title, options, jsx } = useCode()
          return (
            <Column key={idx} gap={20}>
              <MainTitle>{title}</MainTitle>
              <Column gap={0} paddingLeft={20}>
                {options.map((option, id) => {
                  return (
                    <Row padding={6} key={id}>
                      <DivMainSub>
                        <Title width={250} color={"#555"}>
                          {option.title}
                        </Title>
                        {option.subTitle && (
                          <Div
                            fontSize={16}
                            fontFamily={"monospace"}
                            color="#555"
                          >
                            {option.subTitle} :
                          </Div>
                        )}
                      </DivMainSub>
                      <Div width={250}>{option.JSX}</Div>
                    </Row>
                  )
                })}
              </Column>
              <Div padding={20} width={"100%"}>
                <CodeBox code={code} />
              </Div>
              <Div border={"#ccc"} width={720}>
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
const MainTitle = styled.div`
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

const DivMainSub = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  width: 400px;
`
