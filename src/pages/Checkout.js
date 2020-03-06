import React, { useState } from 'react'

const Checkout = ({ location: { state } }) => {
  const [userMoney, setUserMoney] = useState(localStorage.getItem('money'))

  const checkout = () => {
    const newUserMoney = userMoney - state.totalValue
    localStorage.setItem('money', newUserMoney)
    setUserMoney(newUserMoney)
  }

  return (
    <>
      <p>Confirma a compra?</p>
      <p>Total da compra: P$ {state.totalValue}</p>
      <p>Carteira: P$ {userMoney}</p>
      <button type='button' onClick={() => checkout()}>Aceito!</button>
    </>
  )
}

export default Checkout