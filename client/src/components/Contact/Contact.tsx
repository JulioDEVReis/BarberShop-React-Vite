import "./Contact.css"
import { useState } from "react";

const Contact = () => {
    const [promoOptIn, setPromoOptIn] = useState(false);

    return (
        <section className="contact-section">
            <div className="contact-container">
                <h2 className="contact-title">Contact & Booking</h2>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name *</label>
                        <input type="text" id="firstName" name="firstName" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name *</label>
                        <input type="text" id="lastName" name="lastName" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Mobile *</label>
                        <input type="tel" id="phone" name="phone" required pattern="[0-9]{9,15}" />
                    </div>
                    <div className="form-group radio-group">
                        <span>Receive promotions and campaign emails?</span>
                        <label>
                            <input type="radio" name="promo" value="yes" checked={promoOptIn} onChange={() => setPromoOptIn(true)} />
                            Yes
                        </label>
                        <label>
                            <input type="radio" name="promo" value="no" checked={!promoOptIn} onChange={() => setPromoOptIn(false)} />
                            No
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows={4} />
                    </div>
                    <button type="submit" className="contact-btn">Send</button>
                </form>
            </div>
        </section>
    );
};

export default Contact
