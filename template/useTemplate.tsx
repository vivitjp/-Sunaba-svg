import React from "react"
import { useRange, useSelect, useText } from "~/library"

export function useBasic3() {
  const title = `xxxxxxxx`

  const AAAAA = useRange({
    title: "AAAAAA",
    subTitle: "AAAAAAA",
    initValue: 100,
    range: [10, 100],
    step: 10,
  })

  const BBBBB = useText({
    title: "BBBBBBB",
    subTitle: "BBBBBBB",
    initValue: "BBBBBB",
  })

  const CCCCC = useSelect({
    title: "CCCCCCCCCC",
    subTitle: "CCCCCCC",
    initValue: "CCCCCC",
    values: ["CCCCC", "CCCC", "CCCC"],
  })

  const code = ``

  const jsx = <svg x={0} y={0} width={700} height={140}></svg>

  return { title, code, options: [,], jsx }
}
