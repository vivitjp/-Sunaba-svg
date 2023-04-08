import { useRange } from "~/library"
import { useSVGDragDrop } from "../hooks/useSVGDragDrop"

export function useDragDrop() {
  const AlignmentGap = useRange({
    title: "AlignmentGap",
    initValue: 20,
    range: [0, 50],
    step: 10,
  })

  const { dragDropProps } = useSVGDragDrop({
    initX: 100,
    initY: 100,
    svgWidth: 720,
    svgHeight: 300,
    alignBy: AlignmentGap.value,
  })

  const title = `Filter: Shadow`

  // const Fill = useText({
  //   title: "影の色",
  //   subTitle: "floodColor",
  //   initValue: "#555",
  // })

  const code = ``

  const arrayWidth = AlignmentGap.value
    ? [...Array(Math.round(720 / AlignmentGap.value))].fill(0)
    : []
  const arrayHeight = AlignmentGap.value
    ? [...Array(Math.round(720 / AlignmentGap.value))].fill(0)
    : []

  const jsx = (
    <svg width={720} height={300}>
      {AlignmentGap.value > 0 &&
        arrayWidth.map((_, index) => (
          <line
            x1={0}
            y1={index * AlignmentGap.value}
            x2={720}
            y2={index * AlignmentGap.value}
            stroke="#eee"
            fill="none"
          />
        ))}
      {AlignmentGap.value > 0 &&
        arrayHeight.map((_, index) => (
          <line
            x1={index * AlignmentGap.value}
            y1={0}
            x2={index * AlignmentGap.value}
            y2={500}
            stroke="#eee"
            fill="none"
          />
        ))}
      <rect
        fill="yellow"
        stroke="blue"
        width={100}
        height={100}
        {...dragDropProps}
      />
    </svg>
  )

  return { title, code, options: [AlignmentGap], jsx }
}
