export function useBasic2() {
  const title = `構文の省略`

  const code = `<svg width="200" height="120">
  <path d="M10,10 h80 v80 h-80z" fill="orange" stroke="red" />
</svg>`

  const jsx = (
    <svg width={200} height={120}>
      <path d="M10,10 h80 v80 h-80z" fill="orange" stroke="red" />
    </svg>
  )

  return { title, code, jsx }
}
