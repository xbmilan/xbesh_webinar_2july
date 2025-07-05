import React from 'react';
import { Star, Quote, CheckCircle, TrendingUp, DollarSign, Zap } from 'lucide-react';

const testimonials = [
  {
    quote: "I launched 3 SaaS apps in one week… without writing a single line of code. The Vibe Coding™ approach is revolutionary.",
    author: "Harsh V.",
    role: "SaaS Entrepreneur",
    achievement: "3 Apps in 7 Days",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    quote: "The Agent Mode is mind-blowing. It's like hiring a full dev team, on demand. I've never seen anything like this.",
    author: "Jacob K.",
    role: "Digital Agency Owner",
    achievement: "10x Faster Development",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    quote: "I made back 10x my plan cost in just the first month selling tools built with xBesh. This is a game-changer.",
    author: "Aisha M.",
    role: "Creator & Developer",
    achievement: "10x ROI in Month 1",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    quote: "The desktop app and real-time workbench make development feel like magic. I can't imagine going back to traditional coding.",
    author: "Marcus T.",
    role: "Full-Stack Developer",
    achievement: "5x Productivity Boost",
    gradient: "from-orange-500 to-red-500"
  },
  {
    quote: "Building Chrome extensions used to take weeks. Now I can create and deploy them in hours. The marketplace integration is brilliant.",
    author: "Sarah L.",
    role: "Extension Developer",
    achievement: "Chrome Store Success",
    gradient: "from-violet-500 to-purple-500"
  },
  {
    quote: "The Creator Circle community is incredible. Direct access to the team and other successful creators has accelerated my growth exponentially.",
    author: "David R.",
    role: "Tech Entrepreneur",
    achievement: "Community-Driven Growth",
    gradient: "from-teal-500 to-blue-500"
  }
];

const stats = [
  {
    icon: TrendingUp,
    number: "10,000+",
    label: "Apps Created",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: DollarSign,
    number: "$2.5M+",
    label: "Creator Revenue",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    number: "95%",
    label: "Success Rate",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: CheckCircle,
    number: "24/7",
    label: "Support Available",
    gradient: "from-orange-500 to-red-500"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-xl border border-yellow-500/20 rounded-2xl px-8 py-4">
              <span className="text-yellow-400 font-semibold text-sm tracking-wider uppercase">⭐ SUCCESS STORIES</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            Real Creators,
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Don't just take our word for it. Here's what real xBesh creators are achieving with AI-powered development.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>
                <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/30 shadow-2xl transition-all duration-500 hover:scale-105 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              <div className={`absolute -inset-1 bg-gradient-to-r ${testimonial.gradient} rounded-3xl blur opacity-15 group-hover:opacity-35 transition duration-500`}></div>
              
              <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/30 shadow-2xl transition-all duration-500 hover:scale-105 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-8 h-8 text-gray-400" />
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 flex-grow italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="border-t border-gray-700/50 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold text-lg">
                        {testimonial.author}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                    <div className={`px-3 py-1 bg-gradient-to-r ${testimonial.gradient} rounded-full text-white text-xs font-bold`}>
                      {testimonial.achievement}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Section */}
        <div className="text-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-gray-800/30 backdrop-blur-2xl rounded-3xl p-12 border border-gray-700/30 shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Join the Creator Revolution
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Thousands of creators are already building their digital empires with xBesh. 
                <span className="text-purple-400 font-semibold"> Your success story could be next.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="#pricing"
                  className="group relative overflow-hidden"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 shadow-2xl group-hover:scale-105">
                    <span>Start Your Success Story</span>
                    <span>🚀</span>
                  </div>
                </a>
                
                <div className="text-gray-400 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>30-day money-back guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
