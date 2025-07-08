import "./Contact.css"
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();
    const [promoOptIn, setPromoOptIn] = useState(false);

    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <h2 className="contact-title">{t('contact.title')}</h2>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="firstName">{t('contact.form.first-name')}</label>
                        <input type="text" id="firstName" name="firstName" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">{t('contact.form.last-name')}</label>
                        <input type="text" id="lastName" name="lastName" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">{t('contact.form.mobile')}</label>
                        <input type="tel" id="phone" name="phone" required pattern="[0-9]{9,15}" />
                    </div>
                    <div className="form-group radio-group">
                        <span>{t('contact.form.radio-button.text')}</span>
                        <label>
                            <input type="radio" name="promo" value="yes" checked={promoOptIn} onChange={() => setPromoOptIn(true)} />
                            {t('contact.form.radio-button.yes')}
                        </label>
                        <label>
                            <input type="radio" name="promo" value="no" checked={!promoOptIn} onChange={() => setPromoOptIn(false)} />
                            {t('contact.form.radio-button.no')}
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">{t('contact.form.message')}</label>
                        <textarea id="message" name="message" rows={4} />
                    </div>
                    <button type="submit" className="contact-btn">{t('contact.form.button')}</button>
                </form>
            </div>
        </section>
    );
};

export default Contact
