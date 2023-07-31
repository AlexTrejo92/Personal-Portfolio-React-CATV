import React from 'react';
import profilePic from '../img/+ ALEJANDRO TREJO_03.jpg';
import './header/header.css'
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

// const styles = {
//     navBarStyle: {
//         background: 'green',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         height: '100px',
//     },
//     navLinks: {
//         display: 'flex',
//         flexDirection: 'row',
//         listStyle: 'none',
//     }
// }

function NavTabs({ currentPage, handlePageChange }) {
    return (
<div className='header'>
    <nav>
    <h1>Alex  Trejo VALENCIA</h1>
    <ul className='navlinks'>
      <li>
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li>
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li>
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
    </nav>
</div>
  );
}

export default NavTabs;