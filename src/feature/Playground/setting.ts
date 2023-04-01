import { Options } from "~/component/SelectSet"

export const SVG_WIDTH = 600,
  SVG_HEIGHT = 500,
  MARGIN = 40

export const options: Options<number>[] = [
  { title: "1", value: 1 },
  { title: "2", value: 2 },
  { title: "3", value: 3 },
]

export type PathSample = {
  id: string
  title: string
  value: string
  sign?: string[]
}

export const pathSamples: PathSample[] = [
  { id: "10", title: "線(水平): H", sign: ["H"], value: "M100,100 H200" },
  { id: "11", title: "線(垂直): V", sign: ["V"], value: "M100,100 V200" },
  { id: "20", title: "線(単数): L", sign: ["L"], value: "M100,100 L300,300" },
  {
    id: "21",
    title: "線(複数/連続): L",
    sign: ["L"],
    value: "M100,100 L200,300 L300,200",
  },
  {
    id: "22",
    title: "線(複数/非連続): L",
    sign: ["L"],
    value: "M100,100 L200,300 M200,200 L300,200",
  },
  {
    id: "30",
    title: "四角(オープン)",
    sign: ["H", "V"],
    value: "M100,100 h100 v100 h-100",
  },
  {
    id: "31",
    title: "四角(クローズ):z",
    sign: ["H", "V", "Z"],
    value: "M100,100 h100 v100 h-100z",
  },
  {
    id: "40",
    title: "半円(アーク): A",
    sign: ["A"],
    value: "M200,100 a 100,100 0 1,1 0,200",
  },
  {
    id: "41",
    title: "円(アーク): A",
    sign: ["A"],
    value: "M200,100 a 100,100 0 1,1 0,200 a 100,100 0 1,1 0,-200",
  },
]

export const pathSamplesMap = new Map<string, PathSample>(
  pathSamples.map((prop) => [prop.id, prop])
)

export const pathOptions: Options<string>[] = pathSamples.map(
  ({ title, id }) => ({
    title,
    value: id,
  })
)
pathOptions.unshift({ title: "サンプル選択", value: "" })
