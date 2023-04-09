import { Column, Section } from "../../common/styleDiv"
import { FeaturePresenter } from "../presenter/FeaturePresenter"
import { useSymbol } from "./codes/useSymbol"

const codes = [useSymbol]

export const FeatureSymbol = () => {
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
