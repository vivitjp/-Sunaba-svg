import { UseReturnType } from "~/component"

export function useBasic2Omit(): UseReturnType {
  const subTitle = `・メジャーなブラウザで viewBox, xmlns が省略可能
・Reactでの属性値の書き方は "値" or {値}/{"値"}、変数は{変数}
・x,y が省略された場合の初期値は 0,0
・属性名はCSS名と同じく Snake case(stroke-width) はエラー、Camel case(strokeWidth)で`

  const code = `<svg width="600" height="120">
  <rect x="20" y="20" width="80" height="80" fill="orange" stroke="red" />
  <rect x={120} y={20} width={80} height={80} fill={"blue"} stroke={"red"} />
</svg>`

  const jsx = (
    <svg width={600} height={120}>
      <rect x="20" y="20" width="80" height="80" fill="orange" stroke="red" />
      <rect
        x={120}
        y={20}
        width={80}
        height={80}
        fill={"blue"}
        stroke={"red"}
      />
    </svg>
  )

  return { subTitle, code, jsx }
}
