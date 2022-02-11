import React from 'react';
import { Navbar, Hero, Divider, Cards } from './imports'

export function App() {
  
  return (
    <div className='app-container'>
      <Navbar/>
      <Divider/>
      <Hero/>
      <Cards/>
    </div>
  );
}