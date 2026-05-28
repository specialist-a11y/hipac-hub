import React, { useState } from 'react';
import { Award, Briefcase, Heart } from 'lucide-react';

const EMPLOYEES = [
  {
    name: 'Kevon Worrell',
    role: 'Master Ham Curer',
    tenure: '18 Years',
    quote: "I've been curing Bar Pac hams for nearly two decades. Every single ham gets my personal attention. When I see families enjoy our product at Christmas, that is why I come to work.",
    image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=400&auto=format&fit=crop&crop=face',
  },
  {
    name: 'Shari Callender',
    role: 'QA Supervisor',
    tenure: '11 Years',
    quote: "Quality is not just a department here — it is a culture. Every batch goes through 14 checkpoints before it leaves our facility. Nothing Less Than The Best is not a slogan for us, it is a standard.",
    image: 'https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=400&auto=format&fit=crop&crop=face',
  },
  {
    name: 'Marcus Jordan',
    role: 'Sausage Blending Expert',
    tenure: '9 Years',
    quote: "The blend is everything. I work with local herbs and spices that have been part of Barbadian cooking for generations. Preserving those flavours in a modern product — that is craftsmanship.",
    image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=400&auto=format&fit=crop&crop=face',
  },
];

const PERKS = [
  { icon: <Award size={15} />, title: 'Recognised Excellence', desc: 'Annual awards for long service and outstanding contribution to quality.' },
  { icon: <Briefcase size={15} />, title: 'Career Growth', desc: 'Structured development paths from floor to supervisory and management roles.' },
  { icon: <Heart size={15} />, title: 'Community First', desc: 'Benefits, healthcare, and a culture built around the Barbadian family ethos.' },
];

export default function Careers() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="careers" className="careers-v2">
      <div className="container">
        <div className="careers-v2-inner">
          {/* Left info */}
          <div className="careers-left reveal-left">
            <span className="section-tag">Join Our Team</span>
            <h2 className="careers-h2-v2">
              Build a Career You're <span>Proud Of</span>
            </h2>
            <p className="careers-p-v2">
              At HIPAC, we believe our people are the secret ingredient. From floor artisans to
              food scientists, every role contributes to a legacy that feeds the Caribbean.
            </p>

            <div className="careers-perks">
              {PERKS.map((p, i) => (
                <div key={i} className="perk-row">
                  <div className="perk-icon">{p.icon}</div>
                  <div>
                    <div className="perk-title">{p.title}</div>
                    <div className="perk-desc">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-gold" style={{ marginTop: '0.5rem' }}>
              View Open Roles
            </a>
          </div>

          {/* Right portraits + quote */}
          <div className="careers-right reveal-right">
            <div className="portrait-strip">
              {EMPLOYEES.map((emp, i) => (
                <div
                  key={i}
                  className={`portrait-v2 ${activeIdx === i ? 'active' : ''}`}
                  onClick={() => setActiveIdx(i)}
                >
                  <img src={emp.image} alt={emp.name} />
                  <div className="portrait-v2-grad" />
                  <div className="portrait-v2-info">
                    <div className="portrait-v2-name">{emp.name}</div>
                    <div className="portrait-v2-role">{emp.role}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="quote-box-v2">
              <span className="big-quote-mark">"</span>
              <div className="quote-header">
                <div>
                  <div className="quote-name">{EMPLOYEES[activeIdx].name}</div>
                  <div className="quote-tenure">{EMPLOYEES[activeIdx].tenure} at HIPAC</div>
                </div>
                <span
                  style={{
                    fontSize: '0.58rem',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-m)',
                    fontFamily: 'monospace',
                    padding: '0.3rem 0.7rem',
                    border: '1px solid var(--border)',
                    borderRadius: '3px',
                  }}
                >
                  {EMPLOYEES[activeIdx].role}
                </span>
              </div>
              <p className="quote-text-v2">{EMPLOYEES[activeIdx].quote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
