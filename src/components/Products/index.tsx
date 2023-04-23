import React from 'react';

import ProductsList from '../ProductsList';

import './index.scss';

const Products = () => {
  return (
    <div className='products-section'>
      <div className='products-menu'>
        <span>Nossos Produtos</span>

        <div className='button-group'>
          <button className='active-btn'>TOP</button>
          <button>Popular</button>
          <button>Mais Vendidos</button>
        </div>

        <span>Categoria</span>
      </div>

      <ProductsList />
    </div>
  );
};

export default Products;
