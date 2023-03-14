import { Column, Div, Row, S, Section } from "../../common/styleDiv"
import { SVG } from "~/library"
import { FC, useCallback, useState } from "react"
import { adjustOptions, aspectXOptions, aspectYOptions } from "../basic/setting"
import { SelectSet } from "~/component"

export const FeatureImage = () => {
  //preserveAspectRatio(X)
  const [aspectX, setAspectX] = useState<string>(
    aspectXOptions[0].value as string
  )
  //preserveAspectRatio(Y)
  const [aspectY, setAspectY] = useState<string>(
    aspectYOptions[0].value as string
  )
  //preserveAspectRatio (meet or cut)
  const [adjustValue, setAdjustValue] = useState<string>(
    adjustOptions[0].value as string
  )

  return (
    <Section paddingBottom={100}>
      <AspectRatio
        setAspectX={setAspectX}
        setAspectY={setAspectY}
        setAdjustValue={setAdjustValue}
      />

      <Column padding={5} gap={20} border="#eee" width={510} height={370}>
        <SVG
          width={500}
          height={360}
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <image
            width={500}
            height={360}
            href="images/hakuba.jpg"
            preserveAspectRatio={`${aspectX}${aspectY} ${adjustValue}`}
          />
        </SVG>
      </Column>
    </Section>
  )
}

//----------------------------------------
// preserveAspectRatio
//----------------------------------------
type AspectRatioProps = {
  setAspectX: React.Dispatch<React.SetStateAction<string>>
  setAspectY: React.Dispatch<React.SetStateAction<string>>
  setAdjustValue: React.Dispatch<React.SetStateAction<string>>
}

const AspectRatio: FC<AspectRatioProps> = ({
  setAspectX,
  setAspectY,
  setAdjustValue,
}) => {
  const handleChangeAspectX = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setAspectX(e.currentTarget.value)
    },
    []
  )

  const handleChangeAspectY = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setAspectY(e.currentTarget.value)
    },
    []
  )

  const handleChangeAdjust = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setAdjustValue(e.currentTarget.value)
    },
    []
  )

  return (
    <Row border={"#ddd"} padding={10}>
      <Div fontSize={18}>
        preserveAspectRatio <S fontSize={20}>X</S>:
      </Div>
      <SelectSet
        options={aspectXOptions}
        onChange={handleChangeAspectX}
        width={80}
      />
      <Div fontSize={18}>
        <S fontSize={20}>Y</S>:
      </Div>
      <SelectSet
        options={aspectYOptions}
        onChange={handleChangeAspectY}
        width={80}
      />
      <SelectSet
        options={adjustOptions}
        onChange={handleChangeAdjust}
        width={100}
      />
    </Row>
  )
}
