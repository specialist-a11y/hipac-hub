import React, { useEffect } from 'react';
import Hero from './components/Hero';
import IngredientTicker from './components/IngredientTicker';
import BrandWall from './components/BrandWall';
import HaveYouTried from './components/HaveYouTried';
import RecipeRail from './components/RecipeRail';
import CommunityQuote from './components/CommunityQuote';
import OurStory from './components/OurStory';
import PressStrip from './components/PressStrip';
import Careers from './components/Careers';
import FindHipac from './components/FindHipac';
import Footer from './components/Footer';
import SurveyPopup from './components/SurveyPopup';

function App() {
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

  return (
    <>
      {/* 1. Full-bleed video hero with split color overlay */}
      <Hero />

      {/* 2. Caribbean ingredient ticker strip */}
      <IngredientTicker />

      {/* 3. Color-blocked brand wall */}
      <BrandWall />

      {/* 4. Interactive "Have You Tried?" game */}
      <HaveYouTried />

      {/* 5. Horizontal scroll recipe rail */}
      <RecipeRail />

      {/* 6. Community quote slab with animated counters */}
      <CommunityQuote />

      {/* 7. Our Story */}
      <OurStory />

      {/* 8. Press strip */}
      <PressStrip />

      {/* 9. Careers */}
      <Careers />

      {/* 10. Store locator */}
      <FindHipac />

      {/* 11. Footer */}
      <Footer />

      {/* 12. Survey pop-up */}
      <SurveyPopup />
    </>
  );
}

export default App;
