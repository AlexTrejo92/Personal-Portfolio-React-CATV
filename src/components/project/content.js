import React from 'react';
import './content.css'

function PortfolioContent() {
    const message = 'Hello world!';
    // The return statement contains something called "JSX"
    // JSX is a syntax extension to Javascript that allows us to write HTML inside Javascript
    // Expressions in JSX should be placed in curly braces {}
    return (
      <div className="content">
        <h1>{message}</h1>
        <h1>THIS WILL BE THE content for the page</h1>
        <h1>Another one</h1>
      </div>
    );
  }
  
  export default PortfolioContent;