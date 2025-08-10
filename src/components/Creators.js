import React from 'react';
import './Creators.css';

const Creators = () => {
  return (
    <section id="creators" className="creators section-padding">
      <div className="container">
        <div className="creators-content">
          <div className="creators-text">
            <h2 className="section-title">
              Best <span className="gradient-text">Influencer Marketing</span> Company in India
            </h2>
            <p className="creators-description">
              Influencer marketing has become a potent means in the modern digital era for companies 
              looking to engage their target audience in meaningful and real ways. An increasing number 
              of organizations are enlisting the help of influencer marketing agencies to help them 
              navigate this ever-changing landscape and produce significant outcomes.
            </p>
            <p className="creators-description">
              <strong>GlowMore</strong> is one of the leading influencer marketing companies in India. 
              We have worked with more than 1500+ brands till now and have many years of experience in this field.
            </p>
            
            <div className="benefits-list">
              <div className="benefit-item">
                <h4>Experience and Expertise</h4>
                <p>Our team of seasoned specialists have years of expertise in the field and are knowledgeable about the subtleties of influencer marketing.</p>
              </div>
              <div className="benefit-item">
                <h4>Vast Network of Influencers</h4>
                <p>We have developed trusting connections with a wide range of influencers on different platforms and in different genres.</p>
              </div>
              <div className="benefit-item">
                <h4>Strategies For Top Results</h4>
                <p>Since each company is different, we tackle influencer marketing with a customized strategy tailored to your specific needs.</p>
              </div>
              <div className="benefit-item">
                <h4>End-to-End Support</h4>
                <p>We provide thorough help at every phase of the influencer marketing process, from campaign conceptualization to post-campaign analysis.</p>
              </div>
            </div>

            <button className="btn-primary">Schedule A Meeting</button>
          </div>
          
          <div className="creators-visual">
            <div className="visual-stats">
              <div className="stat-item">
                <div className="stat-number gradient-text">1500+</div>
                <div className="stat-label">Brands Served</div>
              </div>
              <div className="stat-item">
                <div className="stat-number gradient-text">50M+</div>
                <div className="stat-label">Total Reach</div>
              </div>
              <div className="stat-item">
                <div className="stat-number gradient-text">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creators;
