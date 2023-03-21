import { Column, Section } from "../../common/styleDiv"
import { useForeignObject1 } from "./codes/useForeignObject1"
import { FeaturePresenter } from "../presenter/FeaturePresenter"

const codes = [useForeignObject1]

export const FeatureForeignObject = () => {
  return (
    <Section>
      <Column padding={6} gap={20}>
        {codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
      </Column>
    </Section>
  )
}
