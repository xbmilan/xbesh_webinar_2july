import React, { useState, useEffect } from 'react';
import { Rocket, X } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show after scrolling 50% of the page
      const showThreshold = (documentHeight - windowHeight) * 0.5;
      
      if (scrollPosition > showThreshold && !isDismissed) {
        setIsVisible(true);
      } else if (scrollPosition <= showThreshold) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (isDismissed) return null;

  return (
    <div
      className={`fixed bottom-8 left-8 z-50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <div className="relative group">
        <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
        <div className="relative bg-gray-900/95 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-6 shadow-2xl max-w-sm">
          <button
            onClick={handleDismiss}
            className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div className="flex-grow">
              <h4 className="text-white font-bold text-lg mb-2">
                Ready to 10x Your Development?
              </h4>
              <p className="text-gray-300 text-sm mb-4 font-light">
                Join 10,000+ developers building faster with AI
              </p>
              <a
                href="#pricing"
                className="group/btn relative overflow-hidden inline-block"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-70 group-hover/btn:opacity-100 transition duration-300"></div>
                <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 group-hover/btn:scale-105">
                  Get Started Now
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
