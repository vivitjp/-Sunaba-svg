import { Column, Section } from "../../common/styleDiv"
import { useAnimeMotionPath } from "./codes/useAnimeMotionPath"
import { FeaturePresenter } from "../presenter/FeaturePresenter"
import { useAnimeMotionMpath } from "./codes/useAnimeMotionMpath"
import { useAnimeMotionValue } from "./codes/useAnimeMotionValue"

const codes = [useAnimeMotionPath, useAnimeMotionMpath, useAnimeMotionValue]

export const FeatureAnimationMotion = () => {
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
