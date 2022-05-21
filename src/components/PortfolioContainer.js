import React, { useState } from 'react';
import NavTabs from './navbar/NavTabs';
import Footer from './footer/Footer';
import About from './pages/about/About';
import Skill from './pages/skill/Skill';
import Project from './pages/project/Project';
import Contact from './pages/contact/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Skill') {
      return <Skill />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
    <header>
    <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
    <section className='mainSection'>
    {renderPage()}
    </section>
  
      {/* We are passing the currentPage from state and the function to update it */}
      
      <Footer currentPage={currentPage}/>
      {/* Here we are calling the renderPage method which will return a component  */}
     
    </>
  );
}
