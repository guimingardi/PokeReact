import React from 'react'
import { CardBody, Title, InfoContainer, Info, InfoBold, CardImg, Button } from './Card.style'

const Infos = [{'title':'tipo', 'value':'elétrico'}, {'title':'geração', 'value':'elétrico'},{'title':'taxa de captura', 'value': '23'}]

const renderCardInfo = () => (
  Infos.map((elm) => (
    <Info>
      <InfoBold>{elm.title}:</InfoBold> {elm.value}
    </Info>
   
  ))
) 

const Card = () => {
  return (
    <CardBody>
      <Title>pikachu</Title>

      <InfoContainer>
        <div>
          {renderCardInfo()}
        </div>
        <CardImg src='' />
      </InfoContainer>

      <Button>P$ 50</Button>
    </CardBody>
  )
}

export default Card