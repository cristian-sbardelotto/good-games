import React from 'react';

import SideBar from './components/SideBar';
import Hero from './components/Hero';
import Card from './components/Card';

import vrGlass from './assets/vr-glass.svg';

import './main.scss';

const App = () => {
  return <div className='App'>
    <SideBar />
    <Hero />
    <Card image={vrGlass} title='Óculos Virtual' name='VR Glasses' price={32} />
  </div>;
};

export default App;
