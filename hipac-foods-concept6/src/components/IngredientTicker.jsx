import React from 'react';

const ITEMS = [
  { emoji: '🌶️', name: 'Scotch Bonnet' },
  { emoji: '🧄', name: 'Garlic' },
  { emoji: '🌿', name: 'Fresh Thyme' },
  { emoji: '🫙', name: 'Sea Salt' },
  { emoji: '🥩', name: 'Hickory Smoke' },
  { emoji: '🍍', name: 'Pineapple' },
  { emoji: '🌿', name: 'Pimento' },
  { emoji: '🍬', name: 'Cane Sugar' },
  { emoji: '🫚', name: 'Cracked Pepper' },
  { emoji: '🌱', name: 'Bay Leaf' },
  { emoji: '🍋', name: 'Lime Zest' },
  { emoji: '🧅', name: 'Sweet Onion' },
];

const DUPED = [...ITEMS, ...ITEMS, ...ITEMS];

export default function IngredientTicker() {
  return (
    <div className="iticker-wrap">
      <div className="iticker-label">Real Caribbean Ingredients ·</div>
      <div className="iticker-track">
        <div className="iticker-inner">
          {DUPED.map((item, i) => (
            <span key={i} className="iticker-pill">
              <span className="iticker-emoji">{item.emoji}</span>
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
