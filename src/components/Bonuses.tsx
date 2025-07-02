import React from 'react';
import { 
  Crown, 
  MessageCircle, 
  ShoppingCart, 
  Rocket, 
  CreditCard, 
  Star, 
  Award, 
  Users, 
  GraduationCap, 
  Zap, 
  Store, 
  Video,
  Gift,
  Sparkles,
  Phone,
  CheckCircle
} from 'lucide-react';

const mainBonuses = [
  {
    icon: Zap,
    title: '+50M Bonus Tokens/Year',
    description: 'Massive token allocation for unlimited AI-powered development',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: MessageCircle,
    title: 'Direct Access to My Mastermind Telegram Group',
    description: 'Exclusive insider community with direct access to industry experts',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: ShoppingCart,
    title: 'KoalaCart — Sell like a pro',
    description: 'Our ThriveCart-style platform for professional online selling',
    gradient: 'from-purple-500 to-pink-500'
  }
];

const creatorAccess = [
  {
    icon: Rocket,
    title: 'Launch & Sell Apps on the Marketplace',
    description: 'Monetize your creations instantly'
  },
  {
    icon: CreditCard,
    title: 'Stripe & PayPal Integration',
    description: 'Seamless payment processing'
  },
  {
    icon: Star,
    title: 'Featured on the Official Creators Page',
    description: 'Get maximum visibility and credibility'
  },
  {
    icon: Award,
    title: 'Get Hired as a Certified Vibe Coder',
    description: 'Access exclusive job opportunities'
  },
  {
    icon: Users,
    title: 'VIP Telegram Group Access',
    description: 'Connect with elite creators and developers'
  },
  {
    icon: GraduationCap,
    title: 'xBesh Labs Certification via Free Test',
    description: 'Official certification to boost your credentials'
  },
  {
    icon: Phone,
    title: 'Direct WhatsApp Connect to CTO & Tech Team',
    description: 'Get direct support from our technical leadership'
  }
];

const masteryCourses = [
  {
    icon: Zap,
    title: 'Vibe Coding: Build Anything, Fast',
    description: 'Master the art of rapid development with AI assistance',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Store,
    title: 'Selling Online Apps: Masterclass for Makers',
    description: 'Turn your coding skills into a profitable business',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    icon: Video,
    title: 'LIVE Mastermind Sessions Each Month',
    description: 'Interactive sessions with industry leaders and peers',
    gradient: 'from-red-500 to-pink-500'
  }
];

const Bonuses = () => {
  return (
    <section id="bonuses" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-purple-400 px-6 py-3 rounded-full mb-8">
            <Gift className="w-5 h-5" />
            <span className="text-sm font-bold">EXCLUSIVE CREATOR BONUSES</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            🚀 What You'll Get as an
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"> xBesh Creator</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl text-gray-300 mb-4 font-semibold">
              All Rights of the Bundle License — Unlocked.
            </p>
            <p className="text-xl text-purple-400 font-bold">
              You're not just getting access — you're getting POWER.
            </p>
          </div>
        </div>

        {/* Main Bonuses */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {mainBonuses.map((bonus, index) => {
            const IconComponent = bonus.icon;
            return (
              <div key={index} className="group relative">
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${bonus.gradient} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>
                
                <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/30 shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${bonus.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {bonus.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {bonus.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center mb-20">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent w-full max-w-md"></div>
          <div className="mx-6 text-purple-400 text-2xl">⸻</div>
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent w-full max-w-md"></div>
        </div>

        {/* Full Creator Access */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-green-500/10 border border-green-500/20 text-green-400 px-6 py-3 rounded-full mb-6">
              <CheckCircle className="w-5 h-5" />
              <span className="font-bold">FULL CREATOR ACCESS INCLUDES</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creatorAccess.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
                  
                  <div className="relative bg-gray-800/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/30 shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Another Divider */}
        <div className="flex items-center justify-center mb-20">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent w-full max-w-md"></div>
          <div className="mx-6 text-purple-400 text-2xl">⸻</div>
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent w-full max-w-md"></div>
        </div>

        {/* Bonus Mastery Courses */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 text-orange-400 px-6 py-3 rounded-full mb-6">
              <GraduationCap className="w-5 h-5" />
              <span className="font-bold">🎓 BONUS MASTERY COURSES</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {masteryCourses.map((course, index) => {
              const IconComponent = course.icon;
              return (
                <div key={index} className="group relative">
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${course.gradient} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>
                  
                  <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/30 shadow-2xl transition-all duration-500 hover:scale-105">
                    <div className={`w-16 h-16 bg-gradient-to-r ${course.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {course.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/20 shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-3xl font-bold text-white">Ready to Become an xBesh Creator?</h3>
              <Sparkles className="w-8 h-8 text-purple-400 ml-3" />
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the elite community of creators who are building the future with AI-powered development tools.
            </p>
            <a 
              href="#pricing" 
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50"
            >
              <Crown className="w-6 h-6" />
              <span>Choose Your Plan Above</span>
              <Rocket className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
