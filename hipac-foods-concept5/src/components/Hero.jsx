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
    img: 'https://images.unsplash.com/photo-1601493700631-2851b0b7da32?w=300&auto=format&fit=crop',
    label: 'Scotch Bonnet', size: 108,
    pos: { top: '10%', right: '4%' }, delay: 0,
  },
  {
    img: 'https://images.unsplash.com/photo-1527324688151-0e627063f2b1?w=300&auto=format&fit=crop',
    label: 'Allspice', size: 80,
    pos: { top: '38%', right: '2%' }, delay: 0.6,
  },
  {
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&auto=format&fit=crop',
    label: 'Fresh Herbs', size: 92,
    pos: { bottom: '14%', right: '10%' }, delay: 1.1,
  },
  {
    img: null, label: 'Jerk\nSpice', size: 88, dark: true,
    pos: { top: '18%', right: '18%' }, delay: 0.35,
  },
  {
    img: 'https://images.unsplash.com/photo-1490885578174-acda8905c2c6?w=300&auto=format&fit=crop',
    label: 'Pineapple', size: 76,
    pos: { bottom: '22%', right: '2%' }, delay: 1.5,
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
          <source src="./make_the_hamburger_move_202605262153.mp4" type="video/mp4" />
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

        {/* Floating ingredient bubbles — right side */}
        {BUBBLES.map((b, i) => (
          <div
            key={i}
            className={`c5-bubble${b.dark ? ' dark' : ''}`}
            style={{
              width: b.size,
              height: b.size,
              animationDelay: `${b.delay}s`,
              ...b.pos,
            }}
          >
            {b.img
              ? <img src={b.img} alt={b.label} className="c5-bubble-img" />
              : <span className="c5-bubble-lbl">{b.label}</span>
            }
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
