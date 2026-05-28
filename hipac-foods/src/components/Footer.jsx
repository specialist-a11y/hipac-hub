import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import confetti from 'canvas-confetti';

const QUICK_LINKS = [
  ['Our Story', '#our-story'],
  ['Brands', '#brands'],
  ['Products', '#flavors'],
  ['Our Values', '#values'],
  ['Recipes', '#recipes'],
  ['In The Press', '#press'],
  ['Careers', '#careers'],
  ['Find HIPAC', '#find-hipac'],
];

const SOCIAL_LINKS = [
  { label: 'FB', href: '#' },
  { label: 'IG', href: '#' },
  { label: 'TT', href: '#' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.8 }, colors: ['#f99e1b', '#e84e1b', '#fff'] });
    setTimeout(() => { setSubmitted(false); setEmail(''); }, 5000);
  };

  return (
    <footer className="footer-v2" id="contact">
      {/* Gold bar */}
      <div className="footer-gold-bar" />

      {/* Watermark */}
      <div className="footer-watermark" aria-hidden="true">HIPAC</div>

      <div className="footer-top-v2">
        <div className="container">
          <div className="footer-grid-v2">
            {/* Brand column */}
            <div className="footer-brand-col">
              <a href="#">
                <img src="/logo.png" alt="HIPAC Limited" className="footer-logo-v2" />
              </a>
              <p className="footer-tagline">
                Nothing Less Than The Best. Caribbean-made meats crafted with over 45 years of
                Barbadian heritage and pride.
              </p>
              <div className="footer-social">
                {SOCIAL_LINKS.map((s, i) => (
                  <a key={i} href={s.href} className="footer-social-btn" aria-label={s.label}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.06em' }}>{s.label}</span>
                  </a>
                ))}
              </div>
              <a
                href="https://www.goddardenterprises.com"
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--text-m)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '0.5rem' }}
              >
                A Goddard Group Company ↗
              </a>
            </div>

            {/* Quick links */}
            <div className="footer-col">
              <span className="footer-col-title">Navigate</span>
              <div className="footer-links-v2">
                {QUICK_LINKS.map(([label, href]) => (
                  <a key={label} href={href}>{label}</a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <span className="footer-col-title">Contact</span>
              <div className="footer-contact-v2">
                <div className="footer-contact-row">
                  <MapPin size={14} />
                  <span>Fontabelle, St. Michael, Barbados</span>
                </div>
                <div className="footer-contact-row">
                  <Phone size={14} />
                  <span>(246) 427-5100</span>
                </div>
                <div className="footer-contact-row">
                  <Mail size={14} />
                  <span>info@hipacfoods.com</span>
                </div>
                <div className="footer-contact-row" style={{ marginTop: '0.5rem', flexDirection: 'column', gap: '0.25rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--text-m)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Office Hours</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-s)' }}>Mon – Fri: 8:00am – 4:30pm</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-s)' }}>Sat: 8:00am – 12:00pm</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="footer-col">
              <div className="newsletter-v2">
                <span className="newsletter-label-v2">Stay in the loop</span>
                <p className="newsletter-p-v2">
                  Recipes, product launches, and Caribbean food stories — delivered to your inbox.
                </p>

                {submitted ? (
                  <div className="newsletter-toast-v2">
                    ✓ You're subscribed — thank you!
                  </div>
                ) : (
                  <form className="newsletter-form-v2" onSubmit={handleSubmit}>
                    <div className="newsletter-field-v2">
                      <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Your email address"
                        className="newsletter-input-v2"
                        required
                      />
                      <button type="submit" className="newsletter-submit-v2" aria-label="Subscribe">
                        <Send size={13} />
                      </button>
                    </div>
                    <p style={{ fontSize: '0.68rem', color: 'var(--text-m)' }}>
                      No spam, unsubscribe anytime.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container">
        <hr className="footer-divider-v2" />
        <div className="footer-bottom-v2">
          <div className="footer-bottom-left">
            <span>© {new Date().getFullYear()} HIPAC Limited. All rights reserved.</span>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
          <div className="footer-bottom-right">
            <span>Designed in Barbados 🇧🇧</span>
            <button
              className="footer-scroll-top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
