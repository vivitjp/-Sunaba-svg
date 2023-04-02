import styled from "styled-components"
import {
  Base,
  Column,
  Div,
  DivFlexBottom,
  Row,
  Title,
} from "../../common/styleDiv"
import { OptionsType } from "../../library/hooks/type"
import { syntaxHighlight } from "../../library/syntaxHighlighter/syntaxHighlighter"
import { keysSVG } from "../../library/syntaxHighlighter/keys/SVG"
import { FC, ReactNode } from "react"
import { UseReturnType } from "../animation/codes/type"

type UseCode = {
  useCode: () => UseReturnType
}

export const FeaturePresenter: FC<UseCode> = ({ useCode }) => {
  const { code, title, subTitle, options, jsx, height, Visible } = useCode()
  const [isVisible, setIsVisible] = Visible ?? [null, () => {}]

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

      {/* コード */}
      {code && (
        <Row padding={10} width={"100%"}>
          <CodeBox code={code} />
        </Row>
      )}

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
      <DivFlexBottom
        border={"#ccc"}
        width={720}
        height={height}
        marginLeft={10}
      >
        {jsx}
        {/* <EventWrapper>{jsx}</EventWrapper> */}
      </DivFlexBottom>
    </Column>
  )
}

// const EventWrapper = ({ children }: { children: ReactNode }) => {
//   const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     const value = e.pageX
//     console.log(value)
//   }

//   return (
//     <div
//       onClick={handleClick}
//       data-id="EventWrapper"
//       style={{ width: "800px", overflowX: "scroll" }}
//     >
//       <div style={{ width: "1200px" }}>{children}</div>
//     </div>
//   )
// }

const Option = ({
  option: { title, JSX, subTitle },
}: {
  option: OptionsType<any>
}) => (
  <Row padding={3}>
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
    <Div width={250}>{JSX}</Div>
  </Row>
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
  font-size: 16px;
  color: #666;
  padding: 0 30px;
  width: 100%;
  white-space: pre;
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
