import React, { useState } from 'react';
import reactDOM from 'react-dom/client';
const container = document.querySelector('#root');
const root = reactDOM.createRoot(container);

// const colors = {
//   0: 'dimgrey',
//   3: 'navy',
//   6: 'darkmagenta',
//   9: 'indianred',
//   12: 'lightsalmon',
//   15: 'palegoldenrod',
//   18: 'mintcream',

// };

function CustomButton() {
  const [count, setCount] = useState(0);
  function getColorName() {
    if (count < 4) return 'grey';
    if (count < 7) return 'navy';
    if (count < 10) return 'darkmagenta';
    if (count < 13) return 'indianred';
    if (count < 16) return 'lightsalmon';
    if (count < 19) return 'palegoldenrod';
    return 'mintcream';
  }
  const colorNumber = getColorName();

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <button
      onClick={handleClick}
      className={`button-${colorNumber}`}>
      🥵
    </button>
  );
}

root.render(
  <CustomButton />
);
