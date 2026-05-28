import React from 'react';
import { Flame, Compass, Heart } from 'lucide-react';

const LANE1 = [
  { emoji: '🧄', name: 'Garlic', profile: 'AROMATIC · PUNGENT', desc: 'Fresh-crushed garlic in every authentic recipe.' },
  { emoji: '🌶️', name: 'Scotch Bonnet', profile: 'FIERY · FRUITY', desc: 'The soul of Caribbean heat — bold and aromatic.' },
  { emoji: '🐷', name: 'Prime Pork', profile: 'LEAN · RICH', desc: 'Selected pork cuts for superior flavour and texture.' },
  { emoji: '🧂', name: 'Bajan Sea Salt', profile: 'MINERAL · CLEAN', desc: 'Hand-harvested Atlantic salt crystals from Barbados.' },
  { emoji: '🌿', name: 'Thyme', profile: 'HERBAL · WARM', desc: 'Fresh Barbadian thyme in every batch, no exceptions.' },
  { emoji: '🫙', name: 'Hickory Smoke', profile: 'DEEP · WOODY', desc: 'Slow cold-smoked over genuine hardwood for hours.' },
  { emoji: '🥬', name: 'Chive', profile: 'FRESH · MILD', desc: 'Local shive adds a delicate onion note to our blends.' },
  { emoji: '🍋', name: 'Lime Zest', profile: 'CITRUS · BRIGHT', desc: 'A Caribbean secret — lime lifts every savoury profile.' },
];

const LANE2 = [
  { emoji: '🫒', name: 'Clove', profile: 'SPICED · WARM', desc: 'Our signature sweet clove cure defines Bar Pac hams.' },
  { emoji: '🧅', name: 'Onion', profile: 'SWEET · SAVOURY', desc: 'Caramelised onion base in our luncheon meat seasoning.' },
  { emoji: '🫚', name: 'Pure Pork Fat', profile: 'RICH · SILKY', desc: 'Balanced fat content keeps every sausage juicy.' },
  { emoji: '🌾', name: 'Black Pepper', profile: 'BOLD · SHARP', desc: 'Coarsely cracked pepper in all premium ranges.' },
  { emoji: '🌰', name: 'Nutmeg', profile: 'WARM · NUTTY', desc: 'A treasured Caribbean spice, added with restraint.' },
  { emoji: '💧', name: 'Spring Water', profile: 'PURE · CLEAN', desc: 'Only clean water touches our meats during curing.' },
  { emoji: '🌺', name: 'Pimento', profile: 'FRAGRANT · MILD', desc: 'Allspice berries from across the Caribbean islands.' },
  { emoji: '🍯', name: 'Brown Sugar', profile: 'SWEET · CARAMEL', desc: 'Barbadian raw sugar in our glazed holiday hams.' },
];

const VALUES = [
  {
    icon: <Flame size={18} />,
    title: 'Caribbean Heritage',
    desc: 'Every recipe honours 45+ years of Barbadian food tradition, never compromising on authentic local flavour.',
  },
  {
    icon: <Compass size={18} />,
    title: 'Unyielding Quality',
    desc: 'Government-inspected facilities and rigorous quality control ensure every product meets international standards.',
  },
  {
    icon: <Heart size={18} />,
    title: 'Community Trust',
    desc: 'From Barbados to six Caribbean islands, families have trusted HIPAC for more than four decades.',
  },
];

export default function SlidingIngredients() {
  const duplicated = (arr) => [...arr, ...arr];

  return (
    <section id="values" className="values-v2">
      <div className="container">
        {/* Header */}
        <div className="values-header-v2 reveal">
          <span className="section-tag">What Goes In</span>
          <h2 className="section-h2-v2">
            Our <span className="gold-text">Ingredients</span> & Values
          </h2>
        </div>

        {/* Value callout grid */}
        <div className="values-callouts-v2 reveal">
          {VALUES.map((v, i) => (
            <div key={i} className="value-block">
              <div className="value-block-icon">{v.icon}</div>
              <h4 className="value-block-title">{v.title}</h4>
              <p className="value-block-p">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Ingredient tickers */}
        <div className="ticker-section-v2">
          <div className="ticker-label-v2">
            — Hover to pause and explore —
          </div>

          {/* Lane 1: left */}
          <div className="ticker-vp" style={{ marginBottom: '1.25rem' }}>
            <div className="ticker-fade-l" />
            <div className="ticker-fade-r" />
            <div className="ticker-track go-left">
              {duplicated(LANE1).map((ing, i) => (
                <div key={i} className="ing-card-v2">
                  <span className="ing-emoji-v2">{ing.emoji}</span>
                  <span className="ing-name-v2">{ing.name}</span>
                  <span className="ing-profile-v2">{ing.profile}</span>
                  <p className="ing-desc-v2">{ing.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Lane 2: right */}
          <div className="ticker-vp">
            <div className="ticker-fade-l" />
            <div className="ticker-fade-r" />
            <div className="ticker-track go-right">
              {duplicated(LANE2).map((ing, i) => (
                <div key={i} className="ing-card-v2">
                  <span className="ing-emoji-v2">{ing.emoji}</span>
                  <span className="ing-name-v2">{ing.name}</span>
                  <span className="ing-profile-v2">{ing.profile}</span>
                  <p className="ing-desc-v2">{ing.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
