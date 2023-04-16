import { Section, Column } from "~/common"
import {
  FeaturePresenter,
  useBasic1SVG,
  useBasic2Omit,
  useBasic3Group1,
  useBasic3Group2,
  useBasic4SvgInSvg,
  useBasic5Display1,
  useBasic5Display2,
  useBasic6Outside,
  useBasic7DisplayOrder,
  useBasic8CrispEdges,
} from "~/feature"

const codes = [
  useBasic1SVG,
  useBasic2Omit,
  useBasic3Group1,
  useBasic3Group2,
  useBasic4SvgInSvg,
  useBasic5Display1,
  useBasic5Display2,
  useBasic6Outside,
  useBasic7DisplayOrder,
  useBasic8CrispEdges,
]

export const PageBasic = () => {
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
