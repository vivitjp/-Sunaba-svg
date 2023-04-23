import { Column, Section } from "~/common"
import { useAttribute } from "~/feature"
import { FeaturePresenter } from "~/featureCommon"

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
