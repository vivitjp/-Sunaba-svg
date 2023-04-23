import { Section, Column } from "~/common"
import { useRotate } from "~/feature"
import { useScale } from "~/feature/transform/useScale"
import { useTransform } from "~/feature/transform/useTranslate"
import { FeaturePresenter } from "~/featureCommon"

const codes = [useTransform, useRotate, useScale]

export const PageTransform = () => {
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
