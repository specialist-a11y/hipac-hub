import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';

export default function Flavors({ activeTheme }) {
  const categories = [
    {
      id: "bacon",
      name: "Sizzling Bacon",
      color: "hsl(12, 45%, 15%)",
      lightColor: "hsl(12, 60%, 94%)",
      tabColor: "hsl(var(--family-red))",
      products: [
        {
          name: "Farmer's Choice Sliced Bacon",
          size: "250g / 500g",
          desc: "Naturally hickory-smoked pork slices with the perfect lean-to-fat ratio. Renders beautifully crispy.",
          image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=400&auto=format&fit=crop"
        },
        {
          name: "Farmer's Choice Thick Cut Bacon",
          size: "400g",
          desc: "For those who prefer a hearty, meaty bite. Great for gourmet burgers and BLTs.",
          image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400&auto=format&fit=crop"
        },
        {
          name: "Farmer's Choice Turkey Bacon",
          size: "250g",
          desc: "A lighter, leaner alternative with the same signature wood-smoke flavour.",
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&auto=format&fit=crop"
        }
      ]
    },
    {
      id: "sausages",
      name: "Caribbean Sausages",
      color: "hsl(142, 45%, 12%)",
      lightColor: "hsl(142, 50%, 94%)",
      tabColor: "hsl(var(--farmers-green))",
      products: [
        {
          name: "Farmer's Choice Pork Sausages",
          size: "8 Pack / 16 Pack",
          desc: "Our classic pork wieners seasoned with Barbadian herbs. Perfect for the grill.",
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&auto=format&fit=crop"
        },
        {
          name: "Farmer's Choice Chicken Franks",
          size: "340g Pack",
          desc: "Plump, tender chicken franks seasoned with local pimento and spices. Loved by kids and adults.",
          image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=400&auto=format&fit=crop"
        },
        {
          name: "Farmer's Choice Spicy Beef Hotdogs",
          size: "400g Pack",
          desc: "Juicy beef franks kicked up with a hot touch of Bajan scotch bonnet peppers.",
          image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400&auto=format&fit=crop"
        }
      ]
    },
    {
      id: "ham",
      name: "Holiday & Deli Hams",
      color: "hsl(340, 45%, 10%)",
      lightColor: "hsl(340, 50%, 94%)",
      tabColor: "hsl(var(--barpac-burgundy))",
      products: [
        {
          name: "Bar Pac Bone-In Picnic Ham",
          size: "4kg - 8kg",
          desc: "The ultimate Bajan holiday centrepiece. Hardwood slow-smoked for an exquisite clove aroma.",
          image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400&auto=format&fit=crop"
        },
        {
          name: "Farmer's Choice Sliced Ham",
          size: "150g Deli Pack",
          desc: "Tender, fully cooked pork shoulder slices. Perfect for sandwich stacking.",
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&auto=format&fit=crop"
        },
        {
          name: "Farmer's Choice Smoked Turkey Breast",
          size: "150g Pack",
          desc: "Thinly sliced, premium turkey breast smoked with Bajan mahogany wood shavings.",
          image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=400&auto=format&fit=crop"
        }
      ]
    },
    {
      id: "canned",
      name: "Family Luncheon Meats",
      color: "hsl(38, 50%, 12%)",
      lightColor: "hsl(38, 60%, 94%)",
      tabColor: "#fb923c",
      products: [
        {
          name: "Family Choice Classic Luncheon Meat",
          size: "340g Can",
          desc: "Our original protein recipe. Golden-pan-fry a slice for the perfect crispy edge breakfast.",
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&auto=format&fit=crop"
        },
        {
          name: "Family Choice Spicy Luncheon Meat",
          size: "340g Can",
          desc: "Infused with standard Caribbean hot peppers. Delivers an authentic island kick.",
          image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400&auto=format&fit=crop"
        },
        {
          name: "Family Choice Smoked Luncheon Meat",
          size: "340g Can",
          desc: "Rich hickory aroma added to the traditional recipe. Excellent in fried rice.",
          image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=400&auto=format&fit=crop"
        }
      ]
    },
    {
      id: "breaded",
      name: "Golden Breaded Items",
      color: "hsl(210, 45%, 12%)",
      lightColor: "hsl(210, 55%, 94%)",
      tabColor: "#3b82f6",
      products: [
        {
          name: "Farmer's Choice Chicken Nuggets",
          size: "500g Bag",
          desc: "100% white breast meat chicken nuggets in a crispy, golden-seasoned Bajan tempura batter.",
          image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400&auto=format&fit=crop"
        },
        {
          name: "Farmer's Choice Breaded Chicken Fillets",
          size: "4 Pack",
          desc: "Seasoned breasts ready to bake or fry for a crunchy burger patty replacement.",
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&auto=format&fit=crop"
        },
        {
          name: "Farmer's Choice Shrimp Nuggets",
          size: "400g Bag",
          desc: "Succulent ocean shrimp in a light pepper breading. Air-fries to crispy perfection.",
          image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=400&auto=format&fit=crop"
        }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="flavors" 
      className="flavors-section"
      style={{ backgroundColor: activeTheme === 'dark' ? categories[activeCategory].color : categories[activeCategory].lightColor }}
    >
      {/* Decorative glows */}
      <div 
        className="bg-glow w-[700px] h-[700px]"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.08, backgroundColor: categories[activeCategory].tabColor }}
      />

      <div className="container">
        <div className="flex justify-between align-center" style={{ marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div className="flex flex-col gap-sm text-left" style={{ maxWidth: '600px' }}>
            <span className="badge">
              <Sparkles size={12} style={{ color: '#f59e0b' }} />
              FLAVOUR DIRECTORY
            </span>
            <h2 className="section-h2">
              Bring Quality <span style={{ color: '#f59e0b' }}>Home</span>
            </h2>
            <p className="card-p" style={{ color: 'var(--text-secondary)' }}>
              Browse our diverse, Caribbean-seasoned ranges. Click a flavor tab below to watch the theme change instantly and unlock our flagship creations.
            </p>
          </div>

          {/* Nav arrows */}
          <div className="slider-controls">
            <button 
              onClick={() => handleScroll('left')}
              className="btn-arrow"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => handleScroll('right')}
              className="btn-arrow"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Tab Headers */}
        <div className="flavor-tabs">
          {categories.map((cat, idx) => {
            const isActive = activeCategory === idx;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(idx)}
                className={`flavor-tab-btn ${isActive ? 'active' : ''}`}
                style={{
                  borderBottom: isActive ? `3px solid ${cat.tabColor}` : 'none'
                }}
              >
                <div 
                  className="tab-indicator-dot"
                  style={{ backgroundColor: cat.tabColor }}
                />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Product Carousel */}
        <div 
          ref={scrollContainerRef}
          className="product-scroller"
        >
          {categories[activeCategory].products.map((product, pIdx) => (
            <div
              key={pIdx}
              className="glass-panel product-scroller-card group"
            >
              {/* Product Card Image Wrapper */}
              <div className="card-image-wrap">
                <div className="card-img-overlay" />
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="card-img"
                />
                
                <div className="badge card-size-badge">
                  {product.size}
                </div>
              </div>

              {/* Info details */}
              <div className="card-info">
                <span 
                  className="card-sub"
                  style={{ color: categories[activeCategory].tabColor }}
                >
                  ESTABLISHED ORIGINAL
                </span>
                <h4 className="card-h4">
                  {product.name}
                </h4>
                <p className="card-p">
                  {product.desc}
                </p>

                {/* Footer link */}
                <div className="card-footer">
                  <span className="flex align-center gap-xs">
                    <Eye size={14} />
                    View Details
                  </span>
                  <a href="#recipes">Find Recipes</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
