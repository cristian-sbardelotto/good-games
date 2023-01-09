import React from 'react';

import logo from '../../assets/logo.svg';

import '../../css/SideBar.scss';

const SideBar = () => {
  return (
    <aside>
      <h1>
        <img src={logo} alt='Good Games Logo' />
      </h1>

      <button>
        catálogo
      </button>
    </aside>
  );
};

export default SideBar;
