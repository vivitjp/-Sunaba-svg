import { useCallback, useState } from "react"
import { Row } from "~/common/styleDiv"
import { Title } from "./Title.style"
import { SelectSet } from "~/component"

type Props = {
  title: string
  initValue: string
  values: string[]
  width?: number
  padding?: number
}

export const useSelect = ({
  title,
  initValue,
  values,
  width = 300,
  padding = 0,
}: Props) => {
  const [value, setValue] = useState<string>(initValue)

  const handle = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.currentTarget.value)
  }, [])

  const options = values.map((item) => ({ title: item, value: item }))

  return {
    value,
    JSX: (
      <Row padding={padding}>
        <Title width={300}>{title}</Title>
        <SelectSet
          width={width}
          onChange={handle}
          options={options}
          value={value}
        />
      </Row>
    ),
  }
}
