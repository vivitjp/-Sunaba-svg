import { Section, Column } from "~/common"
import { usePattern } from "~/feature"
import { usePatternDouble } from "~/feature/pattern/usePatternDouble"
import { usePatternRatio } from "~/feature/pattern/usePatternRatio"
import { FeaturePresenter } from "~/featureCommon"

const codes = [usePattern, usePatternRatio, usePatternDouble]

export const PagePattern = () => {
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
