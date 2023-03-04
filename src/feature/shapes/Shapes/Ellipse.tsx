import { Shape } from "../setting"

export const Ellipse: Shape = {
  title: "Ellipse",
  shape: {
    code: `<ellipse cx="200" cy="200" rx="100" ry="50" />`,
    jsx: (
      <ellipse
        cx="200"
        cy="200"
        rx="100"
        ry="50"
        fill="none"
        stroke={"var(--main-color)"}
      />
    ),
  },
  path: {
    code: `<path d="M200,150 a 100,50 0 1,1 0,100 a 100,50 0 1,1 0,-100z" />`,
    jsx: (
      <path
        d="M200,150 a 100,50 0 1,1 0,100 a 100,50 0 1,1 0,-100z"
        stroke={"var(--main-color)"}
        fill="none"
      />
    ),
  },
}
