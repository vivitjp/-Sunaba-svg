import { Column, Section } from "~/common"
import { FeaturePresenter, useDragDrop } from "~/feature"

const codes = [useDragDrop]

export const PageDragDrop = () => {
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
