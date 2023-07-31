import React from 'react';
import './App.css'
// import Header from './components/header/header';
// import PortfolioContent from './components/project/content';
// import Footer from './components/footer/footer';
// import NavBar from './components/navbar/navbar';
// import background from './img/Rendering.png';
// import AboutMe from './components/pages/About';
import PortfolioContainer from "./components/portfolioContainer";

// function App() {

//   // const [currentPage, setCurrentPage] = useState('AboutMe');

//   // const renderPage = () => {
//   //   if (currentPage === 'AboutMe') {
//   //     return <AboutMe/>;
//   //   }
//   // }

//   // const handlePageChange = (page) => setCurrentPage(page);

//     return (
//     <div>
//     <Header/>
//     {/* <NavBar/> */}
//     <PortfolioContent />

//     {/* {renderPage()} */}

//     <Footer/>
//     </div>
//     );
//   }

  const App = () => <PortfolioContainer />;
  
  export default App;