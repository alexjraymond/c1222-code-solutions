import React, { useState } from 'react';

export default function Stopwatch() {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [activeInterval, setActiveInterval] = useState();

  const isPlaying = !!activeInterval; // a trick to coerce a value to boolean

  function tick() {
    // this is a rare case where setElapsedSeconds(elapsedSeconds + 1) doesnt work
    setElapsedSeconds((prev) => prev + 1);
  }

  function reset() {
    if (isPlaying) return;
    setElapsedSeconds(0);
  }

  function toggleStarted() {
    if (activeInterval) {
      clearInterval(activeInterval);
      setActiveInterval(undefined);
    } else {
      const newInterval = setInterval(tick, 1000);
      setActiveInterval(newInterval);
    }
  }

  const iconClass = isPlaying ? 'fa-pause' : 'fa-play';
  return (
    <div className="stopwatch">
      <div className="watch-face" onClick={reset}>
        <span>{elapsedSeconds}</span>
      </div>
      <i
        onClick={toggleStarted}
      className={`start-stop fas ${iconClass}`} />
    </div>
  );

}
