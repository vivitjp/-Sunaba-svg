export function useBasic2() {
  const subTitle = `大体のブラウザで viewBox, xmlns は省略可能\n属性値の書き方は "値" or {値}/{"値"}、変数は{変数} \nx,y が省略された場合の初期値は 0,0`

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
