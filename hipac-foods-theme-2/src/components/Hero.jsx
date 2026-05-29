import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Phone, Play, Pause } from 'lucide-react';

export default function Hero({ onBrandSelect, activeTheme, onThemeSelect }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const videoRef = useRef(null);

  const storytellingSlides = [
    {
      title: "Nothing Less Than the Best",
      subtitle: "Farmer's Choice Premium Meats",
      description: "Crafted with over 40 years of authentic Barbadian heritage, seasoned with the perfect blend of local herbs and spices for true Caribbean flavour.",
      tag: "FARMER'S CHOICE",
      color: "var(--farmers-green)",
      bgGradient: "linear-gradient(135deg, rgba(16, 44, 28, 0.95), rgba(10, 10, 12, 0.98))",
      image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1920&auto=format&fit=crop"
    },
    {
      title: "Hearty Family Meals",
      subtitle: "Family Choice Luncheon Meats",
      description: "Convenient, delicious, and seasoned to perfection. Our canned meats bring families together across the Caribbean for generations.",
      tag: "FAMILY CHOICE",
      color: "var(--family-red)",
      bgGradient: "linear-gradient(135deg, rgba(46, 12, 10, 0.95), rgba(10, 10, 12, 0.98))",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1920&auto=format&fit=crop"
    },
    {
      title: "Caribbean Tradition",
      subtitle: "Bar Pac Bone-In Hams",
      description: "The centrepiece of every Caribbean holiday. Slow-smoked, tender bone-in hams that deliver the authentic taste of celebration.",
      tag: "BAR PAC",
      color: "var(--barpac-burgundy)",
      bgGradient: "linear-gradient(135deg, rgba(38, 10, 20, 0.95), rgba(10, 10, 12, 0.98))",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1920&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    const slideInterval = setInterval(() => {
      if (isVideoPlaying) {
        setActiveSlide((prev) => (prev + 1) % storytellingSlides.length);
      }
    }, 6000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(slideInterval);
    };
  }, [isVideoPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVideoPlaying]);

  return (
    <header className="hero-wrapper">
      {/* Huge Full-Bleed Background Video (LaCroix Inspired) */}
      <div className="hero-bg-media">
        <video
          ref={videoRef}
          src="/hipac-hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0
          }}
        />
        {/* Transparent dark gradient mask overlay */}
        <div 
          className="hero-slide-overlay"
          style={{
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 65%, rgba(0, 0, 0, 0.6) 100%)',
            zIndex: 1,
            position: 'absolute',
            inset: 0
          }}
        />
        {/* Soft glows */}
        <div className="bg-glow w-[500px] h-[500px]" style={{ top: '10%', right: '5%', background: 'rgba(16, 185, 129, 0.15)', zIndex: 2 }} />
        <div className="bg-glow w-[400px] h-[400px]" style={{ bottom: '20%', left: '5%', background: 'rgba(245, 158, 11, 0.08)', zIndex: 2 }} />
      </div>

      {/* Sticky Navigation Header */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="logo-link group">
            <img 
              src="/logo.png" 
              alt="HIPAC Limited Logo" 
              className="logo-image" 
            />
          </a>

          {/* Desktop Links */}
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#brands">Brands</a>
            <a href="#flavors">Products</a>
            <a href="#ingredients">Values</a>
            <a href="#recipes">Recipes</a>
            <a href="#careers">Careers</a>
          </div>

          {/* Desktop Actions */}
          <div className="nav-actions">
            {/* Dynamic Theme Picker Widget */}
            <div className="theme-picker-widget" title="Select Theme Palette">
              <button 
                onClick={() => onThemeSelect('sand')}
                className={`theme-opt-btn ${activeTheme === 'sand' ? 'active' : ''}`}
                style={{ backgroundColor: '#fcf8f2' }}
                title="Sand & Cream Theme (Lighter Version 1)"
              >
                🥪
              </button>
              <button 
                onClick={() => onThemeSelect('breeze')}
                className={`theme-opt-btn ${activeTheme === 'breeze' ? 'active' : ''}`}
                style={{ backgroundColor: '#f5fbff' }}
                title="Sea Breeze Theme (Lighter Version 2)"
              >
                🌊
              </button>
              <button 
                onClick={() => onThemeSelect('farm')}
                className={`theme-opt-btn ${activeTheme === 'farm' ? 'active' : ''}`}
                style={{ backgroundColor: '#f5fff8' }}
                title="Organic Farm Theme (Lighter Version 3)"
              >
                🌿
              </button>
            </div>

            <a href="#find-hipac" className="btn-outline">
              Where To Buy
            </a>
            <a href="#contact" className="btn-icon-circle" title="Contact Hipac">
              <Phone size={16} />
            </a>
          </div>

          {/* Hamburger Mobile Toggle */}
          <button 
            className="menu-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-nav flex">
            <a href="#" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#brands" onClick={() => setMobileMenuOpen(false)}>Brands</a>
            <a href="#flavors" onClick={() => setMobileMenuOpen(false)}>Products</a>
            <a href="#ingredients" onClick={() => setMobileMenuOpen(false)}>Values</a>
            <a href="#recipes" onClick={() => setMobileMenuOpen(false)}>Recipes</a>
            <a href="#careers" onClick={() => setMobileMenuOpen(false)}>Careers</a>
            
            <hr style={{ border: 'none', height: '1px', background: 'var(--border-color)', margin: '0.5rem 0' }} />
            
            {/* Mobile Theme Selector */}
            <div className="flex flex-col gap-xs" style={{ margin: '0.5rem 0', alignItems: 'flex-start' }}>
              <span className="selector-label" style={{ fontSize: '0.65rem' }}>Select Theme Palette</span>
              <div className="theme-picker-widget" style={{ width: 'max-content' }}>
                <button 
                  onClick={() => onThemeSelect('sand')}
                  className={`theme-opt-btn ${activeTheme === 'sand' ? 'active' : ''}`}
                  style={{ backgroundColor: '#fcf8f2' }}
                >
                  🥪
                </button>
                <button 
                  onClick={() => onThemeSelect('breeze')}
                  className={`theme-opt-btn ${activeTheme === 'breeze' ? 'active' : ''}`}
                  style={{ backgroundColor: '#f5fbff' }}
                >
                  🌊
                </button>
                <button 
                  onClick={() => onThemeSelect('farm')}
                  className={`theme-opt-btn ${activeTheme === 'farm' ? 'active' : ''}`}
                  style={{ backgroundColor: '#f5fff8' }}
                >
                  🌿
                </button>
              </div>
            </div>

            <hr style={{ border: 'none', height: '1px', background: 'var(--border-color)', margin: '0.5rem 0' }} />

            <div className="flex gap-sm">
              <a 
                href="#find-hipac"
                className="btn-outline flex-1"
                style={{ textAlign: 'center' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Where To Buy
              </a>
              <a 
                href="#contact"
                className="btn-outline"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone size={16} />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Hero Context */}
      <div className="container hero-main" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', zIndex: 10 }}>
        <div className="flex flex-col align-center text-center justify-center w-full" style={{ gap: '2rem', maxWidth: '850px', padding: '2rem', margin: '0 auto' }}>
          <div 
            className="badge animate-bounce-slow" 
            style={{ 
              background: 'rgba(255, 255, 255, 0.12)', 
              backdropFilter: 'blur(10px)', 
              WebkitBackdropFilter: 'blur(10px)', 
              border: '1px solid rgba(255, 255, 255, 0.25)', 
              color: '#fff', 
              fontSize: '0.8rem',
              margin: '0 auto'
            }}
          >
            🌴 BARBADOS' FINEST QUALITY SINCE 1979
          </div>

          <h1 className="hero-h1 text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 5.25rem)', color: '#fff', fontWeight: 900, lineHeight: '1.05', textShadow: '0 4px 20px rgba(0,0,0,0.65)' }}>
            SAVOUR THE TRUE <span style={{ color: '#f59e0b', textShadow: '0 4px 20px rgba(245, 158, 11, 0.35)' }}>CARIBBEAN</span> FLAVOUR
          </h1>

          <p className="hero-description text-white" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: 'rgba(255, 255, 255, 0.92)', textShadow: '0 2px 12px rgba(0,0,0,0.55)', lineHeight: '1.6', margin: '0 auto', maxWidth: '680px' }}>
            From our signature hickory-smoked bacon to slow-cured picnic hams and rich protein staples, we bring quality and convenience to every Caribbean home.
          </p>

          {/* In-Hero Slide Indicators */}
          <div style={{ display: 'flex', gap: '0.75rem', margin: '0.5rem auto', justifyContent: 'center' }}>
            {storytellingSlides.map((slide, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                style={{
                  width: activeSlide === idx ? '2rem' : '0.5rem',
                  height: '0.5rem',
                  borderRadius: '100px',
                  backgroundColor: activeSlide === idx ? '#f59e0b' : 'rgba(255, 255, 255, 0.3)',
                  border: 'none',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                title={`View ${slide.tag}`}
              />
            ))}
          </div>

          <div className="hero-btn-group justify-center" style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap', width: '100%' }}>
            <a
              href="#brands"
              onClick={() => onBrandSelect(activeSlide)}
              className="btn-primary-glow"
              style={{
                backgroundColor: '#f59e0b',
                color: '#fff',
                border: 'none',
                boxShadow: '0 10px 25px rgba(245, 158, 11, 0.45)',
                padding: '1.15rem 2.75rem',
                fontSize: '0.85rem'
              }}
            >
              Explore Brands
              <ArrowRight size={16} />
            </a>
            <button 
              onClick={() => setIsVideoPlaying(!isVideoPlaying)}
              className="btn-secondary-outline"
              style={{
                background: 'rgba(255, 255, 255, 0.12)',
                color: '#fff',
                borderColor: 'rgba(255, 255, 255, 0.35)',
                padding: '1.15rem 2.25rem',
                fontSize: '0.85rem'
              }}
            >
              {isVideoPlaying ? <Pause size={16} /> : <Play size={16} />}
              {isVideoPlaying ? 'Pause Story' : 'Play Story'}
            </button>
          </div>
        </div>
      </div>

      {/* Brand Ticker Footer */}
      <div className="hero-footer-ticker">
        <div className="container ticker-wrapper">
          <div className="ticker-label">TRUSTED CARIBBEAN QUALITY</div>
          <div className="ticker-brands">
            <span onClick={() => onBrandSelect(0)}>FARMER'S CHOICE</span>
            <span onClick={() => onBrandSelect(1)}>FAMILY CHOICE</span>
            <span onClick={() => onBrandSelect(2)}>BAR PAC</span>
            <span style={{ color: 'var(--text-secondary)', cursor: 'default' }}>Goddard Group</span>
          </div>
        </div>
      </div>
    </header>
  );
}
