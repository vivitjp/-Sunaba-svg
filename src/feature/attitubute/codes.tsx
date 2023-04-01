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

export const attributeCodes: attributeCode[] = [
  stroke,
  strokeWidth,
  strokeDasharray,
  strokeLinecap,
  strokeLinejoin,
  strokeOpacity,
  fill,
  fillOpacity,
  fillRule,
  opacity,
]

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

/* ---------- strokeDasharray ---------- */
function strokeDasharray() {
  const misc = {
    title: "strokeDasharray (破線定義) stroke-dashoffset追加予定",
    sample: "=実線幅値 空白幅値",
  }
  const state = useState<string | number>("4 1")
  const jsx = (
    <SVG width={640} height={40}>
      <path
        d="M20,20 h600"
        stroke={SAMPLE_COLOR}
        strokeWidth={1}
        strokeDasharray={state[0]}
      />
    </SVG>
  )
  return { state, jsx, misc, vType: vTypes.text }
}

/* ---------- strokeLinecap ---------- */
function strokeLinecap() {
  const selectOptions = ["inherit", "butt", "round", "square"]
  const misc = {
    title: "strokeLinecap (線の端)",
    sample: `=線の端(${selectOptions.join("/")})`,
  }
  type ElementType = React.SVGAttributes<SVGLineElement>["strokeLinecap"]
  const state = useState<string | number>("butt")
  const jsx = (
    <SVG width={640} height={40}>
      <path
        d="M20,20 h600"
        stroke={SAMPLE_COLOR}
        strokeWidth={10}
        strokeLinecap={state[0] as ElementType}
      />
    </SVG>
  )
  return { state, jsx, misc, vType: vTypes.select, selectOptions }
}

/* ---------- strokeLinejoin ---------- */
function strokeLinejoin() {
  const selectOptions = [
    "inherit",
    "arcs",
    "bevel",
    "miter",
    "miter-clip",
    "round",
  ]
  const misc = {
    title: "strokeLinejoin (線の折れ角)",
    sample: `=線の折れ角(${selectOptions.join("/")})`,
  }
  type ElementType = React.SVGAttributes<SVGLineElement>["strokeLinejoin"]
  const state = useState<string | number>("round")
  const jsx = (
    <SVG width={640} height={60}>
      <path
        d="M20,20 h200 v20 h200 v-20 h200"
        fill="none"
        stroke={SAMPLE_COLOR}
        strokeWidth={10}
        strokeLinejoin={state[0] as ElementType}
      />
    </SVG>
  )
  return { state, jsx, misc, vType: vTypes.select, selectOptions }
}

/* ---------- strokeOpacity ---------- */
function strokeOpacity() {
  const misc = {
    title: "strokeOpacity (線の透明度)",
    sample: "=値(0.0~1.0)",
  }
  const state = useState<string | number>("0.5")
  const jsx = (
    <SVG width={640} height={40}>
      <path
        d="M20,20 h600"
        stroke={SAMPLE_COLOR}
        strokeWidth={1}
        strokeOpacity={state[0]}
      />
    </SVG>
  )
  const numberRange: Tuple = [0, 1]
  return { state, jsx, misc, vType: vTypes.range, numberRange }
}

/* ---------- fill ---------- */
function fill() {
  const misc = { title: "fill (塗り色)", sample: "=CSS/currentColor" }
  const state = useState<string | number>(SAMPLE_COLOR)
  const jsx = (
    <SVG width={640} height={60}>
      <path
        d="M20,20 h600 v20 h-600z"
        stroke="none"
        fill={state[0] as string}
      />
    </SVG>
  )
  return { state, jsx, misc, vType: vTypes.text }
}

/* ---------- fillOpacity ---------- */
function fillOpacity() {
  const misc = {
    title: "fillOpacity (塗りの透明度)",
    sample: "=値(0.0~1.0)",
  }
  const state = useState<string | number>("0.5")
  const jsx = (
    <SVG width={640} height={40}>
      <path
        d="M20,20 h600 v20 h-600z"
        stroke="none"
        fill={SAMPLE_COLOR}
        fillOpacity={state[0]}
      />
    </SVG>
  )
  const numberRange: Tuple = [0, 1]
  return { state, jsx, misc, vType: vTypes.range, numberRange }
}

/* ---------- fillRule ---------- */
function fillRule() {
  const selectOptions = ["nonzero", "evenodd"]
  const misc = {
    title: "fillRule (重複白抜き)",
    sample: `=重複白抜き(${selectOptions.join("/")})`,
  }
  type ElementType = React.SVGAttributes<SVGLineElement>["fillRule"]
  const state = useState<string | number>("round")
  const jsx = (
    <SVG width={640} height={100}>
      <path
        d="M20,20 h240 v50 h-240z m180,20 h240 v50 h-240z m180,-20 h240 v50 h-240z"
        fill={SAMPLE_COLOR}
        strokeWidth={1}
        fillRule={state[0] as ElementType}
      />
    </SVG>
  )
  return { state, jsx, misc, vType: vTypes.select, selectOptions }
}

/* ---------- Opacity ---------- */
function opacity() {
  const misc = {
    title: "Opacity (線と塗の透明度)",
    sample: "=値(0.0~1.0)",
  }
  const state = useState<string | number>("0.5")
  const jsx = (
    <SVG width={640} height={60}>
      <path
        d="M20,20 h600 v24 h-600z"
        stroke={SAMPLE_COLOR}
        strokeWidth={6}
        fill={"CadetBlue"}
        opacity={state[0]}
      />
    </SVG>
  )
  const numberRange: Tuple = [0, 1]
  return { state, jsx, misc, vType: vTypes.range, numberRange }
}
