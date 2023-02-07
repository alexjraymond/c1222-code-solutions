import React, { useState } from 'react';
import reactDOM from 'react-dom/client';
const container = document.querySelector('#root');
const root = reactDOM.createRoot(container);

function PasswordField() {
  const [password, setPassword] = useState('');
  if (password.length >= 8) {
    var isGoodEnough = !!password;
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const iconClass = isGoodEnough ? 'fa-check' : 'fa-xmark';
  return (
    <div>
      <input type="password" onChange={handlePassword} value={password}></input>
      <i className={`fa-sharp fa-solid ${iconClass}`}></i>
    </div>
  );
}

root.render(
  <PasswordField />
);
