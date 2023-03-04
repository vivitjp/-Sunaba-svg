import { Shape } from "../setting"

export const Polygon: Shape = {
  title: "Polygon",
  shape: {
    code: `<Polygon points="100,100 150,200 250,200 300,100" />`,
    jsx: (
      <polygon
        points="100,100 150,200 250,200 300,100"
        fill="none"
        stroke={"var(--main-color)"}
      />
    ),
  },
  path: {
    code: `<path d="M100,100 l50,100 l100,0 l50,-100z" />`,
    jsx: (
      <path
        d="M100,100 l50,100 l100,0 l50,-100z"
        stroke={"var(--main-color)"}
        fill="none"
      />
    ),
  },
}
