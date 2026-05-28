import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const PRODUCTS = [
  { name: "Farmer's Choice Hickory Bacon", brand: "FARMER'S CHOICE" },
  { name: 'Family Choice Spicy Luncheon Meat', brand: 'FAMILY CHOICE' },
  { name: 'Bar Pac Bone-In Picnic Ham', brand: 'BAR PAC' },
];

const SESSION_KEY = 'hipac_survey_shown';
const TRIGGER_DEPTH = 0.55;

export default function SurveyPopup() {
  const product = PRODUCTS[Math.floor(Date.now() / 86400000) % PRODUCTS.length];

  const [visible, setVisible]   = useState(false);
  const [phase, setPhase]       = useState('ask');   // ask | rate | done
  const [hovered, setHovered]   = useState(0);
  const [rated, setRated]       = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const onScroll = () => {
      const depth = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (depth >= TRIGGER_DEPTH) {
        setVisible(true);
        window.removeEventListener('scroll', onScroll);
      }
    };

    const t = setTimeout(() => {
      window.addEventListener('scroll', onScroll, { passive: true });
    }, 3000);

    return () => {
      clearTimeout(t);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(SESSION_KEY, '1');
  };

  const handleYes = () => setPhase('rate');

  const handleNo = () => {
    setPhase('done');
    setTimeout(dismiss, 3000);
  };

  const handleStar = (n) => {
    setRated(n);
    setPhase('done');
    sessionStorage.setItem(SESSION_KEY, '1');
    setTimeout(dismiss, 3000);
  };

  return (
    <div className={`survey-popup ${visible ? 'visible' : ''}`} role="dialog" aria-label="Quick feedback">
      <div className="survey-top-bar" />
      <div className="survey-inner">
        {/* Header row */}
        <div className="survey-header">
          <div className="survey-eyebrow">
            <span className="survey-eyebrow-dot" />
            Quick Question
          </div>
          <button className="survey-close" onClick={dismiss} aria-label="Close">
            <X size={12} />
          </button>
        </div>

        {phase === 'ask' && (
          <>
            <p className="survey-product-name">{product.name}</p>
            <p className="survey-q">Have you tried this product before?</p>
            <div className="survey-yn">
              <button className="survey-btn-yes" onClick={handleYes}>👍 Yes!</button>
              <button className="survey-btn-no"  onClick={handleNo}>Not yet</button>
            </div>
            <button className="survey-skip" onClick={dismiss}>Skip for now</button>
          </>
        )}

        {phase === 'rate' && (
          <>
            <p className="survey-product-name">How would you rate it?</p>
            <p className="survey-q">Tap a star to share your experience.</p>
            <div className="survey-stars">
              {[1, 2, 3, 4, 5].map(n => (
                <button
                  key={n}
                  className={`survey-star ${n <= (hovered || rated) ? 'lit' : ''}`}
                  onMouseEnter={() => setHovered(n)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => handleStar(n)}
                  aria-label={`${n} star${n > 1 ? 's' : ''}`}
                >
                  ★
                </button>
              ))}
            </div>
            <button className="survey-skip" onClick={dismiss}>Skip rating</button>
          </>
        )}

        {phase === 'done' && (
          <div className="survey-thanks">
            <span className="survey-thanks-emoji">🎉</span>
            <p className="survey-thanks-text">
              {rated >= 4 ? 'Amazing — we love to hear it!' : rated > 0 ? 'Thank you for the feedback!' : "No worries — we'll keep improving!"}
            </p>
            <p className="survey-thanks-sub">
              {rated >= 4 ? 'Share it with friends at #HIPACFoods' : 'Explore more recipes on our site.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
