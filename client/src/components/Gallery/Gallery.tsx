import { useEffect, useRef, useState } from "react";
import "./Gallery.css"

const galleyImages = [
    { src: "src/assets/images/barber1.jpg", alt: "Beard" },
    { src: "src/assets/images/barber2.jpg", alt: "Styled Beard" },
    { src: "src/assets/images/gallery1.jpg", alt: "Undercut" },
    { src: "src/assets/images/gallery2.jpg", alt: "Classic Cut" },
    { src: "src/assets/images/barber5.jpg", alt: "Modern HairCut" },
];

const AUTO_PLAY_INTERVAL = 2500;  // Tempo em ms

const Gallery = () => {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (!paused) {
            timeoutRef.current = setTimeout(() => {
                setCurrent((prev) => (prev + 1) % galleyImages.length);
            }, AUTO_PLAY_INTERVAL);
        }
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [current, paused]);
    
    const handleMouseEnter = () => setPaused(true);
    const handleMouseLeave = () => setPaused(false);

    return (
        <section className="gallery-section">
            <h2 className="gallery-title">Our Wonderful Work</h2>
            <div className="gallery-carousel" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {galleyImages.map((img, idx) => (
                    <div className={`gallery-card${idx === current ? " active" : ""}`} key={idx} style={{
                        transform: `translateX(${(idx - current) * 100}%)`,
                        transition: "transform 0.7s cubic-bezier(.6, .01, .19, .99)"
                    }}>
                        <img src={img.src} alt={img.alt} />
                        <div className="gallery-caption">{img.alt}</div>
                    </div>
                ))}
            </div>
            <div className="gallery-dots">
                {galleyImages.map((_, idx) => (
                    <button key={idx} className={`dot${idx === current ? " active" : ""}`} onClick={() => setCurrent(idx)} aria-label={`Go to slide ${idx + 1}`} />
                ))}
            </div>
        </section>
    )
}

export default Gallery
