import { Column, Section } from "~/common"
import {
  FeaturePresenter,
  useClipPath1,
  useClipPath2,
  useMask1,
  useMask2,
} from "~/feature"

const codes = [useClipPath1, useClipPath2, useMask1, useMask2]

export const PageClipPathMask = () => {
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
