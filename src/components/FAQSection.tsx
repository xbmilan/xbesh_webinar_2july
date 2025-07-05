import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Zap, Shield, CreditCard } from 'lucide-react';

const faqs = [
  {
    question: "What exactly is xBesh Creator and how is it different from other development tools?",
    answer: "xBesh Creator is the world's first AI-Powered App Operating System that uses our revolutionary Vibe Coding™ approach. Unlike traditional development tools that require extensive coding knowledge, xBesh lets you describe what you want in plain English, and our AI agents build complete applications for you. You can create SaaS apps, Chrome extensions, landing pages, and more - all from a single prompt.",
    category: "product"
  },
  {
    question: "Do I need any coding experience to use xBesh?",
    answer: "Absolutely not! That's the beauty of Vibe Coding™. You simply describe what you want to build in natural language, and xBesh's AI handles all the technical implementation. Whether you're a complete beginner or an experienced developer, xBesh accelerates your development process by 10x or more.",
    category: "technical"
  },
  {
    question: "What types of applications can I build with xBesh?",
    answer: "You can build virtually anything: Complete SaaS applications with user management and payments, AI-powered tools and workflows, High-converting landing pages and sales funnels, Chrome browser extensions, Client dashboards and portals, E-commerce stores, Email marketing tools, Database-connected applications, and much more. The only limit is your imagination.",
    category: "product"
  },
  {
    question: "How does the token system work and what are the costs?",
    answer: "xBesh uses a pay-as-you-go token system at just $10 per million tokens. Most applications use only a few thousand tokens to build, making it extremely cost-effective. Plus, all Creator plans include massive bonus token allocations (50M+ tokens annually) so you can build extensively without worrying about costs.",
    category: "pricing"
  },
  {
    question: "Can I actually make money with the apps I build?",
    answer: "Absolutely! xBesh includes built-in monetization features: Stripe integration for payments, subscription and membership systems, the ability to sell your apps on our marketplace, tools to build and sell to clients, and everything needed to create recurring revenue streams. Many creators make back 10x their investment in the first month.",
    category: "monetization"
  },
  {
    question: "What's included in the Creator bonuses and are they really worth it?",
    answer: "The Creator bonuses are incredibly valuable and include: 50M+ bonus tokens annually, access to exclusive Creator Circle community, business automation tools (proposal writer, invoice tracker, etc.), 1-on-1 mastermind sessions, marketplace priority placement, done-for-you portfolio setup, and much more. The total value exceeds $10,000+ in tools and services.",
    category: "bonuses"
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes! We offer a full 30-day money-back guarantee. If you're not completely satisfied with xBesh Creator for any reason, simply contact our support team within 30 days for a full refund. We're confident you'll love what you can build with xBesh.",
    category: "guarantee"
  },
  {
    question: "How quickly can I start building after purchase?",
    answer: "Immediately! Once you complete your purchase, you'll get instant access to the xBesh Creator platform, desktop app, and all bonuses. You can literally start building your first application within minutes of signing up.",
    category: "access"
  },
  {
    question: "What kind of support do I get as a Creator?",
    answer: "Creator plan members get premium support including: Direct WhatsApp access to our CTO and tech team, VIP Telegram group with other creators, priority email support, live monthly mastermind sessions, and access to our comprehensive knowledge base and tutorials.",
    category: "support"
  },
  {
    question: "Can I upgrade or change my payment plan later?",
    answer: "Yes, you can upgrade your plan at any time. If you start with monthly payments and want to switch to annual for the savings, just contact our support team and they'll help you make the transition and apply any applicable credits.",
    category: "billing"
  }
];

const categories = [
  { id: 'all', label: 'All Questions', icon: HelpCircle },
  { id: 'product', label: 'Product', icon: Zap },
  { id: 'pricing', label: 'Pricing', icon: CreditCard },
  { id: 'support', label: 'Support', icon: Shield }
];

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredFAQs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-blue-500/20 rounded-2xl px-8 py-4">
              <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase">❓ FAQ</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
            Questions?
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              We've Got Answers
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Everything you need to know about xBesh Creator, from getting started to maximizing your success.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative overflow-hidden transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'scale-105'
                    : 'hover:scale-105'
                }`}
              >
                <div className={`absolute -inset-1 rounded-2xl blur transition duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 opacity-70'
                    : 'bg-gradient-to-r from-gray-600 to-gray-700 opacity-0 group-hover:opacity-50'
                }`}></div>
                <div className={`relative flex items-center space-x-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl'
                    : 'bg-gray-800/50 text-gray-300 hover:text-white border border-gray-700/50'
                }`}>
                  <IconComponent className="w-5 h-5" />
                  <span>{category.label}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {filteredFAQs.map((faq, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              
              <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-3xl border border-gray-700/30 shadow-2xl transition-all duration-300 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-700/20 transition-colors duration-300"
                >
                  <h3 className="text-lg md:text-xl font-bold text-white pr-4 leading-tight">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronUp className="w-6 h-6 text-purple-400 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
                    )}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-6 border-t border-gray-700/30">
                    <p className="text-gray-300 leading-relaxed pt-6 text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-20 text-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-gray-800/30 backdrop-blur-2xl rounded-3xl p-12 border border-gray-700/30 shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Still Have Questions?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our support team is here to help. Get answers from real humans who know xBesh inside and out.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="mailto:support@xbesh.com"
                  className="group relative overflow-hidden"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 shadow-2xl group-hover:scale-105">
                    <span>📧</span>
                    <span>Contact Support</span>
                  </div>
                </a>
                
                <a
                  href="#pricing"
                  className="group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  <div className="relative bg-gray-800/50 backdrop-blur-xl border-2 border-gray-600/50 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-700/50 transition-all duration-300 flex items-center space-x-3 group-hover:scale-105">
                    <span>🚀</span>
                    <span>Start Building Now</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
