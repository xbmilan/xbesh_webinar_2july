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
    description: 'Leverage advanced AI to generate clean, efficient code that follows best practices and industry standards.'
  },
  {
    icon: Rocket,
    title: 'Lightning Fast Deployment',
    description: 'Deploy your applications instantly with our optimized build pipeline and global CDN infrastructure.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Built-in security features including code scanning, vulnerability detection, and compliance monitoring.'
  },
  {
    icon: Code2,
    title: 'Multi-Language Support',
    description: 'Support for all major programming languages and frameworks including React, Vue, Angular, and more.'
  },
  {
    icon: Database,
    title: 'Smart Database Integration',
    description: 'Seamlessly connect to any database with AI-generated schemas and optimized queries.'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Create responsive applications that work perfectly across all devices and screen sizes.'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Built for scale with automatic load balancing and global distribution capabilities.'
  },
  {
    icon: Zap,
    title: 'Real-time Collaboration',
    description: 'Work together with your team in real-time with live editing and instant synchronization.'
  },
  {
    icon: Users,
    title: 'Team Management',
    description: 'Advanced team features with role-based access control and project management tools.'
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Build Amazing Apps</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            xBesh AI Creator provides a comprehensive suite of tools and features 
            designed to accelerate your development process and deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-24 bg-gray-900/50 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-gray-700/50">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">10x</div>
              <div className="text-gray-300">Faster Development</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">50+</div>
              <div className="text-gray-300">Integrations</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-gray-300">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
