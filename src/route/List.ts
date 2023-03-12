import { Home } from "~/Home"
import { InteractiveLine } from "../pages/onHold/InteractiveLine"
import { PolylineAnime } from "~/pages/onHold/PolylineAnime"
import { InteractiveLineUse } from "~/pages/onHold/InteractiveLineUse"
import { PagePlayground } from "~/pages/PagePlayground"
import { PageBasic } from "~/pages/basic"
import { PageViewbox } from "~/pages/viewbox"
import { PageShapes } from "~/pages/shapes"
import { PageUse } from "~/pages/use"
import { PageAttribute } from "~/pages/attribute"

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
    { name: "01: Basic", path: "/basic", element: PageBasic },
    { name: "02: Viewbox", path: "/viewbox", element: PageViewbox },
    { name: "03: Shapes", path: "/shapes", element: PageShapes },
    { name: "04: Attribute", path: "/attribute", element: PageAttribute },
    //{ name: "0: Text", path: "/use", element: PageText },
    //{ name: "0: Image", path: "/use", element: PageImage },
    { name: "05: Use", path: "/use", element: PageUse },
    // { name: "0: effect", path: "/effect", element: PageEffect },
    // { name: "0: transform", path: "/transform", element: PageTransform },
    // { name: "0: animation", path: "/animation", element: PageAnimation },
  ],
  PlayGround: [
    { name: "Playground", path: "/playground", element: PagePlayground },
  ],
  Keep: [
    { name: "Interactive", path: "/interactive", element: InteractiveLine },
    { name: "Use", path: "/use", element: InteractiveLineUse },
    { name: "Polyline", path: "/polyline", element: PolylineAnime },
  ],
}
