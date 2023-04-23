import { Section, Column } from "~/common"
import { useMarker } from "~/feature"
import { FeaturePresenter } from "~/featureCommon"

const codes = [useMarker]

export const PageMarker = () => {
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
