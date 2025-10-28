import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-8 md:py-6 bg-white min-h-screen flex items-center">
      <div className="section-container w-full">
        {/* Compact Section Header */}
        <div className="max-w-6xl mx-auto text-center mb-6 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
            Let's build thoughtful experiences together
          </h2>
          <p className="text-sm md:text-base text-neutral-600">
            I'm currently open to collaborations, freelance projects and full-time roles focused on UX Design, Service Design and Business Analysis.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-6 px-4">
          {/* Left Column - Contact Options */}
          <div className="lg:col-span-2 space-y-3 md:space-y-4">
            <div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">
                Connect With Me
              </h3>

              {/* Contact Methods - Compact */}
              <div className="space-y-3">
                {/* Email - Compact */}
                <a
                  href="mailto:sayalichinardeshpande@gmail.com"
                  className="group flex items-start gap-3 p-3 rounded-lg hover:bg-primary-50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 text-sm mb-0.5">Email</p>
                    <p className="text-primary-600 group-hover:text-primary-700 transition-colors text-sm">
                      sayalichinardeshpande@gmail.com
                    </p>
                  </div>
                </a>

                {/* LinkedIn - Compact */}
                <a
                  href="https://www.linkedin.com/in/sayalicdeshpande/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 p-3 rounded-lg hover:bg-accent-50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center group-hover:bg-accent-200 transition-colors">
                    <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 text-sm mb-0.5">LinkedIn</p>
                    <p className="text-accent-600 group-hover:text-accent-700 transition-colors text-sm">
                      Connect on LinkedIn
                    </p>
                  </div>
                </a>

                {/* Download Resume - Compact */}
                <a
                  href="/Sayali Deshpande - UX Designer - Resume.pdf"
                  download
                  className="group flex items-start gap-3 p-3 rounded-lg hover:bg-primary-50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center group-hover:bg-neutral-200 transition-colors">
                    <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 text-sm mb-0.5">Resume</p>
                    <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors text-sm">
                      Download PDF
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form - Compact */}
          <div className="lg:col-span-3">
            <div className="bg-neutral-50 rounded-xl p-4 md:p-5 border border-neutral-200">
              <h3 className="text-lg font-bold text-neutral-900 mb-3">
                Send Me a Message
              </h3>

              {submitted ? (
                <div className="py-6 text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-base font-bold text-neutral-900 mb-1">
                    Thank you for reaching out!
                  </h4>
                  <p className="text-neutral-600 text-sm">
                    I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-neutral-900 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-sm"
                        placeholder="Jane Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-neutral-900 mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-sm"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-neutral-900 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-sm"
                      placeholder="Project collaboration opportunity"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-neutral-900 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-3 py-2 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none text-sm"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto px-5 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
