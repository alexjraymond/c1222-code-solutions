import React from 'react';
import reactDOM from 'react-dom/client';
const container = document.querySelector('#root');
const root = reactDOM.createRoot(container);

function CustomButton() {
  return (
    <button>Click Me!</button>
  );
}

root.render(
  <CustomButton />
);
