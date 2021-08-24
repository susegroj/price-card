/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { PriceCard } from './components';

import './styles/_main.scss';

const cards = [
  {
    key: 'basic',
    price: 500,
    name: 'Básico',
    description: 'Comienza a aprender y ve contenido nuevo cada mes.',
    best: false,
    benefits: [1],
  },
  {
    key: 'middle',
    price: 700,
    name: 'Intermedio',
    description: 'Comienza a aprender y ve contenido nuevo cada mes.',
    best: false,
    benefits: [1, 2],
  },
  {
    key: 'pro',
    price: 1000,
    name: 'Profesional',
    description: 'Comienza a aprender y ve contenido nuevo cada mes.',
    best: true,
    benefits: [1, 2, 3, 4],
  },
  {
    key: 'pro+',
    price: 1200,
    name: 'Profesional +',
    description: 'Comienza a aprender y ve contenido nuevo cada mes.',
    best: false,
    benefits: [1, 2, 3, 4, 5],
  },
];

export default function App() {
  return (
    <main className="app">
      <h1 className="app-title">Planes y precios</h1>
      <p className="app-description">
        Elige el plan que más te convenga y comienza a aprender hoy mismo.
      </p>
      <div className="app-cards-wrapper">
        <div className="app-prices">
          {cards.map((card) => <PriceCard {...card} />)}
        </div>
      </div>
    </main>
  );
}
