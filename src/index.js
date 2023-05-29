import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const urlParams = new URLSearchParams(window.location.search);
const questionBankParam = urlParams.get('questionBankParam');


ReactDOM.render(
  <App questionBankParam={questionBankParam} />,
  document.getElementById('root')
);
