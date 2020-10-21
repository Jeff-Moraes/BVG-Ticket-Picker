import React, { useState } from 'react'

import questions from '../../assets/questions';
import { Container, QuestionContainer } from './styles';

export default function Questions({name, questionIndex, setQuestionIndex}) {
  const [query, setQuery] = useState({});

  const handleChange = (key, event) => {
    const { name, value } = event.target;
    setQuery({...query, [name]: value})
  }

  const handleNextQuestion = () => {
    setQuestionIndex(questionIndex+1);
  }

  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log("handleSubmitForm")
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
                  <select name={key} id={key}>
                    {options.map(option => (
                      <option key={option} name={key} value={query[key]} onChange={(event) => handleChange(key, event)}>{option}</option>
                    ))}
                  </select>
                ) : (
                  <>
                    <input type={type} name={key} value={query[key]} onChange={(event) => handleChange(key, event)}/>
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
