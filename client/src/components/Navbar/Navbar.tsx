import "./Navbar.css";
import { useState } from "react";   

const Navbar: React.FC = () => {
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
                        <a href="#home" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#specialities" className="nav-link">Specialities</a>
                    </li>
                    <li className="nav-item">
                        <a href="#aboutus" className="nav-link">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a href="#gallery" className="nav-link">Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">Schedule Now</a>
                    </li>
                </ul>
                <div>
                    <ul className="lang-selector">
                        <li className="lang">PT</li>
                        <li className="lang">EN</li>
                    </ul>
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
