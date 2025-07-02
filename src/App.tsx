// import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Bonuses from './components/Bonuses';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <Features />
      <Pricing />
      <Bonuses />
      <Footer />
    </div>
  );
}

export default App;
