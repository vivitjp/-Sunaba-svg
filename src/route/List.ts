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
import { PageBezier } from "~/pages/Bezier"

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
    { name: "Basic", path: "/basic", element: PageBasic },
    { name: "Viewbox", path: "/viewbox", element: PageViewbox },
    { name: "Shapes", path: "/shapes", element: PageShapes },
    { name: "Bezier", path: "/bezier", element: PageBezier },
    { name: "Attribute", path: "/attribute", element: PageAttribute },
    { name: "Text", path: "/text", element: PageText },
    { name: "Image", path: "/image", element: PageImage },
    { name: "Use", path: "/use", element: PageUse },
    { name: "Effect", path: "/effect", element: PageEffect },
    { name: "Gradation", path: "/gradation", element: PageGradation },
    //{ name: "transform", path: "/transform", element: PageTransform },
    { name: "Animation", path: "/animation", element: PageAnimation },
    //{ name: "animateMotion", path: "/animeMotion", element: PageAnimeMotion },
    //{ name: "animateTransform", path: "/animeTransform", element: PageAnimeTransform },
    { name: "ClipPath/Mask", path: "/clipPath", element: PageClipPathMask },
    {
      name: "ForeignObject",
      path: "/foreignObject",
      element: PageForeignObject,
    },
    { name: "event", path: "/event", element: PageEvent },
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
