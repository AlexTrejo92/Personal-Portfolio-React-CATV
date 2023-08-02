import React from 'react';
import '../../App.css'

export default function Resume() {
  return (
    <div className='mainContent'>
      <h1>Resume</h1>
      <h3>Download my <span><a href='https://drive.google.com/file/d/1sC0NoKj2BNSKB7E3qt2yW5L-Uu3h6UN8/view?usp=drive_link'>resume</a></span></h3>
      <h3>Front-End profficiencies</h3>
        <ul>
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
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>NoSQL</li>
        </ul>
    </div>
  );
}