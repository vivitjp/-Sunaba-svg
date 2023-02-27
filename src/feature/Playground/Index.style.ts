import styled from "styled-components"

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 600px;
  padding: 10px;
`

type DivOption = {
  width?: number
  border?: string
  padding?: number
}

export const Column = styled.div<DivOption>`
  width: ${({ width }) => `${width ? `${width}px` : "100%"}`};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  border: ${({ border }) => `${border ? `1px solid ${border};` : "none"}`};
  padding: ${({ padding }) => `${padding ? `${padding}px` : "5px"}`};
`

export const Row = styled.div<DivOption>`
  width: ${({ width }) => `${width ? `${width}px` : "100%"}`};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  border: ${({ border }) => `${border ? `1px solid ${border};` : "none"}`};
  padding: ${({ padding }) => `${padding ? `${padding}px` : "5px"}`};
`

export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  padding: 0.4rem;
  color: #555;
  font-size: 1rem;
  font-weight: 500;
  font-family: sans-serif; /* monospace */
`

export const SVGContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px;
  box-shadow: 2px 2px 10px #aaa;
`

export const Div = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  color: #777;
  font-size: 1.2rem;
  font-family: sans-serif; /* sans-serif, monospace */
`

export const Margin = styled.input.attrs({ type: "number" })`
  padding: 0.2rem;
  width: 100px;
  height: 40px;
  color: grey;
  background-color: white;
  border: 1px solid #aaa;
  border-radius: 5px;
  text-align: center;
`

export const TextArea = styled.textarea`
  width: 500px;
  height: 100%;
  padding: 5px;
  border: 1px solid #aaa;
  background-color: white;
  border-radius: 5px;
  color: #777;
  font-size: 1.2rem;
  font-family: monospace;
  line-height: 1.4rem;
  resize: none;
`

export const Button = styled.button`
  width: 100px;
  height: 40px;
  padding: 10px;
  border: none;
  border: 1px solid #aaa;
  background-color: white;
  border-radius: 5px;
  text-align: center;
  &:hover {
    background-color: #eee;
  }
  box-shadow: 0 0 5px #bbb;
`

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  padding: 0;
  width: 30px;
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

export const GRAY = styled.span`
  color: #777;
`
