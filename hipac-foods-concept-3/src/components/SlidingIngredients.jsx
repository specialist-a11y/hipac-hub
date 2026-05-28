import React from 'react';
import { Flame, Compass, Heart } from 'lucide-react';

export default function SlidingIngredients() {
  const lane1Ingredients = [
    { name: "Scotch Bonnet", emoji: "🌶️", profile: "Fiery Caribbean heat", desc: "Our legendary spicy luncheon meats and wieners are kicked up with real, vine-ripened local scotch bonnet peppers.", category: "Spicy & Hot" },
    { name: "Allspice / Pimento", emoji: "🫘", profile: "Warm, woody aroma", desc: "The secret to Bajan smoke. Whole pimento wood berries cure our bacon and picnic hams with an unmistakable smoky sweetness.", category: "Aromatic Spice" },
    { name: "Thyme", emoji: "🌿", profile: "Earthy, herbal depth", desc: "Sprigs of fresh garden thyme are blended directly into our sausage meat, creating a deep, traditional homemade broth flavor.", category: "Fresh Herb" },
    { name: "Fresh Garlic", emoji: "🧄", profile: "Bold, savoury base", desc: "A staple seasoning. Real crushed cloves provide that robust, full-bodied aromatic punch in every single bite.", category: "Essential Flavor" },
    { name: "Scotch Bonnet", emoji: "🌶️", profile: "Fiery Caribbean heat", desc: "Our legendary spicy luncheon meats and wieners are kicked up with real, vine-ripened local scotch bonnet peppers.", category: "Spicy & Hot" },
    { name: "Allspice / Pimento", emoji: "🫘", profile: "Warm, woody aroma", desc: "The secret to Bajan smoke. Whole pimento wood berries cure our bacon and picnic hams with an unmistakable smoky sweetness.", category: "Aromatic Spice" },
    { name: "Thyme", emoji: "🌿", profile: "Earthy, herbal depth", desc: "Sprigs of fresh garden thyme are blended directly into our sausage meat, creating a deep, traditional homemade broth flavor.", category: "Fresh Herb" },
    { name: "Fresh Garlic", emoji: "🧄", profile: "Bold, savoury base", desc: "A staple seasoning. Real crushed cloves provide that robust, full-bodied aromatic punch in every single bite.", category: "Essential Flavor" }
  ];

  const lane2Ingredients = [
    { name: "Sea Salt", emoji: "🧂", profile: "Natural, mineral cure", desc: "Harvested directly from clean Caribbean ocean pans, our salt provides a clean, perfectly balanced cure for picnic hams.", category: "Essential Curing" },
    { name: "Scallions / Escallion", emoji: "🌱", profile: "Sharp, oniony crunch", desc: "Finely minced fresh green onions are incorporated into our stuffing mixtures to bring out crisp, natural vegetable notes.", category: "Fresh Green" },
    { name: "Ginger", emoji: "🫚", profile: "Zesty, sweet heat", desc: "Adds a subtle, bright citrus undertone that cuts through rich meats and balances sweet holiday ham glazes.", category: "Aromatic Root" },
    { name: "Black Pepper", emoji: "🫑", profile: "Sharp, pungent warmth", desc: "Freshly cracked Tellicherry black pepper pods scattered throughout our luncheon loaves for a subtle breakfast spice.", category: "Essential Spice" },
    { name: "Sea Salt", emoji: "🧂", profile: "Natural, mineral cure", desc: "Harvested directly from clean Caribbean ocean pans, our salt provides a clean, perfectly balanced cure for picnic hams.", category: "Essential Curing" },
    { name: "Scallions / Escallion", emoji: "🌱", profile: "Sharp, oniony crunch", desc: "Finely minced fresh green onions are incorporated into our stuffing mixtures to bring out crisp, natural vegetable notes.", category: "Fresh Green" },
    { name: "Ginger", emoji: "🫚", profile: "Zesty, sweet heat", desc: "Adds a subtle, bright citrus undertone that cuts through rich meats and balances sweet holiday ham glazes.", category: "Aromatic Root" },
    { name: "Black Pepper", emoji: "🫑", profile: "Sharp, pungent warmth", desc: "Freshly cracked Tellicherry black pepper pods scattered throughout our luncheon loaves for a subtle breakfast spice.", category: "Essential Spice" }
  ];

  const valueCallouts = [
    {
      title: "Caribbean Heritage",
      description: "Celebrating and preserving over 40 years of authentic Barbadian food manufacturing and rich local culinary arts.",
      icon: <Compass size={24} className="text-emerald-500" />
    },
    {
      title: "Unyielding Quality",
      description: "Living by our absolute corporate motto: 'Nothing less than the best' in every sausage, ham, and canned loaf.",
      icon: <Flame size={24} className="text-amber-500" />
    },
    {
      title: "Community Trust",
      description: "Supporting local Bajan agricultural links and building a bright, thriving career community in Fontabelle.",
      icon: <Heart size={24} className="text-rose-500" />
    }
  ];

  return (
    <section id="ingredients" className="ingredients-section">
      {/* Background accents */}
      <div className="bg-glow w-[500px] h-[500px]" style={{ top: '20%', left: '5%', backgroundColor: 'rgba(16, 185, 129, 0.1)' }} />
      <div className="bg-glow w-[500px] h-[500px]" style={{ bottom: '20%', right: '5%', backgroundColor: 'rgba(245, 158, 11, 0.05)' }} />

      <div className="container">
        <div className="section-header">
          <span className="badge">Clean Caribbean Seasonings</span>
          <h2 className="section-h2">
            Our Values & <span style={{ color: '#f59e0b' }}>Fresh Ingredients</span>
          </h2>
          <p className="card-p" style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
            The secret to our flagship flavour is simple: real Caribbean herbs, direct farm seasoning, and pure smoking woods. Hover on any card to pause the scroll and read the source of our flavour.
          </p>
        </div>
      </div>

      {/* Tickers */}
      <div className="flex flex-col gap-md w-full select-none" style={{ marginBottom: '5rem' }}>
        
        {/* Lane 1 */}
        <div className="ticker-viewport py-4">
          <div className="ticker-edge-fades ticker-fade-left" />
          <div className="ticker-edge-fades ticker-fade-right" />

          <div className="ticker-lane left">
            {lane1Ingredients.map((item, idx) => (
              <div 
                key={idx}
                className="glass-panel ingredient-card"
              >
                <div className="flex justify-between align-center">
                  <span className="ingredient-emoji">{item.emoji}</span>
                  <span className="badge" style={{ color: '#10b981', border: '1px solid rgba(16,185,129,0.2)', background: 'rgba(16,185,129,0.05)', fontSize: '0.65rem' }}>
                    {item.category}
                  </span>
                </div>
                <div>
                  <h4 className="ingredient-h4">
                    {item.name}
                  </h4>
                  <span className="ingredient-sub">
                    {item.profile}
                  </span>
                  <p className="ingredient-p">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lane 2 */}
        <div className="ticker-viewport py-4">
          <div className="ticker-edge-fades ticker-fade-left" />
          <div className="ticker-edge-fades ticker-fade-right" />

          <div className="ticker-lane right">
            {lane2Ingredients.map((item, idx) => (
              <div 
                key={idx}
                className="glass-panel ingredient-card"
              >
                <div className="flex justify-between align-center">
                  <span className="ingredient-emoji">{item.emoji}</span>
                  <span className="badge" style={{ color: '#f59e0b', border: '1px solid rgba(245,158,11,0.2)', background: 'rgba(245,158,11,0.05)', fontSize: '0.65rem' }}>
                    {item.category}
                  </span>
                </div>
                <div>
                  <h4 className="ingredient-h4">
                    {item.name}
                  </h4>
                  <span className="ingredient-sub">
                    {item.profile}
                  </span>
                  <p className="ingredient-p">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Values Callouts */}
      <div className="container values-grid">
        <div className="grid grid-3 gap-lg">
          {valueCallouts.map((value, idx) => (
            <div 
              key={idx}
              className="glass-panel value-card flex flex-col group"
            >
              <div className="value-icon-box">
                {value.icon}
              </div>
              <h3 className="value-h3">
                {value.title}
              </h3>
              <p className="value-p">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
