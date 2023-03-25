import { Column, Section } from "../../common/styleDiv"
import { FeaturePresenter } from "../presenter/FeaturePresenter"
import { useBasic1 } from "./codes/useBasic1"
import { useBasic2 } from "./codes/useBasic2"
import { useBasic3_1 } from "./codes/useBasic3_1"
import { useBasic3_2 } from "./codes/useBasic3_2"
import { useBasic4 } from "./codes/useBasic4"
import { useBasic5_1 } from "./codes/useBasic5_1"
import { useBasic5_2 } from "./codes/useBasic5_2"
import { useBasic6 } from "./codes/useBasic6"

const codes = [
  useBasic1,
  useBasic2,
  useBasic3_1,
  useBasic3_2,
  useBasic4,
  useBasic5_1,
  useBasic5_2,
  useBasic6,
]

export const FeatureBasic = () => {
  return (
    <Section>
      <Column padding={6} gap={20}>
        {codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
      </Column>
    </Section>
  )
}
