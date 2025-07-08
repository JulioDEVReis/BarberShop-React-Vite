import { useEffect, useRef, useState } from "react";
import "./Gallery.css"
import { useTranslation } from "react-i18next";

const galleryImages = [
    { id: 1, src: "/images/barber1.jpg" },
    { id: 2, src: "/images/barber2.jpg" },
    { id: 3, src: "/images/gallery1.jpg" },
    { id: 4, src: "/images/gallery2.jpg" },
    { id: 5, src: "/images/barber5.jpg" },
];

const AUTO_PLAY_INTERVAL = 2500;  // Tempo em ms

const Gallery = () => {
    const { t } = useTranslation();
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (!paused) {
            timeoutRef.current = setTimeout(() => {
                setCurrent((prev) => (prev + 1) % galleryImages.length);
            }, AUTO_PLAY_INTERVAL);
        }
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [current, paused]);
    
    const handleMouseEnter = () => setPaused(true);
    const handleMouseLeave = () => setPaused(false);

    return (
        <section className="gallery-section" id="gallery">
            <h2 className="gallery-title">{t('gallery.title')}</h2>
            <div className="gallery-carousel" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {galleryImages.map((img, idx) => (
                    <div className={`gallery-card${idx === current ? " active" : ""}`} key={idx} style={{
                        transform: `translateX(${(idx - current) * 100}%)`,
                        transition: "transform 0.7s cubic-bezier(.6, .01, .19, .99)"
                    }}>
                        <img src={img.src} alt={t(`gallery.images.alt${img.id}`)} />
                        <div className="gallery-caption">{t(`gallery.images.alt${img.id}`)}</div>
                    </div>
                ))}
            </div>
            <div className="gallery-dots">
                {galleryImages.map((_, idx) => (
                    <button key={idx} className={`dot${idx === current ? " active" : ""}`} onClick={() => setCurrent(idx)} aria-label={`Go to slide ${idx + 1}`} />
                ))}
            </div>
        </section>
    )
}

export default Gallery
