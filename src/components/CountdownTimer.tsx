import React, { useState, useEffect } from 'react';
import { Clock, Flame } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set countdown to 7 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <div className="absolute -inset-2 bg-gradient-to-r from-red-600/30 via-orange-600/30 to-yellow-600/30 rounded-3xl blur-xl animate-pulse"></div>
      <div className="relative bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 backdrop-blur-2xl rounded-3xl p-8 border border-red-500/20 shadow-2xl">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Flame className="w-8 h-8 text-orange-400 animate-bounce" />
            <h3 className="text-2xl md:text-3xl font-black text-white">
              Limited Time Offer Ends In:
            </h3>
            <Flame className="w-8 h-8 text-orange-400 animate-bounce delay-300" />
          </div>
          
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            {[
              { value: timeLeft.days, label: 'Days' },
              { value: timeLeft.hours, label: 'Hours' },
              { value: timeLeft.minutes, label: 'Minutes' },
              { value: timeLeft.seconds, label: 'Seconds' }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-4 group-hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl font-black text-white mb-2">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-orange-300 font-semibold text-lg mt-6">
            🔥 Save $3,000 on Annual Plans - Don't Miss Out!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
