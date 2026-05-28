import React, { useState } from 'react';
import { ChevronRight, Star } from 'lucide-react';

const PRODUCTS = [
  {
    name: "Farmer's Choice Hickory Bacon",
    brand: "FARMER'S CHOICE",
    emoji: '🥓',
    color: '#b83225',
    recipe: { title: 'Bajan Bacon & Egg Bake', time: '30 min' },
    tip: 'Pairs perfectly with fresh coconut bake on a Sunday morning.',
  },
  {
    name: 'Family Choice Spicy Luncheon Meat',
    brand: 'FAMILY CHOICE',
    emoji: '🥫',
    color: '#0d2b5e',
    recipe: { title: 'Luncheon Meat Fried Rice', time: '25 min' },
    tip: 'Cube and pan-fry until golden — total game changer in fried rice.',
  },
  {
    name: "Farmer's Choice Chicken Franks",
    brand: "FARMER'S CHOICE",
    emoji: '🌭',
    color: '#b83225',
    recipe: { title: 'Frank & Bean Skillet', time: '20 min' },
    tip: 'Slice diagonally and score before grilling for max caramelisation.',
  },
  {
    name: 'Bar Pac Bone-In Picnic Ham',
    brand: 'BAR PAC',
    emoji: '🍖',
    color: '#1f4d2a',
    recipe: { title: 'Sweet Clove Glazed Ham', time: '4 hrs' },
    tip: 'Score the fat, stud with cloves, and glaze every 45 minutes.',
  },
  {
    name: "Farmer's Choice Pork Sausages",
    brand: "FARMER'S CHOICE",
    emoji: '🍳',
    color: '#b83225',
    recipe: { title: 'Spicy Jerk Sausage Skewers', time: '35 min' },
    tip: 'Marinate in jerk paste overnight for deeper flavour.',
  },
];

export default function HaveYouTried() {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [stars, setStars] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);

  const product = PRODUCTS[index];

  const next = () => {
    setIndex(i => (i + 1) % PRODUCTS.length);
    setAnswer(null);
    setStars(0);
  };

  return (
    <section className="hyt-section">
      <div className="hyt-inner">
        <div className="hyt-left" style={{ '--brand-color': product.color }}>
          <span className="section-tag" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
            Have You Tried?
          </span>
          <div className="hyt-emoji">{product.emoji}</div>
          <h2 className="hyt-name">{product.name}</h2>
          <p className="hyt-brand-tag">{product.brand}</p>
          <p className="hyt-tip">💡 {product.tip}</p>

          {!answer && (
            <div className="hyt-btns">
              <button className="hyt-btn hyt-yes" onClick={() => setAnswer('love')}>
                👍 Yes, love it!
              </button>
              <button className="hyt-btn hyt-meh" onClick={() => setAnswer('meh')}>
                😐 Yes, it's OK
              </button>
              <button className="hyt-btn hyt-nope" onClick={() => setAnswer('nope')}>
                🤔 Not yet
              </button>
            </div>
          )}

          {answer === 'love' && (
            <div className="hyt-response">
              <p className="hyt-response-head">Amazing taste! Rate it:</p>
              <div className="hyt-stars">
                {[1, 2, 3, 4, 5].map(n => (
                  <button
                    key={n}
                    className={`hyt-star ${n <= (hoveredStar || stars) ? 'lit' : ''}`}
                    onMouseEnter={() => setHoveredStar(n)}
                    onMouseLeave={() => setHoveredStar(0)}
                    onClick={() => setStars(n)}
                  >
                    <Star size={28} fill={n <= (hoveredStar || stars) ? '#ffd06b' : 'none'} color={n <= (hoveredStar || stars) ? '#ffd06b' : 'rgba(255,255,255,0.4)'} />
                  </button>
                ))}
              </div>
              {stars > 0 && (
                <p className="hyt-rated">{stars >= 4 ? '🎉 We love to hear it!' : '🙏 Thanks for the feedback!'}</p>
              )}
              <button className="hyt-next" onClick={next}>
                Try the next one <ChevronRight size={15} />
              </button>
            </div>
          )}

          {answer === 'meh' && (
            <div className="hyt-response">
              <p className="hyt-response-head">Fair enough! Here's a recipe that might change your mind:</p>
              <div className="hyt-recipe-card">
                <span className="hyt-recipe-time">⏱ {product.recipe.time}</span>
                <p className="hyt-recipe-title">{product.recipe.title}</p>
              </div>
              <button className="hyt-next" onClick={next}>
                Next product <ChevronRight size={15} />
              </button>
            </div>
          )}

          {answer === 'nope' && (
            <div className="hyt-response">
              <p className="hyt-response-head">You're missing out! Try it tonight:</p>
              <div className="hyt-recipe-card">
                <span className="hyt-recipe-time">⏱ {product.recipe.time}</span>
                <p className="hyt-recipe-title">{product.recipe.title}</p>
              </div>
              <a href="#find-hipac" className="hyt-find">📍 Find it near you</a>
              <button className="hyt-next" onClick={next}>
                Next product <ChevronRight size={15} />
              </button>
            </div>
          )}
        </div>

        <div className="hyt-right">
          <div className="hyt-progress">
            {PRODUCTS.map((_, i) => (
              <button
                key={i}
                className={`hyt-dot ${i === index ? 'active' : ''}`}
                onClick={() => { setIndex(i); setAnswer(null); setStars(0); }}
                style={{ background: i === index ? '#ffd06b' : 'rgba(255,255,255,0.3)' }}
              />
            ))}
          </div>

          <div className="hyt-spin-scene">
            <div className="hyt-card-3d">
              {/* Front face */}
              <div className="hyt-face hyt-face-front" style={{ background: product.color }}>
                <div className="hyt-shine" />
                <div className="hyt-card-glow" />
                <div className="hyt-card-emoji">{product.emoji}</div>
                <p className="hyt-card-name">{product.name}</p>
                <p className="hyt-counter">{index + 1} of {PRODUCTS.length}</p>
              </div>
              {/* Back face */}
              <div className="hyt-face hyt-face-back" style={{ background: product.color }}>
                <div className="hyt-shine" />
                <div className="hyt-card-glow" />
                <p className="hyt-back-label">💡 Pro Tip</p>
                <p className="hyt-back-tip">{product.tip}</p>
                <div className="hyt-back-divider" />
                <p className="hyt-back-recipe">🍳 {product.recipe.title}</p>
                <span className="hyt-back-time">⏱ {product.recipe.time}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
