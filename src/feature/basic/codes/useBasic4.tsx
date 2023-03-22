export function useBasic4() {
  const title = `SVG in SVG`

  const code = `<svg width="200" height="120">
  <path d="M10,10 h80 v80 h-80z" fill="orange" stroke="red" />
  <svg x="70" y="20" width="100" height="100">
    <path d="M10,10 h80 v80 h-80z" fill="green" stroke="red" />
  </svg>
</svg>`

  const jsx = (
    <svg width={200} height={120}>
      <path d="M10,10 h80 v80 h-80z" fill="orange" stroke="red" />
      <svg x={70} y={20} width={100} height={100}>
        <path d="M10,10 h80 v80 h-80z" fill="green" stroke="red" />
      </svg>
    </svg>
  )

  return { title, code, jsx }
}
