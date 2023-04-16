import { Section, Column } from "~/common"
import { FeaturePresenter, useUse, useUseGroup } from "~/feature"

const codes = [useUse, useUseGroup]

export const PageUse = () => {
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
