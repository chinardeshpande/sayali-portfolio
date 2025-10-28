import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { projects } from '../data/projects';
import MediaCarouselModal from '../components/MediaCarouselModal';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="btn-primary"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Compact Hero Section */}
      <section className="relative h-64 md:h-80 overflow-hidden bg-neutral-900">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent"></div>

        {/* Back/Home Buttons */}
        <div className="absolute top-4 left-4 flex items-center gap-3 z-10">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white hover:bg-white/20 transition-all group"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="font-semibold text-xs">Home</span>
          </button>
        </div>

        {/* Compact Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-1 mb-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2 py-0.5 bg-primary-600/90 backdrop-blur-sm text-white rounded-full text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-primary-300 font-semibold uppercase tracking-wide text-xs mb-1">
              {project.context}
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-1">
              {project.title}
            </h1>
            <p className="text-sm md:text-base text-neutral-200 max-w-2xl">
              {project.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2-Column Creative Layout */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Key Metric Banner */}
        {project.keyMetric && (
          <div className="mb-8 p-5 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl border border-primary-200">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex-shrink-0 text-center md:text-left">
                <div className="text-4xl md:text-5xl font-bold text-primary-600">{project.keyMetric}</div>
                <div className="text-sm text-neutral-600 mt-0.5">{project.metricLabel}</div>
              </div>
              <div className="text-neutral-700 text-sm leading-relaxed">
                {project.impact}
              </div>
            </div>
          </div>
        )}

        {/* 2-Column Grid - Overview & Objective */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-50 rounded-xl p-5">
            <h2 className="text-xl font-bold text-neutral-900 mb-3">Overview</h2>
            <p className="text-sm text-neutral-700 leading-relaxed">{project.brief}</p>
          </div>

          <div className="bg-white rounded-xl p-5 border-l-4 border-primary-600 shadow-sm">
            <h2 className="text-xl font-bold text-neutral-900 mb-3">Objective</h2>
            <p className="text-sm text-neutral-700 leading-relaxed">{project.objective}</p>
          </div>
        </div>

        {/* Full Width - Problem Statement */}
        <div className="mb-8 p-5 bg-neutral-900 text-white rounded-xl">
          <h2 className="text-xl font-bold mb-3">Problem Statement</h2>
          <p className="text-sm leading-relaxed text-neutral-200">{project.problemStatement}</p>
        </div>

        {/* 2-Column Grid - Challenge & Intervention */}
        <div className="grid md:grid-cols-5 gap-6 mb-8">
          <div className="md:col-span-2 bg-white rounded-xl p-5 border border-neutral-200">
            <h2 className="text-xl font-bold text-neutral-900 mb-3">The Challenge</h2>
            <p className="text-sm text-neutral-700 leading-relaxed">{project.challenge}</p>
          </div>

          <div className="md:col-span-3 bg-gradient-to-br from-primary-600 to-accent-600 text-white rounded-xl p-5">
            <h2 className="text-xl font-bold mb-3">Solution & Intervention</h2>
            <p className="text-sm leading-relaxed text-white/95 mb-4">{project.intervention}</p>
            {project.solutionMedia && project.solutionMedia.length > 0 && (
              <button
                onClick={() => setIsMediaModalOpen(true)}
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-neutral-50 transition-all duration-300 shadow-md hover:shadow-lg text-sm"
              >
                View
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Experience Pillars */}
        {project.experiencePillars && project.experiencePillars.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Experience Pillars</h2>
            <p className="text-sm text-neutral-600 mb-6">
              Engagement, Community and Recognition are the key factors driving the design of the user experience.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {project.experiencePillars.map((pillar) => (
                <div key={pillar.number} className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border-l-4 border-primary-600 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl font-bold text-primary-600 mb-2">{pillar.number}</div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">{pillar.title}</h3>
                  <p className="text-sm text-neutral-700 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Process Images Gallery */}
        {project.processImages && project.processImages.length > 0 && (
          <div id="design-process" className="mb-8 scroll-mt-24">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Design Process</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {project.processImages.map((img, index) => (
                <div key={index} className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <img
                    src={img}
                    alt={`Process step ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2-Column Grid - Approach & Outcomes */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Approach */}
          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-4">Approach & Methodology</h2>
            <div className="space-y-2">
              {project.approach.map((item, index) => (
                <div key={index} className="flex items-start gap-2 p-3 bg-white rounded-lg border border-neutral-200 hover:border-primary-300 transition-colors">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-bold text-xs">{index + 1}</span>
                  </div>
                  <p className="text-neutral-700 text-xs leading-relaxed flex-grow">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-4">Outcomes & Impact</h2>
            <div className="space-y-2">
              {project.outcome.map((item, index) => (
                <div key={index} className="flex items-start gap-2 p-3 bg-green-50 rounded-lg border border-green-200">
                  <svg className="flex-shrink-0 w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-neutral-700 text-xs leading-relaxed flex-grow">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Learnings */}
        {project.keyLearnings && project.keyLearnings.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Key Learnings</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {project.keyLearnings.map((learning, index) => (
                <div key={index} className="p-4 bg-gradient-to-br from-accent-50 to-primary-50 rounded-lg border-l-4 border-accent-500">
                  <p className="text-sm text-neutral-700 leading-relaxed italic">{learning}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills & Testimonials Side by Side */}
        <div className="grid md:grid-cols-5 gap-6 mb-8">
          {/* Skills */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold text-neutral-900 mb-3">Skills & Tools</h2>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span key={skill} className="px-2.5 py-1 bg-primary-100 text-primary-700 rounded-md font-medium text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          {project.testimonials && project.testimonials.length > 0 && (
            <div className="md:col-span-3">
              <h2 className="text-xl font-bold text-neutral-900 mb-3">Testimonials</h2>
              <div className="grid gap-3">
                {project.testimonials.map((testimonial, index) => (
                  <div key={index} className="p-4 bg-white rounded-xl border border-neutral-200 shadow-sm">
                    <p className="text-sm text-neutral-700 italic mb-2 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-bold text-neutral-900 text-xs">{testimonial.author}</p>
                      <p className="text-xs text-neutral-500">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-10 p-6 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl text-white text-center">
          <h3 className="text-xl font-bold mb-2">Interested in working together?</h3>
          <p className="text-sm text-white/90 mb-5">
            Let's create meaningful experiences that serve real human needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate('/#contact')}
              className="inline-flex items-center justify-center bg-white text-primary-600 px-5 py-2.5 rounded-lg font-semibold hover:bg-neutral-50 transition-all duration-300 shadow-lg text-sm"
            >
              Get In Touch
            </button>
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-sm"
            >
              View More Projects
            </button>
          </div>
        </div>
      </div>

      {/* Media Carousel Modal */}
      {project.solutionMedia && (
        <MediaCarouselModal
          isOpen={isMediaModalOpen}
          onClose={() => setIsMediaModalOpen(false)}
          mediaItems={project.solutionMedia}
        />
      )}
    </div>
  );
};

export default ProjectDetail;
