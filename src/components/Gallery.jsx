import { useMemo, useState } from "react";
import { categories, photos } from "../data/photos";
import GalleryItem from "./GalleryItem";
import "../style/Gallery.css";

export default function Gallery({ onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPhotos = useMemo(
    () =>
      activeCategory === "All"
        ? photos
        : photos.filter((photo) => photo.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="portfolio" className="section gallery">
      <div className="container">
        <h2 className="section-heading">Portfolio</h2>

        <div className="gallery-filters" role="group" aria-label="Filter by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`gallery-filter ${
                category === activeCategory ? "gallery-filter--active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <ul className="gallery-grid">
          {filteredPhotos.map((photo, index) => (
            <GalleryItem
              key={photo.id}
              photo={photo}
              onOpen={() => onOpenLightbox(filteredPhotos, index)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
