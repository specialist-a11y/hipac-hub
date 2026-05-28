import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const METRICS = [
  { num: '2,500+', lbl: 'Meals Donated' },
  { num: '12',     lbl: 'Schools Supported' },
  { num: '6',      lbl: 'Community Partners' },
  { num: '45+',    lbl: 'Years Giving Back' },
];

const SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200&auto=format&fit=crop',
    date: 'December 2023',
    title: 'Annual Holiday Hamper Drive — 800 families supported across Barbados',
  },
  {
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1200&auto=format&fit=crop',
    date: 'August 2023',
    title: 'Back-to-School Nutrition Programme — 12 primary schools received breakfast support',
  },
  {
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop',
    date: 'March 2023',
    title: 'Caribbean Food Bank Partnership — 1,200 meal kits distributed across 3 islands',
  },
  {
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop',
    date: 'June 2022',
    title: 'Youth Agriculture & Food Craft Workshop — 60 students trained in Bridgetown',
  },
];

export default function CommunityImpact() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive(p => (p + 1) % SLIDES.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="community" className="community-v2">
      <div className="container">
        {/* Header */}
        <div className="community-header reveal">
          <span className="section-tag">Our Impact</span>
          <h2 className="section-h2-v2">Giving Back to the <span className="gold-text">Caribbean</span></h2>
          <p className="community-sub">
            HIPAC has always believed that feeding a community means more than selling products. Since 1979
            we have invested in Barbadian families, schools, and social programmes across the Eastern Caribbean.
          </p>
        </div>

        {/* Metrics */}
        <div className="community-metrics reveal">
          {METRICS.map((m, i) => (
            <div key={i} className="community-metric">
              <span className="community-metric-num">{m.num}</span>
              <span className="community-metric-lbl">{m.lbl}</span>
            </div>
          ))}
        </div>

        {/* Photo carousel */}
        <div className="community-carousel reveal">
          {SLIDES.map((slide, i) => (
            <div
              key={i}
              className="community-slide"
              style={{ opacity: active === i ? 1 : 0 }}
            >
              <img src={slide.image} alt={slide.title} loading="lazy" />
              <div className="community-caption">
                <span className="community-caption-date">{slide.date}</span>
                <p className="community-caption-title">{slide.title}</p>
              </div>
            </div>
          ))}

          <div className="community-dots">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                className={`community-dot ${active === i ? 'active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="community-footer">
          <a href="#press" className="btn-ghost-gold">
            See All Initiatives <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
