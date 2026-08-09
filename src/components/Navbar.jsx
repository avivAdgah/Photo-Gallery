import { useState } from "react";
import "../style/Navbar.css";

const links = [
  { href: "#home", label: "Home" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <a className="navbar-brand" href="#home" onClick={closeMenu}>
          Aviv Adgah
        </a>

        <nav
          className={`navbar-links ${isMenuOpen ? "navbar-links--open" : ""}`}
          aria-label="Primary"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="navbar-toggle"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className={`navbar-toggle-bar ${isMenuOpen ? "is-open" : ""}`} />
        </button>
      </div>
    </header>
  );
}
