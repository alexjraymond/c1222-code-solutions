import React, { useState } from 'react';
import reactDOM from 'react-dom/client';
const container = document.querySelector('#root');
const root = reactDOM.createRoot(container);

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = (event) => {
    event.preventDefault();
    alert(`your username is ${username}, and your password is ${password}`);
    console.log(username, password);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='form-username' >
        <input name="username" placeholder="username" id="form-username" onChange={handleUsernameChange} value={username} />
      </label>
      <label htmlFor='form-password' >
        <input name="password" placeholder="password" id="form-password" onChange={handlePasswordChange} value={password} />
      </label>
      <button type='submit' >Sign Up</button>
    </form>
  );
}

root.render(
  <RegistrationForm />
);
