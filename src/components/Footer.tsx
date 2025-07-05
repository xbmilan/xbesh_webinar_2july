import { Mail, MessageCircle, Globe, Shield, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">x</span>
              </div>
              <h3 className="text-2xl font-bold text-white">xBesh Creator</h3>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
              The world's first AI-Powered App Operating System. Build, deploy, sell, and scale your digital empire with zero setup, zero dev team, and zero limits.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Live & Ready</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">30-Day Guarantee</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Access</h4>
            <ul className="space-y-4">
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2">
                  <span>💳</span>
                  <span>Choose Your Plan</span>
                </a>
              </li>
              <li>
                <a href="#bonuses" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2">
                  <span>🎁</span>
                  <span>Creator Bonuses</span>
                </a>
              </li>
              <li>
                <a href="https://app.xbesh.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2">
                  <Globe className="w-4 h-4" />
                  <span>Launch App</span>
                </a>
              </li>
              <li>
                <a href="mailto:support@xbesh.com" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>Get Support</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Community</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>Creator Circle</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2">
                  <span>📱</span>
                  <span>Telegram Group</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2">
                  <span>🏆</span>
                  <span>Marketplace</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2">
                  <span>🎓</span>
                  <span>Certification</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h5 className="text-white font-bold text-lg mb-2">30-Day Guarantee</h5>
              <p className="text-gray-400 text-sm">Risk-free trial with full money-back guarantee</p>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">🔒</span>
              </div>
              <h5 className="text-white font-bold text-lg mb-2">Secure Payments</h5>
              <p className="text-gray-400 text-sm">Protected by Stripe with enterprise-grade security</p>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h5 className="text-white font-bold text-lg mb-2">Instant Access</h5>
              <p className="text-gray-400 text-sm">Start building immediately after purchase</p>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 shadow-2xl mb-12">
          <div className="text-center">
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Ideas Into Reality?
            </h4>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Join thousands of creators who are already building and monetizing with xBesh AI
            </p>
            <a 
              href="#pricing" 
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50"
            >
              <span>🚀</span>
              <span>Start Your Journey Today</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <span>© 2024 xBesh Labs, LLC. All rights reserved.</span>
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">Terms of Service</a>
            </div>
            
            <div className="flex items-center space-x-3 text-gray-400">
              <span className="text-sm">Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span className="text-sm">by the xBesh Team</span>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-4 right-4 opacity-20 pointer-events-none">
          <div className="w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
