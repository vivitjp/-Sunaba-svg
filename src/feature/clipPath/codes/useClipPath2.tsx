import { useRange } from "~/library"

export function useClipPath2() {
  const title = `ClipPath`

  const ClipY = useRange({
    title: "クリップ Y軸",
    subTitle: "y",
    initValue: 100,
    range: [40, 200],
    step: 10,
  })
  const code = `<svg x={0} y={0} width={700} height={280}>
  <defs>
    <circle id="circle2" cx={0} cy={0} r={60} fill="Tomato" stroke="white" strokeWidth={3}/>
  </defs>
  <rect x={20} y={20} width={600} height={260} fill="orange" />
  <use href="#circle2" x={100} y={100} />
  <use href="#circle2" x={400} y={200} />

  <defs>
    <clipPath id="myClip2">
      <rect x={10} y="${ClipY.value}" width={580} height={60} />
    </clipPath>
    <g id="square2" fill="Tomato" stroke="white" strokeWidth={3}>
      <circle cx={160} cy={120} r={60} />
      <circle cx={300} cy={140} r={60} />
    </g>
  </defs>
  <use clipPath="url(#myClip2)" href="#square2" />
  <rect x={30} y="${ClipY.value}" width={580} height={60} fill="none" stroke="#000" />
</svg>`

  const jsx = (
    <svg x={0} y={0} width={700} height={280}>
      <defs>
        <circle
          id="circle2"
          cx={0}
          cy={0}
          r={60}
          fill="white"
          stroke="Tomato"
          strokeWidth={3}
        />
      </defs>
      <rect x={20} y={20} width={600} height={260} fill="orange" />
      <use href="#circle2" x={100} y={100} />
      <use href="#circle2" x={400} y={200} />

      <defs>
        <clipPath id="myClip2">
          <rect x={10} y={ClipY.value} width={580} height={60} />
        </clipPath>
        <g id="square2" fill="Tomato" stroke="white" strokeWidth={3}>
          <circle cx={160} cy={120} r={60} />
          <circle cx={340} cy={140} r={60} />
        </g>
      </defs>
      <use clipPath="url(#myClip2)" href="#square2" />
      <rect
        x={30}
        y={ClipY.value}
        width={580}
        height={60}
        fill="none"
        stroke="#000"
      />
    </svg>
  )

  return { height: 300, title, code, options: [ClipY], jsx }
}
