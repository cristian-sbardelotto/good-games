import React from 'react';

interface CardProps {
  image: string;
  title: string;
  name: string;
  price: string | number;
}

import btnPlus from '../../assets/btn-plus.svg';

import './index.scss';

const Card = ({ image, title, name, price }: CardProps) => {
  return (
    <div className='container'>
      <div className='card'>
        <img src={image} alt={title} className='product-image' />

        <div className='card-info-group'>
          <h6>{title}</h6>

          <span className='product-name'>{name}</span>

          <span className='product-price'>R$ {price},00</span>
        </div>

        <button>
          <img src={btnPlus} alt='Plus button' />
          adicionar ao cartão
        </button>
      </div>
    </div>
  );
};

export default Card;
