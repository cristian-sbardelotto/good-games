import React from 'react';

import { productsMock } from '../../data/ProductsMock';

import Card from '../Card';

import './index.scss';

export const ProductsList = () => {
  return (
    <>
      <div className='first-list'>
        {productsMock.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            name={card.name}
            price={card.price}
          />
        ))}
      </div>

      <div className='second-list'>
        {productsMock.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            name={card.name}
            price={card.price}
          />
        ))}
      </div>
    </>
  );
};
