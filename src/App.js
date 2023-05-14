import React, { useState, useEffect } from 'react';
import './App.css';

const questions = [
  {
    question: 'Qual é a capital do Brasil?',
    options: ['Brasília', 'Rio de Janeiro', 'São Paulo', 'Salvador'],
    correctAnswerIndex: 0
  },
  {
    question: 'Qual é a capital de PE?',
    options: ['Jaboatão', 'Olinda', 'Recife', 'Caruaru'],
    correctAnswerIndex: 2
  },
  {
    question: 'Qual é a fórmula da água?',
    options: ['O2', 'NaCl', 'CO2', 'H2O'],
    correctAnswerIndex: 3
  }
  // Adicione mais perguntas aqui...
];

const App = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [fade, setFade] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [disableOptions, setDisableOptions] = useState(false);

  useEffect(() => {
    setFade(false);
    setSelectedOption(null);
    setDisableOptions(false);
  }, [questionIndex]);

  const handleOptionSelect = (selectedOptionIndex) => {
    setSelectedOption(selectedOptionIndex);
  };

  const handleConfirmClick = () => {
    if (selectedOption === questions[questionIndex].correctAnswerIndex) {
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    }
    setDisableOptions(true);
    setFade(true);
    setTimeout(() => {
      setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
      setDisableOptions(false);
    }, 500);
  };

  return (
    <div className={`App ${fade ? 'fade-out' : ''}`}>
      <div className="container">
        <h1>{questionIndex < questions.length ? `Questão ${questionIndex + 1}` : 'Resultado'}</h1>
        <div className="question">
          {questionIndex < questions.length ? questions[questionIndex].question : `Você acertou ${correctAnswers} de ${questions.length} questões.`}
        </div>
        <div className="options">
          {questionIndex < questions.length && questions[questionIndex].options.map((option, index) => (
            <div
              className={`option ${selectedOption === index ? 'selected' : ''}`}
              key={index}
              onClick={() => handleOptionSelect(index)}
            >
              {option}
            </div>
          ))}
        </div>
        {questionIndex < questions.length && (
          <button
            className="confirm-button"
            onClick={handleConfirmClick}
            disabled={disableOptions || selectedOption === null}
          >
            Confirmar
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
