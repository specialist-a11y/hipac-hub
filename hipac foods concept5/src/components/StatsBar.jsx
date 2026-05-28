import React from 'react';

const STATS = [
  { number: '45+', label: 'Years of Heritage' },
  { number: '3',   label: 'Iconic Brands' },
  { number: '6+',  label: 'Caribbean Islands' },
  { number: '100%', label: 'Caribbean Made' },
];

export default function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="stats-inner">
        {STATS.map((s, i) => (
          <React.Fragment key={i}>
            <div className="stat-item">
              <span className="stat-number">{s.number}</span>
              <span className="stat-label">{s.label}</span>
            </div>
            {i < STATS.length - 1 && <div className="stat-divider" />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
