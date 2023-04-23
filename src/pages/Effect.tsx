import { Column, Section } from "~/common"
import { useShadow, useShadowGroup, useImageBlur } from "~/feature"
import { FeaturePresenter } from "~/featureCommon"

const codes = [useShadow, useShadowGroup, useImageBlur]

export const PageEffect = () => {
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
