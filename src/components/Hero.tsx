import { ArrowRight, Sparkles, Code, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950 pt-4 pb-4" style={{ paddingTop: '84px', paddingBottom: '84px' }}>
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 animate-float">
          <Code className="w-8 h-8 text-purple-400/30" />
        </div>
        <div className="absolute top-40 right-32 animate-float-delayed">
          <Sparkles className="w-6 h-6 text-pink-400/30" />
        </div>
        <div className="absolute bottom-32 left-32 animate-float">
          <Zap className="w-10 h-10 text-blue-400/30" />
        </div>
        <div className="absolute bottom-20 right-20 animate-float-delayed">
          <Sparkles className="w-7 h-7 text-purple-400/30" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center pt-8 pb-8">
        {/* Enhanced Badge */}
        <div className="inline-block mb-8 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-purple-500/30 text-purple-300 px-8 py-4 rounded-full text-sm font-semibold flex items-center space-x-3 shadow-2xl">
              <Sparkles className="w-5 h-5 animate-spin-slow" />
              <span>🚀 Revolutionary AI Development Platform</span>
              <Sparkles className="w-5 h-5 animate-spin-slow" />
            </div>
          </div>
        </div>

        {/* Enhanced Main Headline */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-tight tracking-tight">
          Build Apps
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
            10x Faster
          </span>
          <br />
          with AI
        </h1>

        {/* Enhanced Subheadline */}
        <p className="text-xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
          Transform your development workflow with xBesh AI Creator. 
          Generate production-ready code, deploy instantly, and scale effortlessly.
          <br />
          <span className="text-purple-300 font-medium">Join 10,000+ developers building the future.</span>
        </p>

        {/* Enhanced CTA Button */}
        <div className="flex items-center justify-center mb-16">
          <a
            href="#pricing"
            className="group relative overflow-hidden"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white px-12 py-6 rounded-2xl font-bold text-xl flex items-center space-x-4 shadow-2xl transition-all duration-300 group-hover:scale-105">
              <span>Start Building Now</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </a>
        </div>

        {/* Enhanced Social Proof */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600/10 via-teal-600/10 to-cyan-600/10 rounded-3xl blur-xl"></div>
          <div className="relative bg-gray-800/30 backdrop-blur-2xl rounded-3xl p-8 border border-gray-700/30 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">10,000+</div>
                <div className="text-gray-400 font-medium">Active Developers</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">1M+</div>
                <div className="text-gray-400 font-medium">Apps Generated</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">99.9%</div>
                <div className="text-gray-400 font-medium">Uptime</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="mt-16">
          <p className="text-gray-400 text-sm font-medium mb-8 uppercase tracking-wider">
            Trusted by developers worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center space-x-8 opacity-60">
            {['Startups', 'Agencies', 'Freelancers', 'Enterprises', 'Teams', 'Creators'].map((category, index) => (
              <div key={index} className="text-gray-500 font-bold text-lg hover:text-gray-300 transition-colors duration-300 cursor-default">
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-gradient-x {
          background-size: 400% 400%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
