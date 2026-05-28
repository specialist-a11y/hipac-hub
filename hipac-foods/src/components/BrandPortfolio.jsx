import React from 'react';
import { ArrowRight } from 'lucide-react';

const BRANDS = [
  {
    name: "Farmer's Choice",
    eyebrow: 'Premium Meats',
    emoji: '🥓',
    logo: '/farmers-choice-logo.png',
    desc: "Hickory-smoked bacons and sausages seasoned with authentic Barbadian herbs and spices. Caribbean flavour in every bite.",
    color: '#0c5a2f',
    colorMid: '#083c1f',
    image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Family Choice',
    eyebrow: 'Luncheon Meats',
    emoji: '🥫',
    logo: '/family-choice-logo.png',
    desc: "Iconic canned luncheon meats with rich Caribbean seasoning. Ready to fry, slice, and serve — a household staple for generations.",
    color: '#b91c1c',
    colorMid: '#7f1d1d',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Bar Pac',
    eyebrow: 'Holiday Hams',
    emoji: '🍖',
    logo: '/bar-pac-logo.png',
    desc: "The centrepiece of every Caribbean celebration. Bone-in picnic hams slow-smoked with a signature sweet clove glaze.",
    color: '#4c1d95',
    colorMid: '#3b0764',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop',
  },
];

function BrandLogo({ src, fallbackEmoji, alt }) {
  const [failed, setFailed] = React.useState(false);
  if (failed) {
    return <span className="brand-panel-emoji">{fallbackEmoji}</span>;
  }
  return (
    <img
      src={src}
      alt={alt}
      className="brand-logo-badge"
      onError={() => setFailed(true)}
    />
  );
}

export default function BrandPortfolio() {
  return (
    <section className="portfolio-v2">
      <div className="container">
        <div className="portfolio-header-v2 reveal">
          <span className="section-tag">Our Brands</span>
          <h2 className="section-h2-v2">
            Three Brands. <span className="gold-text">One Legacy.</span>
          </h2>
        </div>

        <div className="portfolio-panels-v2">
          {BRANDS.map((brand, i) => (
            <div
              key={i}
              className="brand-panel-v2 reveal"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div
                className="brand-panel-bg"
                style={{ backgroundImage: `url('${brand.image}')` }}
              />
              <div
                className="brand-panel-color"
                style={{
                  background: `linear-gradient(160deg, ${brand.color} 0%, ${brand.colorMid} 100%)`,
                  opacity: 0.88,
                }}
              />
              <div className="brand-panel-content">
                <BrandLogo
                  src={brand.logo}
                  fallbackEmoji={brand.emoji}
                  alt={brand.name}
                />
                <span className="brand-panel-eyebrow">{brand.eyebrow}</span>
                <h3 className="brand-panel-name">{brand.name}</h3>
                <p className="brand-panel-desc">{brand.desc}</p>
                <a href="#flavors" className="brand-panel-cta">
                  Explore Range <ArrowRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
