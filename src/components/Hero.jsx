import "../style/Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-image">
        <img
          src="/images/photo2.jpg"
          alt="Silhouette of a couple kissing on the beach at sunset, framed by palm trees"
        />
      </div>

      <div className="hero-content container">
        <span className="eyebrow">Photography Portfolio</span>
        <h1 className="hero-title">Aviv Adgah</h1>
        <p className="hero-tagline">
          Placeholder tagline — a short line about your style and what you shoot
          goes here.
        </p>
        <a className="cta-button" href="#portfolio">
          View Portfolio
        </a>
      </div>
    </section>
  );
}
