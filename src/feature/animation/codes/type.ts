import { Dispatch, ReactNode, SetStateAction } from "react"
import { CustomInputReturnType } from "~/library/hooks/type"

export type UseReturnType = {
  height?: number
  Visible?: [boolean, Dispatch<SetStateAction<boolean>>]
  title: string
  code: string
  options: CustomInputReturnType[]
  jsx: ReactNode
}
