import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Wrapper, Separator, FallbackImage } from './BuyMenu.style'

const BuyMenu = ({ name, price, src }) => {
  const [purchaseList, setPurchaseList] = useState([])
  const [totalValue, setTotalValue] = useState(0)
  const userMoney = JSON.parse(localStorage.getItem('money'))

  const addToPurchaseList = (src, price) => {
    const newList = [...purchaseList, src]
    setPurchaseList(newList)

    setTotalValue(totalValue + price)
  }

  return (
    <Wrapper>
      <p>pokémon selecionado</p>
      {src ?
        <img alt='seila' src={src}/>
        :
        <FallbackImage src="./img/pokemon.svg" />
      }
      <p>nome: {name}</p>
      <p>valor: P$ {price}</p>
      <Separator />
      <p>Saldo atual: P$ {userMoney}</p>
      <Separator />
      <button type='button' onClick={() => addToPurchaseList(src, price)}>Adicionar</button>
      <p>pokémons selecionados</p>
      <div>
        {purchaseList.map(item => (
          <img alt='seila' src={item}/>
        ))}
      </div>
      <Separator />
      <p>Valor total: P$ {totalValue}</p>
      <Link to={{
        pathname: "/checkout",
        state: { totalValue }
      }}>
        <button disabled={!(userMoney >= totalValue)} type='button'>Finalizar</button>
      </Link>
    </Wrapper>
  )
}

export default BuyMenu