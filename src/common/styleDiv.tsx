import styled, { CSSProperties } from "styled-components"

export const Base = styled.div<CSSProperties & { shadow?: number }>`
  width: ${({ width = "auto" }) =>
    `${typeof width === "number" ? `${width}px` : `${width}`}`};
  height: ${({ height = "auto" }) =>
    `${typeof height === "number" ? `${height}px` : `${height}`}`};

  padding: ${({ padding = "auto" }) =>
    `${typeof padding === "number" ? `${padding}px` : `${padding}`}`};

  padding-left: ${({ paddingLeft = "auto" }) =>
    `${
      typeof paddingLeft === "number" ? `${paddingLeft}px` : `${paddingLeft}`
    }`};

  padding-right: ${({ paddingRight = "auto" }) =>
    `${
      typeof paddingRight === "number" ? `${paddingRight}px` : `${paddingRight}`
    }`};
  padding-top: ${({ paddingTop = "auto" }) =>
    `${typeof paddingTop === "number" ? `${paddingTop}px` : `${paddingTop}`}`};
  padding-bottom: ${({ paddingBottom = "auto" }) =>
    `${
      typeof paddingBottom === "number"
        ? `${paddingBottom}px`
        : `${paddingBottom}`
    }`};

  margin: ${({ margin = 0 }) =>
    `${typeof margin === "number" ? `${margin}px` : `${margin}`}`};
  margin-top: ${({ marginTop = 0 }) =>
    `${typeof marginTop === "number" ? `${marginTop}px` : `${marginTop}`}`};

  font-size: ${({ fontSize = "inherit" }) =>
    `${typeof fontSize === "number" ? `${fontSize}px` : `${fontSize}`}`};
  text-align: ${({ textAlign = "inherit" }) => `${textAlign}`};

  box-shadow: ${({ shadow }) =>
    `${shadow ? `2px 2px ${shadow}px #ccc;` : "none"}`};

  border: ${({ border }) => `1px solid ${border ? `${border}` : "none"}`};

  overflow: hidden;
`

export const Div = styled(Base)``

export const Section = styled(Base)`
  display: flex;
  width: ${({ width = "750px" }) =>
    `${typeof width === "number" ? `${width}px` : `${width}`}`};

  flex-direction: ${({ flexDirection = "column" }) => `${flexDirection}`};
  gap: ${({ gap = 10 }) => `${gap}px`};
  overflow: ${({ overflow = "auto" }) => `${overflow}`};
`

export const Column = styled(Base)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${({ gap = 10 }) => `${gap}px`};
  width: ${({ width }) => `${width ? `${width}px` : "100%"}`};
  border-radius: ${({ borderRadius = 0 }) => `${borderRadius}px`};
`

export const Row = styled(Base)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${({ gap = 10 }) => `${gap}px`};
`

export const DivShadow = styled(Base)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 2px 2px 10px #ccc;
  font-size: ${({ fontSize }) => `${fontSize ? `${fontSize}px` : "inherit"}`};
`

export const DivPre = styled.div<CSSProperties>`
  width: ${({ width }) => `${width ? `${width}px` : "100%"}`};
  border: ${({ border }) => `1px solid ${border ? `${border}` : "none"}`};
  padding: ${({ padding = 5 }) => `${padding}px`};
  margin: 0;
  font-family: monospace;
  overflow: auto;
  font-size: ${({ fontSize }) => `${fontSize ? `${fontSize}px` : "inherit"}`};
`

export const Code = styled.pre<CSSProperties & { align?: string }>`
  text-align: ${({ align = "left" }) => `${align}`};
  width: ${({ width }) => `${width ? `${width}px` : "100%"}`};
  min-height: ${({ minHeight }) => `${minHeight ? `${minHeight}px` : "auto"}`};
  padding: ${({ padding = 5 }) => `${padding}px`};
  margin: 0;
  font-size: ${({ fontSize }) => `${fontSize ? `${fontSize}px` : "inherit"}`};
  font-family: monospace;
  overflow: auto;
`

export const S = styled.span<CSSProperties>`
  color: var(--main-color);
  font-size: ${({ fontSize }) => `${fontSize ? `${fontSize}px` : "inherit"}`};
  font-family: monospace;
`

const NumberRange = ({
  step,
  range: [min, max],
  value,
  onChange,
  ...args
}: {
  step: number
  range: [number, number]
  value: number
  onChange: React.ChangeEventHandler<HTMLInputElement>
}) => {
  return (
    <input
      {...args}
      onChange={onChange}
      type="range"
      step={`${step}`}
      min={min}
      max={max}
      value={value}
    />
  )
}

export const Range = styled(NumberRange)<CSSProperties>`
  width: ${({ width = 200 }) => `${width ? `${width}px` : "100%"}`};
  height: 36px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.2rem;
  text-align: center;
  color: var(--main-color);
`
