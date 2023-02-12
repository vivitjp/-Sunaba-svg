import { Home } from "~/Home"
import { AnimateLine } from "../pages/AnimateLine"

type MenuGroup = { [key: string]: Menu[] }

type FCCompo = React.FunctionComponent<{}>
type FixedElement = () => JSX.Element

export type Menu = {
  name: string
  path: string
  element: FCCompo | FixedElement
}

//{name: '', path:'/', element:  },

export const menuGroup: MenuGroup = {
  Home: [{ name: "Home", path: "/", element: Home }],
  SVG: [{ name: "AnimateLine", path: "/AnimateLine", element: AnimateLine }],
}
