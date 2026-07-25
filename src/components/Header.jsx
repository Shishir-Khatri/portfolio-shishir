import React, { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`} id="nav">
      <a href="#hero" className="nav-logo" aria-label="Home">
        Shishir<span className="logo-dot">.</span>
      </a>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Primary">
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>

      <div className="nav-actions">
        {/* Downloadable Resume button replacing theme dropdown */}
        <a
          href="/Shishir_Khattri_Resume.pdf"
          download="Shishir_Khattri_Resume.pdf"
          className="resume-btn"
          aria-label="Download Resume"
          title="Download Resume"
        >
          <i className="fa-solid fa-file-arrow-down resume-icon" />
          <span>Resume</span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
