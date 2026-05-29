import React, { useState, useEffect } from 'react';
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
  
  // Dynamic Theme state:
  // 'dark'   -> Caribbean Sleek Dark (Default)
  // 'sand'   -> Barbados Sand & Cream (Lighter V1)
  // 'breeze' -> Caribbean Sky & Sea Breeze (Lighter V2)
  // 'farm'   -> Organic Farm Fresh (Lighter V3)
  const [activeTheme, setActiveTheme] = useState('breeze');

  // Trigger HTML body class shift on theme changes
  useEffect(() => {
    document.body.classList.remove('theme-dark', 'theme-sand', 'theme-breeze', 'theme-farm');
    document.body.classList.add(`theme-${activeTheme}`);
  }, [activeTheme]);

  const handleBrandSelect = (idx) => {
    setActiveBrandIndex(idx);
    
    const brandsSection = document.getElementById('brands');
    if (brandsSection) {
      brandsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. Hero Stories & Theme Selector */}
      <Hero 
        onBrandSelect={handleBrandSelect} 
        activeTheme={activeTheme} 
        onThemeSelect={setActiveTheme} 
      />

      {/* 2. Brand Rotators */}
      <Brand3D 
        activeBrandIndex={activeBrandIndex} 
        onBrandSelect={setActiveBrandIndex} 
      />

      {/* 3. Product Tabs & Slider */}
      <Flavors activeTheme={activeTheme} />

      {/* 4. Sliding Ticker */}
      <SlidingIngredients />

      {/* 5. Recipes searchable grid */}
      <Recipes />

      {/* 6. Spotlight testimonies */}
      <Careers />

      {/* 7. Supermarket directory */}
      <FindHipac />

      {/* 8. Modern Glass Footer & alerts */}
      <Footer />
    </>
  );
}

export default App;
