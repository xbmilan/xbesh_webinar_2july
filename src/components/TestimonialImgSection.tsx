const TestimonialImgSection = () => {
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
              <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase">Results-Driven</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            Client Results & Testimonials From Hours to Minutes:
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
               Real Developer Stories
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light mb-8">
            Watch how our clients are achieving incredible development speed with xBesh AI. Their success stories speak for themselves.
          </p>
        </div>

        {/* YouTube Video Player */}
        <div className="max-w-5xl mx-auto">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
            
            {/* Video Container */}
            <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl">
            
              <div className="relative aspect-video">
                <img src='./images/clients_testimonials.jpg' alt='User Testimonials' />
              </div>
            </div>
          </div>
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

export default TestimonialImgSection;
