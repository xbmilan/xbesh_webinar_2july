import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ExternalLink } from 'lucide-react';

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
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-gray-900 p-2 rounded-lg border border-purple-500/30">
                <Sparkles className="w-8 h-8 text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-black text-white group-hover:text-purple-300 transition-colors duration-300">
                xBesh AI
              </h1>
              <p className="text-xs text-gray-400 font-medium">Creator</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Enhanced CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://xbesh.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 shadow-2xl transition-all duration-300 group-hover:scale-105">
                <span>Launch App</span>
                <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-50 p-2 rounded-lg bg-gray-800/50 backdrop-blur-xl border border-gray-700/50"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/98 backdrop-blur-2xl border-b border-gray-800/50 shadow-2xl">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-white font-medium text-lg transition-colors duration-300 py-2 border-b border-gray-800/30 hover:border-purple-500/30"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://xbesh.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-xl font-semibold shadow-2xl transition-all duration-300 hover:scale-105 mt-4"
              >
                <span>Launch App</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
