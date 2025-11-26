import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>BuildPro</h3>
            <p>Stavebná spoločnosť</p>
            <p>Váš spoľahlivý partner v stavebníctve</p>
          </div>

          <div className="footer-section">
            <h4>Rýchle odkazy</h4>
            <ul>
              <li><a href="#home">Domov</a></li>
              <li><a href="#services">Služby</a></li>
              <li><a href="#about">O nás</a></li>
              <li><a href="#contact">Kontakt</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Služby</h4>
            <ul>
              <li>Výstavba domov</li>
              <li>Rekonštrukcie</li>
              <li>Komerčné stavby</li>
              <li>Zatepľovanie</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Kontakt</h4>
            <p>📍 Stavebná 123, Bratislava</p>
            <p>📞 +421 2 1234 5678</p>
            <p>✉️ info@buildpro.sk</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} BuildPro. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
