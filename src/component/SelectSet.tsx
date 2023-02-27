import { ReactComponentElement } from "react"
import styled from "styled-components"

export type Options = {
  title: string
  value: number | string
}

export type SelectSet = {
  options: Options[]
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  width?: number
}

export const SelectSet = ({ options, width, onChange, ...args }: SelectSet) => {
  return (
    <Select {...args} width={width} onChange={onChange}>
      {!!options.length &&
        options.map((n, index) => (
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
