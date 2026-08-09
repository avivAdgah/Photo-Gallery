import { useCallback, useState } from "react";
import { photos } from "./data/photos";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Lightbox from "./components/Lightbox";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [lightboxPhotos, setLightboxPhotos] = useState(photos);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = useCallback((photoList, index) => {
    setLightboxPhotos(photoList);
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrev = useCallback(() => {
    setLightboxIndex((current) => (current - 1 + lightboxPhotos.length) % lightboxPhotos.length);
  }, [lightboxPhotos.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((current) => (current + 1) % lightboxPhotos.length);
  }, [lightboxPhotos.length]);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Gallery onOpenLightbox={openLightbox} />
      <About />
      <Contact />
      <Footer />

      {lightboxIndex !== null && (
        <Lightbox
          photos={lightboxPhotos}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </div>
  );
}

export default App;
