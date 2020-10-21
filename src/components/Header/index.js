import React from 'react'

import {HeaderContainer} from './styles';

export default function Header({name, setName, setQuestionIndex}) {
  return (
    <HeaderContainer>
      <h1>BVG Ticket Picker</h1>
      <h2>Find the best Berlin ticket for short trips and holiday</h2>
      <div>
        <input type="text" value={name} onChange={(event) => setName(event?.target.value)}/>
        <button onClick={() => setQuestionIndex(0)}>START</button>
      </div>
    </HeaderContainer>
  )
}
