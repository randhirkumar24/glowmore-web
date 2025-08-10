import React from 'react';
import './Platforms.css';

const Platforms = () => {
  return (
    <section className="platforms section-padding">
      <div className="container">
        <div className="platforms-content">
          <div className="platforms-text">
            <h2 className="section-title">
              Why <span className="gradient-text">Influencer Marketing</span>?
            </h2>
            <div className="benefits-list">
              <div className="benefit-item">
                <h3>Affordable</h3>
                <p>Cost-effective way to reach your target audience with authentic content</p>
              </div>
              <div className="benefit-item">
                <h3>Grow Sales by 3x</h3>
                <p>Proven track record of increasing sales through strategic influencer partnerships</p>
              </div>
              <div className="benefit-item">
                <h3>Target Niche</h3>
                <p>Reach specific demographics and interests with precision targeting</p>
              </div>
            </div>
          </div>
          <div className="platforms-visual">
            <div className="visual-card">
              <img src="/api/placeholder/400/300" alt="Influencer Marketing Benefits" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platforms;
