import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const BRANDS = [
  {
    name: "Farmer's Choice",
    slug: 'farmers-choice',
    tagline: 'Caribbean meats · made with pride',
    body: "Over 40 years of flavour, crafted in Barbados. Bacon, burgers, sausages and franks seasoned with real Caribbean herbs and spices.",
    logo: './farmers-choice-logo.png',
    bg: '#b83225',
    accent: '#ffd06b',
    products: ['Hickory Bacon', 'Pork Sausages', 'Chicken Burgers', 'Breaded Chicken', 'Chicken Franks', 'Wieners'],
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=700&auto=format&fit=crop',
  },
  {
    name: 'Family Choice',
    slug: 'family-choice',
    tagline: 'Pantry staples · always dependable',
    body: "Convenient, seasoned, and ready when you are. Canned luncheon meats that generations of Caribbean families have trusted through holidays, hurricanes, and everything in between.",
    logo: './family-choice-logo.png',
    bg: '#0d2b5e',
    accent: '#f4a830',
    products: ['Spicy Luncheon Meat', 'Regular Luncheon Meat', 'Chicken Luncheon', 'Corned Beef', 'Sardines'],
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=700&auto=format&fit=crop',
  },
  {
    name: 'Bar Pac',
    slug: 'bar-pac',
    tagline: 'Bone-in hams · holiday perfection',
    body: "The centrepiece of every Caribbean Christmas table. Slow-smoked, bone-in hams with a depth of flavour that only comes from doing it the traditional way.",
    logo: './bar-pac-logo.png',
    bg: '#1f4d2a',
    accent: '#ffd06b',
    products: ['Bone-In Picnic Ham', 'Smoked Half Ham', 'Holiday Glazed Ham', 'Mini Party Ham'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=700&auto=format&fit=crop',
  },
];

function BrandPanel({ brand, index }) {
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div
      className="bwall-panel"
      style={{ background: brand.bg }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`bwall-inner ${isEven ? '' : 'bwall-inner--reverse'}`}>
        {/* Text side */}
        <div className="bwall-text">
          <span className="bwall-num" style={{ color: brand.accent }}>0{index + 1}</span>
          <div className="bwall-logo-wrap">
            <img
              src={brand.logo}
              alt={brand.name}
              className="bwall-logo"
              onError={e => { e.target.style.display = 'none'; }}
            />
          </div>
          <p className="bwall-tag" style={{ color: brand.accent }}>{brand.tagline}</p>
          <p className="bwall-body">{brand.body}</p>
          <div className="bwall-pills">
            {brand.products.map((p, i) => (
              <span key={i} className="bwall-pill" style={{ borderColor: `${brand.accent}55`, color: brand.accent }}>
                {p}
              </span>
            ))}
          </div>
          <a href="#flavors" className="bwall-cta" style={{ background: brand.accent, color: '#111' }}>
            See the Range <ArrowRight size={14} />
          </a>
        </div>

        {/* Image side */}
        <div className="bwall-img-wrap">
          <img
            src={brand.image}
            alt={brand.name}
            className="bwall-img"
            style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
          />
          <div className="bwall-img-veil" style={{ background: `linear-gradient(to ${isEven ? 'right' : 'left'}, ${brand.bg} 0%, transparent 60%)` }} />
        </div>
      </div>
    </div>
  );
}

export default function BrandWall() {
  return (
    <section id="brands" className="bwall-section">
      <div className="bwall-header">
        <span className="section-tag">Our Brands</span>
        <h2 className="section-h2-v2">
          Four Brands. <span className="gold-text">One Kitchen.</span>
        </h2>
      </div>
      {BRANDS.map((brand, i) => (
        <BrandPanel key={brand.slug} brand={brand} index={i} />
      ))}
    </section>
  );
}
