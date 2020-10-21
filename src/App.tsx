import React, { useState } from 'react';

import Header from './components/Header/index.js';
import Questions from './components/Questions/index.js';
import Ticket from './components/Ticket/index.js';

function App() {
  const [name, setName] = useState("");
  const [questionIndex, setQuestionIndex] = useState(null);
  const [pickedTicket, setPickedTicket] = useState(null);

  return (
    <>
      {questionIndex === null && <Header
          name={name}
          setName={setName}
          setQuestionIndex={setQuestionIndex}
        />
      }
      {(questionIndex !== null && pickedTicket === null) && <Questions
          name={name}
          questionIndex={questionIndex}
          setQuestionIndex={setQuestionIndex}
          setPickedTicket={setPickedTicket}
        />
      }
      {pickedTicket &&
        <Ticket
          pickedTicket={pickedTicket}
          setName={setName}
          setQuestionIndex={setQuestionIndex}
          setPickedTicket={setPickedTicket}
        />
      }
    </>
  );
}

export default App;
