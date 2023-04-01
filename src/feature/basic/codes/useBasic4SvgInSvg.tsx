export function useBasic4SvgInSvg() {
  const title = `SVG in SVG`

  const code = `<svg width="600" height="120">
  <rect x={20} y={20} width={80} height={80} fill="orange" stroke="red" />
  <svg x={120} y={20} width={400} height={100}>
    <rect x={0} y={0} width={80} height={80} fill="blue" stroke="red" />
  </svg>
</svg>`

  const jsx = (
    <svg width={600} height={120}>
      <rect x={20} y={20} width={80} height={80} fill="orange" stroke="red" />
      <svg x={120} y={20} width={400} height={100}>
        <rect x={0} y={0} width={80} height={80} fill="blue" stroke="red" />
      </svg>
    </svg>
  )

  return { title, code, jsx }
}
