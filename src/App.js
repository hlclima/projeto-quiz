import React, { useState } from 'react';
import './App.css';


const questions = [
  {
    question: 'Qual é a capital do Brasil?',
    options: ['Brasília', 'Rio de Janeiro', 'São Paulo', 'Salvador'],
    correctAnswerIndex: 0
  },
  {
    question: 'Qual é a capital de PE?',
    options: ['Jaboatao', 'Olinda', 'Recife', 'Caruaru'],
    correctAnswerIndex: 2
  },
  {
    question: 'Qual é a formula da agua?',
    options: ['O2', 'NaCl', 'CO2', 'H2O'],
    correctAnswerIndex: 3
  },
  // Adicione mais perguntas aqui...
];

const App = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleOptionSelect = (selectedOptionIndex) => {
    if (selectedOptionIndex === questions[questionIndex].correctAnswerIndex) {
      setCorrectAnswers(correctAnswers + 1);
    }
    setQuestionIndex(questionIndex + 1);
  };

  return (
    <div className="App">
      {questionIndex < questions.length ? (
        <div className="container">
          <h1>Questão {questionIndex + 1}</h1>
          <div className="question">{questions[questionIndex].question}</div>
          <div className="options">
            {questions[questionIndex].options.map((option, index) => (
              <div
                className="option"
                key={index}
                onClick={() => handleOptionSelect(index)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container">
          <h1>Resultado</h1>
          <div className="result">
            Você acertou {correctAnswers} de {questions.length} questões.
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
