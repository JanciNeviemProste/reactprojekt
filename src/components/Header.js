import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>BuildPro</h1>
            <p className="tagline">Stavebná spoločnosť</p>
          </div>
          <nav className="nav">
            <a href="#home">Domov</a>
            <a href="#services">Služby</a>
            <a href="#about">O nás</a>
            <a href="#contact">Kontakt</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
