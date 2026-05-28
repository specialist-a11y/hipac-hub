import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import Brand3D from './components/Brand3D';
import Flavors from './components/Flavors';
import SlidingIngredients from './components/SlidingIngredients';
import Recipes from './components/Recipes';
import Careers from './components/Careers';
import FindHipac from './components/FindHipac';
import Footer from './components/Footer';

function App() {
  const [activeBrandIndex, setActiveBrandIndex] = useState(0);
  const [activeTheme, setActiveTheme] = useState('farm');
  
  // Ref for the horizontal scroll snapping container
  const scrollContainerRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Trigger HTML body class shift on theme changes
  useEffect(() => {
    document.body.classList.remove('theme-dark', 'theme-sand', 'theme-breeze', 'theme-farm');
    document.body.classList.add(`theme-${activeTheme}`);
  }, [activeTheme]);

  // Track horizontal scroll progress
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const width = scrollContainerRef.current.clientWidth;
      const index = Math.round(scrollLeft / width);
      setCurrentSlideIndex(index);
    }
  };

  const handleBrandSelect = (idx) => {
    setActiveBrandIndex(idx);
    // Slide to index 1 (the 3D Brand Rotators showcase slide)
    scrollToSlide(1);
  };

  const scrollToSlide = (index) => {
    if (scrollContainerRef.current) {
      const width = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollTo({
        left: index * width,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Dynamic Slide Counter widget */}
      <div 
        className="glass-panel"
        style={{
          position: 'fixed',
          bottom: '2rem',
          left: '2rem',
          zIndex: 1000,
          padding: '0.65rem 1.25rem',
          borderRadius: '100px',
          fontSize: '0.75rem',
          fontWeight: 800,
          letterSpacing: '0.1em',
          color: 'var(--text-primary)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}
      >
        <span>SECTION</span>
        <span style={{ color: 'var(--hipac-orange)' }}>0{currentSlideIndex + 1}</span>
        <span style={{ opacity: 0.3 }}>/</span>
        <span style={{ opacity: 0.5 }}>06</span>
      </div>

      {/* Floating horizontal navigation buttons */}
      <div 
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 1000,
          display: 'flex',
          gap: '0.75rem'
        }}
      >
        <button
          onClick={() => scrollToSlide(Math.max(0, currentSlideIndex - 1))}
          className="btn-outline"
          style={{ 
            width: '2.75rem', 
            height: '2.75rem', 
            padding: 0, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            borderRadius: '50%',
            opacity: currentSlideIndex === 0 ? 0.3 : 1,
            pointerEvents: currentSlideIndex === 0 ? 'none' : 'auto'
          }}
          title="Previous Section"
        >
          ←
        </button>
        <button
          onClick={() => scrollToSlide(Math.min(5, currentSlideIndex + 1))}
          className="btn-outline"
          style={{ 
            width: '2.75rem', 
            height: '2.75rem', 
            padding: 0, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            borderRadius: '50%',
            opacity: currentSlideIndex === 5 ? 0.3 : 1,
            pointerEvents: currentSlideIndex === 5 ? 'none' : 'auto'
          }}
          title="Next Section"
        >
          →
        </button>
      </div>

      <div 
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="horizontal-scroll-container"
      >
        {/* Slide 1: Hero Storytelling Landing */}
        <section className="horizontal-section">
          <Hero 
            onBrandSelect={handleBrandSelect} 
            activeTheme={activeTheme} 
            onThemeSelect={setActiveTheme} 
          />
        </section>

        {/* Slide 2: Immersive 3D Brand Showcase */}
        <section className="horizontal-section" id="brands">
          <Brand3D 
            activeBrandIndex={activeBrandIndex} 
            onBrandSelect={setActiveBrandIndex} 
          />
        </section>

        {/* Slide 3: Flavors & Horizontal Slider */}
        <section className="horizontal-section">
          <Flavors activeTheme={activeTheme} />
        </section>

        {/* Slide 4: Values sliding ticker */}
        <section className="horizontal-section" id="ingredients">
          <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
            <div className="section-header" style={{ marginBottom: '2.5rem' }}>
              <span className="badge">Our Values</span>
              <h2 className="section-h2">Freshness & Integrity</h2>
              <p className="card-p">Seasoned with local Caribbean spices. Pure natural ingredients cured to perfection.</p>
            </div>
            <SlidingIngredients />
          </div>
        </section>

        {/* Slide 5: Recipe Search Hub */}
        <section className="horizontal-section" id="recipes">
          <Recipes />
        </section>

        {/* Slide 6: Careers, Locator & Footer */}
        <section className="horizontal-section" id="careers" style={{ overflowY: 'auto' }}>
          <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            <Careers />
            <FindHipac />
            <Footer />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
