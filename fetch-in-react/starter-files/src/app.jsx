/* eslint-disable no-unused-vars -- Remove this line. */
import React, { useState, useEffect } from 'react';
import UserList from './user-list';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  /* your code here (hint: useEffect) */

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((user) => {
        setUsers(user);
      })
      .catch((error) => {
        console.error(error);
        setErr(true);
        setErrMsg(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return isLoading
    ? <p>Loading...</p>
    : err
      ? <div>something bad happened {errMsg}</div>
      : <UserList users={users} />;
}
