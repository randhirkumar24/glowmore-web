import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Platforms from './components/Platforms';
import Stats from './components/Stats';
import CaseStudies from './components/CaseStudies';
import Creators from './components/Creators';
import Blog from './components/Blog';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Platforms />
      <Stats />
      <CaseStudies />
      <Creators />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
