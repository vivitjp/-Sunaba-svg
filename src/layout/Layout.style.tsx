import styled from "styled-components"
import { Link } from "react-router-dom"

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: 0;
  min-width: 100%;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
`

export const Header = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #be433b;
  font-size: 2rem;
  color: #fff;
`

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  min-height: calc(100vh - 50px);
`

export const MenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
  min-width: 120px;
  max-width: 120px;
  padding: 5px;
  padding-bottom: 50px;
  background-color: #f3eed5;
`

export const Group = styled.details`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
  width: 100%;
`

export const GroupTitle = styled.summary`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4px;
  width: 100%;
  color: #777;
  background-color: white;
  border: 1px solid white;
  border-left: 5px solid #be433b;
  border-bottom: 1px solid #be433b;
  cursor: pointer;
  :hover {
    border-right: 1px solid #be433b;
    border-top: 1px solid #be433b;
  }
`

export const GroupBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 5px;
`

export const MenuItem = styled(Link)`
  padding: 5px;
  text-decoration: none;
  font-size: 0.8rem;
  color: #777;
  :before {
    content: "■ ";
    color: #777;
  }
  :hover {
    color: #be433b;
  }
`

export const Playground = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  padding: 10px;
  border: 1px solid #eee;
  width: 100%;
  overflow: hidden;
`
