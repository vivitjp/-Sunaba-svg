import { Column, Section } from "~/common"
import { FeaturePresenter, useAttribute } from "~/feature"

const codes = [useAttribute]

export const PageAttribute = () => {
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
