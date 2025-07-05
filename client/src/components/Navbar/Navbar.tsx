import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="nav-header">
        <nav className="navbar">
            <div className="brand">
                <h1 className="logo">BarberShop Pro 1</h1>
                <span className="brand-tagline">Premium Grooming</span>
            </div>
            <ul className="nav-items">
                <li className="nav-item">Home</li>
                <li className="nav-item">Specialities</li>
                <li className="nav-item">About Us</li>
                <li className="nav-item">Gallery</li>
                <li className="nav-item">Schedule Now</li>
            </ul>
            <div>
                <ul className="lang-selector">
                    <li className="lang">PT</li>
                    <li className="lang">EN</li>
                </ul>
            </div>
        </nav>
    </header>
  )
};

export default Navbar;
