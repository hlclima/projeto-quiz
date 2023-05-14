import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importar BrowserRouter, Routes e Route
import './index.css';
import App from './App';
import { questionsProva1, questionsProva2, questionsProva3 } from './questionsBank';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/prova1" element={<App questions={questionsProva1} />} />
      <Route path="/prova2" element={<App questions={questionsProva2} />} />
      <Route path="/prova3" element={<App questions={questionsProva3} />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
