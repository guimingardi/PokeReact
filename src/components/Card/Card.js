import React, { useState, useEffect} from 'react'
import { CardBody, Title, InfoContainer, Info, InfoBold, CardImg, Button } from './Card.style'


const Card = ({ name, src, type, price, generation, capture }) => {
  
  const [priceNew, setPriceNew] = useState(0)

  useEffect(() => {
    if(price <= 100){
      setPriceNew(10)
    }else if(price > 100 && price <= 200){
      setPriceNew(30)
    }else{
      setPriceNew(50)
    }
  })

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
              <InfoBold>geração:</InfoBold> {generation}
            </Info>

            <Info>
              <InfoBold>taxa de captura:</InfoBold> {capture}
            </Info>
          </div>
          <CardImg src={src} />
        </InfoContainer>
            <Button>P$ {priceNew}</Button>
    </CardBody>
  )
}

export default Card
