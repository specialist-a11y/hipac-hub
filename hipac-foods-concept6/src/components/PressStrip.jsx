import React from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';

const ARTICLES = [
  {
    title: 'HIPAC Celebrates 45 Years of Barbadian Food Heritage',
    publication: 'Barbados Business Authority',
    date: 'March 2024',
    category: 'Company News',
    desc: "Barbados' most iconic meat manufacturer marks four and a half decades of premium Caribbean food production.",
    image: 'https://images.unsplash.com/photo-1585238341710-4d3ff484184d?q=80&w=600&auto=format&fit=crop',
    accent: '#10b981',
  },
  {
    title: 'The Art of the Bajan Ham Glaze: A Holiday Tradition',
    publication: 'Caribbean Food & Life',
    date: 'December 2023',
    category: 'Food Culture',
    desc: 'How the Bar Pac bone-in picnic ham became the centrepiece of Caribbean Christmas feasting across the region.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop',
    accent: '#f59e0b',
  },
  {
    title: 'Caribbean Pride: Supporting Local Producers',
    publication: 'Nation Barbados',
    date: 'October 2023',
    category: 'Industry',
    desc: 'How buying locally from HIPAC supports Barbadian families, local farmers, and the wider Caribbean economy.',
    image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=600&auto=format&fit=crop',
    accent: '#3b82f6',
  },
  {
    title: "Farmer's Choice Bacon: The Bajan Brunch Secret",
    publication: 'Taste of Barbados',
    date: 'August 2023',
    category: 'Food & Recipes',
    desc: "Top Bridgetown chefs share how they elevate brunch service with Farmer's Choice premium bacon.",
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop',
    accent: '#ef4444',
  },
];

export default function PressStrip() {
  return (
    <section id="press" className="press-v2">
      <div className="container">
        <div className="press-header-v2 reveal">
          <div>
            <span className="section-tag">
              <BookOpen size={11} style={{ display: 'inline', marginRight: '0.4rem' }} />
              In The Press
            </span>
            <h2 className="section-h2-v2">
              Savour The <span className="gold-text">Story</span>
            </h2>
          </div>
          <a href="#" className="btn-ghost-gold">View All Articles</a>
        </div>

        <div className="press-grid-v2">
          {ARTICLES.map((a, i) => (
            <div
              key={i}
              className="press-card-v2 reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="press-img-v2">
                <img src={a.image} alt={a.title} />
                <span className="press-cat-tag" style={{ backgroundColor: a.accent }}>
                  {a.category}
                </span>
              </div>

              <div className="press-body-v2">
                <div className="press-meta-v2">
                  <span className="press-pub" style={{ color: a.accent }}>{a.publication}</span>
                  <span className="press-date">{a.date}</span>
                </div>
                <h4 className="press-title-v2">{a.title}</h4>
                <p className="press-desc-v2">{a.desc}</p>
                <a href="#" className="press-link-v2">
                  Read Article <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
