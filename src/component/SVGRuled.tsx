import React, { FC, useEffect, useMemo, useRef, useState } from "react"
import { Path, SVG, Text, line } from "~/library"

export type Rulers = {
  lineType: "solid" | "dashed"
  lineColor: string
  lineWidth: number
  lineInterval?: number
  isValueDisplayed?: boolean
  fontSize?: number
  fontColor?: string
}

type SVGRuled = {
  xRulers?: Rulers
  yRulers?: Rulers
  zeroRulers?: Rulers
} & SVG

const getListType = (lineType: "solid" | "dashed", ratio: number) => {
  if (lineType === "dashed") return `${4 * ratio} ${3 * ratio}`
  else return "none"
}

export const SVGRuled: FC<SVGRuled> = ({
  xRulers,
  yRulers,
  zeroRulers,
  width,
  height,
  ratio = 1,
  children,
  viewbox,
  ...args
}: SVGRuled) => {
  const [widthRatio, setWidthRatio] = useState<number>(0)
  const [heightRatio, setHeightRatio] = useState<number>(0)
  const [xIntervalRatio, setXIntervalRatio] = useState<number>(0)
  const [yIntervalRatio, setYIntervalRatio] = useState<number>(0)

  useEffect(() => {
    setWidthRatio(width * ratio)
    setHeightRatio(height * ratio)
    setXIntervalRatio((xRulers?.lineInterval ?? 0) * ratio)
    setYIntervalRatio((yRulers?.lineInterval ?? 0) * ratio)
  }, [width, height, ratio])

  const xArray = useMemo(() => {
    if (!xIntervalRatio) return []
    return Array(Math.floor(widthRatio / xIntervalRatio))
      .fill(xIntervalRatio)
      .map((x, idx) => {
        return x * idx
      })
  }, [xIntervalRatio, widthRatio])

  const yArray = useMemo(() => {
    if (!yIntervalRatio) return []
    return Array(Math.floor(heightRatio / yIntervalRatio))
      .fill(yIntervalRatio)
      .map((y, idx) => {
        return y * idx
      })
  }, [yIntervalRatio, heightRatio])

  return (
    <SVG
      {...args}
      width={width}
      height={height}
      ratio={ratio}
      viewBox={viewbox}
    >
      <g data-testid="AxisRulers">
        {!!xArray.length &&
          xArray.map((x, idx) => (
            <React.Fragment key={idx}>
              <Path
                path={line({ d1: [x, 0], d2: [x, heightRatio] })}
                stroke={
                  zeroRulers && idx === 0
                    ? zeroRulers.lineColor
                    : xRulers?.lineColor
                }
                strokeWidth={
                  zeroRulers && idx === 0
                    ? zeroRulers.lineWidth
                    : xRulers?.lineWidth ?? 1 * ratio
                }
                strokeDasharray={
                  zeroRulers && idx === 0
                    ? "none"
                    : xRulers?.lineType && getListType(xRulers?.lineType, ratio)
                }
              />
              {xRulers?.isValueDisplayed && idx > 0 && (
                <Text
                  x={x}
                  y={-(xRulers?.fontSize ?? 12) * ratio}
                  textAnchor={"middle"}
                  fill={xRulers?.fontColor}
                  fontSize={(xRulers?.fontSize ?? 12) * ratio}
                >
                  {x / ratio}
                </Text>
              )}
            </React.Fragment>
          ))}

        {!!yArray.length &&
          yArray.map((y, idx) => (
            <React.Fragment key={idx}>
              <Path
                path={line({ d1: [0, y], d2: [widthRatio, y] })}
                stroke={
                  zeroRulers && idx === 0
                    ? zeroRulers.lineColor
                    : yRulers?.lineColor
                }
                strokeWidth={
                  zeroRulers && idx === 0
                    ? zeroRulers.lineWidth
                    : yRulers?.lineWidth ?? 1 * ratio
                }
                strokeDasharray={
                  zeroRulers && idx === 0
                    ? "none"
                    : yRulers?.lineType && getListType(yRulers?.lineType, ratio)
                }
              />
              {yRulers?.isValueDisplayed && idx > 0 && (
                <Text
                  x={-10}
                  y={y + 5}
                  fill={yRulers?.fontColor}
                  fontSize={(yRulers?.fontSize ?? 12) * ratio}
                  textAnchor={"end"}
                >
                  {y / ratio}
                </Text>
              )}
            </React.Fragment>
          ))}
      </g>
      {children}
    </SVG>
  )
}
