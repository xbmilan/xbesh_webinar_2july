import React from 'react';
import { Check, Star, Zap, Shield, Crown, Sparkles } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const pricingPlans = [
  {
    name: 'Annual Plan',
    price: '$2,999',
    period: 'per year',
    description: 'Best value - Save $3,000 annually',
    link: 'https://buy.stripe.com/bJe7sMfwHfUQ2mScIGaAw0k',
    popular: true,
    savings: 'Save 50%',
    icon: Crown,
    gradient: 'from-purple-500 via-pink-500 to-blue-500'
  },
  {
    name: '2 Split Payments',
    price: '$1,599',
    period: 'per month for 2 months',
    description: 'Split your annual payment into 2 installments',
    link: 'https://buy.stripe.com/9B64gAesDgYUd1wdMKaAw0l',
    popular: false,
    icon: Sparkles,
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    name: '3 Split Payments',
    price: '$1,199',
    period: 'per month for 3 months',
    description: 'Split your annual payment into 3 installments',
    link: 'https://buy.stripe.com/aFa6oI5W7dMI9Pk5geaAw0m',
    popular: false,
    icon: Sparkles,
    gradient: 'from-orange-500 to-red-500'
  },
  {
    name: '6 Split Payments',
    price: '$699',
    period: 'per month for 6 months',
    description: 'Split your annual payment into 6 installments',
    link: 'https://buy.stripe.com/bJe00k2JV384gdIbECaAw0n',
    popular: false,
    icon: Sparkles,
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    name: 'Monthly Plan',
    price: '$499',
    period: 'per month',
    description: 'Full access with monthly flexibility',
    link: 'https://buy.stripe.com/dRmdRa98j7ok9Pk8sqaAw0o',
    popular: false,
    icon: Zap,
    gradient: 'from-blue-500 to-cyan-500'
  }
];

const features = [
  'AI-Powered Code Generation',
  'Unlimited Projects',
  'Real-time Collaboration',
  'Advanced Debugging Tools',
  'Global CDN Deployment',
  'Enterprise Security',
  'Priority Support',
  'Custom Integrations',
  'Team Management',
  'Analytics Dashboard'
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-500/20 rounded-2xl px-8 py-4">
              <span className="text-purple-400 font-semibold text-sm tracking-wider uppercase">Pricing</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            Choose Your
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            One powerful license, multiple payment options. Choose the plan that works best for your budget and workflow.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-20">
          <CountdownTimer />
        </div>

        {/* Enhanced Features Section */}
        <div className="relative mb-20">
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600/10 via-teal-600/10 to-cyan-600/10 rounded-3xl blur-xl"></div>
          <div className="relative bg-gray-800/30 backdrop-blur-2xl rounded-3xl p-12 border border-gray-700/30 shadow-2xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Everything Included in Every Plan
              </h3>
              <p className="text-gray-400 text-lg font-light">
                No hidden features, no upgrade pressure. Get everything from day one.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium text-lg">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Pricing Cards */}
        <div className="space-y-8">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className="group relative transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Enhanced Glow Effect */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${plan.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition duration-500`}></div>
                
                <div
                  className={`relative backdrop-blur-2xl rounded-3xl shadow-2xl border transition-all duration-500 overflow-visible ${
                    plan.popular 
                      ? 'bg-gray-800/60 border-purple-500/50 shadow-purple-500/20' 
                      : 'bg-gray-800/40 border-gray-700/30 hover:border-gray-600/50'
                  }`}
                >
                  {/* Enhanced Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-70"></div>
                        <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-sm font-bold flex items-center space-x-2 shadow-2xl border border-white/20">
                          <Crown className="w-4 h-4" />
                          <span>Most Popular Choice</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Enhanced Savings Badge */}
                  {plan.savings && (
                    <div className="absolute -top-5 -right-5 z-20">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full blur opacity-70"></div>
                        <div className="relative bg-gradient-to-r from-green-500 to-emerald-500 text-white px-5 py-2 rounded-full text-sm font-bold shadow-2xl border border-white/20 animate-pulse">
                          {plan.savings}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className={`p-12 ${plan.popular ? 'pt-16' : ''}`}>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-8 lg:space-y-0">
                      {/* Enhanced Plan Details */}
                      <div className="flex-1 lg:pr-12">
                        <div className="flex items-center space-x-6 mb-8">
                          <div className={`w-20 h-20 bg-gradient-to-r ${plan.gradient} rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="w-10 h-10 text-white" />
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-white mb-2">
                              {plan.name}
                            </h3>
                            <p className="text-gray-400 text-lg font-light">
                              {plan.description}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-baseline space-x-3">
                          <span className="text-6xl font-black text-white">
                            {plan.price}
                          </span>
                          <span className="text-gray-400 text-xl font-light">
                            {plan.period}
                          </span>
                        </div>
                      </div>

                      {/* Enhanced CTA Button */}
                      <div className="flex-shrink-0">
                        <a
                          href={plan.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group/btn relative overflow-hidden inline-flex items-center justify-center space-x-3 py-6 px-12 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 ${
                            plan.popular
                              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50'
                              : 'bg-gray-700/50 text-white hover:bg-gray-600/70 border-2 border-gray-600/50 hover:border-purple-500/50 shadow-2xl'
                          }`}
                        >
                          <span>Get Started Now</span>
                          <Zap className="w-6 h-6 group-hover/btn:rotate-12 transition-transform duration-300" />
                          
                          {/* Enhanced Button Glow */}
                          {plan.popular && (
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover/btn:opacity-50 transition duration-300 -z-10"></div>
                          )}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Guarantee Section */}
        <div className="mt-24 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl blur"></div>
            <div className="relative bg-green-500/10 backdrop-blur-xl border border-green-500/20 text-green-400 px-10 py-6 rounded-2xl">
              <div className="flex items-center space-x-4">
                <Shield className="w-8 h-8" />
                <div className="text-left">
                  <div className="font-bold text-xl">30-day money-back guarantee</div>
                  <div className="text-green-300/80 text-sm font-light">Try risk-free. If you're not completely satisfied, get a full refund.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
