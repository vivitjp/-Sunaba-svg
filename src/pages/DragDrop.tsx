import { Column, Section } from "~/common"
import { useDragDropGrid, useDragDropFixAndMove } from "~/feature"
import { FeaturePresenter } from "~/featureCommon"

const codes = [useDragDropFixAndMove, useDragDropGrid]

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
