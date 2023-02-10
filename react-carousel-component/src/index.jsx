import React from 'react';
import reactDOM from 'react-dom/client';
import Carousel from './Carousel';
const container = document.querySelector('#root');
const root = reactDOM.createRoot(container);

const images = [
  {
    id: 0,
    image: '../img/angrycat.jpg',
  },
  {
    id: 1,
    image: '../img/burnout.jpg',
  },
  {
    id: 2,
    image: '../img/sadkitchen.jpg',
  },
  {
    id: 3,
    image: '../img/taxeswhat.jpg',
  },
  {
    id: 4,
    image: '../img/yourfault.jpg',
  },
];

root.render(
  <Carousel images={images} />
);
