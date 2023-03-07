import { Shape } from "../setting"

export const Line: Shape = {
  title: "Line",
  shape: {
    code: `<line x1="100" y1="100" x2="400" y2="200" />`,
    jsx: (
      <line
        x1="100"
        y1="100"
        x2="400"
        y2="200"
        fill="none"
        stroke={"var(--main-color)"}
      />
    ),
  },
  absolute: {
    code: `<path d="M100,100 L400,200" />`,
    jsx: (
      <path d="M100,100 L400,200" stroke={"var(--main-color)"} fill="none" />
    ),
  },
  relative: {
    code: `<path d="M100,100 l200,200" />`,
    jsx: (
      <path d="M100,100 l300,100" stroke={"var(--main-color)"} fill="none" />
    ),
  },
}
