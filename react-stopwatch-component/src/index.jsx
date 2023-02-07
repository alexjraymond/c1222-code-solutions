import React from 'react';
import reactDOM from 'react-dom/client';
import Stopwatch from './stopwatch.jsx';
const container = document.querySelector('#root');
const root = reactDOM.createRoot(container);

root.render(
  <Stopwatch />
);
