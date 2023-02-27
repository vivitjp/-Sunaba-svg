import React, { useCallback, useMemo } from "react"
import { useState } from "react"
import { SVGRuled } from "~/component/SVGRuled"
import { SelectSet } from "~/component/SelectSet"
import { Path, getViewbox } from "~/library"
import {
  Button,
  Checkbox,
  Code,
  Column,
  Div,
  GRAY,
  Margin,
  Row,
  S,
  SVGContent,
  Section,
  TextArea,
} from "./Index.style"
import {
  MARGIN,
  SVG_HEIGHT,
  SVG_WIDTH,
  options,
  pathOptions,
  pathSamplesMap,
} from "./setting"
import { commandsMap } from "~/constants/command"
import { xRulers, yRulers, zeroRulers } from "~/feature/common/setting"

export const Playground = () => {
  //Ratio倍率
  const [ratio, setRatio] = useState<number>(1)
  const [margin, setMargin] = useState<number>(MARGIN)
  const viewbox = useMemo(() => {
    return getViewbox({ width: SVG_WIDTH, height: SVG_HEIGHT, margin, ratio })
  }, [margin, ratio])
  const handleChangeSelect = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = parseInt(e.currentTarget.value ?? 1)
      setRatio(value)
    },
    []
  )

  //マージン
  const handleMargin = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.currentTarget.value ?? "0")
    setMargin(value)
  }, [])

  //textArea から freePath へ
  const [freePath, setFreePath] = useState<string>("")
  const handleChangeTextArea = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.currentTarget.value
      setFreePath(value)
    },
    []
  )

  //freePath から FreePathSet へセット(描写)
  const [freePathSet, setFreePathSet] = useState<string>("")
  const handleClickSetPath = () => {
    setFreePathSet(freePath)
  }

  //サンプル一覧から free へコピー
  const [selectedCommand, setSelectedCommand] = useState<string>("")
  const handleChangePathSelect = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const id = e.currentTarget.value
      const pathSample = pathSamplesMap.get(id)

      if (pathSample?.value) {
        const { value, sign } = pathSample
        setFreePath(value)
        if (!sign) return
        const commandArray = sign.reduce<string[]>((acc, value) => {
          const command = commandsMap.get(value)
          if (command) {
            const { formula, sign, title } = command
            return [...acc, `${sign}: ${title}: ${formula}`]
          } else {
            return [...acc]
          }
        }, [])
        setSelectedCommand(commandArray.join("\n"))
      }
    },
    []
  )

  //Option: 背景
  const [hasBg, setHasBg] = useState<boolean>(false)
  const handleChangeCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.checked
      setHasBg(value)
    },
    []
  )

  return (
    <Section>
      {/* 倍率設定、マージン */}
      <Row border={"#ddd"}>
        <Div>ratio</Div>
        <SelectSet options={options} onChange={handleChangeSelect} width={60} />
        <Div>Margin</Div>
        <Margin onChange={handleMargin} value={margin} placeholder="margin" />
      </Row>

      {/* サイズと Viewbox  */}
      <Row border={"#ddd"} padding={10}>
        <Code>
          Width: "<S>{SVG_WIDTH}</S>" Height: "<S>{SVG_HEIGHT}</S>" viewBox: "
          <S>{viewbox}</S>"
        </Code>
      </Row>

      {/* サンプル & Path 入力 */}
      <Column border={"#ddd"}>
        <Row>
          <SelectSet
            options={pathOptions}
            onChange={handleChangePathSelect}
            width={200}
          />
          <label>
            <Checkbox checked={hasBg} onChange={handleChangeCheck} />
            <GRAY>背景(fill)</GRAY>
          </label>
        </Row>

        {/* 解説 */}
        <Row border={"#eee"}>
          <Code align={"left"}>{selectedCommand}</Code>
        </Row>
        <Row>
          <TextArea
            onChange={handleChangeTextArea}
            value={freePath}
            placeholder="path..."
          />
          <Button onClick={handleClickSetPath}>Set Path</Button>
        </Row>
      </Column>

      {/* SVG描画 */}
      <SVGContent>
        <SVGRuled
          height={SVG_HEIGHT}
          width={SVG_WIDTH}
          ratio={ratio}
          xRulers={xRulers}
          yRulers={yRulers}
          zeroRulers={zeroRulers}
          margin={margin}
        >
          <Path path={freePathSet} fill={hasBg ? "Ivory" : "none"} />
        </SVGRuled>
      </SVGContent>
    </Section>
  )
}