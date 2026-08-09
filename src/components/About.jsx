import "../style/About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-inner">
        <div className="about-image">
          <img
            src="/images/photo9.jpg"
            alt="Woman silhouetted against the sunset, framing the sun with her hands"
            loading="lazy"
          />
        </div>

        <div className="about-content">
          <span className="eyebrow">About</span>
          <h2 className="section-heading">Placeholder Name</h2>
          <p>
            Placeholder bio — a paragraph about your background, how you got
            into photography, and the style you shoot in goes here.
          </p>
          <p>
            Placeholder bio — a second paragraph about your experience,
            favorite subjects, or what clients can expect when working with
            you goes here.
          </p>
        </div>
      </div>
    </section>
  );
}
