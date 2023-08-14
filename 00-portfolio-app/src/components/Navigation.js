import React from 'react'

export default function Nav({ currentPage, handlePageChange }) {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (
    <nav className="main-header-menu">
      <section
        style={{
          display: 'flex',
          fontFamily: 'helvetcia',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start'
        }}
      >
        <div style={linkStyle}>
          <a 
            href="#aboutMe"
            onClick={() => handlePageChange('About Me')}
            className={currentPage === 'About Me'? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </div>
        <div style={linkStyle}>
          <a 
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio'? 'nav-link active' : 'nav-link'}
          >
              Portfolio
          </a>
        </div>
        <div style={linkStyle}>
          <a href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact'? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </div>
        <div style={linkStyle}>
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Contact'? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </div>
      </section>
    </nav>
  );
}