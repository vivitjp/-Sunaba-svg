export function useBasic3() {
  const title = `グループ(g)`

  const code = `<svg width="200" height="120">
  <g id="group-a" fill="orange" stroke="red">
    <path d="M10,10 h80 v80 h-80z" />
    <path d="M60,60 h80 v80 h-80z" fill="blue" />
  </g>
</svg>`

  const jsx = (
    <svg width={200} height={120}>
      <g id="group-a" fill="orange" stroke="red">
        <path d="M10,10 h80 v80 h-80z" />
        <path d="M80,30 h80 v80 h-80z" fill="blue" />
      </g>
    </svg>
  )

  return { title, code, jsx }
}
