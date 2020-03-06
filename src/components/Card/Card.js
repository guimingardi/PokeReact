import React, { useState, useEffect } from 'react'
import { CardBody, Title, InfoContainer, Info, InfoBold, CardImg, Button } from './Card.style'


const Card = ({ name, src, type, price, purchasePokemon }) => {
  const [newPrice, setNewPrice] = useState(null)
  const [species, setSpecies] = useState({})

  const calculatePrice = () => {
    if (price <= 100) {
      setNewPrice(10)
    } else if (price <= 200) {
      setNewPrice(20)
    } else {
      setNewPrice(30)
    }
  }

  useEffect(() => {
    calculatePrice()
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
      .then(res => res.json())
      .then(res => setSpecies({
        generation: res.generation.name,
        captureRate: res.capture_rate
      }))
  }, [])

  return (
    <CardBody>
      <Title>{ name }</Title>
        <InfoContainer>
          <div>
            <Info>
              <InfoBold>tipo: </InfoBold>
              {type.map((elm) => {
                const { type } = elm
                return (
                  <span>{ type.name } </span>
                )
              })}
            </Info>

            <Info>
              {species.generation &&
                <InfoBold>geração: {species.generation.replace(/generation-i/g, 'Primeira')}</InfoBold>
              }
            </Info>

            <Info>
              <InfoBold>taxa de captura:</InfoBold> {species.captureRate}
            </Info>
          </div>
          <CardImg src={src} />
        </InfoContainer>
          <Button onClick={() => purchasePokemon(name, newPrice, src)}>P$ {newPrice}</Button>
    </CardBody>
  )
}

export default Card