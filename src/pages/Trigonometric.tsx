import { Section, Column } from "~/common"
import { useTangentByX, FeaturePresenter } from "~/feature"
import { useTangentByXDivide } from "~/feature/trigonometric/useTangentByXDivide"
import { useTangentByY } from "~/feature/trigonometric/useTangentByY"

const codes = [useTangentByX, useTangentByY, useTangentByXDivide]

export const PageTrigonometric = () => {
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
