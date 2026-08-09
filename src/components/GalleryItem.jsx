export default function GalleryItem({ photo, onOpen }) {
  return (
    <li className="gallery-item">
      <button
        type="button"
        className="gallery-item-button"
        onClick={onOpen}
        aria-label={`Open photo: ${photo.title}`}
      >
        <img src={photo.src} alt={photo.alt} loading="lazy" />
        <span className="gallery-item-overlay">
          <span className="gallery-item-category">{photo.category}</span>
          <span className="gallery-item-title">{photo.title}</span>
        </span>
      </button>
    </li>
  );
}
