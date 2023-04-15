import { Shape } from "./setting/setting"

export const Ellipse: Shape = {
  title: "Ellipse",
  shape: {
    code: `<ellipse cx="150" cy="150" rx="100" ry="50" />`,
    jsx: (
      <ellipse
        cx="150"
        cy="150"
        rx="100"
        ry="50"
        fill="none"
        stroke={"var(--main-color)"}
      />
    ),
  },
  absolute: {
    code: `<path d="M150,100 A 100,50 0 1,1 150,200 A 100,50 0 1,1 150,100z" />`,
    jsx: (
      <path
        d="M150,100 A 100,50 0 1,1 150,200 A 100,50 0 1,1 150,100z"
        stroke={"var(--main-color)"}
        fill="none"
      />
    ),
  },
  relative: {
    code: `<path d="M150,100 a 100,50 0 1,1 0,100 a 100,50 0 1,1 0,-100z" />`,
    jsx: (
      <path
        d="M150,100 a 100,50 0 1,1 0,100 a 100,50 0 1,1 0,-100z"
        stroke={"var(--main-color)"}
        fill="none"
      />
    ),
  },
}
