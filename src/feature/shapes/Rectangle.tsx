import { Shape } from "./setting/setting"

export const Rectangle: Shape = {
  title: "Rectangle",
  shape: {
    code: `<rect x="100" y="100" width="300" height="100" />`,
    jsx: (
      <rect
        x="100"
        y="100"
        width="300"
        height="100"
        fill="none"
        stroke={"var(--main-color)"}
      />
    ),
  },
  absolute: {
    code: `<path d="M100,100 H400 V100 H200z" />`,
    jsx: (
      <path
        d="M100,100 H400 V200 H100z"
        stroke={"var(--main-color)"}
        fill="none"
      />
    ),
  },
  relative: {
    code: `<path d="M100,100 h300 v100 h-300z" />`,
    jsx: (
      <path
        d="M100,100 h300 v100 h-300z"
        stroke={"var(--main-color)"}
        fill="none"
      />
    ),
  },
}
