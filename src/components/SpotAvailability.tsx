import { useState, useEffect } from 'react';
import { Users, Clock, AlertTriangle } from 'lucide-react';

const SpotAvailability = () => {
  const [spotsFilled, setSpotsFilled] = useState(24);
  const [spotsLeft, setSpotsLeft] = useState(26);
  const totalSpots = 50;

  // Simulate real-time spot updates (optional - can be removed for static display)
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly update spots occasionally to create urgency
      if (Math.random() < 0.1 && spotsLeft > 0) { // 10% chance every 30 seconds
        setSpotsFilled(prev => prev + 1);
        setSpotsLeft(prev => prev - 1);
      }
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, [spotsLeft]);

  const fillPercentage = (spotsFilled / totalSpots) * 100;

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative">
          {/* Background Effects */}
          <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 via-orange-600/20 to-yellow-600/20 rounded-3xl blur-xl animate-pulse"></div>
          
          <div className="relative bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-red-900/20 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-red-500/30 shadow-2xl">
            
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-red-400 animate-pulse" />
                <h2 className="text-3xl md:text-4xl font-black text-white">
                  Limited Spots Available
                </h2>
                <AlertTriangle className="w-8 h-8 text-red-400 animate-pulse" />
              </div>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We're limiting access to ensure quality support and personalized onboarding for each developer.
              </p>
            </div>

            {/* Spot Counter */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded-2xl blur-lg"></div>
                  <div className="relative bg-red-500/10 backdrop-blur-xl border border-red-500/30 rounded-2xl p-6">
                    <Users className="w-12 h-12 text-red-400 mx-auto mb-4" />
                    <div className="text-5xl font-black text-white mb-2">{spotsFilled}</div>
                    <div className="text-red-300 font-semibold text-lg">Spots Filled</div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-2xl blur-lg"></div>
                  <div className="relative bg-green-500/10 backdrop-blur-xl border border-green-500/30 rounded-2xl p-6">
                    <Clock className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <div className="text-5xl font-black text-white mb-2">{spotsLeft}</div>
                    <div className="text-green-300 font-semibold text-lg">Spots Left</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-300 font-medium">Availability Progress</span>
                <span className="text-white font-bold">{fillPercentage.toFixed(0)}% Filled</span>
              </div>
              <div className="relative h-4 bg-gray-700 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full"></div>
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${fillPercentage}%` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
              </div>
            </div>

            {/* Urgency Message */}
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-xl border border-red-500/30 rounded-full px-6 py-3 mb-6">
                <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                <span className="text-red-300 font-semibold">
                  {spotsLeft <= 10 ? '🚨 ALMOST FULL' : '⚡ FILLING FAST'}
                </span>
                <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
              </div>
              
              <p className="text-xl text-gray-200 font-medium mb-6">
                {spotsLeft <= 10 
                  ? `Only ${spotsLeft} spots remaining! Secure your access now before it's too late.`
                  : `${spotsLeft} spots remaining out of ${totalSpots} total. Don't wait - spots are filling quickly!`
                }
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Instant Access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Priority Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Exclusive Community</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotAvailability;
