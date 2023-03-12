import { useCallback, useState } from "react"
import { Title } from "./Title.style"
import { Range, Row } from "../../common/styleDiv"
import styled from "styled-components"

type Props = {
  title: string
  initValue: number
  range: [number, number]
  step: number
  width?: number
  padding?: number
  valueType?: "integer" | "float"
}

export const useRange = ({
  initValue,
  title,
  range,
  step = 1,
  width = 200,
  padding = 0,
  valueType = "integer",
}: Props) => {
  const [value, setValue] = useState<number>(initValue)

  const handle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue =
      valueType === "integer"
        ? parseInt(e.currentTarget.value)
        : parseFloat(e.currentTarget.value)
    setValue(newValue)
  }, [])

  return {
    value,
    JSX: (
      <Row padding={padding}>
        <Title width={300}>{title}</Title>
        <Range
          width={width}
          onChange={handle}
          value={value}
          range={range}
          step={step}
        />
        <Value>{value}</Value>
      </Row>
    ),
  }
}

const Value = styled.div`
  font-size: 20px;
`
