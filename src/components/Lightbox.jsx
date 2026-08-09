import { useEffect } from "react";
import "../style/Lightbox.css";

export default function Lightbox({ photos, index, onClose, onPrev, onNext }) {
  const photo = photos[index];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <div className="lightbox" onClick={handleBackdropClick}>
      <button
        type="button"
        className="lightbox-close"
        aria-label="Close"
        onClick={onClose}
      >
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="1.5" />
          <line x1="20" y1="4" x2="4" y2="20" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>

      <button
        type="button"
        className="lightbox-nav lightbox-nav--prev"
        aria-label="Previous photo"
        onClick={onPrev}
      >
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
          <polyline
            points="15 4 7 12 15 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </button>

      <figure className="lightbox-content">
        <img src={photo.src} alt={photo.alt} />
        <figcaption>
          <span className="lightbox-category">{photo.category}</span>
          <span className="lightbox-title">{photo.title}</span>
          <span className="lightbox-description">{photo.description}</span>
        </figcaption>
      </figure>

      <button
        type="button"
        className="lightbox-nav lightbox-nav--next"
        aria-label="Next photo"
        onClick={onNext}
      >
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
          <polyline
            points="9 4 17 12 9 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </button>
    </div>
  );
}
