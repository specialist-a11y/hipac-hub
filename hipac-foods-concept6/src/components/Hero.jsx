import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const NAV_LINKS = [
  ['Home', '#'],
  ['Brands', '#brands'],
  ['Products', '#flavors'],
  ['Values', '#values'],
  ['Recipes', '#recipes'],
  ['Community', '#community'],
  ['Careers', '#careers'],
];

const BUBBLES = [
  {
    img: './farmers-choice-logo.png',
    label: "Farmer's Choice", size: 110, logo: true,
    pos: { top: '12%', right: '5%' }, delay: 0,
  },
  {
    img: './family-choice-logo.png',
    label: 'Family Choice', size: 96, logo: true,
    pos: { top: '44%', right: '2%' }, delay: 0.65,
  },
  {
    img: './bar-pac-logo.png',
    label: 'Bar Pac', size: 102, logo: true,
    pos: { bottom: '18%', right: '10%' }, delay: 1.2,
  },
];

export default function Hero({ onBrandSelect }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header>
      <nav className={`nav-c5 ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-c5-inner">
          <a href="#">
            <img src="./logo.png" alt="HIPAC Foods" className="nav-logo-img" />
          </a>
          <div className="nav-links-c5">
            {NAV_LINKS.map(([label, href]) => (
              <a key={label} href={href}>{label}</a>
            ))}
          </div>
          <a href="#find-hipac" className="nav-cta-c5">Where To Buy</a>
          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {mobileOpen && (
          <div className="mobile-nav-c5">
            {NAV_LINKS.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMobileOpen(false)}>{label}</a>
            ))}
            <a href="#find-hipac" onClick={() => setMobileOpen(false)}>Where To Buy</a>
          </div>
        )}
      </nav>

      <div className="hero-c5">
        {/* Full-bleed background video */}
        <video
          className="hero-c5-bg-vid"
          autoPlay muted loop playsInline
          poster="./hero.png"
        >
          <source src="./Add_nuggets_to_hamburger_202605262322.mp4" type="video/mp4" />
        </video>

        {/* Split color overlays — video shows through both tints */}
        <div className="hero-c5-overlay-left" />
        <div className="hero-c5-overlay-right" />

        {/* Text content — left side */}
        <div className="hero-c5-content">
          <p className="hero-c5-est">Est. 1979 · Barbados</p>
          <h1 className="hero-c5-wordmark">
            <span>HIPAC</span>
            <span>FOODS</span>
          </h1>
          <p className="hero-c5-tagline">
            The Taste of Authentic<br />Caribbean Freshness
          </p>
          <div className="hero-c5-btns">
            <a
              href="#brands"
              className="c5-btn-primary"
              onClick={() => onBrandSelect && onBrandSelect(0)}
            >
              Explore Brands <ArrowRight size={14} />
            </a>
            <a href="#flavors" className="c5-btn-ghost">View Products</a>
          </div>
        </div>

        {/* Brand logo bubbles — right side */}
        {BUBBLES.map((b, i) => (
          <div
            key={i}
            className={`c5-bubble${b.logo ? ' logo' : ''}`}
            style={{
              width: b.size,
              height: b.size,
              animationDelay: `${b.delay}s`,
              ...b.pos,
            }}
          >
            <img src={b.img} alt={b.label} className={b.logo ? 'c5-bubble-logo' : 'c5-bubble-img'} />
          </div>
        ))}

        {/* Scroll cue */}
        <div className="hero-c5-scroll-cue">
          <span />
          <span />
          <span />
        </div>
      </div>
    </header>
  );
}
