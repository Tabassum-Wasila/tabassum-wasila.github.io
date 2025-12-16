import Head from 'next/head'
import Link from 'next/link'
import projects from '@/src/projects'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  // Collapsible sections state
  const [openSections, setOpenSections] = useState({
    projects: true,
    about: true,
    contact: true
  });
  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus({ type: 'error', message: data.message || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setFormStatus({ type: 'error', message: 'Network error. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fade-in for hero text (slow)
  const heroRef = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (heroRef.current) {
        heroRef.current.classList.add('opacity-100', 'translate-y-0');
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Sliding effect for cards
  const cardsRef = useRef([]);
  useEffect(() => {
    cardsRef.current.forEach((el, i) => {
      if (el) {
        setTimeout(() => {
          el.classList.add('opacity-100', 'translate-y-0');
        }, 120 * i);
      }
    });
  }, []);
  return (
    <div className="dark:bg-slate-900">
      <Head>
        <title>Tabassum Wasila — Web Application Developer</title>
        <meta name="description" content="Portfolio — Tabassum Wasila" />
      </Head>

      {/* Header - Sticky */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-sky-900 via-sky-800 to-slate-800 backdrop-blur-md bg-opacity-95">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">Tabassum Wasila</h1>
            <p className="text-sm text-slate-400 mt-0.5 hidden sm:block">Web Application Developer</p>
          </div>
          <nav className="flex items-center gap-3 sm:gap-6">
            <a href="#projects" className="text-sm sm:text-base font-medium text-slate-300 hover:text-white transition-colors">Projects</a>
            <a href="#about" className="text-sm sm:text-base font-medium text-slate-300 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-sm sm:text-base font-medium text-slate-300 hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative main-content" style={{
        boxShadow: '0 0 60px 0 rgba(71,85,105,0.12), -30px 0 50px -25px rgba(71,85,105,0.15), 30px 0 50px -25px rgba(71,85,105,0.15)',
      }}>
        {/* Hero Section */}
        <section className="py-6">
          <div
            ref={heroRef}
            className="transition-all duration-1000 ease-out opacity-0 translate-y-6 max-w-3xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-800 dark:text-slate-100">Crafting thoughtful<br /><span className="text-sky-700 dark:text-sky-400">digital products</span></h2>
            <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">I focus on shipping well-tested features, clear UX, and maintainable code. Below are some representative projects.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">View my work</a>
              <a href="#contact" className="btn-secondary">Get in touch</a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
               <section id="projects" className="mt-10 pt-2">
          <button
            onClick={() => toggleSection('projects')}
            className="flex items-center gap-3 mb-6 w-full text-left cursor-pointer hover:opacity-75 transition-opacity"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute w-6 h-1 bg-sky-600 rounded-full"></div>
              <div className={`absolute w-1 h-6 bg-sky-600 rounded-full transition-transform duration-300 ${openSections.projects ? 'scale-0' : 'scale-100'}`}></div>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Selected Work</h3>
          </button>

          <div className={`grid gap-5 sm:grid-cols-1 md:grid-cols-2 transition-all duration-500 ${openSections.projects ? 'opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            {projects.map((p, i) => (
              <article
                key={p.id}
                ref={el => (cardsRef.current[i] = el)}
                className="card opacity-0 group"
              >
                <div className="flex flex-col gap-5">
                  <div className="aspect-video bg-slate-100 dark:bg-slate-700 rounded-xl overflow-hidden">
                    <img src={p.images[0]} alt="screenshot" className="object-cover w-full h-full group-hover:scale-103 transition-transform duration-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors">{p.title}</h4>
                    <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{p.description}</p>
                    <div className="mt-4 text-sm grid grid-cols-2 gap-3">
                      <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-2.5">
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">Role</span>
                        <div className="text-slate-700 dark:text-slate-200 mt-0.5">{p.role}</div>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-2.5">
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">Tech</span>
                        <div className="text-slate-700 dark:text-slate-200 mt-0.5">{p.tech.join(', ')}</div>
                      </div>
                    </div>
                    <div className="mt-5 flex items-center gap-3">
                      {p.link && 
                        <a href={p.link} target="_blank" rel="noreferrer" className="text-sm font-medium text-sky-700 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-300 transition-colors">Visit site →</a>
                      }
                      <Link href={`/projects/${p.id}`} className="text-sm px-4 py-1.5 border border-slate-200 dark:border-slate-600 rounded-lg hover:border-slate-300 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all dark:text-slate-200">Details</Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mt-10 pt-2">
          <button
            onClick={() => toggleSection('about')}
            className="flex items-center gap-3 mb-6 w-full text-left cursor-pointer hover:opacity-75 transition-opacity"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute w-6 h-1 bg-sky-600 rounded-full"></div>
              <div className={`absolute w-1 h-6 bg-sky-600 rounded-full transition-transform duration-300 ${openSections.about ? 'scale-0' : 'scale-100'}`}></div>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">About Me</h3>
          </button>
          <div className={`grid md:grid-cols-3 gap-5 items-start transition-all duration-500 overflow-hidden ${openSections.about ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="md:col-span-2 card">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">I'm a product-focused engineer with experience working on education and community web apps. I care about readable code, accessible UI, and meaningful product improvements.</p>
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100 uppercase tracking-wide mb-3">My Process</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                    <span className="text-sm text-slate-600 dark:text-slate-300">Discovery & stakeholder interviews</span>
                  </div>
                  <div className="flex items-start gap-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                    <span className="text-sm text-slate-600 dark:text-slate-300">Small, testable increments</span>
                  </div>
                  <div className="flex items-start gap-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                    <span className="text-sm text-slate-600 dark:text-slate-300">Tests & CI</span>
                  </div>
                  <div className="flex items-start gap-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full flex items-center justify-center text-xs font-bold">4</span>
                    <span className="text-sm text-slate-600 dark:text-slate-300">Performance & accessibility</span>
                  </div>
                </div>
              </div>
            </div>
            <aside className="card">
              <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100 uppercase tracking-wide">Skills</h4>
              <ul className="mt-3 space-y-2">
                <li className="text-sm text-slate-600 dark:text-slate-300 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-sky-500 rounded-full"></span>Next.js / React </li>
                <li className="text-sm text-slate-600 dark:text-slate-300 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-sky-500 rounded-full"></span>Tailwind CSS / Bootstrap / MUI / Ant Design</li>
                <li className="text-sm text-slate-600 dark:text-slate-300 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-sky-500 rounded-full"></span>Laravel / Django / Express (Basic)</li>
                <li className="text-sm text-slate-600 dark:text-slate-300 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-sky-500 rounded-full"></span>Docker / CI/CD / Git</li>
                <li className="text-sm text-slate-600 dark:text-slate-300 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-sky-500 rounded-full"></span>MySQL / PostgreSQL / MongoDB</li>
              </ul>
              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-700">
                <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100 uppercase tracking-wide">Contact</h4>
                <div className="mt-3 space-y-2">
                  <p className="text-sm text-slate-600 dark:text-slate-300">📧 <span className="font-mono text-slate-700 dark:text-slate-200">twahsila@gmail.com</span></p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">📍 Kuala Lumpur, Malaysia</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-10 pt-2">
          <button
            onClick={() => toggleSection('contact')}
            className="flex items-center gap-3 mb-6 w-full text-left cursor-pointer hover:opacity-75 transition-opacity"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute w-6 h-1 bg-sky-600 rounded-full"></div>
              <div className={`absolute w-1 h-6 bg-sky-600 rounded-full transition-transform duration-300 ${openSections.contact ? 'scale-0' : 'scale-100'}`}></div>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Get in Touch</h3>
          </button>
          <div className={`transition-all duration-500 overflow-hidden ${openSections.contact ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="card">
            <p className="text-slate-600 dark:text-slate-300 mb-6">Have a project in mind? I'd love to hear from you.</p>
            
            {formStatus.message && (
              <div className={`mb-4 p-4 rounded-lg ${
                formStatus.type === 'success' 
                  ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800' 
                  : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800'
              }`}>
                {formStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name" 
                className="p-3.5 border border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100"
                required
                disabled={isSubmitting}
              />
              <input 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email address" 
                className="p-3.5 border border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100"
                required
                disabled={isSubmitting}
              />
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project..." 
                className="md:col-span-2 p-3.5 border border-slate-200 dark:border-slate-600 rounded-xl h-32 resize-none bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100"
                required
                disabled={isSubmitting}
              />
              <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <button 
                  type="submit" 
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send message'}
                </button>
                <p className="text-sm text-slate-500 dark:text-slate-400">Or email directly at <a href="mailto:twahsila@gmail.com" className="text-sky-700 dark:text-sky-400 hover:underline font-medium">twahsila@gmail.com</a></p>
              </div>
            </form>
          </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="border-t border-slate-200 dark:border-slate-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Tabassum Wasila</p>
          <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <a href="#projects" className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors">Projects</a>
            <a href="#about" className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors">About</a>
            <a href="#contact" className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

