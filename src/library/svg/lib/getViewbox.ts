type Props = {
  width: number
  height: number
  ratio?: number
  margin?: number
}

export const getViewbox = ({ width, height, margin = 0, ratio = 1 }: Props) => {
  return (
    `${0 - margin * ratio} ` +
    `${0 - margin * ratio} ` +
    `${(width + margin * 2) * ratio} ` +
    `${(height + margin * 2) * ratio}`
  )
}
