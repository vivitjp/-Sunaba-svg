import { Home } from "~/Home"
import { InteractiveLine } from "../pages/onHold/InteractiveLine"
import { PolylineAnime } from "~/pages/onHold/PolylineAnime"
import { InteractiveLineUse } from "~/pages/onHold/InteractiveLineUse"
import { PagePlayground } from "~/pages/Playground"
import { PageBasic } from "~/pages/Basic"
import { PageViewbox } from "~/pages/Viewbox"
import { PageShapes } from "~/pages/Shapes"
import { PageUse } from "~/pages/Use"
import { PageAttribute } from "~/pages/Attribute"
import { PageText } from "~/pages/Text"
import { PageImage } from "~/pages/Image"
import { PageEffect } from "~/pages/Effect"
import { PageAnimation } from "~/pages/Animation"
import { PageGradation } from "~/pages/Gradation"
import { PageClipPathMask } from "~/pages/ClipPathMask"
import { PageForeignObject } from "~/pages/ForeignObject"
import { PageEvent } from "~/pages/Event"

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
    { name: "05: Text", path: "/text", element: PageText },
    //textPath
    { name: "06: Image", path: "/image", element: PageImage },
    { name: "07: Use", path: "/use", element: PageUse },
    { name: "08: Effect", path: "/effect", element: PageEffect },
    { name: "09: Gradation", path: "/gradation", element: PageGradation },
    //{ name: "0: transform", path: "/transform", element: PageTransform },
    { name: "10: Animation", path: "/animation", element: PageAnimation },
    //{ name: "0: animateMotion", path: "/animeMotion", element: PageAnimeMotion },
    //{ name: "0: animateTransform", path: "/animeTransform", element: PageAnimeTransform },
    { name: "11: ClipPath/Mask", path: "/clipPath", element: PageClipPathMask },
    {
      name: "12: ForeignObject",
      path: "/foreignObject",
      element: PageForeignObject,
    },
    { name: "15: event", path: "/event", element: PageEvent },
    // pattern
    // symbol
  ],
  PlayGround: [
    { name: "Playground", path: "/playground", element: PagePlayground },
  ],
  Keep: [
    { name: "Interactive", path: "/interactive", element: InteractiveLine },
    { name: "IntUse", path: "/intUse", element: InteractiveLineUse },
    { name: "Polyline", path: "/polyline", element: PolylineAnime },
  ],
}
