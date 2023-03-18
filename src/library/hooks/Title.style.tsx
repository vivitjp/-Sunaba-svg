import styled from "styled-components"

export const Title = styled.div<{ width?: number }>`
  width: ${({ width }) => `${width ? `${width}px` : "100%"}`};
  font-size: 16px;
  color: ${({ color }) => `${color ?? `var(--main-color)`}`};
  :before {
    content: "■";
    margin-right: 5px;
    color: ${({ color }) => `${color ?? `var(--main-color)`}`};
  }
`
