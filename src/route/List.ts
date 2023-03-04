import { Home } from "~/Home"
import { InteractiveLine } from "../pages/onHold/InteractiveLine"
import { PolylineAnime } from "~/pages/onHold/PolylineAnime"
import { InteractiveLineUse } from "~/pages/onHold/InteractiveLineUse"
import { Playground } from "~/pages/Playground"
import { page01basic } from "~/pages/page01basic"
import { page02viewbox } from "~/pages/page02viewbox"
import { page03shapes } from "~/pages/page03shapes"

type MenuGroup = { [key: string]: Menu[] }

type FCCompo = React.FunctionComponent<{}>
type FixedElement = () => JSX.Element

export type Menu = {
  name: string
  path: string
  element: FCCompo | FixedElement
}

export const menuGroup: MenuGroup = {
  Home: [{ name: "Home", path: "/", element: Home }],

  Basic: [
    { name: "01: Basic", path: "/page01basic", element: page01basic },
    { name: "02: Viewbox", path: "/page02viewbox", element: page02viewbox },
    { name: "03: Shapes", path: "/page03shapes", element: page03shapes },
    // { name: "03: path", path: "/page03path", element: page02shapes },
    // { name: "04: attribute", path: "/page04attribute", element: page02shapes },
    // { name: "05: group", path: "/page05group", element: page02shapes },
    // { name: "06: use", path: "/page06", element: page02shapes },
    // { name: "07: effect", path: "/page06effect", element: page02shapes },
  ],
  PlayGround: [
    { name: "Playground", path: "/Playground", element: Playground },
  ],
  Keep: [
    { name: "Interactive", path: "/interactive", element: InteractiveLine },
    { name: "Use", path: "/use", element: InteractiveLineUse },
    { name: "Polyline", path: "/polyline", element: PolylineAnime },
  ],
}
