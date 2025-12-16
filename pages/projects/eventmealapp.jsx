import Head from 'next/head'
import { useState } from 'react'
import ImageModal from '@/src/components/ImageModal'

export default function EventMealAppDetail() {
  const [modalImage, setModalImage] = useState({ src: '', alt: '', isOpen: false });

  const openModal = (src, alt) => setModalImage({ src, alt, isOpen: true });
  const closeModal = () => setModalImage({ src: '', alt: '', isOpen: false });

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
      <Head>
        <title>Event Meal App - Project Details</title>
        <meta name="description" content="Portfolio project: QR-based event meal management and scanning" />
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
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-3">Event Meal App</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-6">QR-based meal distribution with session controls and real-time validation</p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className="sm:flex-1">
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Role</p>
                <p className="text-slate-700 dark:text-slate-200">Full-stack Developer</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Frontend (Inertia React), backend (Laravel), database, deployment</p>
              </div>
              <div className="sm:w-28 sm:text-left">
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Year</p>
                <p className="text-slate-700 dark:text-slate-200">2024</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 rounded-lg text-sm font-medium">Laravel</span>
                <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 rounded-lg text-sm font-medium">Inertia React</span>
                <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 rounded-lg text-sm font-medium">Tailwind CSS</span>
                <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 rounded-lg text-sm font-medium">MySQL</span>
              </div>
            </div>

            {/* Optional public link */}
            {/* <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">View Website →</a> */}
          </div>
        </section>

        {/* Project Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Project Overview</h2>
            <div className="card">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              The Event Meal App streamlines meal distribution at events using QR codes. Organizers create meals tied to events, start and end serving windows, and scan attendee codes to validate and record servings.
            </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              The admin view lists meals, shows active/inactive status, and provides actions to start/end and delete. The scanner page validates entries in real time and prevents duplicate serves with clear feedback.
            </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Built with Laravel + Inertia React, Tailwind CSS, and MySQL. Designed for mobile use at serving stations with fast scan cycles and simple controls.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Key Features</h2>
          <div className="card">
            <ul className="space-y-3">
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-sky-600 rounded-full mt-2 flex-shrink-0"></span><span className="text-slate-600 dark:text-slate-300">Create meals per event; start/end serving windows</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-sky-600 rounded-full mt-2 flex-shrink-0"></span><span className="text-slate-600 dark:text-slate-300">QR scanner workflow for fast validation</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-sky-600 rounded-full mt-2 flex-shrink-0"></span><span className="text-slate-600 dark:text-slate-300">Duplicate prevention and clear success/error feedback</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-sky-600 rounded-full mt-2 flex-shrink-0"></span><span className="text-slate-600 dark:text-slate-300">Admin list view with status and actions</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-sky-600 rounded-full mt-2 flex-shrink-0"></span><span className="text-slate-600 dark:text-slate-300">Mobile-friendly UI for on-site operations</span></li>
            </ul>
          </div>
        </section>

        {/* Screenshots */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Screenshots</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <img
                src="/project3/eventmanager.png"
                alt="Event manager dashboard"
                className="w-full h-auto rounded-xl mb-3 shadow-sm clickable-image"
                onClick={() => openModal('/project3/eventmanager.png', 'Event manager dashboard')}
              />
              <p className="text-sm text-slate-600 dark:text-slate-400 text-center">Event manager dashboard</p>
            </div>
            <div className="card">
              <img
                src="/project3/guestqr.png"
                alt="Guest QR code example"
                className="w-full h-auto rounded-xl mb-3 shadow-sm clickable-image"
                onClick={() => openModal('/project3/guestqr.png', 'Guest QR code example')}
              />
              <p className="text-sm text-slate-600 dark:text-slate-400 text-center">Guest QR code example</p>
            </div>

            <div className="card md:col-span-2">
              <img
                src="/project3/scanner.png"
                alt="QR scanner page"
                className="w-full h-auto rounded-xl mb-3 shadow-sm clickable-image"
                onClick={() => openModal('/project3/scanner.png', 'QR scanner page')}
              />
              <p className="text-sm text-slate-600 dark:text-slate-400 text-center">QR scanner page</p>
            </div>
          </div>
        </section>

        {/* Development Notes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Development Notes</h2>
            <div className="card">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Laravel + Inertia React for fast navigation without full page reloads. Tailwind CSS for consistent styling. Server-side checks prevent duplicate serves and ensure meal session status gating (only active meals are scannable).
              </p>
            </div>
        </section>

        {/* Challenges */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Challenges</h2>
            <div className="card">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Designing an efficient scanner UX, handling edge cases around session state, and providing clear operator feedback under time pressure.
              </p>
            </div>
        </section>

        {/* Contact CTA */}
        <section className="mb-12">
          <div className="card bg-gradient-to-r from-sky-50 to-slate-50 dark:from-sky-900/30 dark:to-slate-800/30 border-sky-200 dark:border-sky-800">
            <p className="text-lg text-slate-700 dark:text-slate-200 text-center mb-6">
              Interested in a QR-based distribution system for your event? Let’s discuss a tailored solution.
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