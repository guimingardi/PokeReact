import React from 'react'
import { NavBody, Nav, NavList, NavItem, NavLink } from './Navbar.style'

const navItens = [{'text':'comprar'}, {'text':'perfil'}, {'text':'carrinho'}]
const renderNavItem = () => (
  navItens.map((elm) => (
    <NavItem>
      <NavLink>{elm.text}</NavLink>
    </NavItem>
  ))
) 

const Navbar = () => (  
  <NavBody>
    <img src="./img/nav-brand.png" />

    <Nav>
      <NavList>
        {renderNavItem()}
      </NavList>
    </Nav>
  </ NavBody>
)

export default Navbar