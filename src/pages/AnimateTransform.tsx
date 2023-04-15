import { Column, Section } from "~/common"
import { AnimateTransform, FeaturePresenter } from "~/feature"
const codes = [AnimateTransform]

export const PageAnimateTransform = () => {
  return (
    <Section>
      <Column padding={6} gap={40}>
        {codes.map((useCode, idx) => (
          <FeaturePresenter key={idx} useCode={useCode} />
        ))}
      </Column>
    </Section>
  )
}
