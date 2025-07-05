import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
            <div className="footer-section brand-section">
                <h3 className="footer-logo">BarberShop Pro 1</h3>
                <p className="footer-tagline">Premium Groming in Viseu</p>
                <p className="footer-description">
                    Your trusted barber shop in the heart of Viseu.<br />Excellence in every cut, tradition in every service.
                </p>
                <div className="social-links">
                    <a href="#" className="social-link">
                        <img src="/src/assets/images/footer/facebook.png" alt="Facebook Link" />
                    </a>
                    <a href="#" className="social-link">
                        <img src="/src/assets/images/footer/instagram.png" alt="Instagram link" />
                    </a>
                </div>
            </div>
            <div className="footer-section">
                <h4 className="footer-title">Schedules</h4>
                <div className="schedule-info">
                    <p>Monday - Friday: 9h - 19h</p>
                    <p>Saturday: 10h - 16h</p>
                    <p>Sunday: Closed</p>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="footer-legal">
                <p>&copy; 2025 BarberShop Pro 1. All rights reserved</p>
                <div className="legal-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
