import { useCheck } from "~/library"

export function useBasic5() {
  const title = `表示有無`

  const CheckDisplay = useCheck({
    title: "表示切り替え",
    subTitle: "display",
    initValue: true,
  })

  const CheckVisible = useCheck({
    title: "表示切り替え",
    subTitle: "visibility",
    initValue: true,
  })

  const code = `<svg x="0" y="0" width="200" height="120"
  viewBox="0 0 200 120"
  xmlns="http://www.w3.org/2000/svg">
  <path d="M10,10 h80 v80 h-80z" fill="orange" stroke="red"
     display="${CheckDisplay.value ? "block" : "none"}"
     visibility="${CheckVisible.value ? "visible" : "hidden"}"
  />
</svg>`

  const jsx = (
    <svg
      x={0}
      y={0}
      width={200}
      height={120}
      viewBox="0 0 200 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10,10 h80 v80 h-80z"
        fill="orange"
        stroke="red"
        display={CheckDisplay.value ? "block" : "none"}
        visibility={CheckVisible.value ? "visible" : "hidden"}
      />
    </svg>
  )

  return { title, code, options: [CheckDisplay, CheckVisible], jsx }
}
