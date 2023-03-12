import { Shape } from "../setting"

export const RectangleRadius: Shape = {
  title: "RectangleRadius",
  shape: {
    code: `<rect x="100" y="100" ry="20" width="300" height="100" />`,
    jsx: (
      <rect
        x="100"
        y="100"
        rx="30"
        ry="20"
        width="300"
        height="100"
        fill="none"
        stroke={"var(--main-color)"}
      />
    ),
  },
  absolute: {
    code: `<path d="M100,120 A 30,20 0 0,1 120,100 H380 A 30,20 0 0,1 400,120 V180 A -30,20 0 0,1 380,200 H120 A -30,-20 0 0,1 100,180z" />`,
    jsx: (
      <path
        d="M100,120 A 30,20 0 0,1 120,100 H380 A 30,20 0 0,1 400,120 V180 A -30,20 0 0,1 380,200 H120 A -30,-20 0 0,1 100,180z"
        stroke={"var(--main-color)"}
        fill="none"
      />
    ),
  },
  relative: {
    code: `<path d="M100,120 a 30,-20 0 0,1 20,-20 h260 a 30,20 0 0,1 20,20 v60 a -20,20 0 0,1 -20,20 h-260 a -20,-20 0 0,1 -20,-20z" />`,
    jsx: (
      <path
        d="M100,120 a 30,-20 0 0,1 20,-20 h260 a 30,20 0 0,1 20,20 v60 a -20,20 0 0,1 -20,20 h-260 a -20,-20 0 0,1 -20,-20z"
        stroke={"var(--main-color)"}
        fill="none"
      />
    ),
  },
}
