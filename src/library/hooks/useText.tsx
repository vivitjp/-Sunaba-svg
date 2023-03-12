import { CSSProperties, useCallback, useState } from "react"
import styled from "styled-components"
import { Row } from "~/common/styleDiv"
import { Title } from "./Title.style"

type Props = {
  title: string
  initValue: string
  width?: number
  padding?: number
}

export const useText = ({
  initValue,
  title,
  width = 300,
  padding = 0,
}: Props) => {
  const [value, setValue] = useState<string | number>(initValue)

  const handle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    const newValue = typeof value === "string" ? value : parseInt(value)
    setValue(newValue)
  }, [])

  return {
    value,
    JSX: (
      <Row padding={padding}>
        <Title width={300}>{title}</Title>
        <Input onChange={handle} width={width} value={value} />
      </Row>
    ),
  }
}

//----------------------------------------
// Styled
//----------------------------------------
const Input = styled.input.attrs({ type: "text" })<CSSProperties>`
  width: ${({ width = 160 }) => `${width}px`};
  height: 36px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.2rem;
  text-align: center;
  ::placeholder {
    color: grey;
  }
`
