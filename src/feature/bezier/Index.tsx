import { Column, Section } from "../../common/styleDiv"
import { useBezier2 } from "./codes/useBezier2"
import { FeaturePresenter } from "../presenter/FeaturePresenter"

const codes = [useBezier2]

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
