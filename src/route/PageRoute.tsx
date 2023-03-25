import { BrowserRouter, Routes, Route } from "react-router-dom"
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
                    <Layout data-testid="layout">
                      <Section data-testid="layout-section">
                        <Title data-testid="layout-title">{menu.name}</Title>
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
  gap: 20px;
  width: 100%;
`
const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.2rem;
  padding-left: 1rem;
  height: 50px;
  font-size: 2rem;
  font-weight: 300;
  border-bottom: 1px solid var(--main-color);
  color: var(--main-color);
`
