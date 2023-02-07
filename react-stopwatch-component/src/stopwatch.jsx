import React, { useState } from 'react';

export default function Stopwatch() {
  let [time, setTime] = useState(0);
  let [running, setRunning] = useState(false);
  const [icon, setIcon] = useState('play');

  function resetFace() {
    setTime(0);
  }

  function handleIconClick() {
    clearInterval(running);
    if (icon === 'play') {
      setIcon('pause');
      running = setInterval(() => {
        setTime(time++);
      }, 1000);
    }
    if (icon === 'pause') {
      setIcon('play');
      clearInterval(running);
    }
    setRunning(running);
  }

  return (
    <div className='the-clock'>
      <div className="watch-face" onClick={resetFace}>{time}</div>
      <div className="icon-holder">
        <button onClick={handleIconClick}><i className={`fa-solid fa-${icon}`} type="toggle" ></i></button></div>
    </div>
  );
}
