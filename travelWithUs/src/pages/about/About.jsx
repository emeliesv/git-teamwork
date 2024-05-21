import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h1>Om Travel with us</h1>
      <p>Vår app hjälper dig att planera och genomföra fantastiska resor enkelt och smidigt.</p>
      
      <section className="team-section">
        <h2>Vårt inspelationer</h2>
        <div className="team-member">
          <img src="path/to/image1.jpg" alt="inspelation 1" />
          <h3>Inspelation 1</h3>
          <p>Beskrivning av inspelation 1.</p>
        </div>
        <div className="team-member">
          <img src="path/to/image2.jpg" alt="inspelation 2" />
          <h3>Inspelation 2</h3>
          <p>Beskrivning av inspelation 2.</p>
        </div>
      </section>
      
      <section className="goal-section">
        <h2>Vårt Mål</h2>
        <p>Vi strävar efter att göra resande enkelt, inspirerande och tillgängligt för alla.</p>
      </section>

      <section className="contact-section">
        <h2>Kontakt</h2>
        <p>Har du frågor eller feedback? Kontakta oss på: <a href="mailto:info@resaapp.com">info@travelwithus.com</a></p>
      </section>
      
      <section className="images-section">
        <h2>Våra Resor</h2>
        <div className="image-placeholder">Bild 1</div>
        <div className="image-placeholder">Bild 2</div>
        <div className="image-placeholder">Bild 3</div>
        <div className="image-placeholder">Bild 4</div>
      </section>
    </div>
  );
}

export default About;
