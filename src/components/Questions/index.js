import React, { useState } from 'react'

import questions from '../../assets/questions.js';
import { findBestTicket } from '../../pickTicket.js';
import { Container, QuestionContainer } from './styles';

export default function Questions({name, questionIndex, setQuestionIndex}) {
  const [query, setQuery] = useState({
    persons: 1,
    days: 1,
    rides: 1,
    zone: "AB",
    short: false,
  });

  const handleChange = event => {
    const { name, value, checked } = event.target;
    if(name === "short") setQuery({...query, short: checked});
    else if(name === "zone") setQuery({...query, zone: value});
    else setQuery({...query, [name]: Number(value)});
  }

  const handleNextQuestion = () => {
    setQuestionIndex(questionIndex+1);
  }

  const handleSubmitForm = (event) => {
    event.preventDefault();
    let pickedTicket = findBestTicket(query, true);
    console.log({query}, {pickedTicket})
  }

  return (
    <Container>
      <h1>Welcome {name}</h1>
      <form onSubmit={handleSubmitForm}>
        {questions.map(({question, options, info, key, type}, index) => (
          questionIndex === index && (
          <QuestionContainer key={key}>
            <h2>{index+1}</h2>
            <div>
              <h3>{question}</h3>
              <div>
                {options ? (
                  <select name={key} id={key} onChange={(event) => handleChange(event)}>
                    {options.map(option => (
                      <option key={option} name={key} value={option}>{option}</option>
                    ))}
                  </select>
                ) : (
                  <>
                    <input type={type} name={key} value={query[key]} onChange={(event) => handleChange(event)}/>
                    {info && <span>{info}</span>}
                  </>
                )}
                {index < questions.length-1
                  ? <button type="button" onClick={handleNextQuestion}>next</button>
                  : <button type="submit">finish</button>
                }
              </div>
            </div>
          </QuestionContainer>
        )))}
      </form>
    </Container>
  )
}
