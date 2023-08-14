// Header which includes the navigation link
import React, { useState } from 'react';
import Navigation from './Navigation'
import About from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function Header() {
  const [name, setName] = useState(
    'Amanda L. Monroy'
  )
  
  const [currentPage, setCurrentPage] = useState('About Me');
  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'About Me') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return(
    <div>
      <header className='header'>
        <h1>{name}</h1>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
      </header>
      <div>
        {renderPage()}
      </div>
    </div>
    
  );
};