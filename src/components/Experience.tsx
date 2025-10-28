const Experience = () => {
  const experiences = [
    {
      company: "HealCycle, India",
      role: "UX Designer (Contract)",
      period: "July 2025 – Present",
      location: "India",
      type: "FemTech Innovation",
      logo: "/images/companies/healcycle.jpeg",
      highlights: [
        "15% conversion lift through transparent pricing",
        "Designed 38 screens with AI personalization"
      ]
    },
    {
      company: "Defy Aerospace Pvt. Ltd.",
      role: "Service Experience Strategist",
      period: "April 2025 – June 2025",
      location: "Mumbai, India",
      type: "Drone Tech & Aerospace",
      logo: "/images/companies/defy-aerospace.avif",
      highlights: [
        "30% service cohesion improvement, 40% friction reduction",
        "2x growth in drone pilot training enrollments"
      ]
    },
    {
      company: "ACV Solutions Pvt. Ltd.",
      role: "Business Analyst, UX Designer",
      period: "Oct 2023 – April 2025",
      location: "Mumbai, India",
      type: "Technology Consulting",
      logo: "/images/companies/acv.jpg",
      highlights: [
        "40% increase in worker efficiency",
        "50% employee workload decrease, 10% revenue increase"
      ]
    },
    {
      company: "NHS x FrontlineBuddy",
      role: "Service Designer (Contract)",
      period: "Jan 2023 – June 2023",
      location: "London, UK",
      type: "Healthcare Service Design",
      logo: "/images/companies/nhs.png",
      highlights: [
        "30+ interviews, 3 surveys, 20 diary studies",
        "30% stakeholder engagement increase across 100+ nurses"
      ]
    },
    {
      company: "Ministry of Justice x Oasis Restore",
      role: "Service Designer (Contract)",
      period: "Sept 2022 – Dec 2022",
      location: "UK",
      type: "Social Impact & Justice",
      logo: "/images/companies/moj.svg",
      highlights: [
        "15% reduction in re-offending targeted",
        "30% onboarding experience improvement"
      ]
    },
    {
      company: "U4RAD Technologies LLP",
      role: "Spatial & Experience Design Intern",
      period: "Jan 2021 – April 2021",
      location: "India",
      type: "HealthTech",
      logo: "/images/companies/u4rad.jpeg",
      highlights: [
        "20% reduction in website drop-offs",
        "25% reduction in patient waiting time"
      ]
    }
  ];

  return (
    <section id="experience" className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Compact Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
            Professional Experience
          </h2>
          <p className="text-sm text-neutral-600">
            Impactful projects and meaningful collaborations
          </p>
        </div>

        {/* Compact Experience Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-neutral-50 rounded-lg p-4 border border-neutral-200 hover:border-primary-300 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                {/* Company Info */}
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-neutral-900">{exp.role}</h3>
                  <p className="text-sm text-primary-600 font-semibold">{exp.company}</p>
                  <p className="text-xs text-neutral-500 italic">{exp.type}</p>
                </div>

                {/* Company Logo */}
                {exp.logo ? (
                  <div className="flex-shrink-0 w-20 h-20 bg-white rounded-lg border border-neutral-200 flex items-center justify-center overflow-hidden p-2">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex-shrink-0 w-20 h-20 bg-primary-100 rounded-lg border border-primary-200 flex items-center justify-center">
                    <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary-50 rounded-full">
                  <svg className="w-3 h-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs font-semibold text-primary-700">{exp.period}</span>
                </div>
                <div className="inline-flex items-center gap-1 text-neutral-600">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span className="text-xs">{exp.location}</span>
                </div>
              </div>

              <ul className="space-y-1">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                    <svg className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Compact CTA */}
        <div className="text-center">
          <a
            href="/Sayali Deshpande - UX Designer - Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 shadow-md text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
