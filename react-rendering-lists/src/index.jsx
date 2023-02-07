import React from 'react';
import reactDOM from 'react-dom/client';
const container = document.querySelector('#root');
const root = reactDOM.createRoot(container);

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' },
];

function ListPokedex() {
  const listItems = pokedex.map((mon) => <li key={`${mon.name}`} >{mon.number} - {mon.name}</li>);
  return (
    <ul>{listItems}</ul>
  );
}

root.render(
  <ListPokedex />
);
