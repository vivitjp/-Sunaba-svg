import { Column, Section } from "../../common/styleDiv"
import { FeaturePresenter } from "../presenter/FeaturePresenter"
import { usePattern } from "./codes/usePattern"
import { usePatternDouble } from "./codes/usePatternDouble"
import { usePatternRatio } from "./codes/usePatternRatio"

const codes = [usePattern, usePatternRatio, usePatternDouble]

export const FeaturePattern = () => {
  return (
    <Section>
      <Column padding={6} gap={40}>
        {codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
      </Column>
    </Section>
  )
}
