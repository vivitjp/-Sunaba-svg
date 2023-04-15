import { Column, Section } from "~/common"
import { FeaturePresenter, useClick } from "~/feature"

const codes = [useClick]

export const PageEvent = () => {
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
