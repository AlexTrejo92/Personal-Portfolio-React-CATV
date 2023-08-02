import React from 'react';
import profilePic from '../../img/+ ALEJANDRO TREJO_03.jpg';
import bckImg from '../../img/Rendering.png'
import '../../App.css'

export default function AboutMe() {
  return (
    <div className='mainContent'>
      <img src={profilePic} className='profilePic'></img>
      <div className='textCard'>
      <h1 data-text='About Me' className='mainHeadline'>About Me</h1>
      <p>
      Hello World! I'm a human being from Mexico City. I studied Architecture at Universidad Nacional Autónoma de México (UNAM) and then Project Management at UNAM as well. I'm experienced in Construction & Real Estate Development 
        (all its phases), eager to apply my knowledge on a modern work environment 
        and continue my personal and professional growth in the process. I'm currently
        learning how to code in a Bootcamp! This page was made by me!
      </p>
      </div>
    </div>
  );
}