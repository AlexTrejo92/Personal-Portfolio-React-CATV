import React from 'react';
import './content.css';
import renderImg from '../../img/Rendering.png';
import profilePic from '../../img/+ ALEJANDRO TREJO_03.jpg'

function PortfolioContent() {
    const message = 'Hello world!';
    return (
      <div className="content">
        {/* <img src={renderImg} width='100%'/> */}
        <div className='bckimg mainCanvas'>
        <img src={profilePic} className='profilePic'></img>
        <h1>{message}</h1>
        <h1>THIS WILL BE THE content for the page</h1>
        <h1>Another one</h1></div>
      </div>
    );
  }
  
  export default PortfolioContent;