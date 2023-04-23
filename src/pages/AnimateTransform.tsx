import { Column, Section } from "~/common"
import { useAnimateTransform, useAnimateTransformScale } from "~/feature"
import { FeaturePresenter } from "~/featureCommon"

const codes = [useAnimateTransform, useAnimateTransformScale]

export const PageAnimateTransform = () => {
  return (
    <Section>
      <Column padding={6} gap={40}>
        {codes.map((useCode, idx) => (
          <FeaturePresenter key={idx} useCode={useCode} />
        ))}
      </Column>
    </Section>
  )
}
