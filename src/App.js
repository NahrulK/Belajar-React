import React from 'react';
// import { Component } from 'react/cjs/react.production.min';
import Navbar from './Navbar';
import Hatiga from './Hatiga';


// Arrow Fuction
const Navbarjuga = () => {
  return (
    <div>
      <h3>Ini Adalah H3</h3>
    </div>
  )
}
 





function App() {
  return ( 

    <div className='App'>
      <Navbarjuga/> <br/>
      <Navbar/>
      <Hatiga />
      <p>Ini adalah Paragrapf</p>
    </div>
  
  );
}


export default App;