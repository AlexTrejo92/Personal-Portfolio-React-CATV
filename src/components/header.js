import React from 'react';

function Header() {
    const message = 'Hello world! I am a React Component';
    // The return statement contains something called "JSX"
    // JSX is a syntax extension to Javascript that allows us to write HTML inside Javascript
    // Expressions in JSX should be placed in curly braces {}
    return (
      <div className="container">
        <h2>{message}</h2>
        <h1>THIS WILL BE THE FIRST TEST</h1>
      </div>
    );
  }
  
  export default Header;