import { Column, Section } from "../../common/styleDiv"
import { FeaturePresenter } from "../presenter/FeaturePresenter"
import { useTangentByX } from "./codes/useTangentByX"
import { useTangentByXDivide } from "./codes/useTangentByXDivide"
import { useTangentByY } from "./codes/useTangentByY"

const codes = [useTangentByX, useTangentByY, useTangentByXDivide]

export const FeatureTrigonometric = () => {
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
