import {AboutMe, Buttons, Icons, Profile} from './imports'
import React from 'react';



function App() {
  return (
    <div style={{maxWidth: '500px', color: 'white', background: 
    'linear-gradient(180deg, rgba(17,20,36,1) 0%, rgba(70,196,252,1) 100%)'}} 
    className="m-auto text-center" >
      <Profile/>
      <Buttons/>
      <AboutMe/>
      <Icons/>
    </div>

  );
}

export default App;
