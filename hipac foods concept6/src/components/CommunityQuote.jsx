import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const STATS = [
  { num: 12400, suffix: '', label: 'Hot meals donated' },
  { num: 38, suffix: '', label: 'Schools supported' },
  { num: 6, suffix: '', label: 'Parish partners' },
  { num: 45, suffix: '+', label: 'Years giving back' },
];

function useCountUp(target, duration = 1800, active) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return val;
}

function Stat({ num, suffix, label, active }) {
  const val = useCountUp(num, 1600, active);
  return (
    <div className="cq-stat">
      <span className="cq-stat-num">
        {val.toLocaleString()}{suffix}
      </span>
      <span className="cq-stat-lbl">{label}</span>
    </div>
  );
}

export default function CommunityQuote() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="cq-section" id="community" ref={ref}>
      <div className="cq-inner">
        <div className="cq-left">
          <span className="section-tag" style={{ color: '#f4a830', borderColor: 'rgba(244,168,48,0.3)' }}>Community</span>
          <blockquote className="cq-quote">
            "We make food because food is how we look out for each other."
          </blockquote>
          <p className="cq-attribution">— HIPAC Foods, since 1979</p>
          <p className="cq-body">
            Every can of Family Choice and every Farmer's Choice frank funds the HIPAC Schools Lunch Initiative.
            12,400 hot meals last year alone — and counting.
          </p>
          <a href="#" className="cq-cta">
            See our impact <ArrowRight size={14} />
          </a>
        </div>

        <div className="cq-right">
          <div className="cq-stats">
            {STATS.map((s, i) => (
              <Stat key={i} {...s} active={active} />
            ))}
          </div>
          <div className="cq-img-grid">
            <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500&auto=format&fit=crop" alt="Community" className="cq-img cq-img--tall" />
            <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&auto=format&fit=crop" alt="Community" className="cq-img" />
            <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&auto=format&fit=crop" alt="Community" className="cq-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
