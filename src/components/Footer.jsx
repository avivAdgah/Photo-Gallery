import "../style/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-brand">Aviv Adgah</span>

        <nav className="footer-links" aria-label="Footer">
          <a href="#home">Home</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-social">
          <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="mailto:hello@example.com">Email</a>
        </div>

        <p className="footer-copyright">
          © {new Date().getFullYear()} Aviv Adgah. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
