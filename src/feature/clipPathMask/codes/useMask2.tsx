import { useId } from "react"
import { useRange, useText } from "~/library"

export function useMask2() {
  const id = useId()
  const title = `mask(text)`

  const Sample = useText({
    title: "東京特許許可局",
    initValue: "東京特許許可局",
  })

  const ClipY = useRange({
    title: "クリップ Y軸",
    subTitle: "y",
    initValue: 90,
    range: [50, 130],
    step: 10,
  })

  const code = `<svg width={700} height={200}>
  <mask id="uniqueId" x="0" y="0" width="700" height="200">
    <text
      x="350"
      y="${ClipY.value as number}"
      fill={"white"}
      textAnchor={"middle"}
      dominantBaseline={"central"}
      fontWeight={700}
      style={{ fontSize: 80, fontFamily: "monospace" }}
    >
      ${Sample.value}
    </text>
  </mask>
  <image
    mask="url(#uniqueId)"
    width={700}
    height={360}
    href="images/hakuba.jpg"
    preserveAspectRatio="xMinYMid slice"
  />
</svg>`

  const jsx = (
    <svg width={700} height={200}>
      <mask id={id} x="0" y="0" width="700" height="200">
        <text
          x={350}
          y={ClipY.value as number}
          fill={"white"}
          textAnchor={"middle"}
          dominantBaseline={"central"}
          fontWeight={700}
          style={{ fontSize: 80, fontFamily: "monospace" }}
        >
          {Sample.value}
        </text>
      </mask>
      <image
        mask={`url(#${id})`}
        width={700}
        height={360}
        href="images/hakuba.jpg"
        preserveAspectRatio={"xMinYMid slice"}
      />
    </svg>
  )

  return { height: 200, title, code, options: [Sample, ClipY], jsx }
}
