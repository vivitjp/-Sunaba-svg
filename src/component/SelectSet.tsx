import styled from "styled-components"

export type Options = {
  title: string
  value: number | string
}

export type SelectSet = {
  options: Options[]
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  width?: number
  withBlanc?: boolean
}

export const SelectSet = ({
  options,
  width,
  onChange,
  withBlanc,
  ...args
}: SelectSet) => {
  const revOptions = withBlanc
    ? [{ title: "", value: "" }, ...options]
    : [...options]

  return (
    <Select {...args} width={width} onChange={onChange}>
      {!!options.length &&
        revOptions.map((n, index) => (
          <option key={index} value={n.value}>
            {n.title}
          </option>
        ))}
    </Select>
  )
}

type Select = {
  width?: number
}
const Select = styled.select<Select>`
  width: ${({ width = 160 }) => `${width}px`};
  height: 40px;
  padding: 10px;
  border: 1px solid #aaa;
  background-color: white;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 0 5px #eee;
`
