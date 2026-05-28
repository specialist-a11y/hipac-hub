import React, { useState, useRef } from 'react';
import { Clock, Flame, ArrowRight } from 'lucide-react';

const RECIPES = [
  { title: "Farmer's Bacon Carbonara", brand: "FARMER'S CHOICE", cat: 'Quick', time: '20 min', diff: 'Easy', emoji: '🍝', color: '#b83225', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&auto=format&fit=crop' },
  { title: 'Spicy Jerk Sausage Skewers', brand: "FARMER'S CHOICE", cat: 'Grill', time: '35 min', diff: 'Medium', emoji: '🍢', color: '#c0531f', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&auto=format&fit=crop' },
  { title: 'Luncheon Meat Fried Rice', brand: 'FAMILY CHOICE', cat: 'Quick', time: '25 min', diff: 'Easy', emoji: '🍚', color: '#0d2b5e', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&auto=format&fit=crop' },
  { title: 'Sweet Clove Glazed Ham', brand: 'BAR PAC', cat: 'Holiday', time: '4 hrs', diff: 'Advanced', emoji: '🍖', color: '#1f4d2a', image: 'https://images.unsplash.com/photo-1607523677653-540d9f175f8b?w=400&auto=format&fit=crop' },
  { title: 'Crispy Nugget Tacos', brand: "FARMER'S CHOICE", cat: 'Quick', time: '20 min', diff: 'Easy', emoji: '🌮', color: '#b83225', image: 'https://images.unsplash.com/photo-1565299715199-866c917206bb?w=400&auto=format&fit=crop' },
  { title: 'Bajan Bacon & Egg Bake', brand: "FARMER'S CHOICE", cat: 'Breakfast', time: '30 min', diff: 'Easy', emoji: '🍳', color: '#b83225', image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&auto=format&fit=crop' },
  { title: 'Frank & Bean Skillet', brand: "FARMER'S CHOICE", cat: 'Quick', time: '20 min', diff: 'Easy', emoji: '🥘', color: '#b83225', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&auto=format&fit=crop' },
  { title: 'Ham Mac Pie', brand: 'BAR PAC', cat: 'Family', time: '45 min', diff: 'Medium', emoji: '🧀', color: '#1f4d2a', image: 'https://images.unsplash.com/photo-1612188941272-6a89e61ec2e7?w=400&auto=format&fit=crop' },
];

const CATS = ['All', 'Quick', 'Breakfast', 'Family', 'Grill', 'Holiday'];

export default function RecipeRail() {
  const [active, setActive] = useState('All');
  const [isDragging, setIsDragging] = useState(false);
  const railRef = useRef(null);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const filtered = active === 'All' ? RECIPES : RECIPES.filter(r => r.cat === active);

  const onMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.pageX - railRef.current.offsetLeft;
    scrollLeft.current = railRef.current.scrollLeft;
    railRef.current.style.cursor = 'grabbing';
  };
  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - railRef.current.offsetLeft;
    railRef.current.scrollLeft = scrollLeft.current - (x - startX.current);
  };
  const onMouseUp = () => { setIsDragging(false); if (railRef.current) railRef.current.style.cursor = 'grab'; };

  return (
    <section className="rrail-section" id="recipes">
      <div className="container">
        <div className="rrail-header">
          <div>
            <span className="section-tag">Time to Eat</span>
            <h2 className="section-h2-v2">
              Tonight, with what's<br />in the <span className="gold-text">freezer.</span>
            </h2>
          </div>
          <a href="#" className="rrail-see-all">
            See all recipes <ArrowRight size={14} />
          </a>
        </div>

        <div className="rrail-cats">
          {CATS.map(c => (
            <button
              key={c}
              className={`rrail-cat ${active === c ? 'active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div
        className="rrail-track"
        ref={railRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <div className="rrail-pad" />
        {filtered.map((r, i) => (
          <div key={i} className="rrail-card">
            <div className="rrail-img-wrap">
              <img src={r.image} alt={r.title} className="rrail-img" />
              <div className="rrail-img-overlay" />
              <span className="rrail-emoji">{r.emoji}</span>
              <span className="rrail-brand" style={{ background: r.color }}>{r.brand}</span>
            </div>
            <div className="rrail-body">
              <h4 className="rrail-title">{r.title}</h4>
              <div className="rrail-meta">
                <span><Clock size={10} /> {r.time}</span>
                <span><Flame size={10} /> {r.diff}</span>
              </div>
              <div className="rrail-cat-badge" style={{ color: r.color }}>{r.cat}</div>
            </div>
          </div>
        ))}
        <div className="rrail-pad" />
      </div>
    </section>
  );
}
