import { useCheck } from "~/library"

export function useBasic7DisplayOrder() {
  const title = `要素の表示順(Layerの概念)`
  const subTitle = ``

  const ElemOrder = useCheck({
    title: "要素の順番リバース",
    initValue: false,
  })

  type Colors = [number, number, string] // x,y,color
  const colors: Colors[] = [
    [20, 20, "orange"],
    [100, 40, "blue"],
    [180, 60, "green"],
  ]
  const arranged = ElemOrder.value ? colors : colors.reverse()

  const code = `<svg width={600} height={180} viewBox={"0 0 600 180"}>
${arranged
  .map(
    ([x, y, color]) =>
      `  <rect x="${x}" y="${y}" width={100} height={100} fill="${color}" />\n`
  )
  .join()
  .replaceAll(",", "")}
</svg>`

  const jsx = (
    <svg width={600} height={180} viewBox={"0 0 600 180"}>
      {arranged.map(([x, y, color]) => (
        <rect key={x} x={x} y={y} width={100} height={100} fill={color} />
      ))}
    </svg>
  )

  return { title, subTitle, code, options: [ElemOrder], jsx }
}
