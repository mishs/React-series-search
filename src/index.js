import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// const greetings = <h1>Hey</h1>;
// JSX

const getCurrentDate = () => {
  const date = new Date();
  return date.toDateString();
};
// JSX- uses curly brackets (inside HTML too)
const greetings = <h1>Hi, today is: {getCurrentDate()}</h1>;
ReactDOM.render(greetings, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
