import React from "react"
import { Menu, menuGroup } from "../route/List"
import {
  Body,
  Group,
  GroupBody,
  GroupTitle,
  Header,
  MenuItem,
  MenuNav,
  Playground,
  Section,
} from "./Layout.style"

//------------------------------
// Main
//------------------------------
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Section data-testid="layout">
      <Header>Sunabar React & SVG</Header>
      <Body data-testid="body">
        <MenuNav data-testid="menu">
          {Object.entries(menuGroup).map((group) => (
            <MenuGroup key={group[0]} group={group} />
          ))}
        </MenuNav>
        <Playground data-testid="playground">{children}</Playground>
      </Body>
    </Section>
  )
}

const MenuGroup = ({ group: [title, menus] }: { group: [string, Menu[]] }) => {
  return (
    <Group open>
      <GroupTitle data-testid="group-title">{title}</GroupTitle>
      <>
        {!!menus.length && (
          <GroupBody>
            {menus.map((menu) => (
              <MenuItem key={menu.name} to={menu.path}>
                {menu.name}
              </MenuItem>
            ))}
          </GroupBody>
        )}
      </>
    </Group>
  )
}
