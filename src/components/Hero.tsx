import React from 'react';
import { ArrowRight, Sparkles, Code, Zap, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,_transparent_0deg,_rgb(168_85_247_/_0.1)_180deg,_transparent_360deg)]"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400/60 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400/60 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-pink-400/60 rounded-full animate-bounce delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Enhanced Badge */}
        <div className="flex justify-center mb-12">
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative flex items-center space-x-3 bg-gray-900/80 backdrop-blur-xl border border-purple-500/30 rounded-full px-8 py-4 text-white shadow-2xl">
              <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
              <span className="text-sm font-semibold tracking-wide">Revolutionary AI Development Tool</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Typography */}
        <div className="space-y-8 mb-16">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tight">
            <span className="block">Build Applications</span>
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent animate-pulse">
              10x Faster
            </span>
            <span className="block">with AI</span>
          </h1>

          <div className="max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-light">
              xBesh AI Creator transforms your development workflow with{' '}
              <span className="text-purple-400 font-semibold">intelligent code generation</span>,{' '}
              <span className="text-blue-400 font-semibold">automated testing</span>, and{' '}
              <span className="text-pink-400 font-semibold">seamless deployment</span>.
            </p>
            <p className="text-lg md:text-xl text-gray-400 mt-6 font-light">
              Experience the future of software development.
            </p>
          </div>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
          <a
            href="#pricing"
            className="group relative overflow-hidden"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 shadow-2xl group-hover:scale-105">
              <span>Start Building Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
          
          <button className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-xl border-2 border-gray-600/50 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-gray-700/50 transition-all duration-300 flex items-center space-x-3 group-hover:scale-105">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </div>
          </button>
        </div>

        {/* Enhanced Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { icon: Code, text: 'AI-Powered Coding', color: 'text-yellow-400' },
            { icon: Zap, text: 'Instant Deployment', color: 'text-blue-400' },
            { icon: Sparkles, text: 'Smart Automation', color: 'text-pink-400' }
          ].map((item, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 transition-all duration-300 group-hover:scale-105">
                <div className="flex items-center justify-center space-x-4">
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                  <span className="font-semibold text-gray-200 text-lg">{item.text}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
