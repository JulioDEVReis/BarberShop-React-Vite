import "./Footer.css";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
    
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
            <div className="footer-section brand-section">
                <h3 className="footer-logo">BarberShop Pro 1</h3>
                <p className="footer-tagline">{t('footer.brand-tagline')}</p>
                <p className="footer-description"><Trans i18nKey='footer.description' /></p>
                <div className="social-links">
                    <a href="#" className="social-link">
                        <img src="/images/footer/facebook.png" alt="Facebook Link" />
                    </a>
                    <a href="#" className="social-link">
                        <img src="/images/footer/instagram.png" alt="Instagram link" />
                    </a>
                </div>
            </div>
            <div className="footer-section">
                <h4 className="footer-title">{t('footer.schedules')}</h4>
                <div className="schedule-info">
                    <p>{t('footer.schedule-info.p1')}</p>
                    <p>{t('footer.schedule-info.p2')}</p>
                    <p>{t('footer.schedule-info.p3')}</p>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="footer-legal">
                <p>{t('footer.legal1')}</p>
                <div className="legal-links">
                    <a href="#">{t('footer.legal2')}</a>
                    <a href="#">{t('footer.legal3')}</a>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
