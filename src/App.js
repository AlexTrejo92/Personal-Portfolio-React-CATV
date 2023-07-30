import React from 'react';
import './App.css'
import Header from './components/header/header';
import PortfolioContent from './components/project/content';
import Footer from './components/footer/footer';
import NavBar from './components/navbar/navbar';
import background from './img/Rendering.png';

function App() {
    return (
    <div>
    <Header/>
    {/* <NavBar/> */}
    <PortfolioContent />

    

    <Footer/>
    </div>
    );
  }
  
  export default App;