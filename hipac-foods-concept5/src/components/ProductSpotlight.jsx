import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const FEATURED = {
  badge: 'Featured Product',
  seasonal: 'Holiday Season',
  brand: 'Bar Pac',
  logo: './bar-pac-logo.png',
  name: 'Bone-In Picnic Ham',
  tagline: 'The Centrepiece of Every Caribbean Celebration',
  desc: 'Slow-smoked over real hardwood with a signature sweet clove cure, our Bar Pac Bone-In Picnic Ham has graced Caribbean tables for generations. Rich, tender, and unmistakably festive — this is the taste of home.',
  features: [
    'Sweet clove cure — a HIPAC signature since 1979',
    'Slow hardwood smoked for deep, natural flavour',
    'Available in 4 kg – 8 kg whole bone-in cuts',
    'Perfect glazed, sliced, or served with sorrel sauce',
  ],
  image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=900&auto=format&fit=crop',
  recipeHref: '#recipes',
  buyHref: '#find-hipac',
};

export default function ProductSpotlight() {
  return (
    <section className="spotlight-v2">
      <div className="container">
        <div className="spotlight-inner">
          {/* Media side */}
          <div className="spotlight-media reveal-left">
            <img src={FEATURED.image} alt={FEATURED.name} loading="lazy" />
            <div className="spotlight-badge-row">
              <span className="spotlight-badge gold">{FEATURED.badge}</span>
              <span className="spotlight-badge orange">{FEATURED.seasonal}</span>
            </div>
          </div>

          {/* Content side */}
          <div className="spotlight-content reveal-right">
            <img
              src={FEATURED.logo}
              alt={FEATURED.brand}
              className="spotlight-logo"
              onError={e => { e.target.style.display = 'none'; }}
            />

            <div>
              <span className="section-tag">{FEATURED.brand} · Spotlight</span>
              <h2 className="spotlight-h2">
                {FEATURED.name.split(' ').slice(0, 2).join(' ')}{' '}
                <span className="gold-text">{FEATURED.name.split(' ').slice(2).join(' ')}</span>
              </h2>
            </div>

            <p className="spotlight-desc">{FEATURED.desc}</p>

            <div className="spotlight-features">
              {FEATURED.features.map((f, i) => (
                <div key={i} className="spotlight-feat">
                  <span className="spotlight-feat-dot" />
                  {f}
                </div>
              ))}
            </div>

            <div className="spotlight-btns">
              <a href={FEATURED.recipeHref} className="btn-gold">
                Find Recipes <ArrowRight size={15} />
              </a>
              <a href={FEATURED.buyHref} className="btn-ghost">
                <MapPin size={14} /> Where To Buy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
