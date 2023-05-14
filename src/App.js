import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    question: 'Qual é a capital do Brasil?',
    options: ['Brasília', 'Rio de Janeiro', 'São Paulo', 'Salvador'],
    correctAnswerIndex: 0,
  },
  {
    question: 'Qual é a capital de PE?',
    options: ['Jaboatão', 'Olinda', 'Recife', 'Caruaru'],
    correctAnswerIndex: 2,
  },
  {
    question: 'Qual é a fórmula da água?',
    options: ['O2', 'NaCl', 'CO2', 'H2O'],
    correctAnswerIndex: 3,
  },
  // Adicione mais perguntas aqui...
];

const App = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(new Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (selectedOptionIndex) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = selectedOptionIndex;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  if (showResult) {
    // Contar as respostas corretas
    let correctAnswers = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswerIndex) {
        correctAnswers++;
      }
    });

    return (
      <div className="App">
        <div className="container">
          <h1>Resultado</h1>
          <div className="result">
            Você acertou {correctAnswers} de {questions.length} questões.
          </div>
          <div className="answer-summary">
            <h2>Respostas:</h2>
            {questions.map((question, index) => (
              <p key={index}>
                <strong>{question.question}</strong>
                <br />
                Sua resposta: {question.options[answers[index]]}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Questão {questionIndex + 1}</h1>
        <div className="question">{questions[questionIndex].question}</div>
        <div className="options">
          {questions[questionIndex].options.map((option, index) => (
            <div
              className={`option ${answers[questionIndex] === index ? 'selected' : ''}`}
              key={index}
              onClick={() => handleOptionSelect(index)}
            >
              {option}
            </div>
          ))}
        </div>
        <div className="navigation-buttons">
          {questionIndex > 0 && (
            <button onClick={() => setQuestionIndex(questionIndex - 1)}>Anterior</button>
          )}
          {questionIndex < questions.length - 1 && (
            <button onClick={() => setQuestionIndex(questionIndex + 1)}>Próxima</button>
          )}
          {questionIndex === questions.length - 1 && (
            <button onClick={handleSubmit}>Submeter</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
