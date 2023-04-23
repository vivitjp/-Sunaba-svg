import { Column, Section } from "~/common"
import { useForeignObject1 } from "~/feature"
import { FeaturePresenter } from "~/featureCommon"

const codes = [useForeignObject1]

export const PageForeignObject = () => {
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
