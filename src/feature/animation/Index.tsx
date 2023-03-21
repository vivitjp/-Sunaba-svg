import { Column, Section } from "../../common/styleDiv"
import { useAnime1 } from "./codes/useAnime1"
import { useAnime2 } from "./codes/useAnime2"
import { useAnime3 } from "./codes/useAnime3"
import { useAnime4 } from "./codes/useAnime4"
import { FeaturePresenter } from "../presenter/FeaturePresenter"

const codes = [useAnime1, useAnime2, useAnime3, useAnime4]

export const FeatureAnimation = () => {
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
