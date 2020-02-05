import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,900&display=swap');

  html{
    scroll-behavior: smooth;
  }

  body{
    font-family: 'Montserrat', sans-serif;
    background-color: #F7F7EB;
  }

  button{
    font-family: 'Montserrat', sans-serif;
    color: white;
    background-color: #334A52;
  }

`

const Main = styled.main`
  min-height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <Main>
      <GlobalStyle />
      {children}
    </Main>
  )
}

export default Layout