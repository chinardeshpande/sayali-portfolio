const XFactor = () => {
  const achievements = [
    {
      title: "London Business School × RCA",
      subtitle: "Business Models Innovation (2023)",
      description: "Selected among 10 students for exclusive MBA elective program",
      logo: "/images/companies/lbs.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      category: "Academic"
    },
    {
      title: "Hindustani Classical Music",
      subtitle: "10+ Years Training",
      description: "Monthly community performances since 2017",
      logo: "/images/companies/hindustani-classical.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      category: "Arts & Culture"
    },
    {
      title: "Trinity College London",
      subtitle: "Music Theory & Piano",
      description: "Theory Grades 1-3, Performance Initial-1",
      logo: "/images/companies/trinity.png",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      category: "Certification"
    },
    {
      title: "Front-end Development",
      subtitle: "VibeCoding 101 with Replit",
      description: "Design expertise meets technical implementation",
      logo: "/images/companies/replit.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      category: "Certification"
    },
    {
      title: "UX Design Certification",
      subtitle: "Georgia Tech (2020)",
      description: "Foundation in UX principles and methodologies",
      logo: "/images/companies/georgia-tech.png",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      category: "Certification"
    }
  ];

  return (
    <section id="xfactor" className="py-8 bg-gradient-to-br from-neutral-50 via-white to-neutral-100/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Compact Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
            The <span className="text-primary-600">X-Factor</span>
          </h2>
          <p className="text-sm text-neutral-600">
            Achievements, certifications, and creative pursuits
          </p>
        </div>

        {/* Compact Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg p-4 border border-neutral-200 hover:border-primary-300 hover:shadow-md transition-all duration-300"
            >
              {/* Category & Logo */}
              <div className="flex items-start justify-between mb-3">
                <span className="px-2 py-1 bg-primary-50 rounded-full text-xs font-semibold text-primary-600 border border-primary-200 h-fit">
                  {achievement.category}
                </span>
                {achievement.logo ? (
                  <div className="flex-shrink-0 w-16 h-16 bg-white rounded-lg border border-neutral-200 flex items-center justify-center overflow-hidden p-2">
                    <img
                      src={achievement.logo}
                      alt={achievement.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="p-2 bg-primary-100 rounded-lg text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors w-16 h-16 flex items-center justify-center">
                    {achievement.icon}
                  </div>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="text-base font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors">
                {achievement.title}
              </h3>
              <p className="text-xs font-semibold text-primary-600 mb-2">
                {achievement.subtitle}
              </p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Compact Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-primary-600 rounded-lg border border-primary-700 shadow-md">
            <div className="text-2xl font-bold text-white mb-1">10+</div>
            <div className="text-xs text-white">Years in Music</div>
          </div>
          <div className="text-center p-4 bg-primary-600 rounded-lg border border-primary-700 shadow-md">
            <div className="text-2xl font-bold text-white mb-1">7+</div>
            <div className="text-xs text-white">Years Performing</div>
          </div>
          <div className="text-center p-4 bg-primary-600 rounded-lg border border-primary-700 shadow-md">
            <div className="text-2xl font-bold text-white mb-1">5+</div>
            <div className="text-xs text-white">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default XFactor;
