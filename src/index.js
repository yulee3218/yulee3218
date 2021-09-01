import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { applyMiddleware, compose, createStore } from 'redux';
// import { Provider } from 'react-redux';
// import logger from 'redux-logger';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './reducers/index';
import App from './components/App.js';
import './index.css';


ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);