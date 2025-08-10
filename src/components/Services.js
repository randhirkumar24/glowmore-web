import React from 'react';
import { FaStore, FaStar, FaBullhorn, FaRocket, FaUsers, FaVideo, FaPalette, FaMobile } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const topServices = [
    {
      icon: <FaStore />,
      title: "Store Visit",
      description: "Boost your store's visibility and sales with personalized store visits from Influencers through the best platform to connect influencers with brands!",
      color: "#667eea"
    },
    {
      icon: <FaStar />,
      title: "Review Services",
      description: "Shape your online reputation with review services from GlowMore, the best influencer marketing platform!",
      color: "#f093fb"
    },
    {
      icon: <FaBullhorn />,
      title: "Brand Awareness",
      description: "Define your brand's blueprint and craft it consistently with our brand guidelines platform.",
      color: "#4facfe"
    },
    {
      icon: <FaRocket />,
      title: "Startup Packages",
      description: "Are you a new brand looking to make it big? Then look no further than the startup package from our amazing influencer marketing company.",
      color: "#43e97b"
    }
  ];

  const allServices = [
    { icon: <FaUsers />, title: "Influencer Marketing", color: "#667eea" },
    { icon: <FaVideo />, title: "UGC Content", color: "#f093fb" },
    { icon: <FaPalette />, title: "Creative Ads", color: "#4facfe" },
    { icon: <FaMobile />, title: "Tech Solutions", color: "#43e97b" },
    { icon: <FaBullhorn />, title: "Celebrity Endorsement", color: "#ff6b6b" },
    { icon: <FaStore />, title: "Event Activation", color: "#feca57" }
  ];

  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <div className="services-header text-center">
          <h2 className="section-title">Top <span className="gradient-text">Services</span></h2>
          <p className="section-subtitle">
            Join the ranks of the best and let us help you achieve your marketing goals.
          </p>
        </div>

        <div className="top-services grid grid-2">
          {topServices.map((service, index) => (
            <div key={index} className="service-card card fade-in-scale float-animation" style={{animationDelay: `${index * 0.15}s`, animationDuration: `${6 + index}s`}}>
              <div className="service-icon" style={{color: service.color}}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-actions">
                <button className="btn-primary">Read More</button>
                <button className="btn-secondary">Schedule A Call</button>
              </div>
            </div>
          ))}
        </div>

        <div className="all-services">
          <h3 className="services-section-title text-center">All Services</h3>
          <div className="services-grid grid grid-3">
            {allServices.map((service, index) => (
              <div key={index} className="service-item card fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="service-icon" style={{color: service.color}}>
                  {service.icon}
                </div>
                <h4>{service.title}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="platforms-section">
          <h3 className="services-section-title text-center">Search by Platform</h3>
          <p className="text-center" style={{marginBottom: '2rem', color: '#666'}}>
            Find the influencers you want in the platforms you prefer with the best social media influencer agency.
          </p>
          <div className="platforms-grid grid grid-4">
            <div className="platform-card card text-center">
              <h4 style={{color: '#ff0000'}}>YouTube</h4>
            </div>
            <div className="platform-card card text-center">
              <h4 style={{color: '#e4405f'}}>Instagram</h4>
            </div>
            <div className="platform-card card text-center">
              <h4 style={{color: '#1877f2'}}>Facebook</h4>
            </div>
            <div className="platform-card card text-center">
              <h4 style={{color: '#0077b5'}}>LinkedIn</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
