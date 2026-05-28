import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';

const SLIDES = [
  {
    tag: "FARMER'S CHOICE",
    logo: '/farmers-choice-logo.png',
    line1: 'Premium',
    line2: 'Caribbean Meats',
    desc: "Crafted with over 40 years of Barbadian heritage, seasoned with the perfect blend of local herbs and spices for true Caribbean flavour.",
  },
  {
    tag: 'FAMILY CHOICE',
    logo: '/family-choice-logo.png',
    line1: 'Hearty',
    line2: 'Luncheon Meats',
    desc: "Convenient, delicious, and seasoned to perfection. Our canned meats bring families together across the Caribbean for generations.",
  },
  {
    tag: 'BAR PAC',
    logo: '/bar-pac-logo.png',
    line1: 'Holiday',
    line2: 'Bone-In Hams',
    desc: "The centrepiece of every Caribbean holiday. Slow-smoked, tender bone-in hams that deliver the authentic taste of celebration.",
  },
];

const MARQUEE_ITEMS = [
  "FARMER'S CHOICE", 'FAMILY CHOICE', 'BAR PAC', 'EST. 1979',
  'BARBADOS', 'CARIBBEAN QUALITY', 'GODDARD GROUP',
  "FARMER'S CHOICE", 'FAMILY CHOICE', 'BAR PAC', 'EST. 1979',
  'BARBADOS', 'CARIBBEAN QUALITY', 'GODDARD GROUP',
];

const NAV_LINKS = [
  ['Home', '#'],
  ['Brands', '#brands'],
  ['Products', '#flavors'],
  ['Values', '#values'],
  ['Recipes', '#recipes'],
  ['Community', '#community'],
  ['Careers', '#careers'],
];

export default function Hero({ onBrandSelect }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActiveSlide(p => (p + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(id);
  }, [paused]);

  const goTo = (i) => {
    setActiveSlide(i);
    setPaused(true);
    onBrandSelect(i);
  };

  return (
    <header>
      {/* ── Navigation ── */}
      <nav className={`nav-v2 ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-v2-inner">
          <a href="#">
            <img src="/logo.png" alt="HIPAC Limited" className="nav-logo-img" />
          </a>

          <div className="nav-links-v2">
            {NAV_LINKS.map(([label, href]) => (
              <a key={label} href={href}>{label}</a>
            ))}
          </div>

          <div className="nav-actions-v2">
            <a href="#find-hipac" className="nav-cta">Where To Buy</a>
            <a
              href="#contact"
              className="btn-ghost"
              style={{ padding: '0.6rem', lineHeight: 1, borderRadius: '50%', width: '2.4rem', height: '2.4rem', justifyContent: 'center' }}
              title="Contact Hipac"
            >
              <Phone size={15} />
            </a>
          </div>

          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="mobile-nav-v2">
            {NAV_LINKS.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMobileOpen(false)}>{label}</a>
            ))}
            <a href="#find-hipac" onClick={() => setMobileOpen(false)} style={{ color: 'var(--gold)' }}>
              Where To Buy
            </a>
          </div>
        )}
      </nav>

      {/* ── Split-screen hero ── */}
      <div className="hero-v2">
        {/* Left: video panel */}
        <div className="hero-video-panel">
          <video className="hero-vid" autoPlay muted loop playsInline poster="/hero.png">
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="hero-vid-veil" />
        </div>

        {/* Right: content panel */}
        <div className="hero-content-panel">

          {/* Active brand logo — large */}
          <div style={{ marginBottom: '1.75rem' }}>
            <img
              src={SLIDES[activeSlide].logo}
              alt={SLIDES[activeSlide].tag}
              style={{
                height: '90px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.18))',
                transition: 'opacity 0.4s ease',
              }}
              onError={e => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback text tag if logo missing */}
            <div className="hero-brand-tag" style={{ display: 'none' }}>
              <span className="hero-dot-pulse" />
              {SLIDES[activeSlide].tag}
            </div>
          </div>

          <h1 className="hero-h1-v2">
            {SLIDES[activeSlide].line1}{' '}
            <em>{SLIDES[activeSlide].line2}</em>
          </h1>

          <p className="hero-desc-v2">{SLIDES[activeSlide].desc}</p>

          <div className="hero-btns-v2">
            <a href="#brands" className="btn-gold" onClick={() => onBrandSelect(activeSlide)}>
              Explore Brands <ArrowRight size={16} />
            </a>
            <a href="#flavors" className="btn-ghost">View Products</a>
          </div>

          {/* Brand logo switcher — replaces the line dots */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {SLIDES.map((slide, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={slide.tag}
                style={{
                  background: 'none',
                  border: activeSlide === i
                    ? '2px solid var(--gold)'
                    : '2px solid transparent',
                  borderRadius: '50%',
                  padding: '3px',
                  cursor: 'pointer',
                  transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
                  transform: activeSlide === i ? 'scale(1.12)' : 'scale(1)',
                  boxShadow: activeSlide === i
                    ? '0 0 0 3px rgba(249,158,27,0.2)'
                    : 'none',
                  opacity: activeSlide === i ? 1 : 0.5,
                  flexShrink: 0,
                }}
              >
                <img
                  src={slide.logo}
                  alt={slide.tag}
                  style={{
                    width: '48px',
                    height: '48px',
                    objectFit: 'contain',
                    borderRadius: '50%',
                    display: 'block',
                  }}
                  onError={e => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = 'var(--surface)';
                    e.target.parentElement.innerHTML +=
                      `<span style="font-size:0.55rem;font-weight:800;color:var(--text-s);letter-spacing:0.06em;padding:0 4px">${slide.tag.split(' ')[0]}</span>`;
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Bottom marquee */}
        <div className="hero-ticker-bar">
          <div className="hero-marquee">
            {MARQUEE_ITEMS.map((item, i) => (
              <span key={i} className="hero-marquee-item">
                {item}
                <span className="dot" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
