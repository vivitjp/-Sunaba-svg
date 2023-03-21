import styled from "styled-components"
import { Column, Div, Row, Section } from "../../common/styleDiv"
import { syntaxHighlight } from "~/library/syntaxHighlighter/syntaxHighlighter"
import { keysSVG } from "~/library/syntaxHighlighter/keys/SVG"
import { Title } from "~/library"
import { useAnime1 } from "./codes/useAnime1"
import { useAnime2 } from "./codes/useAnime2"
import { useAnime3 } from "./codes/useAnime3"

export const codes = [useAnime1, useAnime2, useAnime3]

export const FeatureAnimation = () => {
  return (
    <Section>
      <Column padding={6} gap={20}>
        {codes.map((useCode, idx) => {
          const {
            Visible: [isVisible, setIsVisible],
            code,
            title,
            options,
            jsx,
          } = useCode()
          return (
            <Column key={idx} gap={20}>
              <MainTitle>{title}</MainTitle>
              <Column data-testid="column">
                {options.map((option, idx) => (
                  <Row paddingLeft={20} key={idx}>
                    <DivMainSub>
                      <Title width={250} color={"#555"}>
                        {option.title}
                      </Title>
                      {option.subTitle && (
                        <Div
                          fontSize={16}
                          fontFamily={"monospace"}
                          color="#555"
                          data-testid="options"
                        >
                          {option.subTitle} :
                        </Div>
                      )}
                    </DivMainSub>
                    <Div width={250}>{option.JSX}</Div>
                  </Row>
                ))}
              </Column>
              <Row padding={10} width={"100%"}>
                <CodeBox code={code} />
              </Row>
              <Input
                onClick={() => {
                  setIsVisible((prev) => !prev)
                }}
                value={isVisible ? "Stop" : "Start"}
              />
              <Div border="#ccc" width={720} height={155}>
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

//----------------------------------------
// コード
//----------------------------------------
const Input = styled.input.attrs({ type: "button" })`
  width: 160px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.2rem;
  text-align: center;
`

const DivMainSub = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  width: 400px;
`
