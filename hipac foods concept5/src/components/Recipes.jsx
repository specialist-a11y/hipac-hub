import React, { useState, useEffect, useRef } from 'react';
import { Search, Clock, Flame, X, Play, Video, Share2, Printer } from 'lucide-react';

const RECIPES = [
  {
    title: "Farmer's Choice Bacon Carbonara",
    brand: "FARMER'S CHOICE",
    category: 'Pasta',
    time: '20 min',
    difficulty: 'Easy',
    desc: "Silky pasta tossed with crispy hickory bacon, egg yolk, and parmesan. The Caribbean twist on a Roman classic.",
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=600&auto=format&fit=crop',
    steps: [
      'Fry 6 rashers of Farmer\'s Choice Sliced Bacon until golden and crispy. Set aside.',
      'Cook 400g spaghetti in salted boiling water until al dente. Reserve 1 cup pasta water.',
      'Whisk 4 egg yolks with 80g grated Parmesan and cracked black pepper.',
      'Off heat, toss pasta with bacon, egg mixture, and pasta water until saucy.',
      'Serve immediately with extra Parmesan and a crack of black pepper.',
    ],
  },
  {
    title: 'Spicy Jerk Sausage Skewers',
    brand: "FARMER'S CHOICE",
    category: 'Grill',
    time: '35 min',
    difficulty: 'Medium',
    desc: "Pork sausages marinated in Bajan jerk seasoning and grilled over charcoal with sweet peppers and pineapple.",
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop',
    steps: [
      'Slice Farmer\'s Choice Pork Sausages into thirds. Marinate in jerk paste for 30 minutes.',
      'Cube pineapple and sweet peppers into skewer-friendly pieces.',
      'Thread sausage, pineapple, and pepper alternately onto soaked wooden skewers.',
      'Grill over medium-high heat 4–5 minutes per side until charred and cooked through.',
      'Brush with honey glaze in the final minute and serve with rice and peas.',
    ],
  },
  {
    title: 'Luncheon Meat Fried Rice',
    brand: 'FAMILY CHOICE',
    category: 'Rice',
    time: '25 min',
    difficulty: 'Easy',
    desc: "Golden-fried rice with cubed Family Choice luncheon meat, egg, and Caribbean spices. A weeknight staple.",
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=600&auto=format&fit=crop',
    steps: [
      'Dice half a can of Family Choice Spicy Luncheon Meat into 1cm cubes.',
      'Pan-fry cubes in a hot wok until golden and caramelised on all sides.',
      'Push to one side. Crack 3 eggs into the wok and scramble until half-cooked.',
      'Add 3 cups day-old cooked rice. Stir-fry over high heat 2 minutes.',
      'Season with soy sauce, sesame oil, green onion, and scotch bonnet to taste.',
    ],
  },
  {
    title: 'Sweet Clove Glazed Picnic Ham',
    brand: 'BAR PAC',
    category: 'Holiday',
    time: '4 hrs',
    difficulty: 'Advanced',
    desc: "The crown jewel of a Caribbean Christmas table. Bar Pac Bone-In Ham slow-roasted with a brown sugar clove glaze.",
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop',
    steps: [
      'Score the fat cap of a Bar Pac Bone-In Picnic Ham in a diamond pattern.',
      'Stud the intersections with whole cloves. Place in a deep roasting pan.',
      'Mix brown sugar, Dijon mustard, pineapple juice, and allspice for the glaze.',
      'Roast at 160°C for 3.5 hours, glazing every 45 minutes until golden.',
      'Rest 20 minutes before slicing. Serve with sorrel sauce and cucumber salad.',
    ],
  },
  {
    title: 'Crispy Chicken Nugget Tacos',
    brand: "FARMER'S CHOICE",
    category: 'Tacos',
    time: '20 min',
    difficulty: 'Easy',
    desc: "Air-fried Farmer's Choice Chicken Nuggets tucked into warm flour tortillas with mango slaw and hot sauce.",
    image: 'https://images.unsplash.com/photo-1565299715199-866c917206bb?q=80&w=600&auto=format&fit=crop',
    steps: [
      'Air-fry Farmer\'s Choice Chicken Nuggets at 200°C for 12 minutes, shaking halfway.',
      'Toss shredded cabbage, grated mango, lime juice, and cilantro for the slaw.',
      'Warm flour tortillas directly over a gas flame for 10 seconds per side.',
      'Layer: slaw, 3 nuggets per taco, drizzle of hot sauce and a squeeze of lime.',
      'Finish with sliced avocado and an extra crack of black pepper.',
    ],
  },
  {
    title: 'Bajan Bacon & Egg Bake',
    brand: "FARMER'S CHOICE",
    category: 'Breakfast',
    time: '30 min',
    difficulty: 'Easy',
    desc: "A one-pan breakfast bake with Farmer's Choice bacon, eggs, cheddar, and sweet peppers. Sunday mornings sorted.",
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=600&auto=format&fit=crop',
    steps: [
      'Preheat oven to 180°C. Line a baking dish with Farmer\'s Choice Sliced Bacon.',
      'Scatter diced sweet peppers, cherry tomatoes, and sliced onion over the bacon.',
      'Crack 6 eggs evenly into the dish. Season generously with salt and cracked pepper.',
      'Sprinkle with 80g grated sharp cheddar. Bake 20–25 minutes until eggs are just set.',
      'Finish under the grill for 2 minutes for a golden cheese top. Serve with toast.',
    ],
  },
];

const FILTERS = ['All', 'Breakfast', 'Pasta', 'Rice', 'Grill', 'Holiday', 'Tacos'];
const BRAND_FILTERS = ["All Brands", "FARMER'S CHOICE", 'FAMILY CHOICE', 'BAR PAC'];
const TIME_FILTERS = ['Any Time', 'Under 20 min', '20–35 min', '35 min+'];

export default function Recipes() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [brandFilter, setBrandFilter] = useState('All Brands');
  const [timeFilter, setTimeFilter] = useState('Any Time');
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [progress, setProgress] = useState(0);
  const [openRecipe, setOpenRecipe] = useState(null);
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(null);

  const startTimer = (idx) => {
    setHoveredIdx(idx);
    setProgress(0);
    timerRef.current = setInterval(() => setProgress(p => Math.min(p + 1, 15)), 300);
  };
  const stopTimer = () => {
    clearInterval(timerRef.current);
    setHoveredIdx(null);
    setProgress(0);
  };

  useEffect(() => () => clearInterval(timerRef.current), []);

  const parseMinutes = (t) => parseInt(t);

  const filtered = RECIPES.filter(r => {
    const q = query.toLowerCase();
    const matchQ = !q || r.title.toLowerCase().includes(q) || r.brand.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q);
    const matchF = filter === 'All' || r.category === filter;
    const matchB = brandFilter === 'All Brands' || r.brand === brandFilter;
    const mins = parseMinutes(r.time);
    const matchT = timeFilter === 'Any Time'
      || (timeFilter === 'Under 20 min' && mins < 20)
      || (timeFilter === '20–35 min' && mins >= 20 && mins <= 35)
      || (timeFilter === '35 min+' && mins > 35);
    return matchQ && matchF && matchB && matchT;
  });

  const formatTime = (s) => `0:${String(s).padStart(2, '0')}`;

  const handleShare = (recipe) => {
    if (navigator.share) {
      navigator.share({ title: recipe.title, text: recipe.desc, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = (recipe) => {
    const win = window.open('', '_blank');
    win.document.write(`<html><head><title>${recipe.title}</title><style>body{font-family:sans-serif;max-width:600px;margin:2rem auto;color:#222}h1{color:#f99e1b}ol{line-height:1.8}p{color:#555}</style></head><body><h1>${recipe.title}</h1><p><strong>${recipe.brand}</strong> · ${recipe.time} · ${recipe.difficulty}</p><p>${recipe.desc}</p><hr/><h3>Instructions</h3><ol>${recipe.steps.map(s => `<li>${s}</li>`).join('')}</ol><p style="margin-top:2rem;font-size:0.75rem;color:#999">Recipe from HIPAC Foods · hipacfoods.com</p></body></html>`);
    win.document.close();
    win.print();
  };

  return (
    <section id="recipes" className="recipes-v2">
      <div className="container">
        {/* Header */}
        <div className="recipes-header-v2">
          <div>
            <span className="section-tag">From Our Kitchen</span>
            <h2 className="section-h2-v2">
              Recipe <span className="gold-text">Hub</span>
            </h2>
          </div>
        </div>

        {/* Search */}
        <div className="recipe-search-v2">
          <span className="recipe-search-icon-v2"><Search size={15} /></span>
          <input
            type="text"
            className="recipe-search-input-v2"
            placeholder="Search by name, product, or ingredient…"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="recipe-filter-strip">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`recipe-filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="recipe-filter-strip" style={{ marginTop: '0.5rem' }}>
          {BRAND_FILTERS.map(b => (
            <button
              key={b}
              className={`recipe-filter-btn ${brandFilter === b ? 'active' : ''}`}
              onClick={() => setBrandFilter(b)}
            >
              {b}
            </button>
          ))}
        </div>

        <div className="recipe-filter-strip" style={{ marginTop: '0.5rem' }}>
          {TIME_FILTERS.map(t => (
            <button
              key={t}
              className={`recipe-filter-btn ${timeFilter === t ? 'active' : ''}`}
              onClick={() => setTimeFilter(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="no-results-v2">
            <span className="icon">🍽️</span>
            <p style={{ color: 'var(--text-s)' }}>No recipes found. Try a different search.</p>
          </div>
        ) : (
          <div className="recipe-grid-v2">
            {filtered.map((recipe, i) => (
              <div
                key={i}
                className="recipe-card-v2 reveal"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div
                  className="recipe-media-v2"
                  onMouseEnter={() => startTimer(i)}
                  onMouseLeave={stopTimer}
                >
                  <img src={recipe.image} alt={recipe.title} className="recipe-img-v2" />
                  <div className="recipe-img-overlay-v2" />
                  <span className="recipe-brand-v2">{recipe.brand}</span>

                  <div className="rec-camera-icon">
                    <Video size={12} />
                  </div>

                  {hoveredIdx === i && (
                    <div className="recipe-autoplay-v2">
                      <div className="rec-live-badge">
                        <span />REC
                      </div>
                      <div className="rec-play-btn">
                        <Play size={18} fill="#fff" color="#fff" />
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <span className="rec-timestamp">{formatTime(progress)}</span>
                      </div>
                      <div className="rec-progress-bar">
                        <div className="rec-progress-fill" style={{ width: `${(progress / 15) * 100}%` }} />
                      </div>
                    </div>
                  )}
                </div>

                <div className="recipe-body-v2">
                  <h4 className="recipe-title-v2">{recipe.title}</h4>
                  <p className="recipe-desc-v2">{recipe.desc}</p>
                  <div className="recipe-meta-v2">
                    <span><Clock size={11} /> {recipe.time}</span>
                    <span><Flame size={11} /> {recipe.difficulty}</span>
                  </div>
                  <button className="recipe-cta-v2" onClick={() => setOpenRecipe(recipe)}>
                    View Recipe →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {openRecipe && (
        <div className="modal-overlay-v2" onClick={() => setOpenRecipe(null)}>
          <div className="modal-v2" onClick={e => e.stopPropagation()}>
            <button className="modal-close-v2" onClick={() => setOpenRecipe(null)}>
              <X size={12} /> Close
            </button>
            <div className="modal-inner-v2">
              <span className="modal-eyebrow">{openRecipe.brand}</span>
              <h3 className="modal-title-v2">{openRecipe.title}</h3>
              <div className="modal-meta-v2">
                <span><Clock size={11} /> {openRecipe.time}</span>
                <span><Flame size={11} /> {openRecipe.difficulty}</span>
                <span>{openRecipe.category}</span>
              </div>
              <hr className="modal-divider-v2" />
              <p className="modal-sec-head">Instructions</p>
              {openRecipe.steps.map((step, i) => (
                <div key={i} className="modal-step-v2">
                  <span className="modal-step-num">{i + 1}</span>
                  <p className="modal-step-text">{step}</p>
                </div>
              ))}

              <div className="modal-actions-v2">
                <button className="modal-action-btn" onClick={() => handleShare(openRecipe)}>
                  <Share2 size={13} />
                  {copied ? 'Copied!' : 'Share'}
                </button>
                <button className="modal-action-btn" onClick={() => handlePrint(openRecipe)}>
                  <Printer size={13} />
                  Print
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
