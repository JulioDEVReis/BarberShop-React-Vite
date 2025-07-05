import "./BannerHome.css"

const BannerHome = () => {
  return (
    <section className="banner-home">
      <div className="banner-overlay">
        <div className="banner-content">
            <h1 className="banner-title">Elevate your Style.<br />Discover the Barber Experience<br />in Viseu</h1>
            <p className="banner-subtitle">
                Classic cuts, modern techniques. Book your appointment and transform your look today!
            </p>
            <a href="#Contact" className="banner-cta">Book Now</a>
        </div>
      </div>
      <img className="banner-image" src="../../src/assets/images/banner.jpg" alt="BarberShop" loading="lazy" />
    </section>
  )
}

export default BannerHome
