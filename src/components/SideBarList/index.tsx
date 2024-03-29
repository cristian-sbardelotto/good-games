import React from 'react';

import Button from '../Button/';

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

import iconTwitter from '../../assets/icon-twitter.svg';
import iconFacebook from '../../assets/icon-facebook.svg';
import iconYoutube from '../../assets/icon-youtube.svg';
import iconTiktok from '../../assets/icon-tiktok.svg';
import iconWhatsapp from '../../assets/icon-whatsapp.svg';

import btnHelp from '../../assets/btn-help.svg';
import btnConditions from '../../assets/btn-conditions.svg';
import btnInfo from '../../assets/btn-info.svg';

import './index.scss';

export const SideBarList = () => {
  return (
    <>
      <ul className='primary-list'>
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

      <ul className='primary-list'>
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

      <ul className='social'>
        <li>
          <img src={iconTwitter} alt='Twitter' />
        </li>

        <li>
          <img src={iconFacebook} alt='Facebook' />
        </li>

        <li>
          <img src={iconYoutube} alt='Youtube' />
        </li>

        <li>
          <img src={iconTiktok} alt='TikTok' />
        </li>

        <li>
          <img src={iconWhatsapp} alt='WhatsApp' />
        </li>
      </ul>

      <ul className='primary-list'>
        <li>
          <Button image={btnHelp} text='Ajuda' />
        </li>

        <li>
          <Button image={btnConditions} text='Condições' />
        </li>

        <li>
          <Button image={btnInfo} text='Informações' />
        </li>
      </ul>
    </>
  );
};
