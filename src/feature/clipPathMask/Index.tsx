import { Column, Section } from "../../common/styleDiv"
import { FeaturePresenter } from "../presenter/FeaturePresenter"
import { useClipPath1 } from "./codes/useClipPath1"
import { useClipPath2 } from "./codes/useClipPath2"
import { useMask1 } from "./codes/useMask1"
import { useMask2 } from "./codes/useMask2"

const codes = [useClipPath1, useClipPath2, useMask1, useMask2]

export const FeatureClipPathMask = () => {
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
