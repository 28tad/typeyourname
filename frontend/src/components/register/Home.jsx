import React from 'react';
import '../register/Home.css';


function Home() {
  return (
    <div className='row'>
      <img className='tree' src='tree.jpg' alt='tree'/>
      <p className='type'>TYPE YOUR NAME</p>
      <input className='input' type="text" />
    </div>
  );
}

export default Home;
