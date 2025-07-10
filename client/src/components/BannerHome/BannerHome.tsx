import "./BannerHome.css";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

const BannerHome = () => {
  const { t } = useTranslation();

  return (
    <section className="banner-home" id="home">
      <div className="banner-overlay">
        <div className="banner-content">
            <h1 className="banner-title"><Trans i18nKey="banner.title" /></h1>
            <p className="banner-subtitle">{t('banner.subtitle')}</p>
            <a href="#contact" className="banner-cta">{t('banner.button')}</a>
        </div>
      </div>
      <img className="banner-image" src="/images/banner.jpg" alt="BarberShop" loading="lazy" />
    </section>
  );
};

export default BannerHome;
