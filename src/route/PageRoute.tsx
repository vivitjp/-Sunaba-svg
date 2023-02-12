import { BrowserRouter, Routes, Route } from "react-router-dom"
//import { BookDataUnitProvider } from "../context/UseContextUnitBook"
import { menuGroup } from "./List"
import { Layout } from "../layout/Layout"
import styled from "styled-components"
import { Suspense } from "react"

export const PageRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        {menuGroup &&
          Object.entries(menuGroup).map(([_, menus]) => {
            return (
              menus &&
              menus.map((menu) => (
                <Route
                  key={menu.path}
                  path={menu.path}
                  element={
                    <Layout>
                      <Section>
                        <Title>{menu.name}</Title>
                        <Suspense fallback={<div>Loading...</div>}>
                          <menu.element />
                        </Suspense>
                      </Section>
                    </Layout>
                  }
                />
              ))
            )
          })}
      </Routes>
    </BrowserRouter>
  )
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 100%;
`
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  height: 50px;
  font-size: 2rem;
  border-bottom: 2px solid #ccc;
`
