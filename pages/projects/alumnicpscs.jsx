import Head from 'next/head'
import { useState } from 'react'
import ImageModal from '@/src/components/ImageModal'

export default function AlumniCPSCSDetail() {
  const [modalImage, setModalImage] = useState({ src: '', alt: '', isOpen: false });

  const openModal = (src, alt) => setModalImage({ src, alt, isOpen: true });
  const closeModal = () => setModalImage({ src: '', alt: '', isOpen: false });

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
      <Head>
        <title>AlumniCPSCS.org - Project Details</title>
        <meta name="description" content="Portfolio project: AlumniCPSCS.org alumni association platform" />
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
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-3">AlumniCPSCS.org</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-6">Alumni association platform with full-featured admin and community tools</p>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className="sm:flex-1">
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Role</p>
                <p className="text-slate-700 dark:text-slate-200">Full-stack Developer</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Frontend modifications, API integration, backend & database, hosting & deployment</p>
              </div>
              <div className="sm:w-28 sm:text-left">
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Year</p>
                <p className="text-slate-700 dark:text-slate-200">2025</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 rounded-lg text-sm font-medium">React</span>
                <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 rounded-lg text-sm font-medium">Tailwind CSS</span>
                <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 rounded-lg text-sm font-medium">Laravel</span>
                <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 rounded-lg text-sm font-medium">Filament Admin</span>
                <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 rounded-lg text-sm font-medium">MySQL</span>
                <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 rounded-lg text-sm font-medium">Payment API Integration</span>
              </div>
            </div>

            <a 
              href="https://alumnicpscs.org" 
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
              AlumniCPSCS.org is a platform for CPSCS alumni. It provides tools for managing events, alumni registrations, directories, photo galleries, and a magazine section.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              The client provided a carefully designed front page. I modified the frontend based on additional requests, integrated APIs where needed, built the backend and database, and handled hosting and deployment for reliability.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Administrators can approve event registrations, manage members, upload gallery photos, and moderate magazine posts. Users can browse events, alumni, and magazine content. A bKash payment integration is implemented but currently inactive.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Key Features</h2>
          <div className="card">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-sky-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-slate-600 dark:text-slate-300">Role-based admin panel with Laravel Filament</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-sky-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-slate-600 dark:text-slate-300">Event management: create, approve, track registrations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-sky-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-slate-600 dark:text-slate-300">Alumni directory with search/filter</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-sky-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-slate-600 dark:text-slate-300">Photo gallery uploads and management</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-sky-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-slate-600 dark:text-slate-300">Magazine section: submit, read, and react to posts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-sky-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-slate-600 dark:text-slate-300">Mobile-responsive frontend and admin panel</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-sky-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-slate-600 dark:text-slate-300">Hosting and deployment handled for stability</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Screenshots */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Screenshots</h2>
          <div className="card md:col-span-2 mb-6">
            <img 
                src="/project2/filament.png" 
                alt="Admin Dashboard Overview" 
                className="w-full h-5/6 rounded-xl mb-3 shadow-sm clickable-image" 
                onClick={() => openModal('/project2/filament.png', 'Admin Dashboard Overview')}
              />
              <p className="text-sm text-slate-600 dark:text-slate-400 text-center">Filament admin panel with role management</p>          
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="card">
              <img 
                src="/project2/event.png" 
                alt="Event Approval Workflow" 
                className="w-full h-auto rounded-xl mb-3 shadow-sm clickable-image" 
                onClick={() => openModal('/project2/event.png', 'Event Approval Workflow')}
              />
              <p className="text-sm text-slate-600 dark:text-slate-400 text-center">Event registration</p>
            </div>

            <div className="card">
              <img 
                src="/project2/registration.png" 
                alt="Alumni Directory Page" 
                className="w-full h-auto rounded-xl mb-3 shadow-sm clickable-image" 
                onClick={() => openModal('/project2/registration.png', 'Registration form')}
              />
              <p className="text-sm text-slate-600 dark:text-slate-400 text-center">Payment & info submission</p>
            </div>
            <div className="card">
              <img 
                src="/project2/alumnidirectory.png" 
                alt="Magazine Post View" 
                className="w-full h-[90%] rounded-xl mb-3 shadow-sm clickable-image" 
                onClick={() => openModal('/project2/alumnidirectory.png', 'Alumni Directory Page')}
              />
              <p className="text-sm text-slate-600 dark:text-slate-400 text-center">Searchable alumni member directory</p>
            </div>
            <div className="card">
              <img 
                src="/project2/gallery.png" 
                alt="Gallery Page" 
                className="w-full h-[90%] rounded-xl mb-3 shadow-sm clickable-image" 
                onClick={() => openModal('/project2/gallery.png', 'Gallery Page')}
              />
              <p className="text-sm text-slate-600 dark:text-slate-400 text-center">Photo gallery with upload management</p>
            </div>
          </div>
        </section>

        {/* Development Notes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Development Notes</h2>
          <div className="card">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Full-stack React frontend + Laravel backend. Admin panel built with Filament for CRUD, roles, and permissions. API integration for data flows. Gallery uploads handled securely. Payment integration via bKash implemented but not yet active. Hosting and deployment configured for live, maintainable operation.
            </p>
          </div>
        </section>

        {/* Challenges */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Challenges</h2>
          <div className="card">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Implementing flexible roles and permissions. Ensuring mobile responsiveness across frontend and admin panel. Managing uploads and secure access. Designing a system ready for future payment activation.
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mb-12">
          <div className="card bg-gradient-to-r from-sky-50 to-slate-50 dark:from-sky-900/30 dark:to-slate-800/30 border-sky-200 dark:border-sky-800">
            <p className="text-lg text-slate-700 dark:text-slate-200 text-center mb-6">
              Interested in building a platform like this? Let's discuss how we can make it work for your organization.
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
