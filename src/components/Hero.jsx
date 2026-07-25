import React from 'react';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-badge reveal in">
        <span className="pulse" /> Available for internships &amp; projects · 2026
      </div>

      <h1 className="hero-title">
        <span className="line reveal in"><span>Hi, I'm</span></span>
        <span className="line reveal in accent-line"><span>Shishir Khattri</span></span>
      </h1>

      <p className="hero-sub reveal in">
        CS undergraduate crafting software where <strong>engineering meets design</strong>.
        Building intelligent AI workflows, automated systems, and clean web applications.
      </p>

      <div className="hero-cta reveal in">
        <a href="#work" className="btn btn-primary" data-magnetic>
          View my work <i className="fa-solid fa-arrow-right" />
        </a>
        <a href="#contact" className="btn btn-ghost" data-magnetic>
          Get in touch
        </a>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
}
