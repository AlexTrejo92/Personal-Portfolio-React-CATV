import React from 'react';
import profilePic from '../img/+ ALEJANDRO TREJO_03.jpg';
import './header/header.css'


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
    <nav className='header'>
    <h1>ALEX TREJO VALENCIA</h1>
    <ul className='navlinks'>
      <li>
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'activeLink' : 'restLink'}
        >
          About Me
        </a>
      </li>
      <li>
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Projects' ? 'activeLink' : 'restLink'}
        >
          Portfolio
        </a>
      </li>
      <li>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'activeLink' : 'restLink'}
        >
          Contact
        </a>
      </li>
      <li>
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Resume"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Resume' ? 'activeLink' : 'restLink'}
        >
          Resume
        </a>
      </li>
    </ul>
    </nav>
    </div>
  );
}

export default NavTabs;