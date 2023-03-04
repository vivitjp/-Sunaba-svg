import { Shape } from "../setting"

export const RectangleRadius: Shape = {
  title: "RectangleRadius",
  shape: {
    code: `<rect x="100" y="100" ry="20" width="100" height="100" />`,
    jsx: (
      <rect
        x="100"
        y="100"
        ry="20"
        width="200"
        height="200"
        fill="none"
        stroke={"var(--main-color)"}
      />
    ),
  },
  path: {
    code: `<path d="M100,120 a 20,-20 0 0,1 20,-20 h160 a 20,20 0 0,1 20,20 v160 a -20,20 0 0,1 -20,20 h-160 a -20,-20 0 0,1 -20,-20z" />`,
    jsx: (
      <path
        d="M100,120 a 20,-20 0 0,1 20,-20 h160 a 20,20 0 0,1 20,20 v160 a -20,20 0 0,1 -20,20 h-160 a -20,-20 0 0,1 -20,-20z"
        stroke={"var(--main-color)"}
        fill="none"
      />
    ),
  },
}
