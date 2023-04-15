import { Dispatch, ReactNode, SetStateAction } from "react"
import { CodeKeyType } from "~/library"
import { OptionsType } from "~/library/hooks/type"

export type UseReturnType = {
  height?: number
  visible?: [boolean, Dispatch<SetStateAction<boolean>>]
  title?: string
  subTitle?: string
  extraNote?: string
  code?: string
  codeKeyType?: CodeKeyType
  options?: OptionsType<string | number | boolean | [number, number]>[]
  jsx: ReactNode
}
