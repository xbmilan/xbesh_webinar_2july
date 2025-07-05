import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Full-Stack Developer",
    company: "Tech Startup",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    content: "xBesh AI Creator has completely transformed my development workflow. What used to take me weeks now takes days. The AI-generated code is production-ready and follows best practices.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "Lead Developer",
    company: "Digital Agency",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    content: "The code quality is exceptional. I've been able to deliver projects 10x faster while maintaining the highest standards. This tool is a game-changer for any serious developer.",
    rating: 5
  },
  {
    name: "Emily Watson",
    role: "Freelance Developer",
    company: "Independent",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    content: "As a freelancer, time is money. xBesh AI Creator has allowed me to take on more projects and deliver better results. My clients are amazed by the speed and quality.",
    rating: 5
  },
  {
    name: "David Kim",
    role: "CTO",
    company: "SaaS Company",
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    content: "We've integrated xBesh AI Creator into our development process and seen a 300% increase in productivity. The team loves it, and our deployment cycles have never been faster.",
    rating: 5
  },
  {
    name: "Lisa Thompson",
    role: "Frontend Developer",
    company: "E-commerce Platform",
    image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    content: "The UI components generated are pixel-perfect and responsive. I can focus on the creative aspects while the AI handles the repetitive coding tasks. Absolutely revolutionary!",
    rating: 5
  },
  {
    name: "James Wilson",
    role: "Backend Engineer",
    company: "Fintech Startup",
    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    content: "The API integrations and database schemas generated are enterprise-grade. Security best practices are built-in. This tool has elevated our entire development standard.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-blue-500/20 rounded-2xl px-8 py-4">
              <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase">Testimonials</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            Loved by
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              10,000+ Developers
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            See what developers around the world are saying about xBesh AI Creator
          </p>
        </div>

        {/* Enhanced Testimonial Carousel */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-3xl blur-xl"></div>
          <div className="relative bg-gray-800/30 backdrop-blur-2xl rounded-3xl p-12 border border-gray-700/30 shadow-2xl">
            
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
              <button
                onClick={goToPrevious}
                className="group w-12 h-12 bg-gray-800/80 backdrop-blur-xl border border-gray-600/50 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:bg-gray-700/80 hover:border-purple-500/50 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
              <button
                onClick={goToNext}
                className="group w-12 h-12 bg-gray-800/80 backdrop-blur-xl border border-gray-600/50 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:bg-gray-700/80 hover:border-purple-500/50 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </button>
            </div>

            {/* Testimonial Content */}
            <div className="mx-16">
              <div className="text-center">
                {/* Quote Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8 shadow-2xl">
                  <Quote className="w-8 h-8 text-white" />
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-2xl md:text-3xl text-gray-200 font-light leading-relaxed mb-12 max-w-4xl mx-auto">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Rating */}
                <div className="flex items-center justify-center space-x-2 mb-8">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-center space-x-6">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-70"></div>
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="relative w-16 h-16 rounded-full object-cover border-2 border-white/20 shadow-2xl"
                    />
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-bold text-white mb-1">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-400 font-medium">
                      {testimonials[currentIndex].role}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center justify-center space-x-3 mt-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125 shadow-lg'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: '10,000+', label: 'Happy Developers' },
            { number: '1M+', label: 'Apps Generated' },
            { number: '99.9%', label: 'Satisfaction Rate' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gray-800/30 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-8 shadow-xl group-hover:scale-105 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-black text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium text-lg">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
