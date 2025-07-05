import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="aboutus">
      <div className="about-container">
        <div className="about-content">
          <div className="about-header">
            <h1 className="about-title">About Us - BarberShop Pro - Viseu</h1>
            <h2 className="about-subtitle">Tradition and Excellence in Viseu</h2>
          </div>
          <div className="about-textgrid">
            <div className="about-texts">
              <p className="first-text">
                Welcome to BarberShop Pro, where classic barbering tradition meets modern men's grooming techniques.
              </p>
              <p>
                Located in the heart of Viseu, our barbershop is a haven of style and sophistication for the modern man. With over a decade of experience, we offer premium services ranging from classic cuts to personalized beard treatments.
              </p>
              <div className="about-features">
                <div className="feature-items">
                  <div className="icon">🏆</div>
                  <div className="feature-content">
                    <h3>Excellence</h3>
                    <p>Awarded as the best barber shop in Viseu in 2023</p>
                  </div>
                </div>
                <div className="feature-items">
                  <div className="icon">✂️</div>
                  <div className="feature-content">
                    <h3>Traditional Techniques</h3>
                    <p>Classical methods combined with modern equipment</p>
                  </div>
                </div>
                <div className="feature-items">
                  <div className="icon">⭐</div>
                  <div className="feature-content">
                    <h3>Premium Products</h3>
                    <p>Only the best men's grooming products</p>
                  </div>
                </div>
              </div>
              <div className="cta">
                <button className="cta-button">Schedule now!</button>
              </div>
            </div>
            <div className="about-image">
              <div className="image-container">
                <div className="image-overlay">
                  <span className="overlay-text">Premium Ambient</span>
                </div>
                <img src="src/assets/images/barbershop.jpg" alt="BarberShop Pro Interior" className="image" />
              </div>
            </div>
            <div className="stats-card">
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Satisfied Customers</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years of Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default AboutUs;
