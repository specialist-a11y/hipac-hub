import React, { useRef, useState } from 'react';
import { Play, Pause, ArrowRight } from 'lucide-react';

const TIMELINE = [
  { year: '1979', label: 'Founded in Barbados', desc: 'HIPAC Limited established in Fontabelle, St. Michael.' },
  { year: '1985', label: "Farmer's Choice Launch", desc: 'Premium hickory-smoked bacon and sausages introduced.' },
  { year: '1993', label: 'Family Choice Range', desc: 'Canned luncheon meats becoming a Caribbean household staple.' },
  { year: '2004', label: 'Regional Expansion', desc: 'Products now distributed across six Caribbean islands.' },
  { year: '2024', label: '45 Years of Excellence', desc: 'Celebrating four decades of Nothing Less Than The Best.' },
];

export default function OurStory() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(p => !p);
  };

  return (
    <section id="our-story" className="story-v2">
      <div className="container">
        <div className="story-v2-inner">
          {/* Left: text + timeline */}
          <div className="story-v2-left reveal-left">
            <span className="section-tag">Our Story</span>
            <h2 className="story-v2-h2">
              45 Years of <span className="gold-text">Caribbean Pride</span>
            </h2>
            <p className="story-v2-p">
              From a single production facility in Fontabelle, Barbados, HIPAC Limited has grown to
              become the most trusted meat manufacturer in the Eastern Caribbean — exporting quality,
              tradition, and flavour across six islands.
            </p>

            <div className="timeline-v2">
              {TIMELINE.map((t, i) => (
                <div key={i} className="timeline-row">
                  <span className="tl-year">{t.year}</span>
                  <div>
                    <div className="tl-label">{t.label}</div>
                    <div className="tl-desc">{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#brands" className="btn-gold" style={{ marginTop: '2rem' }}>
              Meet Our Brands <ArrowRight size={16} />
            </a>
          </div>

          {/* Right: video */}
          <div className="story-v2-right reveal-right">
            <div className="story-video-frame">
              <video
                ref={videoRef}
                className="story-video-el"
                src="./story-video.mp4"
                poster="./hero.png"
                playsInline
                loop
              />
              <div className="story-video-veil" />

              <button className="story-play-btn-v2" onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
                <div className="play-ring">
                  {playing ? <Pause size={22} /> : <Play size={22} style={{ marginLeft: '3px' }} />}
                </div>
                <span className="play-label">{playing ? 'Pause' : 'Play Our Story'}</span>
              </button>
            </div>

            <div className="story-stats-row">
              {[
                { num: '45+', lbl: 'Years Heritage' },
                { num: '3', lbl: 'Iconic Brands' },
                { num: '6+', lbl: 'Islands Served' },
              ].map((s, i) => (
                <div key={i} className="story-stat-v2">
                  <span className="story-stat-num">{s.num}</span>
                  <span className="story-stat-lbl">{s.lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
