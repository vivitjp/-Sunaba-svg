import { Shape } from "../setting"

export const Rectangle: Shape = {
  title: "Rectangle",
  shape: {
    code: `<rect x="100" y="100" width="100" height="100" />`,
    jsx: (
      <rect
        x="100"
        y="100"
        width="200"
        height="200"
        fill="none"
        stroke={"var(--main-color)"}
      />
    ),
  },
  path: {
    code: `<path d="M100,100 h200 v200 h-200z" />`,
    jsx: (
      <path
        d="M100,100 h200 v200 h-200z"
        stroke={"var(--main-color)"}
        fill="none"
      />
    ),
  },
}
