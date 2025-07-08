import "./Specialities.css";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

interface Service {
    id: number;
    price: string;
    duration: string;
    icon: string;
    popular?: boolean;
}

const Specialities: React.FC = () => {
    const { t } = useTranslation();

    const services: Service[] = [
        {
            id: 1,
            price: "15€",
            duration: "30 min",
            icon: "✂️",
            popular: true
        },
        {
            id: 2,
            price: "12€",
            duration: "25 min",
            icon: "🪒"
        },
        {
            id: 3,
            price: "22€",
            duration: "50 min",
            icon: "💈",
            popular: true
        },
        {
            id: 4,
            price: "25€",
            duration: "40 min",
            icon: "🧴"
        },
        {
            id: 5,
            price: "18€",
            duration: "35 min",
            icon: "🎯"
        },
        {
            id: 6,
            price: "20€",
            duration: "30 min",
            icon: "🧖‍♂️"
        }
    ];

    return (
        <section className="specialities-section" id="specialities">
            <div className="specialities-container">
                <div className="section-header">
                    <span className="section-badge">{t('specialities.badge')}</span>
                    <h2 className="section-title">{t('specialities.title')}</h2>
                    <p className="section-subtitle">{t('specialities.subtitle')}</p>
                </div>
                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.id} className={`services-card ${service.popular ? 'popular' : ''}`}>
                            {service.popular && (
                                <div className="popular-badge">{t('specialities.popular')}</div>
                            )}
                            <div className="service-icon">
                                <span>{service.icon}</span>
                            </div>
                            <div className="service-content">
                                <h3 className="service-name">{t(`specialities.services.id${service.id}.name`)}</h3>
                                <p className="service-description">{t(`specialities.services.id${service.id}.description`)}</p>
                                <div className="service-details">
                                    <div className="service-info">
                                        <span className="price">{service.price}</span>
                                        <span className="duration">{service.duration}</span>
                                    </div>
                                    <button className="book-button">{t('specialities.book')}</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="section-footer">
                    <p className="footer-text"><Trans i18nKey="specialities.footer" /></p>
                    <button className="contact-button">{t('specialities.button')}</button>
                </div>
            </div>
        </section>
  );
};

export default Specialities;
