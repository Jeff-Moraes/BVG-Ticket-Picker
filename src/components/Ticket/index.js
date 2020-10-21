import React from 'react'

import { Container } from './styles';

export default function Ticket({name, pickedTicket, setName, setQuestionIndex, setPickedTicket}) {
  console.log({pickedTicket})
  const handleReset = () => {
    setName("")
    setQuestionIndex(null)
    setPickedTicket(null)
  }

  return (
    <Container>
      <h1>Picked Ticket {name}</h1>
      <h2>{pickedTicket.ticketName}</h2>
      <h3>{pickedTicket.quantity}</h3>
      <h3>{pickedTicket.unitPrice}</h3>
      <h3>{pickedTicket.totalValue}</h3>
      <button type="button" onClick={handleReset}>Try again</button>
    </Container>
  )
}
