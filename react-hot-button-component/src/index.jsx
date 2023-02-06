import React, { useState, useEffect } from 'react';
import reactDOM from 'react-dom/client';
const container = document.querySelector('#root');
const root = reactDOM.createRoot(container);

const colors = {
  0: 'dimgrey',
  3: 'navy',
  6: 'darkmagenta',
  9: 'indianred',
  12: 'lightsalmon',
  15: 'palegoldenrod',
  18: 'mintcream',

};

function CustomButton() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const button = document.querySelector('button');
    button.style.backgroundColor = colors[count];
  });
  return (
    <button onClick={handleClick}>
      🥵
    </button>
  );
}

root.render(
  <CustomButton />
);
