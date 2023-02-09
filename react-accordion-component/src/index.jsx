import React from 'react';
import reactDOM from 'react-dom/client';
import Accordion from './Accordion';
const container = document.querySelector('#root');
const root = reactDOM.createRoot(container);

const prop = [
  {
    title: 'Hypertext Markup Language',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam possimus voluptatum labore a alias ipsam temporibus, cupiditate mollitia molestias recusandae!',
    id: 0,
  },
  {
    title: 'Cascading Style Sheets',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum laborum, cupiditate eaque praesentium fugit modi magni reiciendis. Cumque nesciunt doloribus quibusdam ex rem alias? Ab voluptatum quidem deleniti adipisci harum amet laborum nobis quisquam! Nemo, recusandae. Ipsam, sint eos! Delectus?',
    id: 1,
  },
  {
    title: 'JavaScript',
    content: 'I like to creep around my home and act like a goblin I don’t know why but I just enjoy doing this. Maybe it’s my way of dealing with stress or something but I just do it about once every week. Generally I’ll carry around a sack and creep around in a sort of crouch-walking position making goblin noises, then I’ll walk around my house and pick up various different “trinkets” and put them in my bag while saying stuff like “I’ll be having that” and laughing maniacally in my goblin voice (“trinkets” can include anything from shit I find on the ground to cutlery or other utensils). The other day I was talking with my neighbours and they mentioned hearing weird noises like what I wrote about and I was just internally screaming the entire conversation. I’m 99% sure they don’t know it’s me but god that 1% chance is seriously weighing on my mind.',
    id: 2,
  },
];

root.render(
  <Accordion prop={prop} />
);
