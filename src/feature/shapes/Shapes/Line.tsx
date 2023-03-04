import { Shape } from "../setting"

export const Line: Shape = {
  title: "Line",
  shape: {
    code: `<line x1="100" y1="100" x2="300" y2="300" />`,
    jsx: (
      <line
        x1="100"
        y1="100"
        x2="300"
        y2="300"
        fill="none"
        stroke={"var(--main-color)"}
      />
    ),
  },
  path: {
    code: `<path d="M100,100 l200,200" />`,
    jsx: (
      <path d="M100,100 l200,200" stroke={"var(--main-color)"} fill="none" />
    ),
  },
}
