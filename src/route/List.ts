import { Top } from "../pages/Top"

type MenuGroup = { [key: string]: Menu[] }

type FCCompo = React.FunctionComponent<{}>
type FixedElement = () => JSX.Element

export type Menu = {
  name: string
  path: string
  element: FCCompo | FixedElement
}

//{name: '', path:'/', element:  },
//{name: '', path:'/', element:  },

export const menuGroup: MenuGroup = {
  SVG: [{ name: "Top", path: "/", element: Top }],
}
