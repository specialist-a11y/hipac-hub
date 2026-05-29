import React, { useState, useRef, useEffect } from 'react';
import { RotateCw, Check } from 'lucide-react';

const BRANDS = [
  {
    name: "Farmer's Choice",
    tagline: 'True Caribbean Flavour',
    flagship: 'Premium Hickory Bacon',
    description:
      "Our legendary hickory-smoked sliced bacon is seasoned with local spices and cured to absolute perfection. Crispy, savoury, and unmistakably Barbadian.",
    features: ['Naturally Hickory Smoked', 'Unique Local Spice Cure', 'Gluten & Soy Free'],
    emoji: '🥓',
    logo: './farmers-choice-logo.png',
    dimensions: { width: 440, height: 270, depth: 16 },
    useImageFront: true,
    imageFront: './bacon-package.png',
    useImageBack: true,
    imageBack: './bacon-package-back.png',
    boxColors: {
      front: 'transparent',
      back: 'linear-gradient(135deg, #0c5a2f, #083c1f)',
      right: 'rgba(12,90,47,0.8)',
      left: 'rgba(12,90,47,0.8)',
      top: 'rgba(245,158,11,0.9)',
      bottom: 'rgba(5,34,16,0.8)',
    },
  },
  {
    name: 'Family Choice',
    tagline: 'Convenience & Quality',
    flagship: 'Spicy Canned Luncheon Meat',
    description:
      "A beloved household staple packed with rich, savoury protein and spiced with select hot peppers. Ideal for fried breakfast slices, sandwiches, and quick dinners.",
    features: ['Spicy & Smoked Options', 'Fully Prepared & Canned', 'Halal Certified Available'],
    emoji: '🥫',
    logo: './family-choice-logo.png',
    dimensions: { width: 190, height: 250, depth: 130 },
    useImageFront: false,
    boxColors: {
      front: 'linear-gradient(135deg, #b91c1c, #991b1b)',
      back: 'linear-gradient(135deg, #991b1b, #7f1d1d)',
      right: '#7f1d1d',
      left: '#7f1d1d',
      top: '#fb923c',
      bottom: '#450a0a',
    },
  },
  {
    name: 'Bar Pac',
    tagline: 'Celebrations & Feasts',
    flagship: 'Traditional Bone-In Ham',
    description:
      "The pride of Bajan holiday feasts. Slow-smoked bone-in picnic hams cured with a signature sweet clove glaze that melts in your mouth with every slice.",
    features: ['Premium Bone-In Picnic Ham', 'Sweet Clove Cure', 'Centrepiece Quality'],
    emoji: '🍖',
    logo: './bar-pac-logo.png',
    dimensions: { width: 230, height: 240, depth: 180 },
    useImageFront: false,
    boxColors: {
      front: 'linear-gradient(135deg, #6b21a8, #4c1d95)',
      back: 'linear-gradient(135deg, #4c1d95, #3b0764)',
      right: '#3b0764',
      left: '#3b0764',
      top: '#ec4899',
      bottom: '#1e1b4b',
    },
  },
];

export default function Brand3D({ activeBrandIndex, onBrandSelect }) {
  const [rotations, setRotations] = useState([0, 0, 0]);
  const dragStart = useRef({ x: 0, rot: 0 });
  const isDragging = useRef(false);
  const [selectedIdx, setSelectedIdx] = useState(0);

  useEffect(() => {
    if (activeBrandIndex != null) setSelectedIdx(activeBrandIndex);
  }, [activeBrandIndex]);

  const handleMouseDown = (e, idx) => {
    if (selectedIdx !== idx) return;
    isDragging.current = true;
    dragStart.current = { x: e.clientX, rot: rotations[idx] };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const newRot = dragStart.current.rot + (e.clientX - dragStart.current.x) * 0.8;
    setRotations(prev => { const u = [...prev]; u[selectedIdx] = newRot; return u; });
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e, idx) => {
    if (selectedIdx !== idx) return;
    isDragging.current = true;
    dragStart.current = { x: e.touches[0].clientX, rot: rotations[idx] };
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const newRot = dragStart.current.rot + (e.touches[0].clientX - dragStart.current.x) * 0.8;
    setRotations(prev => { const u = [...prev]; u[selectedIdx] = newRot; return u; });
  };

  const handleTouchEnd = () => { isDragging.current = false; };

  const selectBrand = (idx) => { setSelectedIdx(idx); onBrandSelect(idx); };
  const autoSpin = () => setRotations(prev => { const u = [...prev]; u[selectedIdx] += 360; return u; });

  const brand = BRANDS[selectedIdx];

  return (
    <section id="brands" className="showcase-v2">
      <div className="container">
        <span className="section-tag">Brand Showcase</span>
        <h2 className="section-h2-v2">
          Savour The <span className="gold-text">Difference</span>
        </h2>
        <p className="showcase-v2-sub">
          Drag and spin our iconic Caribbean food packages. Each brand tells a story of quality
          crafted in Barbados since 1979.
        </p>

        {/* Brand pills */}
        <div className="brand-pills-v2">
          {BRANDS.map((b, i) => (
            <button
              key={i}
              className={`pill-v2 ${selectedIdx === i ? 'active' : ''}`}
              onClick={() => selectBrand(i)}
              style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}
            >
              <img
                src={b.logo}
                alt={b.name}
                style={{ width: '22px', height: '22px', objectFit: 'contain', borderRadius: '50%' }}
                onError={e => { e.target.style.display = 'none'; }}
              />
              {b.name}
            </button>
          ))}
        </div>

        {/* 3D + Spec grid */}
        <div className="showcase-v2-grid">
          {/* Left: 3D canvas */}
          <div className="perspective-box-col-v2 select-none">
            <div className="perspective-hint">
              <RotateCw size={11} />
              Drag to rotate packaging
            </div>

            <div className="perspective-canvas-v2">
              {BRANDS.map((b, idx) => {
                const isActive = selectedIdx === idx;
                const { width, height, depth } = b.dimensions;
                return (
                  <div
                    key={idx}
                    className="box-3d"
                    onMouseDown={e => handleMouseDown(e, idx)}
                    onTouchStart={e => handleTouchStart(e, idx)}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={{
                      opacity: isActive ? 1 : 0.02,
                      width: `${width}px`,
                      height: `${height}px`,
                      transform: isActive
                        ? `rotateX(-10deg) rotateY(${rotations[idx]}deg) scale(1.05)`
                        : `scale(0.8) translateY(${idx < selectedIdx ? '-40px' : '40px'})`,
                      pointerEvents: isActive ? 'auto' : 'none',
                      zIndex: isActive ? 10 : 1,
                      transition: isDragging.current ? 'opacity 0.5s' : 'transform 0.7s ease-out, opacity 0.5s',
                    }}
                  >
                    {/* Front */}
                    <div
                      className="face"
                      style={{
                        width: `${width}px`, height: `${height}px`,
                        transform: `translateZ(${depth / 2}px)`,
                        background: b.useImageFront
                          ? `url('${b.imageFront}') no-repeat center/contain`
                          : b.boxColors.front,
                        backgroundColor: b.useImageFront ? 'transparent' : undefined,
                        boxShadow: b.useImageFront ? 'none' : 'inset 0 0 40px rgba(0,0,0,0.5)',
                        border: b.useImageFront ? 'none' : '1px solid rgba(255,255,255,0.08)',
                        padding: b.useImageFront ? 0 : '1.5rem',
                        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                      }}
                    >
                      {!b.useImageFront && (
                        <>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '8px', fontWeight: 900, letterSpacing: '0.15em', background: 'rgba(0,0,0,0.3)', padding: '0.2rem 0.5rem', borderRadius: '100px', color: '#fff' }}>
                              BARBADOS
                            </span>
                            <span style={{ color: 'var(--gold)', fontSize: '0.85rem' }}>★</span>
                          </div>
                          <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '8px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--gold)', letterSpacing: '0.15em', marginBottom: '0.25rem' }}>{b.tagline}</div>
                            <div style={{ fontWeight: 900, fontSize: '1.4rem', color: '#fff' }}>{b.name.toUpperCase()}</div>
                          </div>
                          <div className="popout-holder">
                            <div className="popout-sphere">{b.emoji}</div>
                          </div>
                          <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '0.5rem', display: 'flex', justifyContent: 'space-between', fontSize: '8px', fontWeight: 700, color: 'rgba(255,255,255,0.6)' }}>
                            <span>NET WT. 12 OZ</span>
                            <span style={{ color: 'var(--gold)' }}>PREMIUM</span>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Back */}
                    <div
                      className="face"
                      style={{
                        width: `${width}px`, height: `${height}px`,
                        transform: `rotateY(180deg) translateZ(${depth / 2}px)`,
                        background: b.useImageBack
                          ? `url('${b.imageBack}') no-repeat center/contain`
                          : (b.useImageFront
                            ? `linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.18)), url('${b.imageFront}') no-repeat center/contain`
                            : b.boxColors.back),
                        backgroundColor: (b.useImageBack || b.useImageFront) ? 'transparent' : undefined,
                        boxShadow: (b.useImageBack || b.useImageFront) ? 'none' : 'inset 0 0 40px rgba(0,0,0,0.5)',
                        border: b.useImageBack ? 'none' : '1px solid rgba(255,255,255,0.08)',
                        padding: (b.useImageBack || b.useImageFront) ? 0 : '1.5rem',
                        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                      }}
                    >
                      {!b.useImageBack && !b.useImageFront && (
                        <>
                          <div style={{ borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', fontSize: '8px', fontWeight: 700, color: '#fff' }}>
                            <span>INGREDIENTS</span><span style={{ color: 'rgba(255,255,255,0.5)' }}>EST. 1979</span>
                          </div>
                          <p style={{ fontSize: '7px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                            Pork, Water, Salt, Spices, Garlic, Herbs, Curing salt. Gluten-Free. Cured under Barbados government inspection.
                          </p>
                          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '0.5rem', textAlign: 'center', fontSize: '7px', color: 'rgba(255,255,255,0.4)' }}>
                            HIPAC LTD · FONTABELLE · BARBADOS
                          </div>
                        </>
                      )}
                    </div>

                    {/* Right */}
                    <div className="face" style={{
                      width: `${depth}px`, height: `${height}px`,
                      left: `${(width - depth) / 2}px`,
                      transform: `rotateY(90deg) translateZ(${width / 2}px)`,
                      background: b.useImageFront ? 'rgba(255,255,255,0.25)' : b.boxColors.right,
                      border: '1px solid rgba(255,255,255,0.08)',
                      boxShadow: b.useImageFront ? 'none' : 'inset 0 0 40px rgba(0,0,0,0.5)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {!b.useImageFront && (
                        <span style={{ transform: 'rotate(90deg)', fontWeight: 900, fontSize: '0.7rem', color: 'rgba(255,255,255,0.18)', whiteSpace: 'nowrap', letterSpacing: '0.15em' }}>
                          ESTABLISHED 1979
                        </span>
                      )}
                    </div>

                    {/* Left */}
                    <div className="face" style={{
                      width: `${depth}px`, height: `${height}px`,
                      left: `${(width - depth) / 2}px`,
                      transform: `rotateY(-90deg) translateZ(${width / 2}px)`,
                      background: b.useImageFront ? 'rgba(255,255,255,0.25)' : b.boxColors.left,
                      border: '1px solid rgba(255,255,255,0.08)',
                      boxShadow: b.useImageFront ? 'none' : 'inset 0 0 40px rgba(0,0,0,0.5)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {!b.useImageFront && (
                        <span style={{ transform: 'rotate(-90deg)', fontWeight: 900, fontSize: '0.7rem', color: 'rgba(255,255,255,0.18)', whiteSpace: 'nowrap', letterSpacing: '0.15em' }}>
                          100% CARIBBEAN
                        </span>
                      )}
                    </div>

                    {/* Top */}
                    <div className="face" style={{
                      width: `${width}px`, height: `${depth}px`,
                      top: `${(height - depth) / 2}px`,
                      transform: `rotateX(90deg) translateZ(${height / 2}px)`,
                      background: b.useImageFront ? 'rgba(255,255,255,0.3)' : b.boxColors.top,
                      border: '1px solid rgba(255,255,255,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {!b.useImageFront && (
                        <span style={{ fontWeight: 900, fontSize: '8px', color: '#000', letterSpacing: '0.1em' }}>HIPAC QUALITY</span>
                      )}
                    </div>

                    {/* Bottom */}
                    <div className="face" style={{
                      width: `${width}px`, height: `${depth}px`,
                      top: `${(height - depth) / 2}px`,
                      transform: `rotateX(-90deg) translateZ(${height / 2}px)`,
                      background: b.useImageFront ? 'rgba(255,255,255,0.25)' : b.boxColors.bottom,
                      border: '1px solid rgba(255,255,255,0.08)',
                    }} />
                  </div>
                );
              })}
            </div>

            <button className="spin-btn-v2" onClick={autoSpin}>
              <RotateCw size={13} className="animate-spin-slow" />
              Full Spin 360°
            </button>
          </div>

          {/* Right: spec card */}
          <div className="spec-card-v2 reveal-right">
            <span className="spec-watermark">HIPAC</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <img
                src={brand.logo}
                alt={brand.name}
                style={{ width: '52px', height: '52px', objectFit: 'contain', borderRadius: '50%' }}
                onError={e => { e.target.style.display = 'none'; }}
              />
              <span className="spec-tag-v2" style={{ marginBottom: 0 }}>{brand.tagline}</span>
            </div>
            <h3 className="spec-h3-v2">{brand.name}</h3>
            <span className="spec-sub-v2">Flagship: {brand.flagship}</span>
            <p className="spec-p-v2">{brand.description}</p>

            <div className="spec-features-v2">
              {brand.features.map((f, i) => (
                <div key={i} className="spec-feature-item">
                  <span className="spec-check"><Check size={9} /></span>
                  {f}
                </div>
              ))}
            </div>

            <div className="spec-btns-v2">
              <a href="#flavors" className="btn-gold">View All Products</a>
              <a href="#recipes" className="btn-ghost-gold">Find Recipes</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
