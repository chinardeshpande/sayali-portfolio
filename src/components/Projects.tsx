import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { useRef, useState } from 'react';
import LocalHtmlModal from './LocalHtmlModal';

const Projects = () => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isFramerModalOpen, setIsFramerModalOpen] = useState(false);
  const [isRadiologyModalOpen, setIsRadiologyModalOpen] = useState(false);
  const [isSaferSpacesModalOpen, setIsSaferSpacesModalOpen] = useState(false);
  const [isNeurodiversityModalOpen, setIsNeurodiversityModalOpen] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="pt-6 md:pt-4 pb-8 md:pb-8 bg-white">
      <div className="section-container">
        {/* Compact Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-6 md:mb-8 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-2 md:mb-3">
            Project Showcase
          </h2>
          <p className="text-base md:text-lg text-neutral-600">
            <strong className="text-neutral-800">Challenge → Process → Outcome</strong>. Click to explore.
          </p>
        </div>

        {/* Horizontal Carousel */}
        <div className="relative max-w-7xl mx-auto mb-8 md:mb-12">
          {/* Left Arrow - Hidden on mobile */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-4 md:px-12 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project) => (
              <article
                key={project.id}
                onClick={() => {
                  if (project.id === 'nurse-burnout') {
                    setIsFramerModalOpen(true);
                  } else if (project.id === 'radiology') {
                    setIsRadiologyModalOpen(true);
                  } else if (project.id === 'safer-spaces') {
                    setIsSaferSpacesModalOpen(true);
                  } else if (project.id === 'neurodiversity') {
                    setIsNeurodiversityModalOpen(true);
                  } else {
                    navigate(`/project/${project.id}`);
                  }
                }}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden border border-neutral-200 hover:border-primary-400 transition-all duration-300 hover:shadow-xl flex flex-col flex-shrink-0 w-72 md:w-80 snap-center"
              >
              {/* Compact Cover Image */}
              <div className="relative h-48 overflow-hidden bg-neutral-100 flex-shrink-0">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent"></div>

                {/* Compact Tags */}
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-white/90 backdrop-blur-sm text-neutral-700 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Compact Content */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="mb-3">
                  <p className="text-xs text-primary-600 font-semibold uppercase tracking-wide mb-1.5">
                    {project.context}
                  </p>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed line-clamp-2">
                    {project.brief}
                  </p>
                </div>

                {/* View Link */}
                <div className="mt-auto">
                  <div className="flex items-center justify-between text-primary-600 font-semibold text-sm">
                    <span>View Case Study</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
              </article>
            ))}
          </div>

          {/* Right Arrow - Hidden on mobile */}
          <button
            onClick={() => scroll('right')}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Compact CTA Banner */}
        <div className="max-w-4xl mx-auto text-center p-6 md:p-8 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl text-white mx-4">
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            Let's build thoughtful experiences together
          </h3>
          <p className="text-sm md:text-base text-white/90 mb-4 md:mb-6">
            Open to design collaborations, freelance projects, and full-time roles.
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center justify-center bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-50 transition-all duration-300 shadow-lg w-full sm:w-auto"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Local HTML Modal for Nurse Burnout */}
      <LocalHtmlModal
        isOpen={isFramerModalOpen}
        onClose={() => setIsFramerModalOpen(false)}
        htmlPath="/html-content/nurse-burnout.html"
        title="Reducing Nurse Burnout - Full Case Study"
      />

      {/* Local HTML Modal for Radiology */}
      <LocalHtmlModal
        isOpen={isRadiologyModalOpen}
        onClose={() => setIsRadiologyModalOpen(false)}
        htmlPath="/html-content/radiology.html"
        title="Reimagining Radiology Diagnostics - Full Case Study"
      />

      {/* Local HTML Modal for Safer Spaces */}
      <LocalHtmlModal
        isOpen={isSaferSpacesModalOpen}
        onClose={() => setIsSaferSpacesModalOpen(false)}
        htmlPath="/html-content/safer-spaces.html"
        title="Creating Safer Spaces - Full Case Study"
      />

      {/* Local HTML Modal for Neurodiversity Justice */}
      <LocalHtmlModal
        isOpen={isNeurodiversityModalOpen}
        onClose={() => setIsNeurodiversityModalOpen(false)}
        htmlPath="/html-content/neurodiversity-justice.html"
        title="Transforming the UK Justice System - Full Case Study"
      />
    </section>
  );
};

export default Projects;
