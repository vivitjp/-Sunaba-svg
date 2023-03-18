import { FC } from "react"
type Props = {
  attributeName: string
  begin: number
  values: string
  dur: number
  from?: string | number
  to?: string | number
  repeatCount?: string | number
  repeatDur?: string | number
}
export const Animate: FC<Props> = ({
  attributeName,
  begin,
  values,
  dur,
  repeatCount = "indefinite",
  repeatDur,
}: Props) => {
  return (
    <animate
      attributeName={attributeName}
      begin={`${begin}s`}
      dur={`${dur}s`}
      values={values}
      repeatCount={repeatCount}
      repeatDur={repeatDur} //clock values
    />
  )
}
