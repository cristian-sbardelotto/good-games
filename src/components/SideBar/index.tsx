import React from 'react';

import Button from '../Button/';

import logo from '../../assets/logo.svg';

import btnAccount from '../../assets/btn-account.svg';
import btnSearch from '../../assets/btn-search.svg';
import btnHeart from '../../assets/btn-heart.svg';
import btnBag from '../../assets/btn-bag.svg';
import btnMouse from '../../assets/btn-mouse.svg';
import btnHeadPhone from '../../assets/btn-headphone.svg';
import btnMousePad from '../../assets/btn-mousepad.svg';
import btnVRGlass from '../../assets/btn-vr-glass.svg';
import btnKeyboard from '../../assets/btn-keyboard.svg';
import btnPC from '../../assets/btn-pc.svg';

import './index.scss';

const SideBar = () => {
  return (
    <aside>
      <div className='primary'>
        <h1>
          <img src={logo} alt='Good Games Logo' />
        </h1>

        <button className='main-button'>catálogo</button>
      </div>

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

      <h3 style={{ textAlign: 'center' }}>categoria</h3>

      <ul>
        <li>
          <Button image={btnMouse} text='Mouse' />
        </li>

        <li>
          <Button image={btnHeadPhone} text='Fone' />
        </li>

        <li>
          <Button image={btnMousePad} text='Mouse pad' />
        </li>

        <li>
          <Button image={btnVRGlass} text='Óculos virtual' />
        </li>

        <li>
          <Button image={btnKeyboard} text='Teclado' />
        </li>

        <li>
          <Button image={btnPC} text='Computador' />
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
