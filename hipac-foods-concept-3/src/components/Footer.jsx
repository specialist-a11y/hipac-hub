import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Award, ArrowUp } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMsg("Success! Welcome to the Hipac family list.");
      setEmail("");
      
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#10b981', '#f59e0b', '#ef4444']
      });

      setTimeout(() => {
        setSuccessMsg("");
      }, 4000);
    }, 1200);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="contact" className="footer-section">
      {/* Background glows */}
      <div className="bg-glow w-[500px] h-[500px]" style={{ top: '10%', left: '5%', backgroundColor: 'rgba(16, 185, 129, 0.04)' }} />
      <div className="bg-glow w-[500px] h-[500px]" style={{ bottom: '10%', right: '5%', backgroundColor: 'rgba(245, 158, 11, 0.04)' }} />

      <div className="container">
        <div className="footer-top-grid">
          
          {/* Column 1: Brand Info */}
          <div className="footer-col-1">
            <a href="#" className="logo-link">
              <img 
                src="./logo.png" 
                alt="HIPAC Limited Logo" 
                className="logo-image" 
              />
            </a>
            
            <p className="card-p" style={{ fontSize: '0.85rem', lineHeight: '1.65', color: 'var(--neutral-400)' }}>
              Established in 1979 in Barbados. Manufacturers of Farmer's Choice, Family Choice, and Bar Pac products. Seasoned with local herbs and spices for the ultimate Caribbean flavour. Nothing less than the best.
            </p>

            {/* Social handles */}
            <div className="social-bar">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-circle-btn"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-circle-btn"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <div className="social-circle-btn" style={{ color: 'var(--neutral-600)', cursor: 'default' }}>
                <Award size={16} />
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col-2">
            <h4 className="footer-h4">Quick Navigation</h4>
            <div className="footer-links-list">
              <a href="#">Home Base</a>
              <a href="#brands">Our Brands</a>
              <a href="#flavors">Product Categories</a>
              <a href="#ingredients">Secret Seasonings</a>
              <a href="#recipes">Cooking Recipes</a>
              <a href="#careers">Bajan Careers</a>
            </div>
          </div>

          {/* Column 3: Contact info */}
          <div className="footer-col-3">
            <h4 className="footer-h4">Contact Info</h4>
            <div className="footer-links-list" style={{ color: 'var(--neutral-400)' }}>
              <div className="contact-row-item">
                <MapPin size={16} />
                <span>Fontabelle, St. Michael, Bridgetown, Barbados, BB11000</span>
              </div>
              <div className="contact-row-item">
                <Phone size={16} />
                <span>+1 (246) 426-2180</span>
              </div>
              <div className="contact-row-item">
                <Mail size={16} />
                <span>info@hipacfoods.com</span>
              </div>
              <div className="contact-hours-box">
                <span className="contact-hours-tag">Office Hours</span>
                <span className="contact-hours-val">Monday - Friday: 8:00 AM - 4:30 PM AST</span>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-col-4">
            <h4 className="footer-h4">Flavour Mail</h4>
            <p className="newsletter-p">
              Subscribe to receive seasonal Caribbean recipes, holiday ham order alerts, and local product announcements.
            </p>

            <form onSubmit={handleSubmit} className="newsletter-form">
              <div className="newsletter-input-box">
                <input
                  type="email"
                  required
                  placeholder="Enter email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newsletter-input"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="newsletter-send-btn"
                  aria-label="Submit email"
                >
                  <Send size={12} />
                </button>
              </div>

              {successMsg && (
                <div className="toast-alert animate-float">
                  {successMsg}
                </div>
              )}
            </form>
          </div>

        </div>

        <hr className="footer-divider-line" />

        {/* Bottom copyright rows */}
        <div className="footer-bottom-row">
          <div className="footer-bottom-left">
            <span>© {new Date().getFullYear()} HIPAC Limited. All Rights Reserved.</span>
            <span className="hidden md:inline" style={{ opacity: 0.3 }}>•</span>
            <a href="https://goddardenterprises.com/" target="_blank" rel="noopener noreferrer">
              A Member of the Goddard Group of Companies
            </a>
          </div>

          <div className="footer-bottom-right">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <button 
              onClick={scrollToTop}
              className="btn-arrow-up"
              title="Scroll to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
