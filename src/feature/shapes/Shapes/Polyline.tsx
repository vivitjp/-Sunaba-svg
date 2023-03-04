import { Shape } from "../setting"

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
  path: {
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
