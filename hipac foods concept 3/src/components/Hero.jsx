import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, Play, Pause, RotateCw, CheckCircle, Award } from 'lucide-react';

export default function Hero({ onBrandSelect, activeTheme, onThemeSelect }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const brands = [
    {
      name: "Farmer's Choice",
      tagline: "True Caribbean Flavour",
      flagship: "Premium Hickory Bacon",
      description: "Our legendary hickory-smoked sliced bacon is seasoned with local spices and cured to absolute perfection. Crispy, savoury, and unmistakably Barbadian.",
      color: "var(--farmers-green)",
      accentColor: "#f59e0b",
      features: ["Naturally Hickory Smoked", "Unique Local Spice Cure", "Gluten & Soy Free"],
      dimensions: {
        width: 380,
        height: 230,
        depth: 16
      },
      useImageFront: true,
      imageFront: "/bacon-package.png",
      useImageBack: true,
      imageBack: "/bacon-package-back.png",
      boxColors: {
        front: "transparent",
        back: "linear-gradient(135deg, #0c5a2f, #083c1f)",
        right: "rgba(12, 90, 47, 0.8)",
        left: "rgba(12, 90, 47, 0.8)",
        top: "rgba(245, 158, 11, 0.9)",
        bottom: "rgba(5, 34, 16, 0.8)"
      }
    },
    {
      name: "Family Choice",
      tagline: "Convenience & Quality",
      flagship: "Spicy Canned Luncheon Meat",
      description: "A beloved household staple packed with rich, savoury protein and spiced with select hot peppers. Ideal for fried breakfast slices, sandwiches, and quick dinners.",
      color: "var(--family-red)",
      accentColor: "#fb923c",
      features: ["Spicy & Smoked Options", "Fully Prepared & Canned", "Halal Certified Available"],
      dimensions: {
        width: 190,
        height: 250,
        depth: 130
      },
      useImageFront: false,
      boxColors: {
        front: "linear-gradient(135deg, #b91c1c, #991b1b)",
        back: "linear-gradient(135deg, #991b1b, #7f1d1d)",
        right: "#7f1d1d",
        left: "#7f1d1d",
        top: "#fb923c",
        bottom: "#450a0a"
      }
    },
    {
      name: "Bar Pac",
      tagline: "Celebrations & Feasts",
      flagship: "Traditional Bone-In Ham",
      description: "The pride of Bajan holiday feasts. Slow-smoked bone-in picnic hams cured with a signature sweet clove glaze that melts in your mouth with every slice.",
      color: "var(--barpac-burgundy)",
      accentColor: "#ec4899",
      features: ["Premium Bone-In Picnic Ham", "Sweet Clove Cure", "Centrepiece Quality"],
      dimensions: {
        width: 230,
        height: 240,
        depth: 180
      },
      useImageFront: false,
      boxColors: {
        front: "linear-gradient(135deg, #6b21a8, #4c1d95)",
        back: "linear-gradient(135deg, #4c1d95, #3b0764)",
        right: "#3b0764",
        left: "#3b0764",
        top: "#ec4899",
        bottom: "#1e1b4b"
      }
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [rotations, setRotations] = useState([0, 0, 0]);
  const dragStart = useRef({ x: 0, rot: 0 });
  const isDragging = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Auto spin rotation trigger
    const spinInterval = setInterval(() => {
      if (isVideoPlaying && !isDragging.current) {
        setRotations(prev => {
          const updated = [...prev];
          updated[activeSlide] = updated[activeSlide] + 0.35;
          return updated;
        });
      }
    }, 16);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(spinInterval);
    };
  }, [isVideoPlaying, activeSlide]);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    dragStart.current = {
      x: e.clientX,
      rot: rotations[activeSlide]
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - dragStart.current.x;
    const speed = 0.8;
    const newRot = dragStart.current.rot + deltaX * speed;
    setRotations(prev => {
      const updated = [...prev];
      updated[activeSlide] = newRot;
      return updated;
    });
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e) => {
    isDragging.current = true;
    dragStart.current = {
      x: e.touches[0].clientX,
      rot: rotations[activeSlide]
    };
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const deltaX = e.touches[0].clientX - dragStart.current.x;
    const speed = 0.8;
    const newRot = dragStart.current.rot + deltaX * speed;
    setRotations(prev => {
      const updated = [...prev];
      updated[activeSlide] = newRot;
      return updated;
    });
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const selectBrand = (idx) => {
    setActiveSlide(idx);
    if (onBrandSelect) {
      onBrandSelect(idx);
    }
  };

  const autoSpin = () => {
    setRotations(prev => {
      const updated = [...prev];
      updated[activeSlide] = updated[activeSlide] + 360;
      return updated;
    });
  };

  const currentBrand = brands[activeSlide];
  const { width, height, depth } = currentBrand.dimensions;

  return (
    <header className="hero-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      
      {/* Dynamic Background Glows */}
      <div className="hero-bg-media" style={{ zIndex: 0 }}>
        <div 
          className="bg-glow w-[600px] h-[600px]" 
          style={{ 
            top: '-10%', 
            left: '-10%', 
            backgroundColor: `hsla(${currentBrand.color}, 0.12)`, 
            transition: 'background-color 1s ease' 
          }}
        />
        <div 
          className="bg-glow w-[500px] h-[500px]" 
          style={{ 
            bottom: '-10%', 
            right: '-10%', 
            backgroundColor: `${currentBrand.accentColor}08`, 
            transition: 'background-color 1s ease' 
          }}
        />
      </div>

      {/* Sticky Navigation Header */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} style={{ zIndex: 100 }}>
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
            <a href="#brands">Showcase</a>
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
                title="Sand & Cream Theme"
              >
                🥪
              </button>
              <button 
                onClick={() => onThemeSelect('breeze')}
                className={`theme-opt-btn ${activeTheme === 'breeze' ? 'active' : ''}`}
                style={{ backgroundColor: '#f5fbff' }}
                title="Sea Breeze Theme"
              >
                🌊
              </button>
              <button 
                onClick={() => onThemeSelect('farm')}
                className={`theme-opt-btn ${activeTheme === 'farm' ? 'active' : ''}`}
                style={{ backgroundColor: '#f5fff8' }}
                title="Organic Farm Theme"
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
            <a href="#brands" onClick={() => setMobileMenuOpen(false)}>Showcase</a>
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

      {/* Main Showcase Hero Section */}
      <div className="container hero-main" style={{ zIndex: 10, flex: 1, display: 'flex', alignItems: 'center', paddingSelf: '8rem 0 4rem' }}>
        <div className="grid grid-12 align-center w-full">
          
          {/* Left Column: Interactive Brand Controller */}
          <div className="hero-col-left" style={{ gridColumn: 'span 6', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}>
            
            {/* Brand Switcher Pills */}
            <div className="brand-pills" style={{ justifyContent: 'flex-start', margin: 0, gap: '0.5rem' }}>
              {brands.map((brand, idx) => (
                <button
                  key={idx}
                  onClick={() => selectBrand(idx)}
                  className={`pill-btn ${activeSlide === idx ? 'active' : ''}`}
                  style={{
                    backgroundColor: activeSlide === idx ? `hsl(${brand.color})` : 'transparent',
                    color: activeSlide === idx ? '#fff' : 'var(--text-secondary)',
                    borderColor: 'var(--border-color)',
                    padding: '0.5rem 1.25rem',
                    fontSize: '0.7rem'
                  }}
                >
                  {brand.name}
                </button>
              ))}
            </div>

            <div className="badge">
              <span className="hero-badge-glow" style={{ backgroundColor: `hsl(${currentBrand.color})` }} />
              {currentBrand.tagline.toUpperCase()}
            </div>

            <h1 className="hero-h1" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.75rem)', lineHeight: '1.1' }}>
              {currentBrand.name.toUpperCase()}<br/>
              <span 
                className="hero-span-gradient"
                style={{ 
                  '--span-gradient': `linear-gradient(to right, hsl(${currentBrand.color}), ${currentBrand.accentColor})`
                }}
              >
                {currentBrand.flagship}
              </span>
            </h1>

            <p className="hero-description" style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              {currentBrand.description}
            </p>

            {/* Bullet list of features */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', margin: '0.5rem 0' }}>
              {currentBrand.features.map((feature, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  <CheckCircle size={16} style={{ color: `hsl(${currentBrand.color})` }} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="hero-btn-group">
              <a href="#flavors" className="btn-primary-glow" style={{ backgroundColor: `hsl(${currentBrand.color})`, color: '#fff', boxShadow: 'none' }}>
                Explore Products
                <ArrowRight size={16} />
              </a>
              <button 
                onClick={autoSpin}
                className="btn-secondary-outline"
                style={{ gap: '0.5rem' }}
              >
                <RotateCw size={14} />
                <span>360° Spin</span>
              </button>
            </div>
          </div>

          {/* Right Column: Immersive 3D Package Rotator Canvas */}
          <div className="hero-col-right" style={{ gridColumn: 'span 6', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', minHeight: '420px', justifyContent: 'center' }}>
            
            <div style={{ position: 'absolute', top: 0, fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', opacity: 0.8 }} className="animate-pulse">
              <RotateCw size={12} />
              <span>Drag package to spin & view details</span>
            </div>

            <div className="perspective-canvas" style={{ marginTop: '2rem' }}>
              <div
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className="box-3d"
                style={{
                  width: `${width}px`,
                  height: `${height}px`,
                  transform: `rotateX(-10deg) rotateY(${rotations[activeSlide]}deg) scale(1.1)`,
                  transition: isDragging.current ? 'none' : 'transform 0.5s ease-out',
                  zIndex: 10
                }}
              >
                {/* Front Face */}
                <div
                  className="face face-front"
                  style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    transform: `translateZ(${depth / 2}px)`,
                    background: currentBrand.useImageFront ? `url('${currentBrand.imageFront}') no-repeat center/contain` : currentBrand.boxColors.front,
                    backgroundColor: currentBrand.useImageFront ? 'transparent' : 'initial',
                    boxShadow: currentBrand.useImageFront ? 'none' : 'inset 0 0 40px rgba(0,0,0,0.5)',
                    border: currentBrand.useImageFront ? 'none' : '1px solid rgba(255, 255, 255, 0.12)',
                    padding: currentBrand.useImageFront ? '0' : '1.5rem',
                  }}
                >
                  {!currentBrand.useImageFront && (
                    <>
                      <div className="flex justify-between align-center">
                        <span style={{ fontSize: '9px', fontWeight: 900, letterSpacing: '0.15em', background: 'rgba(0,0,0,0.3)', padding: '0.2rem 0.5rem', borderRadius: '100px', color: '#fff' }}>
                          BARBADOS
                        </span>
                        <Award size={16} style={{ color: '#fb923c' }} />
                      </div>
                      
                      <div className="flex flex-col align-center" style={{ textAlign: 'center', gap: '0.25rem' }}>
                        <span style={{ fontSize: '9px', fontWeight: 800, textTransform: 'uppercase', color: '#fb923c', letterSpacing: '0.15em' }}>
                          {currentBrand.tagline}
                        </span>
                        <h3 style={{ fontHeading: 'var(--font-heading)', fontWeight: 900, fontSize: '1.4rem', color: '#fff', letterSpacing: '0.02em' }}>
                          {currentBrand.name.toUpperCase()}
                        </h3>
                        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', color: 'var(--neutral-300)', letterSpacing: '0.1em' }}>
                          {currentBrand.flagship.toUpperCase()}
                        </p>
                      </div>

                      <div className="popout-holder">
                        <div className="popout-sphere" style={{ background: `linear-gradient(135deg, ${currentBrand.accentColor}, #ef4444)` }}>
                          🍖
                        </div>
                      </div>

                      <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '0.5rem', display: 'flex', justifyContent: 'space-between', fontSize: '9px', fontWeight: 700, color: 'var(--neutral-300)' }}>
                        <span>NET WT. 12 OZ</span>
                        <span style={{ color: '#fb923c' }}>PREMIUM GRADE</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Back Face */}
                <div
                  className="face face-back"
                  style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    transform: `rotateY(180deg) translateZ(${depth / 2}px)`,
                    background: currentBrand.useImageBack
                      ? `url('${currentBrand.imageBack}') no-repeat center/contain`
                      : (currentBrand.useImageFront 
                          ? `linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.18)), url('${currentBrand.imageFront}') no-repeat center/contain` 
                          : currentBrand.boxColors.back),
                    backgroundColor: currentBrand.useImageBack ? 'transparent' : (currentBrand.useImageFront ? 'transparent' : 'initial'),
                    boxShadow: (currentBrand.useImageBack || currentBrand.useImageFront) ? 'none' : 'inset 0 0 40px rgba(0,0,0,0.5)',
                    border: currentBrand.useImageBack ? 'none' : (currentBrand.useImageFront ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.12)'),
                    padding: (currentBrand.useImageBack || currentBrand.useImageFront) ? '0' : '1.5rem',
                  }}
                >
                  {!currentBrand.useImageBack && !currentBrand.useImageFront ? (
                    <>
                      <div className="flex flex-col gap-xs">
                        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '9px', fontWeight: 700, color: '#fff' }}>INGREDIENTS & NUTRITION</span>
                          <span style={{ fontSize: '8px', color: 'var(--neutral-400)', fontFamily: 'var(--font-mono)' }}>EST. 1979</span>
                        </div>
                        <p style={{ fontSize: '8px', color: 'var(--neutral-200)', lineHeight: '1.4' }}>
                          Pork, Water, Salt, Spices, Garlic, Herbs, Curing salt. Gluten-Free. Cured under Barbados government inspection.
                        </p>
                      </div>

                      <div className="flex flex-col gap-xs" style={{ margin: '0.5rem 0' }}>
                        <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                          <div style={{ height: '100%', background: currentBrand.accentColor, width: '85%' }}></div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '7px', color: 'var(--neutral-400)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                          <span>Quality Index</span>
                          <span>98% Score</span>
                        </div>
                      </div>

                      <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '0.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.1rem' }}>
                        <span style={{ fontSize: '7px', color: 'var(--neutral-400)', fontWeight: 600, letterSpacing: '0.05em' }}>MANUFACTURED BY HIPAC LTD</span>
                        <span style={{ fontSize: '7px', color: 'var(--neutral-500)', fontFamily: 'var(--font-mono)' }}>FONTABELLE, ST. MICHAEL, BARBADOS</span>
                      </div>
                    </>
                  ) : !currentBrand.useImageBack ? (
                    <div style={{ width: '100%', height: '100%', padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#fff', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '7px', fontWeight: 700 }}>
                        <span>NUTRITION FACTS</span>
                        <span>KEEP FROZEN</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <span style={{ fontSize: '2.5rem', opacity: 0.15 }}>H</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ width: '60px', height: '20px', background: 'repeating-linear-gradient(90deg, #fff, #fff 2px, #000 2px, #000 4px)', opacity: 0.8 }} />
                        <span style={{ fontSize: '6px', opacity: 0.8 }}>HIPAC LTD BARBADOS</span>
                      </div>
                    </div>
                  ) : null}
                </div>

                {/* Side Faces */}
                <div
                  className="face face-right"
                  style={{
                    width: `${depth}px`,
                    height: `${height}px`,
                    left: `${(width - depth) / 2}px`,
                    transform: `rotateY(90deg) translateZ(${width / 2}px)`,
                    background: currentBrand.useImageFront ? 'rgba(255, 255, 255, 0.25)' : currentBrand.boxColors.right,
                    border: currentBrand.useImageFront ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.12)',
                    boxShadow: currentBrand.useImageFront ? 'none' : 'inset 0 0 40px rgba(0,0,0,0.5)',
                  }}
                >
                  {!currentBrand.useImageFront && (
                    <div style={{ transform: 'rotate(90deg)', fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '0.8rem', color: 'rgba(255,255,255,0.2)', whiteSpace: 'nowrap', letterSpacing: '0.15em' }}>
                      ESTABLISHED 1979
                    </div>
                  )}
                </div>

                <div
                  className="face face-left"
                  style={{
                    width: `${depth}px`,
                    height: `${height}px`,
                    left: `${(width - depth) / 2}px`,
                    transform: `rotateY(-90deg) translateZ(${width / 2}px)`,
                    background: currentBrand.useImageFront ? 'rgba(255, 255, 255, 0.25)' : currentBrand.boxColors.left,
                    border: currentBrand.useImageFront ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.12)',
                    boxShadow: currentBrand.useImageFront ? 'none' : 'inset 0 0 40px rgba(0,0,0,0.5)',
                  }}
                >
                  {!currentBrand.useImageFront && (
                    <div style={{ transform: 'rotate(-90deg)', fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '0.8rem', color: 'rgba(255,255,255,0.2)', whiteSpace: 'nowrap', letterSpacing: '0.15em' }}>
                      100% CARIBBEAN
                    </div>
                  )}
                </div>

                {/* Top Face */}
                <div
                  className="face face-top"
                  style={{
                    width: `${width}px`,
                    height: `${depth}px`,
                    top: `${(height - depth) / 2}px`,
                    transform: `rotateX(90deg) translateZ(${height / 2}px)`,
                    background: currentBrand.useImageFront ? 'rgba(255, 255, 255, 0.3)' : currentBrand.boxColors.top,
                    border: currentBrand.useImageFront ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.12)',
                    boxShadow: currentBrand.useImageFront ? 'none' : 'inset 0 0 40px rgba(0,0,0,0.5)',
                  }}
                >
                  {!currentBrand.useImageFront && (
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, letterSpacing: '0.1em', fontSize: '8px', color: '#000' }}>HIPAC QUALITY</span>
                  )}
                </div>

                {/* Bottom Face */}
                <div
                  className="face face-bottom"
                  style={{
                    width: `${width}px`,
                    height: `${depth}px`,
                    top: `${(height - depth) / 2}px`,
                    transform: `rotateX(-90deg) translateZ(${height / 2}px)`,
                    background: currentBrand.useImageFront ? 'rgba(255, 255, 255, 0.25)' : currentBrand.boxColors.bottom,
                    border: currentBrand.useImageFront ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.12)',
                    boxShadow: currentBrand.useImageFront ? 'none' : 'inset 0 0 40px rgba(0,0,0,0.5)',
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Brand Ticker Footer */}
      <div className="hero-footer-ticker" style={{ zIndex: 10 }}>
        <div className="container ticker-wrapper">
          <div className="ticker-label">TRUSTED CARIBBEAN QUALITY</div>
          <div className="ticker-brands">
            <span onClick={() => selectBrand(0)}>FARMER'S CHOICE</span>
            <span onClick={() => selectBrand(1)}>FAMILY CHOICE</span>
            <span onClick={() => selectBrand(2)}>BAR PAC</span>
            <span style={{ color: 'var(--text-secondary)', cursor: 'default' }}>Goddard Group</span>
          </div>
        </div>
      </div>
      
    </header>
  );
}
