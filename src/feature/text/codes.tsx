import React, { ReactNode, useState } from "react"
import { SVG } from "~/library"

const SAMPLE_COLOR = "DarkCyan"

export const vTypes = {
  text: "text",
  select: "select",
  range: "range",
} as const

type VTypes = typeof vTypes[keyof typeof vTypes]
type Tuple = [number, number]

export type attributeCode = () => {
  misc: { title: string; sample: string }
  state: [
    string | number,
    React.Dispatch<React.SetStateAction<string | number>>
  ]
  jsx: ReactNode
  vType: VTypes
  numberRange?: Tuple
  rangeSteps?: number
  selectOptions?: string[]
}

export const attributeCodes: attributeCode[] = [stroke, strokeWidth]

/* -------------------- 各Attribute -------------------- */

/* ---------- Stroke ---------- */
function stroke() {
  const misc = { title: "stroke (線色)", sample: "=CSS/currentColor" }
  const state = useState<string | number>(SAMPLE_COLOR)
  const jsx = (
    <SVG width={640} height={40}>
      <path d="M20,20 h600" stroke={state[0] as string} />
    </SVG>
  )
  return { state, jsx, misc, vType: vTypes.text }
}

/* ---------- StrokeWidth ---------- */
function strokeWidth() {
  const misc = { title: "strokeWidth (線太さ)", sample: "=数値" }
  const state = useState<string | number>("1")
  const jsx = (
    <SVG width={640} height={40}>
      <path d="M20,20 h600" stroke={SAMPLE_COLOR} strokeWidth={state[0]} />
    </SVG>
  )
  const numberRange: Tuple = [1, 10]
  const rangeSteps = 1
  return {
    state,
    jsx,
    misc,
    vType: vTypes.range,
    numberRange,
    rangeSteps,
  }
}
