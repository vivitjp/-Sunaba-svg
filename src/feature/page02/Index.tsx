import { Code, Div, Row, Section } from "../common/style"
import { SVGRuled } from "~/component"
import { xRulers, yRulers, zeroRulers } from "~/feature/common/setting"
import { Path } from "~/library"

export const Page02 = () => {
  return (
    <Section>
      <Row border={"#ddd"} padding={6}>
        <Code></Code>
      </Row>
      <Div width={600} height={300} border={"LightSeaGreen"}>
        <SVGRuled
          height={300}
          width={600}
          ratio={2}
          xRulers={xRulers}
          yRulers={yRulers}
          zeroRulers={zeroRulers}
          margin={40}
        >
          <Path path={"M0,0 h200v100h-200z"} fill={"none"} />
        </SVGRuled>
      </Div>
    </Section>
  )
}
