import { CSSProperties, useCallback, useState } from "react"
import styled from "styled-components"

type Props = {
  title: string
  subTitle?: string
  initValue: string
  width?: number
}

export const useText = ({ initValue, title, subTitle, width = 240 }: Props) => {
  const [value, setValue] = useState<string | number>(initValue)

  const handle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    const newValue = typeof value === "string" ? value : parseInt(value)
    setValue(newValue)
  }, [])

  return {
    value,
    subTitle,
    title,
    JSX: <Input onChange={handle} width={width} value={value} />,
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
