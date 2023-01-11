import React from 'react';

import iconSearch from '../../assets/btn-search.svg';
import iconUser from '../../assets/user.svg';
import iconNotifications from '../../assets/icon-notifications.svg';
import iconPaperBag from '../../assets/icon-paper-bag.svg';

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
        <div>
          <img src='' alt='' />

          <h5></h5>

          <span></span>

          <span></span>

          <hr />

          <p></p>

          <button></button>
          <button></button>
        </div>

        <div>
          <img src='' alt='' />
          <div>
            <img src='' alt='' />
            <p></p>
          </div>

          <div>
            <img src='' alt='' />
            <p></p>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Hero;
