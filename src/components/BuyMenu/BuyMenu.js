import React from 'react'
import { Wrapper } from './BuyMenu.style'

const BuyMenu = ({ name, type, price }) => (
  <Wrapper>

<h1>{name}</h1>
<h2>{type}</h2>
<h3>{price}</h3>

  </Wrapper>
)

export default BuyMenu