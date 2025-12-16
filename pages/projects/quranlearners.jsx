import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import ImageModal from '@/src/components/ImageModal'

export default function QuranLearnersDetail() {
  const videoRef = useRef(null);
  const [modalImage, setModalImage] = useState({ src: '', alt: '', isOpen: false });

  const openModal = (src, alt) => setModalImage({ src, alt, isOpen: true });
  const closeModal = () => setModalImage({ src: '', alt: '', isOpen: false });

  // Autoplay video when visible
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
      <Head>
        <title>QuranLearners.org - Project Details</title>
        <meta name="description" content="Portfolio project: QuranLearners.org online Quran education website" />
      </Head>

      <ImageModal {...modalImage} onClose={closeModal} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-sky-900 via-sky-800 to-slate-800 backdrop-blur-md bg-opacity-95">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">Tabassum Wasila</h1>
            <p className="text-sm text-slate-400 mt-0.5 hidden sm:block">Web Application Developer</p>
          </div>
          <nav className="flex items-center gap-3 sm:gap-6">
            <a href="/" className="text-sm sm:text-base font-medium text-slate-300 hover:text-white transition-colors">← Back to Portfolio</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="card">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-3">QuranLearners.org</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-6">Online Quran education for students of all ages</p>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className="sm:flex-1">
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Role</p>
                <p className="text-slate-700 dark:text-slate-200">End to End Development</p>
              </div>
              <div className="sm:w-28 sm:text-left">
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Year</p>
                <p className="text-slate-700 dark:text-slate-200">2024</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 rounded-lg text-sm font-medium">React</span>
                <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 rounded-lg text-sm font-medium">Tailwind CSS</span>
                <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 rounded-lg text-sm font-medium">Cloudflare Hosting</span>
                <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 rounded-lg text-sm font-medium">Excel-Based Data Tracking</span>
              </div>
            </div>

            <a 
              href="https://quranlearners.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              View Website →
            </a>
          </div>
        </section>

        {/* Project Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Project Overview</h2>
          <div className="card">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              QuranLearners.org is the official website for an online Quran academy. It presents the services clearly, explains what students can learn, and invites visitors to reach out. The admission form allows new students to sign up for classes hosted on a separate platform.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              I built the website with React and Tailwind, following a design provided by the academy. I handled the domain setup and hosting on Cloudflare. The structure is clean and focused so visitors can quickly understand what the academy offers.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Features</h2>
          <div className="card">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-sky-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-slate-600 dark:text-slate-300">Modern and simple user interface</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-sky-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-slate-600 dark:text-slate-300">Clear information about programs and learning topics</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-sky-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-slate-600 dark:text-slate-300">Tutor introduction and teaching approach</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-sky-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-slate-600 dark:text-slate-300">Admission form for enrollment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-sky-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-slate-600 dark:text-slate-300">Contact form for inquiries</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-sky-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-slate-600 dark:text-slate-300">Fast Cloudflare hosting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-sky-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-slate-600 dark:text-slate-300">Fully mobile-responsive layout</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Screenshots */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Screenshots</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <img 
                src="/project1/home.png" 
                alt="Landing Page" 
                className="w-full h-auto rounded-xl mb-3 shadow-sm clickable-image" 
                onClick={() => openModal('/project1/home.png', 'Landing Page')}
              />
              <p className="text-sm text-slate-600 dark:text-slate-400 text-center">Homepage with hero section</p>
            </div>
            <div className="card">
              <img 
                src="/project1/courses.png" 
                alt="Courses Section" 
                className="w-full h-auto rounded-xl mb-3 shadow-sm clickable-image" 
                onClick={() => openModal('/project1/courses.png', 'Courses Section')}
              />
              <p className="text-sm text-slate-600 dark:text-slate-400 text-center">Programs and learning topics</p>
            </div>
            <div className="card md:col-span-2">
              <img 
                src="/project1/admission.png" 
                alt="Admission Form" 
                className="w-full h-auto rounded-xl mb-3 shadow-sm clickable-image" 
                onClick={() => openModal('/project1/admission.png', 'Admission Form')}
              />
              <p className="text-sm text-slate-600 dark:text-slate-400 text-center">Student enrollment form</p>
            </div>
          </div>
        </section>

        {/* Development Notes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Development Notes</h2>
          <div className="card">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              The frontend uses React and Tailwind for a fast, scalable, and clean codebase. Form submissions are stored in a spreadsheet, which keeps management easy for the academy.
            </p>
          </div>
        </section>

        {/* Challenges */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Challenges</h2>
          <div className="card">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Many visitors browse on phones, so designing and testing for mobile responsiveness was essential. Keeping the system simple to manage while still looking professional was another key goal.
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mb-12">
          <div className="card bg-gradient-to-r from-sky-50 to-slate-50 dark:from-sky-900/30 dark:to-slate-800/30 border-sky-200 dark:border-sky-800">
            <p className="text-lg text-slate-700 dark:text-slate-200 text-center mb-6">
              If you like this project, I'd be happy to build something similar for you.
            </p>
            <div className="flex justify-center gap-4">
              <a href="/#contact" className="btn-primary">Get in Touch</a>
              <a href="/" className="btn-secondary">View More Projects</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="border-t border-slate-200 dark:border-slate-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Tabassum Wasila</p>
          <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <a href="/#projects" className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors">Projects</a>
            <a href="/#about" className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors">About</a>
            <a href="/#contact" className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
