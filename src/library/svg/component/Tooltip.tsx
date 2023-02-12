//--------------------------------------------
// SVG Tag: <title>
//--------------------------------------------

import { FC } from "react"

type Tooltip = {
  children: string
}

export const Tooltip: FC<Tooltip> = ({ children }: Tooltip) => {
  return <title>{children}</title>
}
