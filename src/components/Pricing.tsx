import React from 'react';
import { Check, Star, Zap, Shield, Crown, Sparkles } from 'lucide-react';

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
    <section id="pricing" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Flexible Pricing Options</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Choose Your
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"> Perfect Plan</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            One powerful license, multiple payment options. Choose the plan that works best for your budget and workflow.
          </p>
        </div>

        {/* Features included */}
        <div className="bg-gray-800/30 backdrop-blur-xl rounded-3xl p-10 mb-16 border border-gray-700/30 shadow-2xl">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Everything Included in Every Plan
            </h3>
            <p className="text-gray-400">No hidden features, no upgrade pressure. Get everything from day one.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4 group">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-200 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Pricing cards */}
        <div className="space-y-8">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className="relative group transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${plan.gradient} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>
                
                <div
                  className={`relative bg-gray-800/50 backdrop-blur-xl rounded-3xl shadow-2xl border transition-all duration-500 overflow-visible ${
                    plan.popular 
                      ? 'border-purple-500/50 shadow-purple-500/20' 
                      : 'border-gray-700/30 hover:border-gray-600/50'
                  }`}
                >
                  {/* Popular badge - Fixed positioning */}
                  {plan.popular && (
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2 shadow-xl border-2 border-white/20">
                        <Crown className="w-4 h-4" />
                        <span>Most Popular Choice</span>
                      </div>
                    </div>
                  )}

                  {/* Savings badge - Fixed positioning */}
                  {plan.savings && (
                    <div className="absolute -top-4 -right-4 z-20">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl border-2 border-white/20 animate-pulse">
                        {plan.savings}
                      </div>
                    </div>
                  )}

                  {/* Animated border for popular plan */}
                  {plan.popular && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-3xl opacity-20 animate-pulse"></div>
                  )}

                  <div className={`p-10 ${plan.popular ? 'pt-14' : ''}`}>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-8 lg:space-y-0">
                      {/* Plan details */}
                      <div className="flex-1 lg:pr-8">
                        <div className="flex items-center space-x-4 mb-6">
                          <div className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">
                              {plan.name}
                            </h3>
                            <p className="text-gray-400 text-lg">
                              {plan.description}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-baseline space-x-2">
                          <span className="text-5xl font-bold text-white">
                            {plan.price}
                          </span>
                          <span className="text-gray-400 text-lg">
                            {plan.period}
                          </span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="flex-shrink-0">
                        <a
                          href={plan.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group relative inline-flex items-center justify-center space-x-3 py-5 px-10 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                            plan.popular
                              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50'
                              : 'bg-gray-700/50 text-white hover:bg-gray-600/70 border-2 border-gray-600/50 hover:border-purple-500/50 shadow-xl'
                          }`}
                        >
                          <span>Get Started Now</span>
                          <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                          
                          {/* Button glow effect */}
                          {plan.popular && (
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300 -z-10"></div>
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

        {/* Money back guarantee */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-3 bg-green-500/10 border border-green-500/20 text-green-400 px-8 py-4 rounded-2xl backdrop-blur-sm">
            <Shield className="w-6 h-6" />
            <span className="font-semibold text-lg">30-day money-back guarantee</span>
          </div>
          <p className="text-gray-400 mt-4 text-lg">
            Try risk-free. If you're not completely satisfied, get a full refund.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
