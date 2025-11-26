import React from 'react';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h2>Stavíme vaše sny</h2>
          <p className="hero-subtitle">
            Profesionálne stavebné služby s viac ako 15-ročnou tradíciou
          </p>
          <p className="hero-description">
            Od návrhu až po realizáciu. Komplexné stavebné práce,
            rekonštrukcie a renovácie pre domácnosti aj firmy.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Kontaktujte nás</a>
            <a href="#services" className="btn btn-secondary">Naše služby</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
