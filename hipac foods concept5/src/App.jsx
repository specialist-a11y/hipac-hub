import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import ProductSpotlight from './components/ProductSpotlight';
import Brand3D from './components/Brand3D';
import BrandPortfolio from './components/BrandPortfolio';
import Flavors from './components/Flavors';
import OurStory from './components/OurStory';
import SlidingIngredients from './components/SlidingIngredients';
import CommunityImpact from './components/CommunityImpact';
import Recipes from './components/Recipes';
import PressStrip from './components/PressStrip';
import Careers from './components/Careers';
import FindHipac from './components/FindHipac';
import Footer from './components/Footer';
import SurveyPopup from './components/SurveyPopup';

function App() {
  const [activeBrandIndex, setActiveBrandIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add('visible');
          }),
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
      );
      document
        .querySelectorAll('.reveal, .reveal-left, .reveal-right')
        .forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 120);
    return () => clearTimeout(timer);
  }, []);

  const handleBrandSelect = (idx) => {
    setActiveBrandIndex(idx);
    document.getElementById('brands')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. Cinematic split-screen hero + nav */}
      <Hero onBrandSelect={handleBrandSelect} />

      {/* 2. Gold stats strip */}
      <StatsBar />

      {/* 3. Featured product spotlight — NEW */}
      <ProductSpotlight />

      {/* 4. Brand 3D rotator */}
      <Brand3D
        activeBrandIndex={activeBrandIndex}
        onBrandSelect={setActiveBrandIndex}
      />

      {/* 5. Brand portfolio — 3 tall panels */}
      <BrandPortfolio />

      {/* 6. Product tabs & horizontal scroll */}
      <Flavors />

      {/* 7. Our Story — angled forest green */}
      <OurStory />

      {/* 8. Ingredients ticker + values */}
      <SlidingIngredients />

      {/* 9. Community Impact — NEW */}
      <CommunityImpact />

      {/* 10. Recipes magazine grid */}
      <Recipes />

      {/* 11. In the press */}
      <PressStrip />

      {/* 12. Careers spotlights */}
      <Careers />

      {/* 13. Store locator */}
      <FindHipac />

      {/* 14. Footer */}
      <Footer />

      {/* 15. Survey pop-up — scroll-triggered — NEW */}
      <SurveyPopup />
    </>
  );
}

export default App;
