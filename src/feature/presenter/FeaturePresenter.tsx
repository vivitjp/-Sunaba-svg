import styled from "styled-components"
import { Column, Div, Row, Section, Title } from "../../common/styleDiv"
import { OptionsType } from "../../library/hooks/type"
import { syntaxHighlight } from "../../library/syntaxHighlighter/syntaxHighlighter"
import { keysSVG } from "../../library/syntaxHighlighter/keys/SVG"
import { FC } from "react"
import { UseReturnType } from "../animation/codes/type"

type UseCode = {
  useCode: () => UseReturnType
}

export const FeaturePresenter: FC<UseCode> = ({ useCode }) => {
  const { code, title, options, jsx, height, Visible } = useCode()
  const [isVisible, setIsVisible] = Visible ?? [null, () => {}]

  return (
    <Column gap={16}>
      {/* タイトル */}
      <MainTitle>{title}</MainTitle>

      {/* 操作オプション */}
      {options && (
        <Column gap={0} paddingLeft={20}>
          {options.map((option, id) => (
            <Option key={id} option={option} />
          ))}
        </Column>
      )}

      {/* コード */}
      <Row padding={10} width={"100%"}>
        <CodeBox code={code} />
      </Row>

      {/* 表示ボタン */}
      {Visible && (
        <Input
          onClick={() => {
            setIsVisible((prev) => !prev)
          }}
          value={isVisible ? "Stop" : "Start"}
        />
      )}

      {/* JSX */}
      <Div border={"#ccc"} width={720} height={height}>
        {jsx}
      </Div>
    </Column>
  )
}

const Option = ({
  option: { title, JSX, subTitle },
}: {
  option: OptionsType
}) => (
  <Row padding={3}>
    <DivMainSub>
      <Title width={250} color={"#555"}>
        {title}
      </Title>
      <Div fontSize={16} fontFamily={"monospace"} color="#555">
        {subTitle ? `${subTitle} :` : ``}
      </Div>
    </DivMainSub>
    <Div width={250}>{JSX}</Div>
  </Row>
)

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

const DivMainSub = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  width: 400px;
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
// 表示ボタン
//----------------------------------------
const Input = styled.input.attrs({ type: "button" })`
  width: 160px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.2rem;
  text-align: center;
`
