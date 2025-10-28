const About = () => {
  const testimonials = [
    {
      quote: "Working with Sayali is energizing, she brings structure, empathy, and creative energy to every project, ensuring teams stay aligned and outcomes exceed expectations.",
      author: "Project Mentor",
      role: "Royal College of Art"
    },
    {
      quote: "Sayali has an exceptional ability to connect business goals with user needs, turning complex problems into clear, actionable strategies that drive real impact.",
      author: "UX Lead",
      role: "NHS Project"
    }
  ];

  return (
    <section id="about" className="pt-8 pb-12 bg-gradient-to-br from-neutral-50 via-white to-neutral-100/50 relative overflow-hidden">
      {/* Subtle Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-neutral-200/40 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header - Inline */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-xl shadow-sm flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Design as <span className="text-primary-600">translation</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-600 ml-2">— between people, processes and systems</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Left Column */}
          <div className="space-y-4">
            {/* Profile Card */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary-600 rounded-lg flex items-center justify-center shadow-sm">
                    <span className="text-xl font-bold text-white">SD</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900">Sayali Deshpande</h3>
                    <p className="text-primary-600 font-semibold text-sm">UX Designer & Business Analyst</p>
                  </div>
                </div>

                {/* Stats - Narrow Cards */}
                <div className="flex gap-1.5">
                  <div className="bg-primary-600 border border-primary-700 rounded-lg px-2 py-1.5 shadow-md">
                    <div className="text-sm font-bold text-white leading-none">2+</div>
                    <div className="text-xs text-white leading-tight mt-0.5">Years Exp</div>
                  </div>
                  <div className="bg-primary-600 border border-primary-700 rounded-lg px-2 py-1.5 shadow-md">
                    <div className="text-sm font-bold text-white leading-none">15+</div>
                    <div className="text-xs text-white leading-tight mt-0.5">Projects</div>
                  </div>
                </div>
              </div>

              <p className="text-xs text-neutral-700 leading-relaxed mb-2">
                I'm a <strong className="text-neutral-900">Service and UX Designer</strong> with roots in product design and front-end development. My journey has taken me from <strong className="text-neutral-900">ISDI Parsons (India)</strong> to the <strong className="text-neutral-900">Royal College of Art, London</strong>, collaborating with organizations like the <strong className="text-neutral-900">NHS</strong> and <strong className="text-neutral-900">Local-to-Local (Amsterdam)</strong>.
              </p>

              <p className="text-xs text-neutral-700 leading-relaxed">
                I believe design is not decoration — it's <strong className="text-primary-600">dialogue</strong>. It listens before it acts. My practice focuses on clarity, empathy, and translating insights into usable, thoughtful systems.
              </p>
            </div>

            {/* Core Skills with SVG Icons */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex-shrink-0 w-7 h-7 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-neutral-900">Core Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { skill: 'User Research', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> },
                  { skill: 'Service Design', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg> },
                  { skill: 'User Experience Design', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg> },
                  { skill: 'Business Process Analysis', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg> },
                  { skill: 'Front-End Dev', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> },
                  { skill: 'Systems Mapping', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg> },
                  { skill: 'Design Strategy', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> },
                  { skill: 'Project Management', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> }
                ].map(({ skill, icon }) => (
                  <div key={skill} className="flex items-center gap-2 p-2 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-primary-300 transition-all">
                    <div className="text-primary-600">{icon}</div>
                    <span className="text-xs font-semibold text-neutral-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Education with Logos */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col items-center gap-3 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <img
                    src="/images/rca-logo.jpg"
                    alt="Royal College of Art"
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="text-center">
                    <span className="font-bold text-neutral-900 text-sm block">MA Service Design</span>
                    <span className="text-neutral-600 text-xs">Royal College of Art, London</span>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <img
                    src="/images/parsons-logo.jpeg"
                    alt="ISDI Parsons"
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="text-center">
                    <span className="font-bold text-neutral-900 text-sm block">B.Des Product Design</span>
                    <span className="text-neutral-600 text-xs">ISDI Parsons, Mumbai</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools & Tech with Logos */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex-shrink-0 w-7 h-7 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-neutral-900">Tools & Tech</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { tool: 'Figma', svg: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83"/><path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF"/><path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E"/><path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262"/><path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE"/></svg> },
                  { tool: 'Miro', svg: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#FFD02F"><path d="M17.392 0H13.9L17 10.444 10.444 0H6.949l3.102 10.444L3.494 0H0l6.949 24h3.494L7.34 13.556 13.9 24h3.495l-3.103-10.444L21.392 24H24l-6.608-24z"/></svg> },
                  { tool: 'React', svg: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#61DAFB"><path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9-.82-.08-1.63-.2-2.4-.36-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96.77-.16 1.58-.28 2.4-.36.48-.67.99-1.31 1.51-1.9z"/></svg> },
                  { tool: 'HTML', svg: <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg> },
                  { tool: 'CSS', svg: <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#1572B6" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></svg> },
                  { tool: 'Jira', svg: <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#0052CC" d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.005 1.005 0 0 0 23.013 0Z"/></svg> },
                  { tool: 'Lucidchart', svg: <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#F96500" d="M4.5 0A4.5 4.5 0 000 4.5v15A4.5 4.5 0 004.5 24h15a4.5 4.5 0 004.5-4.5v-15A4.5 4.5 0 0019.5 0h-15zm3 6h9a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 016 16.5v-9A1.5 1.5 0 017.5 6z"/></svg> },
                  { tool: 'AI tools', svg: <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#9333EA" d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 3.18l7 3.5v7.82c0 4.16-2.72 8.04-7 9.5-4.28-1.46-7-5.34-7-9.5V8.68l7-3.5zM10 12v6h4v-6h-4z"/></svg> }
                ].map(({ tool, svg }) => (
                  <div key={tool} className="flex items-center gap-2 p-2 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-primary-200 transition-all">
                    <div className="flex-shrink-0">{svg}</div>
                    <span className="text-xs font-semibold text-neutral-700">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex-shrink-0 w-7 h-7 bg-primary-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-neutral-900">What People Say</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative bg-white rounded-xl p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-all">
                <div className="absolute top-3 right-3 w-8 h-8 bg-primary-50 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-xs text-neutral-700 italic mb-3 leading-relaxed pr-8">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-7 h-7 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900 text-xs">{testimonial.author}</p>
                    <p className="text-xs text-neutral-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
