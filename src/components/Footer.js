import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const quickLinks = [
    'All Services', 'Sales-Driven Approach', 'Influencer Generated Content',
    'User Generated Content', 'Influencer Events & Activation', 'UGC Videos',
    'Celebrity Endorsement', 'Store Visit', 'Brand Awareness', 'Review Services',
    'Creative Ads', 'Technology Solutions', 'Video Promotion', 'Web Design', 'Logo Design'
  ];

  const locations = [
    'Fashion Influencers In India', 'Best Influencer Marketing Platform',
    'Influencer Marketing Agency For Small Business', 'Influencers Marketing Agency In Bangalore',
    'Influencers Marketing Agency In Delhi', 'Influencers Marketing Agency In Mumbai',
    'Influencers Marketing Agency In Pune', 'Lifestyle Influencers India',
    'Micro Beauty Influencers India', 'Platform To Connect Influencers With Brands'
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="gradient-text">GlowMore</h3>
            <p>
              Leading influencer marketing agency helping brands connect with their audience 
              through authentic content and strategic partnerships.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><FaFacebook /></a>
              <a href="#" className="social-link"><FaTwitter /></a>
              <a href="#" className="social-link"><FaInstagram /></a>
              <a href="#" className="social-link"><FaLinkedin /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="links-grid">
              {quickLinks.slice(0, 8).map((link, index) => (
                <a key={index} href="#" className="footer-link">{link}</a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Locations</h4>
            <div className="links-grid">
              {locations.slice(0, 6).map((location, index) => (
                <a key={index} href="#" className="footer-link">{location}</a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Get in Touch</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>influencer@glowmore.com</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>
                  Gold Hill Square Service Rd, Popular Colony, Mangammanapalya, 
                  Hosur road, Bengaluru, Karnataka 560068
                </span>
              </div>
            </div>
            
            <div className="business-contact">
              <h5>For Business Enquiries:</h5>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>contact@glowmore.com</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+91 8904989995</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 GlowMore. All Rights Reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cancellation Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
