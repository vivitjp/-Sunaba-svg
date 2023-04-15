import { Column, Section } from "~/common"
import {
  FeaturePresenter,
  useAnimeMotionMpath,
  useAnimeMotionPath,
  useAnimeMotionValue,
} from "~/feature"
const codes = [useAnimeMotionPath, useAnimeMotionMpath, useAnimeMotionValue]

export const PageAnimationMotion = () => {
  return (
    <Section>
      <Column padding={6} gap={40}>
        {codes.map((useCode, idx) => (
          <FeaturePresenter key={idx} useCode={useCode} />
        ))}
      </Column>
    </Section>
  )
}
