import React from 'react';
import { 
  Brain, 
  Rocket, 
  Shield, 
  Code2, 
  Database, 
  Smartphone,
  Globe,
  Zap,
  Users
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Development',
    description: 'Leverage advanced AI to generate clean, efficient code that follows best practices and industry standards.',
    gradient: 'from-purple-500 to-indigo-600'
  },
  {
    icon: Rocket,
    title: 'Lightning Fast Deployment',
    description: 'Deploy your applications instantly with our optimized build pipeline and global CDN infrastructure.',
    gradient: 'from-blue-500 to-cyan-600'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Built-in security features including code scanning, vulnerability detection, and compliance monitoring.',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    icon: Code2,
    title: 'Multi-Language Support',
    description: 'Support for all major programming languages and frameworks including React, Vue, Angular, and more.',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    icon: Database,
    title: 'Smart Database Integration',
    description: 'Seamlessly connect to any database with AI-generated schemas and optimized queries.',
    gradient: 'from-pink-500 to-rose-600'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Create responsive applications that work perfectly across all devices and screen sizes.',
    gradient: 'from-violet-500 to-purple-600'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Built for scale with automatic load balancing and global distribution capabilities.',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    icon: Zap,
    title: 'Real-time Collaboration',
    description: 'Work together with your team in real-time with live editing and instant synchronization.',
    gradient: 'from-yellow-500 to-orange-600'
  },
  {
    icon: Users,
    title: 'Team Management',
    description: 'Advanced team features with role-based access control and project management tools.',
    gradient: 'from-indigo-500 to-purple-600'
  }
];

const Features = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-24">
          <div className="inline-block mb-8">
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-xl border border-purple-500/20 rounded-2xl px-8 py-4">
              <span className="text-purple-400 font-semibold text-sm tracking-wider uppercase">Features</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            Everything You Need to
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Build Amazing Apps
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            xBesh AI Creator provides a comprehensive suite of tools and features 
            designed to accelerate your development process and deliver exceptional results.
          </p>
        </div>

        {/* Enhanced Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>
                
                {/* Card */}
                <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-gray-600/50 h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Stats Section */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-gray-800/30 backdrop-blur-2xl rounded-3xl p-12 border border-gray-700/30 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
              {[
                { value: '10x', label: 'Faster Development', color: 'from-purple-400 to-pink-400' },
                { value: '99.9%', label: 'Uptime Guarantee', color: 'from-blue-400 to-cyan-400' },
                { value: '50+', label: 'Integrations', color: 'from-emerald-400 to-teal-400' },
                { value: '24/7', label: 'Expert Support', color: 'from-orange-400 to-red-400' }
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className={`text-5xl md:text-6xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-300 font-medium text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
