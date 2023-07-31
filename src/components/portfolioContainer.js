import React, { useState } from 'react';
// import NavTabs from './NavTabs';
// import Home from './pages/Home';
// import About from './pages/About';
// import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Header from './header/header';
// import PortfolioContent from './project/content';
import Footer from './footer/footer';
// import NavBar from './navbar/navbar';
import AboutMe from './pages/About';
import Projects from './pages/PortfolioProjects'
import NavTabs from './NavTabs';
import Resume from './pages/Resume';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Resume'){
      return <Resume />
    }
    return <AboutMe />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>

    <div>
    {/* <Header/> */}

      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}

    {/* <NavBar/> */}
    {/* <PortfolioContent /> */}
    {renderPage()}
    {/* {renderPage()} */}

    <Footer/>
    </div>



    </div>
  );
}
