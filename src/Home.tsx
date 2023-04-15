import styled from "styled-components"

export const Home = () => {
  return <Section>Sunabar React & SVG</Section>
}

const Section = styled.section`
  display: flex;
  flex-direction: row; //column
  justify-content: center;
  align-items: center; //stretch
  width: 100%;
  height: 500px;
  gap: 0.2rem;

  font-size: 5rem;
  color: var(--main-color);

  transition: all 1s;
  opacity: 0.3;

  &:hover {
    opacity: 0;
  }
`
