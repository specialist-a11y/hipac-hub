import React, { useState } from 'react';
import './index.css';

const CONCEPTS = [
  {
    id: 'concept-a',
    label: 'Concept A',
    name: 'Heritage',
    tag: 'Bold & Classic',
    url: '/hipac-foods/',
    port: 5173,
    accent: '#b83225',
    desc: 'A rich, dark editorial design with full-bleed imagery, animated ingredient ticker, and deep brand storytelling. Leads with Farmer\'s Choice and anchors HIPAC\'s 45-year heritage.',
    highlights: ['Dark editorial hero', 'Animated ingredient ticker', 'Brand timeline', 'Interactive product spotlight', 'Career section'],
  },
  {
    id: 'concept-b',
    label: 'Concept B',
    name: 'Caribbean Themes',
    tag: 'Multi-Theme Dynamic',
    url: '/hipac-foods-concept-3/',
    port: 5176,
    accent: '#f49e1b',
    desc: 'A dynamic design with three switchable colour themes — Sand, Breeze & Farm Fresh. Showcases all three HIPAC brands in rotating hero slides with an immersive 3D brand showcase.',
    highlights: ['3 selectable colour themes', 'Multi-brand hero slider', '3D brand showcase', 'Product flavour grid', 'Careers & locator'],
  },
  {
    id: 'concept-c',
    label: 'Concept C',
    name: 'Split Vision',
    tag: 'Modern & Energetic',
    url: '/hipac-foods-concept5/',
    port: 5174,
    accent: '#0d2b5e',
    desc: 'A striking split-colour hero with a full-bleed background video. Navy meets amber in a bold diagonal divide, with floating brand logos and a punchy product spotlight section.',
    highlights: ['Full-bleed video hero', 'Split navy / amber layout', 'Floating brand logo bubbles', 'Product spotlight feature', 'Recipe section'],
  },
  {
    id: 'concept-d',
    label: 'Concept D',
    name: 'Engage',
    tag: 'Fun & Interactive',
    url: '/hipac-foods-concept6/',
    port: 5175,
    accent: '#1f4d2a',
    desc: 'The most interactive direction — brand wall panels, a 360° spinning product card poll, recipe rail, community quote slab, and animated brand sections that reward exploration.',
    highlights: ['Brand wall colour panels', '360° spinning product card', 'Interactive "Have You Tried?" poll', 'Horizontal recipe rail', 'Animated community section'],
  },
];

function LivePreview({ concept, active }) {
  const FRAME_W = 1280;
  const FRAME_H = 720;
  const PREVIEW_W = 560;
  const scale = PREVIEW_W / FRAME_W;
  const PREVIEW_H = FRAME_H * scale;

  return (
    <div className={`preview-shell ${active ? 'preview-shell--active' : ''}`}>
      {/* Browser chrome */}
      <div className="preview-chrome">
        <span className="p-dot" style={{ background: '#ff5f57' }} />
        <span className="p-dot" style={{ background: '#febc2e' }} />
        <span className="p-dot" style={{ background: '#28c840' }} />
        <div className="p-addr">{concept.url}</div>
      </div>
      {/* Scaled iframe */}
      <div className="preview-viewport" style={{ height: PREVIEW_H }}>
        <iframe
          src={concept.url}
          title={concept.name}
          style={{
            width: FRAME_W,
            height: FRAME_H,
            border: 'none',
            transform: `scale(${scale})`,
            transformOrigin: '0 0',
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  );
}

function ConceptCard({ concept, selected, onSelect }) {
  const isSelected = selected === concept.id;
  return (
    <div
      className={`concept-card ${isSelected ? 'concept-card--on' : ''}`}
      style={{ '--c-accent': concept.accent }}
      onClick={() => onSelect(concept.id)}
    >
      {isSelected && <div className="concept-badge">✓ Selected</div>}

      <LivePreview concept={concept} active={isSelected} />

      <div className="concept-body">
        <div className="concept-top">
          <div>
            <p className="concept-label">{concept.label}</p>
            <h3 className="concept-name">{concept.name}</h3>
            <p className="concept-tag">{concept.tag}</p>
          </div>
          <a
            href={concept.url}
            target="_blank"
            rel="noreferrer"
            className="concept-open"
            onClick={e => e.stopPropagation()}
            title="Open full preview"
          >
            ↗
          </a>
        </div>

        <p className="concept-desc">{concept.desc}</p>

        <ul className="concept-features">
          {concept.highlights.map((h, i) => (
            <li key={i}>
              <span className="concept-check">✓</span> {h}
            </li>
          ))}
        </ul>

        <button
          className="concept-btn"
          onClick={e => { e.stopPropagation(); onSelect(concept.id); }}
        >
          {isSelected ? '✓ Concept Selected' : 'Select This Concept'}
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const selectedConcept = CONCEPTS.find(c => c.id === selected);

  return (
    <div className="proposal">

      {/* ── Header ── */}
      <header className="p-header">
        <div className="p-container p-header-inner">
          <div className="p-header-left">
            <div className="p-client">HIPAC Foods</div>
            <span className="p-header-sep">Website Proposal</span>
          </div>
          <div className="p-header-right">
            <span className="p-prepared">Prepared by</span>
            <strong className="p-agency">Ashbea</strong>
            <span className="p-date">· May 2026</span>
          </div>
        </div>
      </header>

      {/* ── Intro ── */}
      <section className="p-intro">
        <div className="p-container">
          <p className="p-eyebrow">Website Design Proposal</p>
          <h1 className="p-h1">
            Four directions.<br />
            <span className="p-hl">One brand. Your choice.</span>
          </h1>
          <p className="p-lead">
            We've developed four distinct website concepts for HIPAC Foods. Each is a fully working
            design — scroll, interact, and explore before you decide. Select the direction that best
            represents the future of HIPAC online.
          </p>
          <div className="p-stats">
            {[
              ['4', 'Live Concepts'],
              ['3', 'HIPAC Brands'],
              ['45+', 'Years of Heritage'],
              ['4–6', 'Week Delivery'],
            ].map(([n, l], i) => (
              <React.Fragment key={i}>
                {i > 0 && <div className="p-stat-sep" />}
                <div className="p-stat">
                  <span className="p-stat-n">{n}</span>
                  <span className="p-stat-l">{l}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── Concepts ── */}
      <section className="p-concepts">
        <div className="p-container">
          <div className="p-sec-head">
            <h2 className="p-h2">Select Your Preferred Concept</h2>
            <p className="p-sec-sub">
              Each preview is the live site — click ↗ to open full screen, or select a concept below to confirm your choice.
            </p>
          </div>
          <div className="concept-grid">
            {CONCEPTS.map(c => (
              <ConceptCard
                key={c.id}
                concept={c}
                selected={selected}
                onSelect={setSelected}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Confirm ── */}
      {selected && !submitted && (
        <section className="p-confirm">
          <div className="p-container p-confirm-inner">
            <div>
              <p className="p-confirm-eye">Your selection</p>
              <h3 className="p-confirm-name">
                {selectedConcept.label}: {selectedConcept.name}
                <span> — {selectedConcept.tag}</span>
              </h3>
              <p className="p-confirm-note">
                Once confirmed, Ashbea will schedule a kickoff session to align on brand assets,
                copy, and any further customisations before the build begins.
              </p>
            </div>
            <div className="p-confirm-actions">
              <button className="p-confirm-btn" onClick={() => setSubmitted(true)}>
                Confirm Selection →
              </button>
              <button className="p-confirm-change" onClick={() => setSelected(null)}>
                Change selection
              </button>
            </div>
          </div>
        </section>
      )}

      {submitted && (
        <section className="p-success">
          <div className="p-container">
            <div className="p-success-box">
              <div className="p-success-icon">🎉</div>
              <h3 className="p-success-h">
                {selectedConcept.label}: <strong>{selectedConcept.name}</strong> confirmed
              </h3>
              <p className="p-success-p">
                Thank you, HIPAC Foods! Ashbea will be in touch within 1 business day
                to schedule a kickoff call and begin building your new website.
              </p>
              <p className="p-success-contact">
                Questions? <a href="mailto:specialist@katrinapayne.com">specialist@katrinapayne.com</a>
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ── Included ── */}
      <section className="p-included">
        <div className="p-container">
          <h2 className="p-h2 p-h2--center">What's Included</h2>
          <div className="p-inc-grid">
            {[
              { icon: '📱', title: 'Mobile-First', desc: 'Fully responsive — phone, tablet, and desktop perfectly optimised.' },
              { icon: '⚡', title: 'Fast & Optimised', desc: 'Performance-tuned for Core Web Vitals and fast load times.' },
              { icon: '🎨', title: 'Brand Customised', desc: 'All colours, fonts, copy, and imagery tailored to HIPAC.' },
              { icon: '🔍', title: 'SEO Ready', desc: 'Proper structure, meta tags, sitemap, and schema from day one.' },
              { icon: '✏️', title: 'Easy to Edit', desc: 'CMS included so your team can update content independently.' },
              { icon: '🛡️', title: '12-Month Support', desc: 'Bug fixes, security patches, and minor edits for a full year.' },
            ].map((item, i) => (
              <div key={i} className="p-inc-card">
                <span className="p-inc-icon">{item.icon}</span>
                <h4 className="p-inc-title">{item.title}</h4>
                <p className="p-inc-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="p-timeline">
        <div className="p-container">
          <h2 className="p-h2 p-h2--light p-h2--center">Project Timeline</h2>
          <div className="p-tl-track">
            {[
              { week: 'Week 1', phase: 'Kickoff & Discovery', desc: 'Brand assets, copy, imagery, and requirements gathered.' },
              { week: 'Week 2–3', phase: 'Design & Build', desc: 'Full site built from your chosen concept direction.' },
              { week: 'Week 4', phase: 'Review & Revisions', desc: 'You review, we refine — until it\'s perfect.' },
              { week: 'Week 5–6', phase: 'Launch', desc: 'Domain, hosting, go-live, and post-launch support.' },
            ].map((step, i, arr) => (
              <div key={i} className="p-tl-step">
                <div className="p-tl-node-wrap">
                  <div className="p-tl-node">{i + 1}</div>
                  {i < arr.length - 1 && <div className="p-tl-line" />}
                </div>
                <div className="p-tl-content">
                  <p className="p-tl-week">{step.week}</p>
                  <h4 className="p-tl-phase">{step.phase}</h4>
                  <p className="p-tl-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="p-footer">
        <div className="p-container p-footer-inner">
          <p className="p-footer-brand">HIPAC Foods · Website Proposal</p>
          <p className="p-footer-note">Prepared by Ashbea · Valid for 30 days · specialist@katrinapayne.com</p>
        </div>
      </footer>

    </div>
  );
}
