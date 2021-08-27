import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// App.js 파일을 불러옴

// App.js에 #root 내용을 render함
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
