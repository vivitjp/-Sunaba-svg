import { useCallback, useState } from "react"
import { Div, Range, Row } from "../../common/styleDiv"
import { CustomInputReturnType } from "./type"

type Props = {
  title: string
  subTitle?: string
  initValue: number
  range: [number, number]
  step: number
  width?: number
  valueType?: "integer" | "float"
}

export const useRange = ({
  initValue,
  title,
  subTitle,
  range,
  step = 1,
  width = 240,
  valueType = "integer",
}: Props): CustomInputReturnType => {
  const [value, setValue] = useState<number>(initValue)

  const handle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue =
      valueType === "integer"
        ? parseInt(e.currentTarget.value)
        : parseFloat(e.currentTarget.value)
    setValue(newValue)
  }, [])

  return {
    title,
    subTitle,
    value,
    JSX: (
      <Row>
        <Range
          width={width - 50}
          onChange={handle}
          value={value}
          range={range}
          step={step}
        />
        <Div width={50} fontSize={18} textAlign="center">
          {value}
        </Div>
      </Row>
    ),
  }
}

// const Value = styled.div`
//   font-size: 20px;
// `
