import React from "react";
import './header.css'

function Header() {
    return (
    <div className="header">
    <h1>Welcome to my portfolio! I'm Alex</h1>
    <nav>
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