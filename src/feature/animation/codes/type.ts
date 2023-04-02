import { Dispatch, ReactNode, SetStateAction } from "react"
import { OptionsType } from "~/library/hooks/type"

export type UseReturnType = {
  height?: number
  Visible?: [boolean, Dispatch<SetStateAction<boolean>>]
  title?: string
  subTitle?: string
  extraNote?: string
  code?: string
  options?: OptionsType<string | number | boolean>[]
  jsx: ReactNode
}
