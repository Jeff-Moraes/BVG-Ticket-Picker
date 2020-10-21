import React from 'react'

import logoBVG from '../../assets/images/bvg-logo.png';
import { Container, TicketContainer } from './styles';

export default function Ticket({pickedTicket, setName, setQuestionIndex, setPickedTicket}) {
  const handleReset = () => {
    setName("")
    setQuestionIndex(null)
    setPickedTicket(null)
  }

  return (
    <Container>
      <h1>Picked Ticket</h1>
      <div>
        <TicketContainer>
          <img src={logoBVG} alt="Logo BVG"/>
          <div>
            <div>
              <h3>{pickedTicket.quantity}</h3>
              <span>{pickedTicket.quantity > 1 ? "units" : "unit"}</span>
            </div>
            <h2>{pickedTicket.ticketName}</h2>
          </div>
          <span>Price per unit</span>
          <h4>€{pickedTicket.unitPrice}</h4>
        </TicketContainer>
        {
          pickedTicket.remainingDaysTicket &&
          <>
          <span>+</span>
          <TicketContainer>
            <img src={logoBVG} alt="Logo BVG"/>
            <div>
              <div>
                <h3>{pickedTicket.remainingDaysTicket.quantity}</h3>
                <span>{pickedTicket.remainingDaysTicket.quantity > 1 ? "units" : "unit"}</span>
              </div>
              <h2>{pickedTicket.remainingDaysTicket.ticketName}</h2>
            </div>
            <span>Price per unit</span>
            <h4>€{Number(pickedTicket.remainingDaysTicket.unitPrice).toFixed(2)}</h4>
          </TicketContainer>
          </>
        }
      </div>
      <p>Total price</p>
      <h5>€{Number(pickedTicket.totalValue).toFixed(2)}</h5>
      <span>Always remember to validate your ticket before commencing your journey.</span>
      <button type="button" onClick={handleReset}>Try again</button>
    </Container>
  )
}
