import { Column, Section } from "../../common/styleDiv"
import { FeaturePresenter } from "../presenter/FeaturePresenter"
import { useBasic1SVG } from "./codes/useBasic1SVG"
import { useBasic2Omit } from "./codes/useBasic2Omit"
import { useBasic3Group1 } from "./codes/useBasic3Group1"
import { useBasic3Group2 } from "./codes/useBasic3Group2"
import { useBasic4SvgInSvg } from "./codes/useBasic4SvgInSvg"
import { useBasic5Display1 } from "./codes/useBasic5Display1"
import { useBasic5Display2 } from "./codes/useBasic5Display2"
import { useBasic6Outside } from "./codes/useBasic6Outside"
import { useBasic7DisplayOrder } from "./codes/useBasic7DisplayOrder"
import { useBasic8CrispEdges } from "./codes/useBasic8CrispEdges"

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

export const FeatureBasic = () => {
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
