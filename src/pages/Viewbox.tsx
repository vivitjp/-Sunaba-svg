import { Column, Section } from "~/common"
import { FeaturePresenter, useViewbox } from "~/feature"

const codes = [useViewbox]

export const PageViewBox = () => {
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
