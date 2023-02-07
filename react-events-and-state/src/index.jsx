
import React, { useState } from 'react';
import reactDOM from 'react-dom/client';
const container = document.querySelector('#root');
const root = reactDOM.createRoot(container);

const CustomButton = ({ text }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button onClick={handleClick} >{isClicked ? 'no' : text}</button>
  );
};

const element = (
  <div>
    <CustomButton text="React!" />
  </div>
);

root.render(element);
