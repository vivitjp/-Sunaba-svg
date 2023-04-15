import { Column, Section } from "~/common"
import {
  FeaturePresenter,
  useBezier2A,
  useBezier2B,
  useBezier3A,
  useBezier3B,
} from "~/feature"

const codes = [useBezier2A, useBezier2B, useBezier3A, useBezier3B]

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
