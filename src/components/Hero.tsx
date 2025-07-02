// import React from 'react';
import { ArrowRight, Sparkles, Code, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-gray-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 text-white">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium">Revolutionary AI Development Tool</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Build Applications
          <br />
          <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">10x Faster</span>
          <br />
          with AI
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          xBesh AI Creator transforms your development workflow with intelligent code generation, 
          automated testing, and seamless deployment. Experience the future of software development.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a
            href="#pricing"
            className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2 shadow-xl shadow-purple-500/25"
          >
            <span>Start Building Today</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <button className="text-white border-2 border-white/20 hover:border-white/40 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/5 transition-all duration-300">
            Watch Demo
          </button>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3 text-gray-300">
            <Code className="w-6 h-6 text-yellow-400" />
            <span className="font-medium">AI-Powered Coding</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-gray-300">
            <Zap className="w-6 h-6 text-yellow-400" />
            <span className="font-medium">Instant Deployment</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-gray-300">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <span className="font-medium">Smart Automation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
