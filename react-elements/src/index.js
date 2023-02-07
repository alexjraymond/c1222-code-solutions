import React from 'react';
import ReactDOM from 'react-dom/client';

const newH1 = React.createElement(
  'h1',
  null,
  ['Hello, React!']
);

console.log(newH1);

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);

root.render(newH1);
