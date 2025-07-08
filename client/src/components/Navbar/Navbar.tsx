import "./Navbar.css";
import { useState } from "react";   
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
    const { t, i18n } = useTranslation();
    // Language change
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="nav-header">
            <nav className="navbar">
                <div className="brand">
                    <h1 className="logo">BarberShop Pro 1</h1>
                    <span className="brand-tagline">Premium Grooming</span>
                </div>
                <ul className={`nav-items ${isMenuOpen ? 'nav-open' : ''}`}>
                    <li className="nav-item">
                        <a href="#home" className="nav-link">{t('navbar.home')}</a>
                    </li>
                    <li className="nav-item">
                        <a href="#specialities" className="nav-link">{t('navbar.specialities')}</a>
                    </li>
                    <li className="nav-item">
                        <a href="#aboutus" className="nav-link">{t('navbar.aboutus')}</a>
                    </li>
                    <li className="nav-item">
                        <a href="#gallery" className="nav-link">{t('navbar.gallery')}</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">{t('navbar.contact')}</a>
                    </li>
                </ul>
                <div>
                    <div className="lang-selector">
                        <button className="lang" onClick={() => changeLanguage('pt')} type="button">PT</button>
                        <button className="lang" onClick={() => changeLanguage('en')} type="button">EN</button>
                    </div>
                </div>
                <button className="menu-toggle" onClick={toggleMenu}>
                    <span className={`hamburguer ${isMenuOpen ? 'active' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>
            </nav>
        </header>
    )
};

export default Navbar;
