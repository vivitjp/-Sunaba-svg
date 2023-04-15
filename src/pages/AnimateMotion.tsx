import { Column, Section } from "~/common"
import {
  FeaturePresenter,
  useAnimateMotionMpath,
  useAnimateMotionPath,
  useAnimateMotionValue,
} from "~/feature"
const codes = [
  useAnimateMotionPath,
  useAnimateMotionMpath,
  useAnimateMotionValue,
]

export const PageAnimateMotion = () => {
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
