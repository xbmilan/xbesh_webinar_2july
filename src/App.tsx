import Hero from './components/Hero';
import Features from './components/Features';
import TestimonialsSection from './components/TestimonialsSection';
import Pricing from './components/Pricing';
import Bonuses from './components/Bonuses';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <Features />
      <TestimonialsSection />
      <Pricing />
      <Bonuses />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
