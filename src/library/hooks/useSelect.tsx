import { useCallback, useState } from "react"
import { SelectSet } from "~/component"

type Props = {
  title: string
  subTitle?: string
  initValue: string
  values: string[]
  width?: number
}

export const useSelect = ({
  title,
  subTitle,
  initValue,
  values,
  width = 240,
}: Props) => {
  const [value, setValue] = useState<string>(initValue)

  const handle = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.currentTarget.value)
  }, [])

  const options = values.map((item) => ({ title: item, value: item }))

  return {
    title,
    subTitle,
    value,
    JSX: (
      <SelectSet
        width={width}
        onChange={handle}
        options={options}
        defaultValue={initValue}
      />
    ),
  }
}
