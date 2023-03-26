import { Column, Section } from "../../common/styleDiv"
import { useBezier2A } from "./codes/useBezier2A"
import { FeaturePresenter } from "../presenter/FeaturePresenter"
import { useBezier2B } from "./codes/useBezier2B"

const codes = [useBezier2A, useBezier2B]

export const FeatureBezier = () => {
  return (
    <Section>
      <Column padding={6} gap={20}>
        {codes.map((useCode, idx) => (
          <FeaturePresenter key={idx} useCode={useCode} />
        ))}
      </Column>
    </Section>
  )
}
