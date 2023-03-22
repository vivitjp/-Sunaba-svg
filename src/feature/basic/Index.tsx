import { Column, Section } from "../../common/styleDiv"
import { useBasic1 } from "./codes/useBasic1"
import { useBasic3 } from "./codes/useBasic3"
import { useBasic2 } from "./codes/useBasic2"
import { useBasic4 } from "./codes/useBasic4"
import { useBasic5 } from "./codes/useBasic5"
import { FeaturePresenter } from "../presenter/FeaturePresenter"

const codes = [useBasic1, useBasic2, useBasic3, useBasic4, useBasic5]

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
