import React from 'react';
import './content.css';
import renderImg from '../../img/Rendering.png'

function PortfolioContent() {
    const message = 'Hello world!';
    return (
      <div className="content">
        {/* <img src={renderImg} width='100%'/> */}
        <div className='bckimg mainCanvas'>
        <h1>{message}</h1>
        <h1>THIS WILL BE THE content for the page</h1>
        <h1>Another one</h1></div>
      </div>
    );
  }
  
  export default PortfolioContent;