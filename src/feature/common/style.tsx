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
  border?: string
  padding?: number
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

type Div = {
  width?: number
  height?: number
  border?: string
}

export const Div = styled.div<Div>`
  width: ${({ width }) => `${width ? `${width}px` : "100%"}`};
  height: ${({ height }) => `${height ? `${height}px` : "100%"}`};
  border: ${({ border }) => `1px solid ${border ? `${border}` : "#ddd"}`};
  padding: 0;
  margin: 0;
  overflow: hidden;
`

export const GRAY = styled.span`
  color: #777;
`
export const Code = styled.pre<{ align?: string }>`
  text-align: ${({ align }) => `${align ?? "center"}`};
  width: 100%;
  color: #777;
  padding: 6px;
  margin: 0;
  font-size: 1.1rem;
  font-family: monospace;
  overflow: auto;
`

export const S = styled.span`
  color: Firebrick;
  font-size: 1.1rem;
  font-family: monospace;
`
