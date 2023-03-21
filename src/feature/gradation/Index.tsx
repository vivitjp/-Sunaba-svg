import { Column, Section } from "../../common/styleDiv"
import { useLinearGradation } from "./codes/useLinearGradation"
import { useCircleGradation } from "./codes/useCircleGradation"
import { useLinearGradationWithGamma } from "./codes/useLinearGradationWithGamma"
import { FeaturePresenter } from "../presenter/FeaturePresenter"

const codes = [
  useCircleGradation,
  useLinearGradation,
  useLinearGradationWithGamma,
]

export const FeatureGradation = () => {
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
