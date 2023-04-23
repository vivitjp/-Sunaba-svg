import { Section, Column } from "~/common"
import {
  useCircleGradation,
  useLinearGradation,
  useLinearGradationWithGamma,
} from "~/feature"
import { FeaturePresenter } from "~/featureCommon"

const codes = [
  useCircleGradation,
  useLinearGradation,
  useLinearGradationWithGamma,
]

export const PageGradation = () => {
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
