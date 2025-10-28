import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sayali's portfolio photos
  const carouselImages = [
    '/images/Sayali-Professional.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % carouselImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-white pt-24 pb-12 md:pt-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-5 gap-6 md:gap-8 items-center">
          {/* Left Column - Text Content (3 columns) */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            {/* Main headline */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3 animate-slide-up leading-tight">
              Designing experiences that connect{' '}
              <span className="text-primary-600">people</span>,{' '}
              <span className="text-primary-500">purpose</span>, and possibility.
            </h1>

            {/* Subtitle */}
            <div className="animate-slide-up mb-4 md:mb-5" style={{ animationDelay: '0.1s' }}>
              <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
                I blend <strong className="text-neutral-900 font-semibold">UX Design, Service Strategy and Business Analysis</strong> to improve how people experience processes.
              </p>
            </div>

            {/* Compact highlight cards - 3 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-4 md:mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-primary-50 rounded-lg p-2.5 sm:p-3 border border-primary-200">
                <p className="text-xs font-bold text-primary-700 uppercase tracking-wide mb-1">Focus</p>
                <p className="text-neutral-700 text-xs leading-tight">Government, Healthcare, Enterprise Technology</p>
              </div>
              <div className="bg-primary-50 rounded-lg p-2.5 sm:p-3 border border-primary-200">
                <p className="text-xs font-bold text-primary-700 uppercase tracking-wide mb-1">Strengths</p>
                <p className="text-neutral-700 text-xs leading-tight">Design, Research, Systems Thinking</p>
              </div>
              <div className="bg-primary-50 rounded-lg p-2.5 sm:p-3 border border-primary-200">
                <p className="text-xs font-bold text-primary-700 uppercase tracking-wide mb-1">Stack</p>
                <p className="text-neutral-700 text-xs leading-tight">Figma, Jira, Lucidchart, HTML/CSS, React</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 animate-slide-up mb-4 md:mb-0" style={{ animationDelay: '0.3s' }}>
              <a
                href="#projects"
                className="group inline-flex items-center justify-center bg-primary-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg text-sm w-full sm:w-auto"
              >
                View My Work
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-white border-2 border-primary-600 text-primary-600 px-5 py-2.5 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 text-sm w-full sm:w-auto"
              >
                Let's Collaborate
              </a>
            </div>

            {/* Philosophy Quote Card */}
            <div className="hidden lg:block relative bg-gradient-to-br from-primary-50 to-neutral-50 rounded-xl p-4 md:p-6 border border-primary-200 overflow-hidden mt-4 md:mt-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <svg className="w-8 h-8 md:w-10 md:h-10 text-primary-300/40 mb-2 md:mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-base md:text-lg lg:text-xl font-medium text-neutral-700 leading-relaxed relative z-10 italic">
                "Design begins where understanding meets imagination."
              </p>
            </div>

            {/* Carousel indicators */}
            <div className="hidden lg:flex gap-2 mt-4 md:mt-6">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'bg-primary-600 w-8'
                      : 'bg-neutral-300 hover:bg-primary-400'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Image Carousel (2 columns) */}
          <div className="lg:col-span-2 relative animate-fade-in order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {carouselImages.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`Portfolio image ${index + 1}`}
                  className={`absolute w-full h-full object-cover object-top transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
