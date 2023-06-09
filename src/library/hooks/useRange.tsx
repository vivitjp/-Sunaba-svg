import { useCallback, useState } from "react"
import { Div, Range, Row } from "../../common/styleDiv"
import { OptionsType } from "./type"

type Props = {
  title?: string
  subTitle?: string
  extraNote?: string
  initValue: number
  range: [number, number]
  step: number
  width?: number
  disabled?: boolean
}

export const useRange = ({
  initValue,
  title,
  subTitle,
  extraNote,
  range,
  step = 1,
  width = 240,
  disabled = false,
}: Props): OptionsType<number> => {
  const [value, setValue] = useState<number>(initValue)

  const handle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseFloat(e.currentTarget.value))
  }, [])

  return {
    title,
    subTitle,
    extraNote,
    value,
    JSX: (
      <Row>
        <Range
          width={width - 50}
          onChange={handle}
          value={value}
          range={range}
          step={step}
          disabled={disabled}
        />
        <Div width={50} fontSize={18} textAlign="center">
          {value}
        </Div>
      </Row>
    ),
  }
}
