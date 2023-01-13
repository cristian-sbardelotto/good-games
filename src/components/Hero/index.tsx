import React from 'react';

import iconSearch from '../../assets/btn-search.svg';
import iconUser from '../../assets/user.svg';
import iconNotifications from '../../assets/icon-notifications.svg';
import iconPaperBag from '../../assets/icon-paper-bag.svg';

import iconFiveStars from '../../assets/icon-five-stars.svg';
import iconHeadPhone from '../../assets/headphone.svg';

import './index.scss';

const Hero = () => {
  return (
    <main>
      <nav>
        <div className='input-group'>
          <input type='text' placeholder='Procurar' />
          <img src={iconSearch} alt='Search input icon' />
        </div>

        <div className='user-menu'>
          <span>Will Smith</span>
          <img src={iconUser} alt='User' />

          <img src={iconNotifications} alt='Notifications' />
          <img src={iconPaperBag} alt='Paper Bag' />
        </div>
      </nav>

      <article>
        <section>
          <img src={iconFiveStars} alt='five stars' className='five-stars' />

          <h5>Headphones</h5>

          <span className='gray'>”W103 Sinta a Mágica”</span>
          <span className='purple'>headset</span>

          <hr />

          <p>
            Suas emoções começam quando você coloca os headphones, então não
            perca essa oportunidade.
          </p>

          <div className='buttons'>
            <button className='buy-btn'>Comprar</button>
            <button className='cart-btn'>Adicionar ao Carrinho</button>
          </div>
        </section>

        <img src={iconHeadPhone} alt='Headphone' className='headphone' />
      </article>
    </main>
  );
};

export default Hero;
