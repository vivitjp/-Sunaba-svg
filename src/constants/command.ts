type Command = {
  sign: string
  title: string
  formula: string
}

export const commands: Command[] = [
  {
    sign: "M",
    title: "位置移動",
    formula: "M{X座標} {Y座標} / m{水平px} {垂直px}",
  },
  { sign: "H", title: "水平線", formula: "H{X座標} / h{水平px}" },
  { sign: "V", title: "垂直線", formula: "V{Y座標} / v{垂直px}" },
  {
    sign: "L",
    title: "直線",
    formula: "L{X座標} {Y座標} / l{水平px} {垂直px}",
  },
  {
    sign: "A",
    title: "円弧",
    formula:
      "a{水平半径px},{水直半径px} {傾き} {1:長方向/0:短方向},{1:時計回/0:反時計回} {終点X座標},{終点Y座標}",
  },
  { sign: "Q", title: "曲線(2次ベジェ曲線)", formula: "省略" },
  { sign: "T", title: "曲線(2次ベジェ曲線)", formula: "省略" },
  { sign: "C", title: "曲線(3次ベジェ曲線)", formula: "省略" },
  { sign: "S", title: "曲線(3次ベジェ曲線)", formula: "省略" },
  { sign: "Z", title: "クローズ", formula: "z" },
]

export const commandsMap = new Map<string, Command>(
  commands.map((prop) => [prop.sign, prop])
)
