import React from 'react';

import SideBar from './components/SideBar';
import Hero from './components/Hero';

import './main.scss';

const App = () => {
  return <div className='App'>
    <SideBar />
    <Hero />
  </div>;
};

export default App;
