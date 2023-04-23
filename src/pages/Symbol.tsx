import { Section, Column } from "~/common"
import { useSymbol } from "~/feature"
import { FeaturePresenter } from "~/featureCommon"

const codes = [useSymbol]
export const PageSymbol = () => {
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
