import React from 'react';
import reactDOM from 'react-dom/client';
import AppDrawer from './AppDrawer';
const container = document.querySelector('#root');
const root = reactDOM.createRoot(container);

root.render(
  <AppDrawer />
);
