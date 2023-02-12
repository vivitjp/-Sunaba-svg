import { FC } from "react"
type Props = {
  attribute: string
  values: string
  sec: number
  count?: string
}
export const Animate: FC<Props> = ({
  attribute,
  values,
  sec,
  count = "indefinite",
}: Props) => {
  return (
    <animate
      attributeName={attribute}
      values={values}
      dur={`${sec}s`}
      repeatCount={count}
    />
  )
}
