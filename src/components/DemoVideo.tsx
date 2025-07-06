import { Clock, Users, Star } from 'lucide-react';

const DemoVideo = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-8">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-blue-500/20 rounded-2xl px-8 py-4">
              <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase">Live Demo</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            See xBesh AI in
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light mb-8">
            Watch how developers are building production-ready applications in minutes, 
            not hours. See the power of AI-driven development firsthand.
          </p>

          {/* Video Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-400 mb-12">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-blue-400" />
              <span>2:14:37 Hrs Duration</span>
            </div>
            {/* <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-purple-400" />
              <span>50K+ views</span>
            </div> */}
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>4.9/5 rating</span>
            </div>
          </div>
        </div>

        {/* YouTube Video Player */}
        <div className="max-w-5xl mx-auto">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
            
            {/* Video Container */}
            <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl">
              {/* YouTube Embed */}
              <div className="relative aspect-video">
                <iframe 
                  className="w-full h-full rounded-t-3xl"
                  src="https://www.youtube.com/embed/lDMgZh25K-g?si=Oba4ACUajQI6RCPE" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video Info Bar */}
              <div className="p-6 bg-gray-800/30 backdrop-blur-xl border-t border-gray-700/30">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Live xBesh Webinar
                    </h3>
                    <p className="text-gray-400">
                      See how xBesh AI transforms natural language into production-ready code
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">2:14:37 Hrs</div>
                      <div className="text-xs text-gray-400">Duration</div>
                    </div>
                    <div className="w-px h-12 bg-gray-600"></div>
                    {/* <div className="text-center">
                      <div className="text-2xl font-bold text-white">50K+</div>
                      <div className="text-xs text-gray-400">Views</div>
                    </div>
                    <div className="w-px h-12 bg-gray-600"></div>
                      */}
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">4.9★</div>
                      <div className="text-xs text-gray-400">Rating</div>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'AI Code Generation',
              description: 'Watch AI understand requirements and generate clean, production-ready code',
              gradient: 'from-blue-500 to-cyan-500'
            },
            {
              title: 'Real-time Preview',
              description: 'See your application come to life instantly with live preview and hot reload',
              gradient: 'from-purple-500 to-pink-500'
            },
            {
              title: 'One-Click Deploy',
              description: 'Deploy to production with a single click and share with the world',
              gradient: 'from-emerald-500 to-teal-500'
            }
          ].map((highlight, index) => (
            <div key={index} className="group relative">
              <div className={`absolute -inset-1 bg-gradient-to-r ${highlight.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>
              <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 shadow-xl">
                <h4 className="text-lg font-bold text-white mb-3">{highlight.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-8">
            Ready to experience this power yourself?
          </p>
          <a
            href="#pricing"
            className="group relative inline-flex items-center space-x-3 overflow-hidden"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 group-hover:scale-105">
              <span>Get Started Now</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;
