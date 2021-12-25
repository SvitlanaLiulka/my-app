import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Chat from './components/chat/chat';


ReactDOM.render(
  <React.StrictMode>
    <Chat url="http://localhost:8000/data"/>
  </React.StrictMode>,
  document.getElementById('root')
);

