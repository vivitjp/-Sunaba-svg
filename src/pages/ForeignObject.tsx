import { Column, Section } from "~/common"
import { FeaturePresenter, useForeignObject1 } from "~/feature"

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
