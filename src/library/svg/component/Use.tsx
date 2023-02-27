//--------------------------------------------
// SVG Tag: <title>
// x, y, width, height and href 上書き可能
// 残りは use の属性を上書きできない
// use で設定されていない属性は、再設定可能
//--------------------------------------------

import { FC } from "react"

type Use = {
  id: string
} & React.SVGProps<SVGUseElement>

export const Use: FC<Use> = ({ id, filter, ...args }: Use) => {
  return <use {...args} filter={filter && `url(#${filter})`} href={`#${id}`} />
}
