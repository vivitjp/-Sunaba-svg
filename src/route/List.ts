import { Home } from "~/Home"
import { InteractiveLine } from "../pages/onHold/InteractiveLine"
import { PolylineAnime } from "~/pages/onHold/PolylineAnime"
import { InteractiveLineUse } from "~/pages/onHold/InteractiveLineUse"
import { PagePlayground } from "~/pages/Playground"
import { PageViewbox } from "~/pages/Viewbox"
import { PageShapes } from "~/pages/Shapes"
import { PageUse } from "~/pages/Use"
import { PageText } from "~/pages/Text"
import { PageImage } from "~/pages/Image"
import { PageEffect } from "~/pages/Effect"
import { PageAnimation } from "~/pages/Animation"
import { PageGradation } from "~/pages/Gradation"
import { PageClipPathMask } from "~/pages/ClipPathMask"
import { PageForeignObject } from "~/pages/ForeignObject"
import { PageEvent } from "~/pages/Event"
import { PageBezier } from "~/pages/Bezier"
import { PageTrigonometric } from "~/pages/Trigonometric"
import { PageTransform } from "~/pages/Transform"
import { PageMarker } from "~/pages/Marker"
import { PageDragDrop } from "~/pages/DragDrop"
import { PagePattern } from "~/pages/Pattern"
import { PageSymbol } from "~/pages/Symbol"
import { PageAnimationMotion } from "~/pages/AnimateMotion"
import { PageBasic } from "~/pages/Basic"
import { PageAttribute } from "~/pages/Attribute"

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

  PlayGround: [
    { name: "Playground", path: "/playground", element: PagePlayground },
  ],
  Basic: [
    { name: "基礎", path: "/basic", element: PageBasic },
    { name: "Viewbox", path: "/viewbox", element: PageViewbox },
    { name: "形(Shapes)", path: "/shapes", element: PageShapes },
    { name: "ベジェ曲線", path: "/bezier", element: PageBezier },
    { name: "属性", path: "/attribute", element: PageAttribute },
    //{ name: "スタイル", path: "/style", element: PageStyle },
    { name: "マーカー", path: "/marker", element: PageMarker },
    { name: "Use(再利用)", path: "/use", element: PageUse },
    { name: "パターン", path: "/pattern", element: PagePattern },
    { name: "シンボル", path: "/symbol", element: PageSymbol },
    { name: "テキスト", path: "/text", element: PageText },
    { name: "イメージ", path: "/image", element: PageImage },
    {
      name: "三角関数",
      path: "/trigonometric",
      element: PageTrigonometric,
    },
    { name: "効果", path: "/effect", element: PageEffect },
    { name: "グラデーション", path: "/gradation", element: PageGradation },
    { name: "Transform", path: "/transform", element: PageTransform },
    { name: "アニメーション", path: "/animation", element: PageAnimation },
    {
      name: "アニメ・モーション",
      path: "/animationMotion",
      element: PageAnimationMotion,
    },
    //{ name: "animateTransform", path: "/animeTransform", element: PageAnimeTransform },
    { name: "ClipPath/Mask", path: "/clipPath", element: PageClipPathMask },
    {
      name: "ForeignObject",
      path: "/foreignObject",
      element: PageForeignObject,
    },
    { name: "イベント", path: "/event", element: PageEvent },
    { name: "Drag & Drop", path: "/dragDrop", element: PageDragDrop },
  ],
  Keep: [
    { name: "Interactive", path: "/interactive", element: InteractiveLine },
    { name: "IntUse", path: "/intUse", element: InteractiveLineUse },
    { name: "Polyline", path: "/polyline", element: PolylineAnime },
  ],
}
