import { Shape } from "../setting"

export const Circle: Shape = {
  title: "Circle",
  shape: {
    code: `<circle cx="150" cy="150" r="100" />`,
    jsx: (
      <circle
        cx="150"
        cy="150"
        r="100"
        fill="none"
        stroke={"var(--main-color)"}
      />
    ),
  },
  absolute: {
    code: `<path d="M150,50 A 100,100 0 1,1 150,250 A 100,100 0 1,1 150,50z" />`,
    jsx: (
      <path
        d="M150,50 A 100,100 0 1,1 150,250 A 100,100 0 1,1 150,50z"
        stroke={"var(--main-color)"}
        fill="none"
      />
    ),
  },
  relative: {
    code: `<path d="M150,50 a 100,100 0 1,1 0,200 a 100,100 0 1,1 0,-200z" />`,
    jsx: (
      <path
        d="M150,50 a 100,100 0 1,1 0,200 a 100,100 0 1,1 0,-200z"
        stroke={"var(--main-color)"}
        fill="none"
      />
    ),
  },
}
