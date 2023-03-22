type Props = {
  width: number
  height: number
  ratio?: number
  margin?: number
  marginTLOnly?: boolean
}

export const getViewbox = ({
  width,
  height,
  margin = 0,
  ratio = 1,
  marginTLOnly = false,
}: Props) => {
  return (
    `${0 - margin * ratio} ` +
    `${0 - margin * ratio} ` +
    `${(width + margin * (marginTLOnly ? 1 : 2)) * ratio} ` +
    `${(height + margin * (marginTLOnly ? 1 : 2)) * ratio}`
  )
}
