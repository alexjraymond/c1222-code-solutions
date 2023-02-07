import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [dark, setDark] = useState(false);
  const handleClick = () => {
    setDark(!dark);
  };
  function getButtonMode() {
    if (dark === false) return 'grey';
    if (dark === true) return 'green';
  }
  return (
    <div className={`button-house button-${getButtonMode()}`} onClick={handleClick}>
      <button type="button" role="switch" onClick={handleClick} id="button" className={`button ball-${getButtonMode()}`} />
      <span className='on-off'>{dark ? 'on' : 'off' }</span>
    </div>
  );
};

export default ToggleSwitch;
