import React from 'react';

import Card from '../Card/index';
import vrGlass from '../../assets/vr-glass.svg';
import keyboard from '../../assets/keyboard.svg';
import soundBox from '../../assets/sound-box.svg';
import monitor from '../../assets/monitor.svg';
import pc from '../../assets/pc.svg';

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

      <div className='first-list'>
        <Card
          image={vrGlass}
          title='Óculos Virtual'
          name='VR Glasses'
          price={32}
        />

        <Card
          image={keyboard}
          title='Teclado Mecânico'
          name='Mechanic Keyboard'
          price={200}
        />

        <Card
          image={monitor}
          title='Monitor 25 Polegadas'
          name='Monitor'
          price={400}
        />

        <Card
          image={soundBox}
          title='Caixa de Som JBL'
          name='JBL Sound Box'
          price={900}
        />

        <Card
          image={pc}
          title='Computador Gamer'
          name='Gamer Computer'
          price={900}
        />
      </div>

      <div className='second-list'>
        <Card
          image={vrGlass}
          title='Óculos Virtual'
          name='VR Glasses'
          price={32}
        />

        <Card
          image={keyboard}
          title='Teclado Mecânico'
          name='Mechanic Keyboard'
          price={200}
        />

        <Card
          image={monitor}
          title='Monitor 25 Polegadas'
          name='Monitor'
          price={400}
        />

        <Card
          image={soundBox}
          title='Caixa de Som JBL'
          name='JBL Sound Box'
          price={900}
        />

        <Card
          image={pc}
          title='Computador Gamer'
          name='Gamer Computer'
          price={900}
        />
      </div>
    </div>
  );
};

export default Products;
