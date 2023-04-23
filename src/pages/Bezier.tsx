import { Column, Section } from "~/common"
import { useBezier2Q, useBezier2QT, useBezier3C, useBezier3CS } from "~/feature"
import { FeaturePresenter } from "~/featureCommon"

const codes = [useBezier2Q, useBezier2QT, useBezier3C, useBezier3CS]

export const PageBezier = () => {
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
