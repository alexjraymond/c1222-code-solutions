import React, { useState } from 'react';
import reactDOM from 'react-dom/client';
const container = document.querySelector('#root');
const root = reactDOM.createRoot(container);

function PasswordField() {
  const [password, setPassword] = useState('');
  const isGoodEnough = password.length >= 8;

  const passwordHelper = () => {
    if (password.length === 0) {
      return <span className='red-text'>a password is required</span>;
    } if (password.length <= 7) {
      return <span className='red-text'>password too short</span>;
    } if (password.length > 7) {
      return '';
    }
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const iconClass = isGoodEnough ? 'fa-check green-text' : 'fa-xmark red-text';

  return (
    <div>
      <input type="password" onChange={handlePassword} value={password}></input>
      <i className={`fa-sharp fa-solid ${iconClass}`}></i>
      <p >{passwordHelper()}</p>
    </div>
  );
}

root.render(
  <PasswordField />
);
