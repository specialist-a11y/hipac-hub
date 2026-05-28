import React, { useState } from 'react';
import { ArrowUpRight, Users, Briefcase, Award } from 'lucide-react';

export default function Careers() {
  const employees = [
    {
      name: "Kevon Worrell",
      role: "Master Ham Curer",
      tenure: "14 Years at Hipac",
      quote: "Studding the Bar Pac hams with cloves and applying the sweet cherry-rum glaze is a Christmas tradition for me. Here at Hipac, we craft each ham as if it's going on our own family table.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Shari Callender",
      role: "Quality Assurance Supervisor",
      tenure: "8 Years at Hipac",
      quote: "Our motto is 'Nothing less than the best', and my job is to live that every day. From raw ingredient checks to the final pack-seal, we make sure Barbadians get clean, consistent quality.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Marcus Jordan",
      role: "Sausage Blending Expert",
      tenure: "11 Years at Hipac",
      quote: "It's all about the spice ratios. Fresh green scallions, sweet pimento berries, and zesty ginger. Blending our Farmer's Choice sausages is a science and an art. The team is like my second family.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
    }
  ];

  const [activeEmp, setActiveEmp] = useState(0);

  return (
    <section id="careers" className="careers-section">
      {/* Background visual accents */}
      <div className="bg-glow w-[500px] h-[500px]" style={{ top: '-10%', left: '-10%', backgroundColor: 'rgba(16, 185, 129, 0.04)' }} />
      <div className="bg-glow w-[500px] h-[500px]" style={{ bottom: '-10%', right: '-10%', backgroundColor: 'rgba(245, 158, 11, 0.04)' }} />

      <div className="container">
        <div className="grid grid-12 align-center">
          
          {/* Left Column Copy Block */}
          <div className="careers-col-left">
            <span className="badge">
              <Users size={12} />
              PEOPLE & CULTURE
            </span>
            <h2 className="section-h2" style={{ textAlign: 'left' }}>
              The Heart of <span>Hipac Foods</span>
            </h2>
            <p className="card-p" style={{ fontSize: '0.95rem', lineHeight: '1.7', fontWeight: 300 }}>
              We started in 1979 in Barbados as a small meat plant, and we've grown into a regional leader because of our dedicated people. Our facility at Fontabelle, St. Michael is a community of passion, tradition, and culinary innovation.
            </p>
            
            <div className="careers-features">
              <div className="career-feature-item">
                <div className="career-icon-wrap green">
                  <Briefcase size={18} />
                </div>
                <div>
                  <h4 className="career-feat-h4">Empowering Local Talents</h4>
                  <p className="career-feat-p">We support local training, professional apprenticeships, and internal promotions.</p>
                </div>
              </div>
              <div className="career-feature-item">
                <div className="career-icon-wrap amber">
                  <Award size={18} />
                </div>
                <div>
                  <h4 className="career-feat-h4">Strict Health & Safety Standard</h4>
                  <p className="career-feat-p">Top tier Caribbean facility certification. Cleanliness is our pride.</p>
                </div>
              </div>
            </div>

            <div className="flex align-center gap-md">
              <a 
                href="#contact" 
                className="btn-green-glow"
              >
                Join Our Team
                <ArrowUpRight size={14} />
              </a>
              <a 
                href="https://goddardenterprises.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline"
                style={{ fontSize: '0.75rem' }}
              >
                Goddard Careers
              </a>
            </div>
          </div>

          {/* Right Column: Employee Spotlights */}
          <div className="careers-col-right">
            <div className="employee-portraits-row">
              {employees.map((emp, idx) => {
                const isActive = activeEmp === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveEmp(idx)}
                    className="portrait-btn group"
                  >
                    <div className={`portrait-card ${isActive ? 'active' : ''}`}>
                      <img 
                        src={emp.image} 
                        alt={emp.name} 
                      />
                      <div className="portrait-gradient" />
                      
                      <div className="portrait-info">
                        <span className="portrait-name">
                          {emp.name}
                        </span>
                        <span className="portrait-subrole">
                          {emp.role.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Testimonial Quote */}
            <div className="glass-panel testimonial-quote-box">
              <div className="giant-quote-mark">
                “
              </div>
              <div>
                <div className="testimonial-header">
                  <h4 className="testimonial-name">
                    {employees[activeEmp].name}
                  </h4>
                  <span className="testimonial-tenure">
                    {employees[activeEmp].tenure}
                  </span>
                </div>
                <p className="testimonial-text">
                  "{employees[activeEmp].quote}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
