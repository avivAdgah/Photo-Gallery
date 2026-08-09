import "../style/Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner">
        <span className="eyebrow">Contact</span>
        <h2 className="section-heading">Let&apos;s Work Together</h2>
        <p className="contact-lead">
          Placeholder text — a line inviting people to reach out for shoots,
          collaborations or prints.
        </p>

        <div className="contact-links">
          <a className="cta-button" href="mailto:hello@example.com">
            Book a Shoot
          </a>
          <a
            className="cta-button cta-button--outline"
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>

        <p className="contact-email">hello@example.com — placeholder email</p>
      </div>
    </section>
  );
}
