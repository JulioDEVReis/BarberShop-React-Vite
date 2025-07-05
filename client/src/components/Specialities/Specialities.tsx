import "./Specialities.css";

interface Service {
    id: number;
    name: string;
    description: string;
    price: string;
    duration: string;
    icon: string;
    popular?: boolean;
}

const Specialities: React.FC = () => {
    const services: Service[] = [
        {
            id: 1,
            name: "Classic Cut",
            description: "Traditional cut with impeccable finish",
            price: "15€",
            duration: "30 min",
            icon: "✂️",
            popular: true
        },
        {
            id: 2,
            name: "Beard & Mustache",
            description: "Trimming and shaping with a traditional razor",
            price: "12€",
            duration: "25 min",
            icon: "🪒"
        },
        {
            id: 3,
            name: "Cut + Beard",
            description: "Complete male grooming package",
            price: "22€",
            duration: "50 min",
            icon: "💈",
            popular: true
        },
        {
            id: 4,
            name: "Hair Treatment",
            description: "Hidratação e revitalização do couro cabeludo",
            price: "25€",
            duration: "40 min",
            icon: "🧴"
        },
        {
            id: 5,
            name: "Modern Style",
            description: "Contemporary and stylish cuts",
            price: "18€",
            duration: "35 min",
            icon: "🎯"
        },
        {
            id: 6,
            name: "Facial Grooming",
            description: "Men's facial cleansing and care",
            price: "20€",
            duration: "30 min",
            icon: "🧖‍♂️"
        }
    ];

    return (
        <section className="specialities-section">
            <div className="specialities-container">
                <div className="section-header">
                    <span className="section-badge">Ours Services</span>
                    <h2 className="section-title">Premium Specialities - BarberShop</h2>
                    <p className="section-subtitle">
                        We offer a full range of men's grooming services with the highest quality in Viseu
                    </p>
                </div>
                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.id} className={`services-card ${service.popular ? 'popular' : ''}`}>
                            {service.popular && (
                                <div className="popular-badge">More Popular</div>
                            )}
                            <div className="service-icon">
                                <span>{service.icon}</span>
                            </div>
                            <div className="service-content">
                                <h3 className="service-name">{service.name}</h3>
                                <p className="service-description">{service.description}</p>
                                <div className="service-details">
                                    <div className="service-info">
                                        <span className="price">{service.price}</span>
                                        <span className="duration">{service.duration}</span>
                                    </div>
                                    <button className="book-button">Book Now!</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="section-footer">
                    <p className="footer-text">
                        Didn't find what you're looking for?<br />Contact us for personalized services.
                    </p>
                    <button className="contact-button">Contact Now!</button>
                </div>
            </div>
        </section>
  );
};

export default Specialities;
