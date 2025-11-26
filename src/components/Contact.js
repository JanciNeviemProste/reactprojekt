import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Kontaktujte nás</h2>
        <p className="section-subtitle">Sme tu pre vás, radi zodpovieme vaše otázky</p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Adresa</h4>
                <p>Stavebná 123<br />Bratislava 811 07<br />Slovensko</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h4>Telefón</h4>
                <p>+421 2 1234 5678</p>
                <p>+421 905 123 456</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p>info@buildpro.sk</p>
                <p>objednavky@buildpro.sk</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">🕐</div>
              <div>
                <h4>Otváracie hodiny</h4>
                <p>Pondelok - Piatok: 7:00 - 17:00</p>
                <p>Sobota: 8:00 - 12:00</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Vaše meno" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Váš email" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Telefón" />
              </div>
              <div className="form-group">
                <textarea placeholder="Vaša správa" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Odoslať správu</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
