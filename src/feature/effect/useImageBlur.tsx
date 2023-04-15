import { UseReturnType } from "~/component"
import { useRange } from "~/library"

export function useImageBlur(): UseReturnType {
  const title = `Filter: Blur`

  const Deviation = useRange({
    title: "BlurLevel",
    subTitle: "stdDeviation",
    initValue: 3,
    range: [0, 5],
    step: 1,
  })

  const code = `<svg width={500} height={280} viewBox="0 0 500 280">
  <defs>
    <filter id="blur1">
      <feGaussianBlur stdDeviation="${Deviation.value}" />
    </filter>
  </defs>
  <image width={500} height={280} href="images/hakuba.jpg"
    preserveAspectRatio="xMinYMin meet" filter="url(#blur1)"
  />
</svg>`

  const jsx = (
    <svg width={500} height={280} viewBox="0 0 500 280">
      <defs>
        <filter id="blur1">
          <feGaussianBlur stdDeviation={Deviation.value} />
        </filter>
      </defs>
      <image
        width={500}
        height={280}
        href="images/hakuba.jpg"
        preserveAspectRatio="xMinYMin meet"
        filter="url(#blur1)"
      />
    </svg>
  )

  return { title, code, options: [Deviation], jsx }
}

// filterUnits="userSpaceOnUse" x="20" y="20" width="160" height="160"
