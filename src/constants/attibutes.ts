//----------------------------------------
// 属性
//----------------------------------------

type Attribute = {
  title: string
  note: String
  sample: string
}

export const attributes: Attribute[] = [
  { title: "d", note: "パス", sample: "M100,100 L200,100" },
  { title: "stroke", note: "線の色", sample: "=CSS/currentColor" },
  { title: "strokeWidth", note: "線の太さ", sample: "1" },
  { title: "strokeDasharray", note: "破線定義", sample: "4 1" },
  { title: "strokeLinecap", note: "線の端", sample: "butt/round/square" },
  {
    title: "strokeLinejoin",
    note: "線の折れ角",
    sample: "arcs/bevel/miter/miter-clip/round",
  },
  { title: "strokeOpacity", note: "線の透明度", sample: "0.0~1.0" },
  { title: "fill", note: "塗り色", sample: "=CSS/currentColor" },
  { title: "fillOpacity", note: "塗り色の透明度", sample: "0.0~1.0" },
  { title: "fillRule", note: "重複白抜き", sample: "nonzero/evenodd" },
  { title: "opacity", note: "透明", sample: "0.0~1.0" },
  {
    title: "color",
    note: "gで使用する総合配色(fill, stroke, stop-color, flood-color, and lighting-color)",
    sample: "=CSS",
  },
  { title: "cursor", note: "カーソル", sample: "=CSS" },
  { title: "display", note: "表示切替", sample: "none" },
  {
    title: "pointerEvents",
    note: "マウスイベント",
    sample:
      "bounding-box/visiblePainted/visibleFill/visibleStroke/visible/painted/fill/stroke/all/none",
  },
]
