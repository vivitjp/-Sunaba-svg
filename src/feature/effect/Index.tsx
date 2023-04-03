import { Column, Section } from "../../common/styleDiv"
import { useShadow } from "./codes/useShadow"
import { useShadowGroup } from "./codes/useShadowGroup"
import { useImageBlur } from "./codes/useImageBlur"
import { FeaturePresenter } from "../presenter/FeaturePresenter"

const codes = [useShadow, useShadowGroup, useImageBlur]

export const FeatureEffect = () => {
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
