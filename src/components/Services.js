import React from 'react';

function Services() {
  const services = [
    {
      title: 'Výstavba domov',
      description: 'Komplexná výstavba rodinných domov na kľúč',
      icon: '🏠'
    },
    {
      title: 'Rekonštrukcie',
      description: 'Kompletné rekonštrukcie bytov a nebytových priestorov',
      icon: '🔨'
    },
    {
      title: 'Komerčné stavby',
      description: 'Výstavba kancelárií, hál a priemyselných objektov',
      icon: '🏢'
    },
    {
      title: 'Zatepľovanie',
      description: 'Profesionálne zatepľovanie budov a fasádne práce',
      icon: '🧱'
    },
    {
      title: 'Strešné práce',
      description: 'Montáž a opravy všetkých typov striech',
      icon: '🏗️'
    },
    {
      title: 'Poradenstvo',
      description: 'Odborné poradenstvo a projekčná činnosť',
      icon: '📋'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Naše služby</h2>
        <p className="section-subtitle">Ponúkame komplexné stavebné riešenia</p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
