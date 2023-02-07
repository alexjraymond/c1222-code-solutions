import React from 'react';
import reactDOM from 'react-dom/client';
import ToggleSwitch from './toggle-switch.jsx';

const container = document.querySelector('#root');
const root = reactDOM.createRoot(container);

root.render(
  <ToggleSwitch />
);
