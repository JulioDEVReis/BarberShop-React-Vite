import "./AboutUs.css";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section className="aboutus" id="aboutus">
      <div className="about-container">
        <div className="about-content">
          <div className="about-header">
            <h1 className="about-title">{t('about.badge')}</h1>
            <h2 className="about-subtitle">{t('about.title')}</h2>
          </div>
          <div className="about-textgrid">
            <div className="about-texts">
              <p className="first-text">{t('about.first')}</p>
              <p>{t('about.first2')}</p>
              <div className="about-features">
                <div className="feature-items">
                  <div className="icon">🏆</div>
                  <div className="feature-content">
                    <h3>{t('about.card1.title')}</h3>
                    <p>{t('about.card1.description')}</p>
                  </div>
                </div>
                <div className="feature-items">
                  <div className="icon">✂️</div>
                  <div className="feature-content">
                    <h3>{t('about.card2.title')}</h3>
                    <p>{t('about.card2.description')}</p>
                  </div>
                </div>
                <div className="feature-items">
                  <div className="icon">⭐</div>
                  <div className="feature-content">
                    <h3>{t('about.card3.title')}</h3>
                    <p>{t('about.card3.description')}</p>
                  </div>
                </div>
              </div>
              <div className="cta">
                <button className="cta-button">{t('about.button')}</button>
              </div>
            </div>
            <div className="about-image">
              <div className="image-container">
                <div className="image-overlay">
                  <span className="overlay-text">{t('about.image')}</span>
                </div>
                <img src="public/images/barbershop.jpg" alt="BarberShop Pro Interior" className="image" />
              </div>
            </div>
            <div className="stats-card">
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">{t('about.stat-label1')}</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">{t('about.stat-label1')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default AboutUs;
