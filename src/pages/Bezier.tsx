import { Column, Section } from "~/common"
import {
  FeaturePresenter,
  useBezier2Q,
  useBezier2QT,
  useBezier3C,
  useBezier3CS,
} from "~/feature"

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
