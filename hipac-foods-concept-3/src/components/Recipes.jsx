import React, { useState, useEffect } from 'react';
import { Search, Flame, Clock, Eye, Sparkles, Play, Video } from 'lucide-react';

export default function Recipes() {
  const recipeData = [
    {
      id: "bacon-carbonara",
      title: "Sizzling Bacon Carbonara",
      product: "Farmer's Choice Sliced Bacon",
      category: "bacon",
      difficulty: "Medium",
      time: "25 Mins",
      servings: "4 People",
      desc: "A rich, creamy Italian classic kicked up with the deep, mahogany-hardwood smokiness of Barbados' favourite bacon. Tossed with farm-fresh eggs and cracked Bajan black pepper.",
      image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=600&auto=format&fit=crop",
      steps: [
        "Slice bacon into thick lardons and fry in a cold skillet until fat is fully rendered and edges are golden-crisp.",
        "Boil rigatoni or spaghetti in heavily salted water until al dente.",
        "Whisk fresh egg yolks, grated Pecorino Romano cheese, and a generous crack of black pepper in a small bowl.",
        "Toss hot pasta directly into the bacon pan off the heat, then quickly stir in the egg mixture with pasta water to emulsify into a silky sauce."
      ]
    },
    {
      id: "sausage-skewers",
      title: "Spicy Jerk Sausage Skewers",
      product: "Farmer's Choice Pork Sausages",
      category: "sausages",
      difficulty: "Easy",
      time: "15 Mins",
      servings: "6 People",
      desc: "Chunky cuts of seasoned pork sausages, sweet Bajan pineapples, and colorful bell peppers glazed in a spicy sweet jerk marinade and grilled over wood-coal.",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop",
      steps: [
        "Cut pork sausages into 1-inch chunks.",
        "Thread sausages onto skewers, alternating with fresh pineapple cubes, red onions, and bell peppers.",
        "Brush heavily with sweet jerk barbecue glaze.",
        "Grill on high heat for 3-4 minutes per side until charred, turning regularly."
      ]
    },
    {
      id: "luncheon-fried-rice",
      title: "Spicy Luncheon Fried Rice",
      product: "Family Choice Spicy Luncheon Meat",
      category: "canned",
      difficulty: "Easy",
      time: "12 Mins",
      servings: "4 People",
      desc: "The ultimate Bajan comfort meal. Crispy, cubed spicy luncheon meat tossed with ginger, scallions, sweet peas, jasmine rice, and scrambled farm eggs.",
      image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=600&auto=format&fit=crop",
      steps: [
        "Dice luncheon meat into 1/2-inch cubes and pan-fry in a dry wok until heavily browned and crispy on all sides.",
        "Push meat to the side, sauté minced ginger, garlic, and fresh chopped scallions in the remaining rendered fat.",
        "Stir in day-old cold jasmine rice and toss on high heat.",
        "Drizzle with light soy sauce, toss in sweet peas, push rice aside to scramble eggs, and combine."
      ]
    },
    {
      id: "glazed-ham",
      title: "Sweet Clove Glazed Picnic Ham",
      product: "Bar Pac Bone-In Picnic Ham",
      category: "ham",
      difficulty: "Hard",
      time: "2.5 Hours",
      servings: "12 People",
      desc: "The legendary Christmas centrepiece. A slow-roasted bone-in ham studded with fragrant whole cloves and basted every 15 minutes with a sweet Bajan cherry-rum glaze.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
      steps: [
        "Preheat oven to 325°F (160°C). Score the ham skin in a diamond pattern.",
        "Stud the intersection of each diamond with a whole dried clove berry.",
        "Roast the ham for 2 hours, basting periodically.",
        "In a saucepan, reduce dark rum, brown sugar, pineapple juice, and cherry syrup until syrupy. Pour glaze over ham during the final 30 minutes of roasting."
      ]
    },
    {
      id: "chicken-tacos",
      title: "Crunchy Tempura Chicken Tacos",
      product: "Farmer's Choice Chicken Nuggets",
      category: "breaded",
      difficulty: "Easy",
      time: "20 Mins",
      servings: "3 People",
      desc: "Golden breaded tempura chicken nuggets air-fried to a crunchy crisp, tucked inside warm soft corn tortillas, and topped with a creamy scotch-bonnet cilantro lime slaw.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
      steps: [
        "Air-fry chicken nuggets at 400°F (200°C) for 12 minutes until crunchy.",
        "Toss shredded cabbage, minced cilantro, lime juice, and spicy garlic-mayo together to make a slaw.",
        "Char corn tortillas directly over a gas flame to toast.",
        "Place 3 crunchy nuggets in each tortilla, load with coleslaw, and garnish with sliced pickled red onions."
      ]
    }
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [videoTimer, setVideoTimer] = useState(0);

  useEffect(() => {
    let interval;
    if (hoveredCardId !== null) {
      setVideoTimer(0);
      interval = setInterval(() => {
        setVideoTimer(prev => (prev >= 15 ? 0 : prev + 1));
      }, 500);
    } else {
      setVideoTimer(0);
    }
    return () => clearInterval(interval);
  }, [hoveredCardId]);

  const categories = [
    { id: "all", name: "All Recipes" },
    { id: "bacon", name: "Bacon" },
    { id: "sausages", name: "Sausages" },
    { id: "ham", name: "Hams" },
    { id: "canned", name: "Luncheon Loaves" },
    { id: "breaded", name: "Breaded Chicken" }
  ];

  const filteredRecipes = recipeData.filter(recipe => {
    const matchesCategory = activeCategory === "all" || recipe.category === activeCategory;
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          recipe.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          recipe.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="recipes" className="recipes-section">
      {/* Background accents */}
      <div className="bg-glow w-[500px] h-[500px]" style={{ top: '10%', right: '10%', backgroundColor: 'rgba(245, 158, 11, 0.08)' }} />
      <div className="bg-glow w-[400px] h-[400px]" style={{ bottom: '10%', left: '10%', backgroundColor: 'rgba(239, 68, 68, 0.05)' }} />

      <div className="container">
        <div className="section-header">
          <span className="badge">
            <Sparkles size={12} style={{ color: '#f59e0b' }} />
            BAJAN RECIPE HUB
          </span>
          <h2 className="section-h2">
            Time to <span style={{ color: '#f59e0b' }}>Eat</span>
          </h2>
          <p className="card-p" style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
            Search delicious, homemade Caribbean meals. Hover over cards to instantly autoplay recipe videos and get structural cooking timelines.
          </p>

          {/* Search bar wrapper */}
          <div className="search-input-wrapper">
            <Search className="search-icon" size={18} />
            <input
              type="text"
              placeholder="Search by product (e.g. Bacon, Ham)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-bar"
            />
          </div>
        </div>

        {/* Category buttons */}
        <div className="category-buttons">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-3 gap-lg">
          {filteredRecipes.map((recipe) => {
            const isHovered = hoveredCardId === recipe.id;
            const currentSeconds = Math.floor(videoTimer);
            const playbackStr = `0:${currentSeconds < 10 ? '0' + currentSeconds : currentSeconds}`;

            return (
              <div
                key={recipe.id}
                onMouseEnter={() => setHoveredCardId(recipe.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                className="glass-panel recipe-card group"
              >
                {/* Media Container */}
                <div className="recipe-media-panel select-none">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="recipe-img"
                    style={{
                      transform: isHovered ? 'scale(1.15)' : 'scale(1.0)',
                      filter: isHovered ? 'blur(2px)' : 'none',
                      opacity: isHovered ? 0.35 : 0.75
                    }}
                  />
                  <div className="recipe-media-overlay" />

                  {/* Autoplay Video Loop Layer */}
                  {isHovered && (
                    <div className="video-overlay-panel">
                      <div className="flex justify-between align-center" style={{ width: '100%' }}>
                        <span className="autoplay-badge">
                          <span />
                          AUTOPLAY VIDEO
                        </span>
                        <span className="video-timestamp">
                          {playbackStr} / 0:15
                        </span>
                      </div>

                      <div className="video-play-btn">
                        <Play size={20} fill="#000" style={{ marginLeft: '2px' }} />
                      </div>

                      <div className="flex flex-col gap-xs" style={{ width: '100%', marginTop: 'auto' }}>
                        <div style={{ height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px', overflow: 'hidden', width: '100%' }}>
                          <div 
                            style={{ height: '100%', background: '#f59e0b', width: `${(videoTimer / 15) * 100}%`, transition: 'width 0.3s ease' }}
                          />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', color: 'var(--neutral-400)', fontFamily: 'var(--font-mono)' }}>
                          <span>Slow Cooking Pan</span>
                          <span>Auto Loop</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Camera icon badge */}
                  {!isHovered && (
                    <div className="btn-icon-circle">
                      <Video size={14} />
                    </div>
                  )}

                  <div className="recipe-brand-badge">
                    <span className="badge" style={{ fontSize: '9px', borderColor: 'rgba(16, 185, 129, 0.3)', color: '#10b981', background: 'rgba(16, 185, 129, 0.05)' }}>
                      {recipe.product.split(" ")[0]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="recipe-info">
                  <div>
                    <h3 className="recipe-h3">
                      {recipe.title}
                    </h3>
                    <p className="recipe-p">
                      {recipe.desc}
                    </p>
                  </div>

                  <div className="flex flex-col gap-md">
                    <div className="recipe-meta">
                      <div className="meta-item">
                        <Clock size={12} style={{ color: '#f59e0b' }} />
                        <span>{recipe.time}</span>
                      </div>
                      <div className="meta-item">
                        <Flame size={12} style={{ color: '#ef4444' }} />
                        <span>{recipe.difficulty}</span>
                      </div>
                      <span>{recipe.servings}</span>
                    </div>

                    <button
                      onClick={() => setSelectedRecipe(recipe)}
                      className="btn-full-recipe"
                    >
                      <Eye size={14} />
                      View Full Recipe
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty search */}
        {filteredRecipes.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '2.5rem' }}>🥣</span>
            <h3 style={{ fontHeading: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-primary)' }}>No Recipes Found</h3>
            <p className="card-p" style={{ fontSize: '0.85rem' }}>Try searching for other ingredients like 'Bacon', 'Ham', or 'Wieners'.</p>
          </div>
        )}

        {/* Recipe detail sheet Modal */}
        {selectedRecipe && (
          <div className="modal-overlay">
            <div className="glass-panel modal-card">
              <button 
                onClick={() => setSelectedRecipe(null)}
                className="modal-close-btn"
              >
                Close
              </button>

              <div className="modal-content">
                <div className="flex flex-col gap-xs">
                  <span className="modal-tag">
                    Product: {selectedRecipe.product}
                  </span>
                  <h3 className="modal-h3">
                    {selectedRecipe.title}
                  </h3>
                  <div className="modal-meta-row">
                    <span>Prep Time: {selectedRecipe.time}</span>
                    <span>•</span>
                    <span>Difficulty: {selectedRecipe.difficulty}</span>
                    <span>•</span>
                    <span>Servings: {selectedRecipe.servings}</span>
                  </div>
                </div>

                <hr className="modal-divider" />

                <div className="flex flex-col gap-md">
                  <div>
                    <h4 className="modal-section-h4">Description</h4>
                    <p className="recipe-p" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      {selectedRecipe.desc}
                    </p>
                  </div>

                  <div>
                    <h4 className="modal-section-h4">Step-By-Step Instructions</h4>
                    <div className="flex flex-col gap-sm">
                      {selectedRecipe.steps.map((step, sIdx) => (
                        <div key={sIdx} className="modal-step-row">
                          <span className="modal-step-number">
                            {sIdx + 1}
                          </span>
                          <p className="modal-step-text">
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
