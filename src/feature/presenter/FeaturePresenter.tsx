import styled from "styled-components"
import {
  Base,
  Column,
  Div,
  DivFlexBottom,
  DivPre,
  Row,
  Title,
} from "../../common/styleDiv"
import { OptionsType } from "../../library/hooks/type"
import {
  CodeKeyType,
  syntaxHighlight,
} from "../../library/syntaxHighlighter/syntaxHighlighter"
import { FC } from "react"
import { UseReturnType } from "~/component"

type UseCode = {
  useCode: () => UseReturnType
}

export const FeaturePresenter: FC<UseCode> = ({ useCode }) => {
  const {
    code,
    codeFold,
    codeKeyType,
    title,
    subTitle,
    options,
    jsx,
    height,
    visible,
    border = "#ccc",
  } = useCode()
  const [isVisible, setIsVisible] = visible ?? [null, () => {}]

  return (
    <Column gap={16}>
      {/* タイトル */}
      {title && <MainTitle>{title}</MainTitle>}

      {/* サブタイトル */}
      {subTitle && <SubTitle>{subTitle}</SubTitle>}

      {/* 操作オプション */}
      {options && (
        <Column gap={0} paddingLeft={20}>
          {options.map((option, id) => (
            <Option key={id} option={option} />
          ))}
        </Column>
      )}

      {/* 表示ボタン */}
      {visible && (
        <Input
          onClick={() => {
            setIsVisible((prev) => !prev)
          }}
          value={isVisible ? "Stop" : "Start"}
        />
      )}

      {/* JSX */}
      <DivFlexBottom
        border={border}
        width={720}
        height={height}
        marginLeft={10}
      >
        {jsx}
      </DivFlexBottom>

      {/* コード  ------------ codeFold ----------*/}

      {code && (
        <>
          <details
            open={!codeFold}
            style={{ cursor: "pointer", width: "100%" }}
          >
            <summary>code</summary>
            <Row padding={10} width={"100%"}>
              <CodeBox code={code} codeKeyType={codeKeyType} />
            </Row>
          </details>
        </>
      )}
    </Column>
  )
}

const Option = ({
  option: { title, JSX, subTitle, extraNote },
}: {
  option: OptionsType<any>
}) => (
  <Column padding={0} gap={0}>
    <Row padding={3}>
      {/* Title */}
      <TitleWrapper>
        {title && (
          <Title width={250} color={"#666"}>
            {title}
          </Title>
        )}
        {!title && <div />}
        {subTitle && (
          <OptionSubTitle fontSize={16} fontFamily={"monospace"} color="#666">
            {subTitle}
          </OptionSubTitle>
        )}
      </TitleWrapper>

      {/* JSX */}
      <Div width={250}>{JSX}</Div>
    </Row>

    {/* ExtraNote */}
    {extraNote && (
      <Row padding={"0 30px"}>
        <DivPre color="#999">{extraNote}</DivPre>
      </Row>
    )}
  </Column>
)

//----------------------------------------
// タイトル
//----------------------------------------
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  width: 400px;
`

const MainTitle = styled.div`
  font-size: 20px;
  font-weight: 300;
  color: var(--main-color);
  :before {
    content: "■";
    margin-right: 5px;
    color: var(--main-color);
  }
`
const SubTitle = styled.div`
  font-size: 14px;
  color: #666;
  padding: 0 30px;
  width: 100%;
`

const OptionSubTitle = styled(Base)`
  :after {
    content: ":";
    margin: 0 3px;
    color: #666;
  }
`

//----------------------------------------
// コード
//----------------------------------------
type CodeBox = { code: string; codeKeyType?: CodeKeyType }

const CodeBox: FC<CodeBox> = ({ code, codeKeyType }) => {
  const result = syntaxHighlight({ code, codeKeyType })
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
  width: 120px;
  margin-left: 10px;
  margin-bottom: -10px;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.2rem;
  text-align: center;
`
