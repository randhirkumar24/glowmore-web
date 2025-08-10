import React, { useState } from 'react';
import { FaPlay, FaArrowRight } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [formData, setFormData] = useState({
    service: 'Influencer-marketing'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title fade-in-up">
              We solve all your <span className="highlight">content problems</span>.
            </h1>
            <p className="hero-subtitle fade-in-up">
              We provide the best solutions for UGC, influencer collaborations, 
              advertising, production services and more.
            </p>
            <p className="hero-cta fade-in-up">
              Request for our services today!
            </p>
            <div className="hero-actions fade-in-up">
              <button className="btn-hero-primary">
                Get Started <FaArrowRight />
              </button>
              <button className="btn-hero-secondary">
                <FaPlay className="play-icon" />
                Watch Demo
              </button>
            </div>
          </div>

          <div className="hero-form">
            <div className="form-card">
              <h3>Schedule A Meeting</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Services Looking For</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="Influencer-marketing">Influencer Marketing</option>
                    <option value="Tech-Solutions">Tech Solutions</option>
                    <option value="Ads-Shoot">Ads Shoot</option>
                    <option value="User-generated-content">User Generated Content</option>
                  </select>
                </div>
                <button type="submit" className="btn-primary submit-btn">
                  Submit <FaArrowRight />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
