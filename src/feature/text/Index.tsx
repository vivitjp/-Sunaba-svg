import { Column, Section } from "../../common/styleDiv"
import { FeaturePresenter } from "../presenter/FeaturePresenter"
import { useSvgText } from "./codes/useSvgText"
import { useTextPath } from "./codes/useTextPath"

const codes = [useSvgText, useTextPath]

export const FeatureText = () => {
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
