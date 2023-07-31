import React from "react";
import './header.css';
import profilePic from '../../img/+ ALEJANDRO TREJO_03.jpg'

function Header() {
    return (
    <div className="header">
    
    <nav>
        <img src={profilePic} className='profilePic'></img>
        <h1>Alex  Trejo</h1>
        <ul className="navlinks">
            <li>
                <a>About Me</a>
            </li>
            <li>
                <a>Portfolio</a>
            </li>
            <li>
                <a>Contact</a>
            </li>
            <li>
                <a>Resume</a>
            </li>
        </ul>
    </nav>
    </div>
    );
}
export default Header;