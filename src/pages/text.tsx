import { Section, Column } from "~/common"
import { useSvgText, FeaturePresenter, useTextPath } from "~/feature"

const codes = [useSvgText, useTextPath]

export const PageText = () => {
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
