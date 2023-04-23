import { Column, Section } from "~/common"
import { useClick } from "~/feature"
import { FeaturePresenter } from "~/featureCommon"

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
