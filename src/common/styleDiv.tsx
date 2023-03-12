import styled, { CSSProperties } from "styled-components"

export const Section = styled.section<CSSProperties>`
  display: flex;
  width: ${({ width }) => `${width ? `${width}px` : "100%"}`};
  flex-direction: ${({ flexDirection = "column" }) => `${flexDirection}`};
  border: ${({ border }) => `${border ? `1px solid ${border}` : "none"}`};
  padding: ${({ padding = 5 }) => `${padding}px`};
  padding-bottom: ${({ paddingBottom, padding = 5 }) =>
    `${paddingBottom ? `${paddingBottom}px` : `${padding}px`}`};
  gap: ${({ gap = 10 }) => `${gap}px`};
  overflow: ${({ overflow = "auto" }) => `${overflow}`};
`

export const Column = styled.div<CSSProperties & { shadow?: number }>`
  width: ${({ width }) => `${width ? `${width}px` : "100%"}`};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${({ gap = 10 }) => `${gap}px`};
  border: ${({ border }) => `${border ? `1px solid ${border}` : "none"}`};
  padding: ${({ padding = 5 }) => `${padding}px`};
  border-radius: 5px;
  box-shadow: ${({ shadow }) =>
    `${shadow ? `2px 2px ${shadow}px #ccc;` : "none"}`};
  font-size: ${({ fontSize }) => `${fontSize ? `${fontSize}px` : "inherit"}`};
`

export const Row = styled.div<CSSProperties>`
  width: ${({ width }) => `${width ? `${width}px` : "100%"}`};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${({ gap = 10 }) => `${gap}px`};
  border: ${({ border }) => `${border ? `1px solid ${border}` : "none"}`};
  padding: ${({ padding = 5 }) => `${padding}px`};
  border-radius: 5px;
  font-size: ${({ fontSize }) => `${fontSize ? `${fontSize}px` : "inherit"}`};
`

export const Div = styled.div<CSSProperties>`
  width: ${({ width }) => `${width ? `${width}px` : "auto"}`};
  height: ${({ height }) => `${height ? `${height}px` : "auto"}`};
  border: ${({ border }) => `1px solid ${border ? `${border}` : "none"}`};
  font-size: ${({ fontSize }) => `${fontSize ? `${fontSize}px` : "inherit"}`};
  padding: ${({ padding = 5 }) => `${padding}px`};
  margin: 0;
  margin-top: ${({ marginTop = 0 }) => `${marginTop ? `${marginTop}px` : 0}`};
  overflow: hidden;
`

export const DivShadow = styled.div<CSSProperties>`
  width: ${({ width }) => `${width ? `${width}px` : "auto"}`};
  height: ${({ height }) => `${height ? `${height}px` : "auto"}`};
  border: ${({ border }) => `1px solid ${border ? `${border}` : "none"}`};
  padding: ${({ padding = 5 }) => `${padding}px`};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 2px 2px 10px #bbb;
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
