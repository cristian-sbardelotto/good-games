import React from 'react';

import Button from '../Button/';

import logo from '../../assets/logo.svg';

import btnAccount from '../../assets/btn-account.svg';
import btnSearch from '../../assets/btn-search.svg';
import btnHeart from '../../assets/btn-heart.svg';
import btnBag from '../../assets/btn-bag.svg';

import './index.scss';

const SideBar = () => {
  return (
    <aside>
      <h1>
        <img src={logo} alt='Good Games Logo' />
      </h1>

      <button className='main-button'>catálogo</button>

      <ul>
        <li>
          <Button image={btnAccount} text='Perfil' />
        </li>

        <li>
          <Button image={btnSearch} text='Procurar' />
        </li>

        <li>
          <Button image={btnHeart} text='Favoritos' />
        </li>
        <li>
          <Button image={btnBag} text='Saldo' />
        </li>
      </ul>

      <h3>categoria</h3>
    </aside>
  );
};

export default SideBar;
