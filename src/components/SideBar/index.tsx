import React from 'react';

import { SideBarList } from '../SideBarList';
import logo from '../../assets/logo.svg';

import './index.scss';

const SideBar = () => {
  return (
    <aside>
      <div className='primary-div'>
        <h1>
          <img src={logo} alt='Good Games Logo' />
        </h1>

        <button className='main-button'>catálogo</button>
      </div>

      <SideBarList />
    </aside>
  );
};

export default SideBar;
