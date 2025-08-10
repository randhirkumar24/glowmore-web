import React from 'react';
import './CaseStudies.css';

const CaseStudies = () => {
  const caseStudies = [
    {
      brand: "GlowRoad",
      title: "GlowRoad's Influencer Marketing Case Study",
      description: "Helping GlowRoad reach millions through strategic influencer partnerships",
      image: "/api/placeholder/300/200"
    },
    {
      brand: "Simsim",
      title: "Simsim's Fashion Influencer Program",
      description: "Creating viral fashion content with top style influencers",
      image: "/api/placeholder/300/200"
    },
    {
      brand: "The Ayurveda Co",
      title: "The Ayurveda Co: Elevating Brand Awareness",
      description: "Authentic wellness content that drives real engagement",
      image: "/api/placeholder/300/200"
    },
    {
      brand: "PUMA",
      title: "Helping Puma Make Virat Kohli's Birthday Special",
      description: "Celebrity collaboration that broke engagement records",
      image: "/api/placeholder/300/200"
    },
    {
      brand: "Mamaearth",
      title: "Unleashing Natural Radiance with Mamaearth",
      description: "Beauty influencer campaign that increased sales by 200%",
      image: "/api/placeholder/300/200"
    },
    {
      brand: "Amazon",
      title: "Managing an Army of Influencers for Amazon",
      description: "Large-scale influencer management for the world's biggest e-commerce brand",
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <section id="case-studies" className="case-studies section-padding">
      <div className="container">
        <div className="case-studies-header text-center">
          <h2 className="section-title">Case Studies</h2>
          <p className="section-subtitle">
            See how we've helped brands achieve remarkable results through strategic influencer marketing campaigns.
          </p>
        </div>

        <div className="case-studies-grid grid grid-3">
          {caseStudies.map((study, index) => (
            <div key={index} className="case-study-card card fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="case-study-image">
                <img src={study.image} alt={study.brand} />
                <div className="case-study-overlay">
                  <span className="brand-name">{study.brand}</span>
                </div>
              </div>
              <div className="case-study-content">
                <h3>{study.title}</h3>
                <p>{study.description}</p>
                <button className="btn-secondary">Read Case Study</button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" style={{marginTop: '3rem'}}>
          <button className="btn-primary">View All Case Studies</button>
          <button className="btn-secondary" style={{marginLeft: '1rem'}}>Schedule A Meeting</button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
