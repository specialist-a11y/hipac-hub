import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CATEGORIES = [
  {
    id: 'bacon',
    name: 'Sizzling Bacon',
    dotColor: '#f59e0b',
    products: [
      { name: "Farmer's Choice Sliced Bacon", size: '250g / 500g', desc: "Naturally hickory-smoked pork slices with the perfect lean-to-fat ratio. Renders beautifully crispy.", image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=400&auto=format&fit=crop', brand: "FARMER'S CHOICE" },
      { name: "Farmer's Choice Thick Cut Bacon", size: '400g', desc: "For those who prefer a hearty, meaty bite. Great for gourmet burgers and BLTs.", image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400&auto=format&fit=crop', brand: "FARMER'S CHOICE" },
      { name: "Farmer's Choice Turkey Bacon", size: '250g', desc: "A lighter, leaner alternative with the same signature wood-smoke flavour.", image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&auto=format&fit=crop', brand: "FARMER'S CHOICE" },
    ],
  },
  {
    id: 'sausages',
    name: 'Caribbean Sausages',
    dotColor: '#10b981',
    products: [
      { name: "Farmer's Choice Pork Sausages", size: '8 / 16 Pack', desc: "Classic pork wieners seasoned with Barbadian herbs. Perfect for the grill.", image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&auto=format&fit=crop', brand: "FARMER'S CHOICE" },
      { name: "Farmer's Choice Chicken Franks", size: '340g', desc: "Plump, tender chicken franks seasoned with local pimento and spices.", image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=400&auto=format&fit=crop', brand: "FARMER'S CHOICE" },
      { name: "Farmer's Choice Spicy Beef Hotdogs", size: '400g', desc: "Juicy beef franks kicked up with Bajan scotch bonnet peppers.", image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400&auto=format&fit=crop', brand: "FARMER'S CHOICE" },
    ],
  },
  {
    id: 'ham',
    name: 'Holiday & Deli Hams',
    dotColor: '#ec4899',
    products: [
      { name: 'Bar Pac Bone-In Picnic Ham', size: '4kg – 8kg', desc: "The ultimate Bajan holiday centrepiece. Hardwood slow-smoked for an exquisite clove aroma.", image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400&auto=format&fit=crop', brand: 'BAR PAC' },
      { name: "Farmer's Choice Sliced Ham", size: '150g Deli', desc: "Tender, fully cooked pork shoulder slices. Perfect for sandwich stacking.", image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&auto=format&fit=crop', brand: "FARMER'S CHOICE" },
      { name: "Farmer's Choice Smoked Turkey Breast", size: '150g', desc: "Thinly sliced turkey breast smoked with Bajan mahogany wood shavings.", image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=400&auto=format&fit=crop', brand: "FARMER'S CHOICE" },
    ],
  },
  {
    id: 'canned',
    name: 'Luncheon Meats',
    dotColor: '#f97316',
    products: [
      { name: 'Family Choice Classic Luncheon Meat', size: '340g Can', desc: "Golden-pan-fry a slice for the perfect crispy edge breakfast. An original Caribbean favourite.", image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&auto=format&fit=crop', brand: 'FAMILY CHOICE' },
      { name: 'Family Choice Spicy Luncheon Meat', size: '340g Can', desc: "Infused with Caribbean hot peppers. Delivers an authentic island kick.", image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400&auto=format&fit=crop', brand: 'FAMILY CHOICE' },
      { name: 'Family Choice Smoked Luncheon Meat', size: '340g Can', desc: "Rich hickory aroma added to the traditional recipe. Excellent in fried rice.", image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=400&auto=format&fit=crop', brand: 'FAMILY CHOICE' },
    ],
  },
  {
    id: 'breaded',
    name: 'Golden Breaded',
    dotColor: '#3b82f6',
    products: [
      { name: "Farmer's Choice Chicken Nuggets", size: '500g', desc: "100% white breast meat in a crispy, golden-seasoned Bajan tempura batter.", image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400&auto=format&fit=crop', brand: "FARMER'S CHOICE" },
      { name: "Farmer's Choice Breaded Fillets", size: '4 Pack', desc: "Seasoned breasts ready to bake or fry for a crunchy burger replacement.", image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&auto=format&fit=crop', brand: "FARMER'S CHOICE" },
      { name: "Farmer's Choice Shrimp Nuggets", size: '400g', desc: "Succulent ocean shrimp in a light pepper breading. Air-fries to perfection.", image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=400&auto=format&fit=crop', brand: "FARMER'S CHOICE" },
    ],
  },
];

export default function Flavors() {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -380 : 380, behavior: 'smooth' });
  };

  const cat = CATEGORIES[activeIdx];

  return (
    <section id="flavors" className="products-v2">
      <div className="container">
        {/* Header */}
        <div className="products-header-v2">
          <div>
            <span className="section-tag">Product Range</span>
            <h2 className="section-h2-v2">
              Bring Quality <span className="gold-text">Home</span>
            </h2>
          </div>
          <div className="scroll-arrows">
            <button className="arrow-btn-v2" onClick={() => scroll('left')} aria-label="Scroll left">
              <ChevronLeft size={18} />
            </button>
            <button className="arrow-btn-v2" onClick={() => scroll('right')} aria-label="Scroll right">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flavor-tabs-v2">
          {CATEGORIES.map((c, i) => (
            <button
              key={c.id}
              className={`flavor-tab-v2 ${activeIdx === i ? 'active' : ''}`}
              onClick={() => setActiveIdx(i)}
              style={activeIdx === i ? { borderBottomColor: c.dotColor, color: c.dotColor } : {}}
            >
              <span className="tab-dot-v2" style={{ backgroundColor: c.dotColor }} />
              {c.name}
            </button>
          ))}
        </div>

        {/* Product scroll */}
        <div ref={scrollRef} className="product-scroll-v2">
          {cat.products.map((p, i) => (
            <div key={i} className="product-card-v2">
              <div className="product-card-img-wrap">
                <img src={p.image} alt={p.name} className="product-card-img" />
                <div className="product-card-img-overlay" />
                <span className="product-size-tag">{p.size}</span>
              </div>
              <div className="product-card-body">
                <span className="product-card-eyebrow" style={{ color: cat.dotColor }}>{p.brand}</span>
                <h4 className="product-card-title">{p.name}</h4>
                <p className="product-card-desc">{p.desc}</p>
                <div className="product-card-footer">
                  <span>Available in-store</span>
                  <a href="#recipes">Find Recipes →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
