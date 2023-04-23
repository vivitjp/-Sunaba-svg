import { Column, Section } from "~/common"
import { useAnime1, useAnime2, useAnime3, useAnime4 } from "~/feature"
import { FeaturePresenter } from "~/featureCommon"

const codes = [useAnime1, useAnime2, useAnime3, useAnime4]

export const PageAnimation = () => {
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
