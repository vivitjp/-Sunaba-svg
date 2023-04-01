import { Column, Section } from "../../common/styleDiv"
import { FeaturePresenter } from "../presenter/FeaturePresenter"
import { useTangentByX } from "./codes/useTangentByX"

const codes = [useTangentByX]

export const FeatureTrigonometric = () => {
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
