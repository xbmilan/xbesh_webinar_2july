import Hero from './components/Hero';
import Features from './components/Features';
import TestimonialsSection from './components/TestimonialsSection';
import Pricing from './components/Pricing';
import Bonuses from './components/Bonuses';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import SpotAvailability from './components/SpotAvailability';
import TestimonialImgSection from './components/TestimonialImgSection';
// import DemoVideo from './components/DemoVideo';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <SpotAvailability />
      {/* <DemoVideo /> */}
      <TestimonialImgSection />
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
