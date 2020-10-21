import React, { useState } from 'react';

import Header from './components/Header/index.js';
import Questions from './components/Questions/index.js';

function App() {
  const [name, setName] = useState("");
  const [questionIndex, setQuestionIndex] = useState(null);

  return (
    <>
      {questionIndex === null
        ? <Header
          name={name}
          setName={setName}
          setQuestionIndex={setQuestionIndex}
        />
        : <Questions
          name={name}
          questionIndex={questionIndex}
          setQuestionIndex={setQuestionIndex}
        />
      }  
    </>
  );
}

export default App;
