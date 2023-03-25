import { Dispatch, ReactNode, SetStateAction } from "react"
import { OptionsType } from "~/library/hooks/type"

export type UseReturnType = {
  height?: number
  Visible?: [boolean, Dispatch<SetStateAction<boolean>>]
  title?: string
  subTitle?: string
  code: string
  options?: OptionsType[]
  jsx: ReactNode
}
