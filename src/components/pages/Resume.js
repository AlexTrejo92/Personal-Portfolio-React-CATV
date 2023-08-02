import React from 'react';
import '../../App.css'

export default function Resume() {
  return (
    <div className='mainContent'>
      <div className='textCard'>
        <h1>Resume</h1>
        <h3 style={{padding: '10px'}}>Download my resume<span><a href='https://drive.google.com/file/d/1sC0NoKj2BNSKB7E3qt2yW5L-Uu3h6UN8/view?usp=drive_link'> here</a></span></h3>
        <div style={{textAlign: 'left', margin: '15px'}}>
          <h3>Front-End profficiencies</h3>
          <ul style={{listStyle:'none'}}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
          </ul>
          <h3>Back-End Profficiencies</h3>
          <ul style={{listStyle:'none'}}>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>NoSQL</li>
          </ul>
        </div>
        </div>
    </div>
  );
}