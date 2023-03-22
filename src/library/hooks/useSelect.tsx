import { useCallback, useState } from "react"
import { SelectSet } from "~/component"
import { OptionsType } from "./type"

type KV = {
  K: string
  V: string | number
}

type Props = {
  title: string
  subTitle?: string
  initValue: string
  values: string[] | KV[]
  width?: number
}

function isKV(arg: any): arg is KV {
  return arg.K !== undefined
}

export const useSelect = ({
  title,
  subTitle,
  initValue,
  values,
  width = 240,
}: Props): OptionsType => {
  const [value, setValue] = useState<string>(initValue)

  const handle = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.currentTarget.value)
  }, [])

  const options = isKV(values[0])
    ? (values as KV[]).map((item) => ({ title: item.K, value: item.V }))
    : (values as string[]).map((item) => ({ title: item, value: item }))

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
