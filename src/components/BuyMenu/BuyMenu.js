import React from 'react'
import { Wrapper } from './BuyMenu.style'

const BuyMenu = ({ name, type, price, scr }) => (
  <Wrapper>

<h1>{name}</h1>
<h2>{type}</h2>
<h3>{price}</h3>
<img src={scr}/>


  </Wrapper>
)

export default BuyMenu