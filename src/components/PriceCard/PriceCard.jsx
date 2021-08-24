import React from 'react';

import { HiCheckCircle } from 'react-icons/hi';

import './price-card.scss';

const allBenefits = [
  {
    id: 1,
    description: 'Acceso a todos los proyectos',
  },
  {
    id: 2,
    description: 'Acceso a todos los talleres',
  },
  {
    id: 3,
    description: 'Acceso a todos los cursos',
  },
  {
    id: 4,
    description: 'Acceso a Discord',
  },
  {
    id: 5,
    description: 'Mentorías personalizadas',
  },
];

const PriceCard = ({ price, name, description, best, benefits }) => (
  <div className={`price-card ${best ? 'best' : ''}`}>
    {best && <div className="popular">Más popular</div>}
    <p className="price">
      <strong>
        $
        {price}
      </strong>
      <span> /mes</span>
    </p>
    <h2 className="title">{name}</h2>
    <p className="description">{description}</p>

    <ul className="benefits-list">
      {allBenefits.map(({ id, description: benDescription }) => {
          const isIncluded = benefits.find((bn) => bn === id);
          return (
            <li key={id} className={`benefit ${isIncluded ? 'included' : ''}`}>
              <HiCheckCircle className="icon" />
              {benDescription}
            </li>
          );
        })}
    </ul>

    <button
      className="select-btn"
      onClick={() => {}}
      onKeyPress={() => {}}
      tabIndex={0}
      type="button"
    >
      Elegir Plan

    </button>
  </div>
  );

export default PriceCard;
