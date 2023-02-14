/* eslint-disable no-unused-vars -- Remove me */
import React, { useState, useEffect, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import readItems from './read.js';

function List() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  console.log('List function ran');
  // Your code here:
  //  - Read the items using `readItems` and update state so the list displays

  useEffect(() => {
    readItems().then((item) => { setItems(item); setIsLoading(false); });

  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
  // <>      {isLoading && <div>Loading...</div> }
    <ul >

      {items.map((item) => <li key={item.id}>{item.id}: {item.name}  </li>)}
    </ul>
  // </>
  );

}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(

  <List />

);
