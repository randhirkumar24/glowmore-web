import React from 'react';
import './Stats.css';

const Stats = () => {
  const stats = [
    { number: "30%", label: "increase in conversion ratio" },
    { number: "60%", label: "increase in reach" },
    { number: "20%", label: "increase in engagement" },
    { number: "15%", label: "increase in brand awareness" }
  ];

  const creatorStats = [
    { number: "9+", label: "Niches" },
    { number: "30k+", label: "Our Creators" },
    { number: "20Cr+", label: "Reach" },
    { number: "150+", label: "Campaigns" }
  ];

  return (
    <section className="stats section-padding">
      <div className="container">
        <div className="stats-section">
          <h2 className="section-title">
            Brands are built on <span className="gradient-text">trust</span> not on just Ads.
          </h2>
          <p className="section-subtitle">
            Building a brand involves understanding your audience, defining a unique identity, 
            and creating a consistent, compelling narrative. Focus on delivering quality products, 
            exceptional customer service, and engaging marketing.
          </p>
          
          <div className="stats-grid grid grid-4">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card card text-center fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="stat-number gradient-text">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="creators-section">
          <h2 className="section-title">Our Creators</h2>
          <p className="section-subtitle">
            Work with creators that could really bring a difference to your brand.
          </p>
          
          <div className="stats-grid grid grid-4">
            {creatorStats.map((stat, index) => (
              <div key={index} className="stat-card card text-center fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="stat-number gradient-text">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center" style={{marginTop: '3rem'}}>
            <button className="btn-primary">Schedule A Meeting</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
