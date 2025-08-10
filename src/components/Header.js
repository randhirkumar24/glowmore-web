import React, { useState, useEffect } from 'react';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'UGC Videos', href: '#ugc' },
    { label: 'Creators', href: '#creators' },
    { label: 'Join As Brand', href: '#join-brand' },
    { label: 'Join As Creator', href: '#join-creator' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2 className="gradient-text">GlowMore</h2>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            {navItems.map((item, index) => (
              <a 
                key={index} 
                href={item.href} 
                className={`nav-link ${item.label.includes('Join As') ? 'join-button' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <div className="phone-number">
              <FaPhone className="phone-icon" />
              <span>+91 8904989995</span>
            </div>
            <button 
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
