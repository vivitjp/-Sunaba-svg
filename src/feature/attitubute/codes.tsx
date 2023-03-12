import React, { ReactNode, useState } from "react"
import { SVG } from "~/library"

export type attributeCode = () => {
  misc: { title: string; sample: string }
  state: [string, React.Dispatch<React.SetStateAction<string>>]
  jsx: ReactNode
  selectOptions?: string[]
}

export const attributeCodes: attributeCode[] = [
  stroke,
  strokeWidth,
  strokeDasharray,
  strokeLinecap,
  strokeLinejoin,
]

/* -------------------- 各Attribute -------------------- */

/* ---------- Stroke ---------- */
function stroke() {
  const misc = { title: "stroke (線色)", sample: "=CSS/currentColor" }
  const state = useState<string>("DarkCyan")
  const jsx = (
    <SVG width={640} height={40}>
      <path d="M20,20 h600" stroke={state[0]} />
    </SVG>
  )
  return { state, jsx, misc }
}

/* ---------- StrokeWidth ---------- */
function strokeWidth() {
  const misc = { title: "strokeWidth (線太さ)", sample: "=数値" }
  const state = useState<string>("1")
  const jsx = (
    <SVG width={640} height={40}>
      <path d="M20,20 h600" stroke="DarkCyan" strokeWidth={state[0]} />
    </SVG>
  )
  return { state, jsx, misc }
}

/* ---------- strokeDasharray ---------- */
function strokeDasharray() {
  const misc = {
    title: "strokeDasharray (破線定義)",
    sample: "=実線幅値 空白幅値",
  }
  const state = useState<string>("4 1")
  const jsx = (
    <SVG width={640} height={40}>
      <path
        d="M20,20 h600"
        stroke="DarkCyan"
        strokeWidth={1}
        strokeDasharray={state[0]}
      />
    </SVG>
  )
  return { state, jsx, misc }
}

/* ---------- strokeLinecap ---------- */
function strokeLinecap() {
  const selectOptions = ["inherit", "butt", "round", "square"]
  const misc = {
    title: "strokeLinecap (線の端)",
    sample: `=線の端(${selectOptions.join("/")})`,
  }
  type ElementType = React.SVGAttributes<SVGLineElement>["strokeLinecap"]
  const state = useState<string>("round")
  const jsx = (
    <SVG width={640} height={40}>
      <path
        d="M20,20 h600"
        stroke="DarkCyan"
        strokeWidth={10}
        strokeLinecap={state[0] as ElementType}
      />
    </SVG>
  )
  return { state, jsx, misc, selectOptions }
}

/* ---------- strokeLinejoin ---------- */
function strokeLinejoin() {
  const selectOptions = ["arcs", "bevel", "miter", "miter-clip", "round"]
  const misc = {
    title: "strokeLinejoin (線の折れ角)",
    sample: `=線の折れ角(${selectOptions.join("/")})`,
  }
  type ElementType = React.SVGAttributes<SVGLineElement>["strokeLinejoin"]
  const state = useState<string>("round")
  const jsx = (
    <SVG width={640} height={60}>
      <path
        d="M20,20 h200 v20 h200 v-20 h200"
        fill="none"
        stroke="DarkCyan"
        strokeWidth={10}
        strokeLinejoin={state[0] as ElementType}
      />
    </SVG>
  )
  return { state, jsx, misc, selectOptions }
}
