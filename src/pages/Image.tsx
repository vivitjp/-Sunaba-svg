import { Section, Column } from "~/common"
import { useImage, FeaturePresenter } from "~/feature"

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
