import styled from "styled-components"

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 600px;
  padding: 10px;
`

type Props = {
  width?: number
  height?: number
  minHeight?: number
  border?: string
  fontSize?: number
  padding?: number
  align?: string
}

export const Column = styled.div<Props>`
  width: ${({ width }) => `${width ? `${width}px` : "100%"}`};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  border: ${({ border }) => `${border ? `1px solid ${border};` : "none"}`};
  padding: ${({ padding }) => `${padding ? `${padding}px` : "5px"}`};
  border-radius: 5px;
`

export const Row = styled.div<Props>`
  width: ${({ width }) => `${width ? `${width}px` : "100%"}`};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  border: ${({ border }) => `${border ? `1px solid ${border};` : "none"}`};
  padding: ${({ padding }) => `${padding ? `${padding}px` : "5px"}`};
  border-radius: 5px;
`

export const Div = styled.div<Props>`
  width: ${({ width }) => `${width ? `${width}px` : "auto"}`};
  height: ${({ height }) => `${height ? `${height}px` : "auto"}`};
  border: ${({ border }) => `1px solid ${border ? `${border}` : "none"}`};
  font-size: ${({ fontSize }) => `${fontSize ? `${fontSize}px` : "16px"}`};
  padding: 0;
  margin: 0;
  overflow: hidden;
`

export const DivShadow = styled.div<Props>`
  width: ${({ width }) => `${width ? `${width}px` : "auto"}`};
  height: ${({ height }) => `${height ? `${height}px` : "auto"}`};
  border: ${({ border }) => `1px solid ${border ? `${border}` : "none"}`};
  padding: ${({ padding }) => `${padding ? `${padding}px` : "5px"}`};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 2px 2px 10px #bbb;
`

export const Code = styled.code<Props>`
  text-align: ${({ align = "center" }) => `${align}`};
  width: 100%;
  min-height: ${({ minHeight }) => `${minHeight ? `${minHeight}px` : "auto"}`};
  padding: 6px;
  margin: 0;
  font-size: ${({ fontSize }) => `${fontSize ? `${fontSize}px` : "12px"}`};
  font-family: monospace;
  overflow: auto;
`

export const S = styled.span`
  color: var(--main-color);
  font-size: 1.1rem;
  font-family: monospace;
`
