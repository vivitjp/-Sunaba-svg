import { Shape } from "../setting"

export const Circle: Shape = {
  title: "Circle",
  shape: {
    code: `<circle cx="200" cy="200" r="100" />`,
    jsx: (
      <circle
        cx="200"
        cy="200"
        r="100"
        fill="none"
        stroke={"var(--main-color)"}
      />
    ),
  },
  path: {
    code: `<path d="M200,100 a 100,100 0 1,1 0,200 a 100,100 0 1,1 0,-200z" />`,
    jsx: (
      <path
        d="M200,100 a 100,100 0 1,1 0,200 a 100,100 0 1,1 0,-200z"
        stroke={"var(--main-color)"}
        fill="none"
      />
    ),
  },
}
