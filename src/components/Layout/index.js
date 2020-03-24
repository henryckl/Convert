import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"

import Header from "../Header"

import { Main } from "./styles"

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

  html,
  body,
  html * {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <GlobalStyle theme="purple" />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
