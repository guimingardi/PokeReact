import React from 'react'
import { CardBody, Title, InfoContainer, Info, InfoBold, CardImg, Button } from './Card.style'


const Card = ({ name, src, type, price, generation, capture }) => {
  return (
    <CardBody>
      <Title>{ name }</Title>
        <InfoContainer>
          <div>
            <Info>
              <InfoBold>tipo: </InfoBold>
              {type.map((elm) => {
                return (
                  <span>{elm.type.name} </span>
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
      <Button>P$ {price}</Button>
    </CardBody>
  )
}

export default Card