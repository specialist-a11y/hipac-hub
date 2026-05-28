import React, { useState, useRef, useEffect } from 'react';
import { RotateCw, CheckCircle, Award } from 'lucide-react';

export default function Brand3D({ activeBrandIndex, onBrandSelect }) {
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
        width: 440,
        height: 270,
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

  const [rotations, setRotations] = useState([0, 0, 0]);
  const dragStart = useRef({ x: 0, rot: 0 });
  const isDragging = useRef(false);

  const [selectedIdx, setSelectedIdx] = useState(0);
  useEffect(() => {
    if (activeBrandIndex !== undefined && activeBrandIndex !== null) {
      setSelectedIdx(activeBrandIndex);
    }
  }, [activeBrandIndex]);

  const handleMouseDown = (e, boxIdx) => {
    if (selectedIdx !== boxIdx) return;
    isDragging.current = true;
    dragStart.current = {
      x: e.clientX,
      rot: rotations[boxIdx]
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
      updated[selectedIdx] = newRot;
      return updated;
    });
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e, boxIdx) => {
    if (selectedIdx !== boxIdx) return;
    isDragging.current = true;
    dragStart.current = {
      x: e.touches[0].clientX,
      rot: rotations[boxIdx]
    };
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const deltaX = e.touches[0].clientX - dragStart.current.x;
    const speed = 0.8;
    const newRot = dragStart.current.rot + deltaX * speed;
    setRotations(prev => {
      const updated = [...prev];
      updated[selectedIdx] = newRot;
      return updated;
    });
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const selectBrand = (idx) => {
    setSelectedIdx(idx);
    onBrandSelect(idx);
  };

  const autoSpin = (idx) => {
    setRotations(prev => {
      const updated = [...prev];
      updated[idx] = updated[idx] + 360;
      return updated;
    });
  };

  return (
    <section id="brands" className="showcase-section">
      {/* Background accents */}
      <div 
        className="bg-glow w-[600px] h-[600px]" 
        style={{ top: '-10%', left: '-10%', backgroundColor: `hsla(${brands[selectedIdx].color}, 0.15)`, transition: 'background-color 1s ease' }}
      />
      <div 
        className="bg-glow w-[500px] h-[500px]" 
        style={{ bottom: '-10%', right: '-10%', backgroundColor: `${brands[selectedIdx].accentColor}10`, transition: 'background-color 1s ease' }}
      />

      <div className="container">
        <div className="section-header">
          <span className="badge">Featured Brand Showcase</span>
          <h2 className="section-h2">
            Savour The <span style={{ color: '#f59e0b' }}>Difference</span>
          </h2>
          <p className="card-p" style={{ textAlign: 'center', color: 'var(--neutral-400)', fontSize: '0.95rem' }}>
            Click, drag, and spin our iconic Caribbean food packages to explore details. Hover over products to see packaging elements pop out.
          </p>
        </div>

        {/* Brand pills */}
        <div className="brand-pills">
          {brands.map((brand, idx) => (
            <button
              key={idx}
              onClick={() => selectBrand(idx)}
              className={`pill-btn ${selectedIdx === idx ? 'active' : ''}`}
              style={{
                backgroundColor: selectedIdx === idx ? `hsl(${brand.color})` : 'transparent',
              }}
            >
              {brand.name}
            </button>
          ))}
        </div>

        {/* 3D Showcase & Spec */}
        <div className="grid grid-12 align-center" style={{ minHeight: '500px' }}>
          
          {/* Left Column: Interactive 3D Canvas */}
          <div className="perspective-box-col select-none">
            <div style={{ position: 'absolute', top: 0, fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--neutral-600)' }} className="animate-pulse">
              <RotateCw size={12} />
              <span>Drag horizontally to rotate packaging</span>
            </div>

            <div className="perspective-canvas" style={{ marginTop: '2rem' }}>
              {brands.map((brand, idx) => {
                const isActive = selectedIdx === idx;
                const rotY = rotations[idx];
                const { width, height, depth } = brand.dimensions;
                
                return (
                  <div
                    key={idx}
                    onMouseDown={(e) => handleMouseDown(e, idx)}
                    onTouchStart={(e) => handleTouchStart(e, idx)}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    className="box-3d"
                    style={{
                      opacity: isActive ? 1 : 0.02,
                      width: `${width}px`,
                      height: `${height}px`,
                      transform: isActive 
                        ? `rotateX(-10deg) rotateY(${rotY}deg) scale(1.1)` 
                        : `scale(0.8) translateY(${idx < selectedIdx ? '-40px' : '40px'})`,
                      pointerEvents: isActive ? 'auto' : 'none',
                      zIndex: isActive ? 10 : 1,
                      transition: isDragging.current ? 'opacity 0.5s ease-out' : 'transform 0.7s ease-out, opacity 0.5s ease-out'
                    }}
                  >
                    {/* Front Face */}
                    <div
                      className="face face-front"
                      style={{
                        width: `${width}px`,
                        height: `${height}px`,
                        transform: `translateZ(${depth / 2}px)`,
                        background: brand.useImageFront ? `url('${brand.imageFront}') no-repeat center/contain` : brand.boxColors.front,
                        backgroundColor: brand.useImageFront ? 'transparent' : 'initial',
                        boxShadow: brand.useImageFront ? 'none' : 'inset 0 0 40px rgba(0,0,0,0.5)',
                        border: brand.useImageFront ? 'none' : '1px solid rgba(255, 255, 255, 0.12)',
                        padding: brand.useImageFront ? '0' : '1.5rem',
                      }}
                    >
                      {!brand.useImageFront && (
                        <>
                          <div className="flex justify-between align-center">
                            <span style={{ fontSize: '9px', fontWeight: 900, letterSpacing: '0.15em', background: 'rgba(0,0,0,0.3)', padding: '0.2rem 0.5rem', borderRadius: '100px', color: '#fff' }}>
                              BARBADOS
                            </span>
                            <Award size={16} style={{ color: '#f59e0b' }} />
                          </div>
                          
                          <div className="flex flex-col align-center" style={{ textAlign: 'center', gap: '0.25rem' }}>
                            <span style={{ fontSize: '9px', fontWeight: 800, textTransform: 'uppercase', color: '#fb923c', letterSpacing: '0.15em' }}>
                              {brand.tagline}
                            </span>
                            <h3 style={{ fontHeading: 'var(--font-heading)', fontWeight: 900, fontSize: '1.5rem', color: '#fff', letterSpacing: '0.02em' }}>
                              {brand.name.toUpperCase()}
                            </h3>
                            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', color: 'var(--neutral-300)', letterSpacing: '0.1em' }}>
                              {brand.flagship.toUpperCase()}
                            </p>
                          </div>

                          {/* POP OUT element on Hover */}
                          <div className="popout-holder">
                            <div className="popout-sphere">
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
                        background: brand.useImageBack
                          ? `url('${brand.imageBack}') no-repeat center/contain`
                          : (brand.useImageFront 
                              ? `linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.18)), url('${brand.imageFront}') no-repeat center/contain` 
                              : brand.boxColors.back),
                        backgroundColor: brand.useImageBack ? 'transparent' : (brand.useImageFront ? 'transparent' : 'initial'),
                        boxShadow: (brand.useImageBack || brand.useImageFront) ? 'none' : 'inset 0 0 40px rgba(0,0,0,0.5)',
                        border: brand.useImageBack ? 'none' : (brand.useImageFront ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.12)'),
                        padding: (brand.useImageBack || brand.useImageFront) ? '0' : '1.5rem',
                      }}
                    >
                      {!brand.useImageBack && !brand.useImageFront ? (
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
                              <div style={{ height: '100%', background: '#fb923c', width: '85%' }}></div>
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
                      ) : !brand.useImageBack ? (
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
                        background: brand.useImageFront ? 'rgba(255, 255, 255, 0.25)' : brand.boxColors.right,
                        border: brand.useImageFront ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.12)',
                        boxShadow: brand.useImageFront ? 'none' : 'inset 0 0 40px rgba(0,0,0,0.5)',
                      }}
                    >
                      {!brand.useImageFront && (
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
                        background: brand.useImageFront ? 'rgba(255, 255, 255, 0.25)' : brand.boxColors.left,
                        border: brand.useImageFront ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.12)',
                        boxShadow: brand.useImageFront ? 'none' : 'inset 0 0 40px rgba(0,0,0,0.5)',
                      }}
                    >
                      {!brand.useImageFront && (
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
                        background: brand.useImageFront ? 'rgba(255, 255, 255, 0.3)' : brand.boxColors.top,
                        border: brand.useImageFront ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.12)',
                        boxShadow: brand.useImageFront ? 'none' : 'inset 0 0 40px rgba(0,0,0,0.5)',
                      }}
                    >
                      {!brand.useImageFront && (
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
                        background: brand.useImageFront ? 'rgba(255, 255, 255, 0.25)' : brand.boxColors.bottom,
                        border: brand.useImageFront ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.12)',
                        boxShadow: brand.useImageFront ? 'none' : 'inset 0 0 40px rgba(0,0,0,0.5)',
                      }}
                    />
                  </div>
                );
              })}
            </div>

            <button 
              onClick={() => autoSpin(selectedIdx)}
              className="btn-outline"
              style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <RotateCw size={14} className="animate-spin-slow" />
              <span>Full Spin 360°</span>
            </button>
          </div>

          {/* Right Column: Spec Description Box */}
          <div className="spec-detail-col">
            <div 
              className="glass-panel spec-glass-card"
              style={{
                borderColor: `hsla(${brands[selectedIdx].color}, 0.35)`,
                background: `linear-gradient(135deg, hsla(${brands[selectedIdx].color}, 0.96), hsla(${brands[selectedIdx].color}, 0.85))`,
                boxShadow: `0 20px 45px -15px hsla(${brands[selectedIdx].color}, 0.35)`
              }}
            >
              <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', fontSize: '6rem', opacity: 0.03, fontWeight: 900, pointerEvents: 'none', color: '#fff', fontFamily: 'var(--font-heading)' }}>
                HIPAC
              </div>

              <div>
                <span className="spec-tag">
                  {brands[selectedIdx].tagline}
                </span>
                <h3 className="spec-h3">
                  {brands[selectedIdx].name.toUpperCase()}
                </h3>
                <span className="spec-subtitle">
                  Flagship Product: {brands[selectedIdx].flagship}
                </span>
                <p className="spec-p">
                  {brands[selectedIdx].description}
                </p>
              </div>

              <div className="spec-features">
                {brands[selectedIdx].features.map((feature, idx) => (
                  <div key={idx} className="feature-bullet">
                    <CheckCircle size={18} className="text-white" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="spec-btn-group">
                <a href="#flavors" className="btn-white">
                  View All Products
                </a>
                <a href="#recipes" className="btn-glass">
                  Ham & Bacon Recipes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
