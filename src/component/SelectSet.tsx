import styled, { CSSProperties } from "styled-components"

export const makeOptions = (items: string[]) => {
  return items.map((item) => ({
    title: item,
    value: item,
  }))
}

export type Options = {
  title: string
  value: number | string
}

export type SelectSet = {
  options: Options[]
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  withBlanc?: boolean
  value: number | string
} & Omit<CSSProperties, "translate">

export const SelectSet = ({
  options,
  onChange,
  withBlanc,
  value,
  ...args
}: SelectSet) => {
  const revOptions = withBlanc
    ? [{ title: "", value: "" }, ...options]
    : [...options]

  return (
    <Select {...args} onChange={onChange} value={value}>
      {!!options.length &&
        revOptions.map((n, index) => (
          <option key={index} value={n.value}>
            {n.title}
          </option>
        ))}
    </Select>
  )
}

const Select = styled.select<CSSProperties>`
  width: ${({ width = 160 }) => `${width}px`};
  height: ${({ height = 40 }) => `${height}px`};
  padding: 0;
  padding-left: 10px;
  border: 1px solid #aaa;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 5px #eee;
  font-size: ${({ fontSize }) => `${fontSize ? `${fontSize}px` : "inherit"}`};
`
