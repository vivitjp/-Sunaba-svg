import { Shape } from "./setting/setting"

export const Polyline: Shape = {
  title: "Polyline",
  shape: {
    code: `<polyline points="100,100 150,200 200,100, 250,200 300,100" />`,
    jsx: (
      <polyline
        points="100,100 150,200 200,100, 250,200 300,100"
        fill="none"
        stroke={"var(--main-color)"}
      />
    ),
  },
  absolute: {
    code: `<path d="M100,100 L150,200 L200,100 L250,200 L300,100" />`,
    jsx: (
      <path
        d="M100,100 L150,200 L200,100 L250,200 L300,100"
        stroke={"var(--main-color)"}
        fill="none"
      />
    ),
  },
  relative: {
    code: `<path d="M100,100 l50,100 l50,-100 l50,100 l50,-100" />`,
    jsx: (
      <path
        d="M100,100 l50,100 l50,-100 l50,100 l50,-100"
        stroke={"var(--main-color)"}
        fill="none"
      />
    ),
  },
}
