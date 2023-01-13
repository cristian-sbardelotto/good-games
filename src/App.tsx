import React from 'react';

import SideBar from './components/SideBar';
import Hero from './components/Hero';
import Products from './components/Products/index';

import './main.scss';

const App = () => {
  return <div className='App'>
    <SideBar />
    <Hero />
    <Products />
  </div>;
};

export default App;
