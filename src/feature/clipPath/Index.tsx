import { Column, Section } from "../../common/styleDiv"
import { FeaturePresenter } from "../presenter/FeaturePresenter"
import { useClipPath1 } from "./codes/useClipPath1"
import { useClipPath2 } from "./codes/useClipPath2"
import { useMask1 } from "./codes/useMask1"

const codes = [useClipPath1, useClipPath2, useMask1]

export const FeatureClipPath = () => {
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
