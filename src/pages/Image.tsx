import { Section, Column } from "~/common"
import { useImage } from "~/feature"
import { FeaturePresenter } from "~/featureCommon"

const codes = [useImage]

export const PageImage = () => {
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
