import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">O nás</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>BuildPro - Váš spoľahlivý partner v stavebníctve</h3>
            <p>
              Sme stavebná firma s viac ako 15-ročnou tradíciou na slovenskom trhu.
              Našou prioritou je kvalita, spoľahlivosť a spokojnosť zákazníkov.
            </p>
            <p>
              Realizovali sme stovky úspešných projektov od rodinných domov až po
              veľké komerčné stavby. Naši odborníci disponujú všetkými potrebnými
              certifikátmi a bohatými skúsenosťami.
            </p>

            <div className="stats">
              <div className="stat">
                <div className="stat-number">15+</div>
                <div className="stat-label">Rokov skúseností</div>
              </div>
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Realizovaných projektov</div>
              </div>
              <div className="stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Spokojných zákazníkov</div>
              </div>
            </div>
          </div>

          <div className="about-features">
            <div className="feature">
              <span className="feature-icon">✓</span>
              <div>
                <h4>Profesionálny prístup</h4>
                <p>Kvalifikovaní odborníci s certifikátmi</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <div>
                <h4>Moderné technológie</h4>
                <p>Používame najnovšie materiály a postupy</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <div>
                <h4>Termínové plnenie</h4>
                <p>Dodržiavame dohodnuté termíny</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <div>
                <h4>Záruka kvality</h4>
                <p>Poskytujeme záručný a pozáručný servis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
