import React from 'react';
import Hero from './components/Hero';
import WorkshopsCalendar from './components/WorkshopsCalendar';
import ProduceAndCompost from './components/ProduceAndCompost';
import InstagramFeed from './components/InstagramFeed';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-stone-50 to-emerald-50 text-stone-800">
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white font-bold">UF</span>
            <div className="leading-tight">
              <div className="font-semibold text-stone-900">Urban Farm Co-op</div>
              <div className="text-sm text-stone-500">Workshops • Produce Boxes • Compost</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#produce" className="hover:text-emerald-700">Produce Boxes</a>
            <a href="#calendar" className="hover:text-emerald-700">Workshops</a>
            <a href="#compost" className="hover:text-emerald-700">Compost Drop-off</a>
            <a href="#instagram" className="hover:text-emerald-700">Instagram</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <ProduceAndCompost />
        <WorkshopsCalendar />
        <InstagramFeed />
      </main>

      <footer className="mt-20 border-t border-stone-200 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="font-semibold text-stone-900 mb-2">Visit Us</div>
            <p className="text-sm text-stone-600">123 Greenway Ave, Your City, ST</p>
            <p className="text-sm text-stone-600">Saturdays 9am–1pm at the Co-op Garden</p>
          </div>
          <div>
            <div className="font-semibold text-stone-900 mb-2">Contact</div>
            <p className="text-sm text-stone-600">hello@urbanfarmcoop.local</p>
            <p className="text-sm text-stone-600">(555) 123-4567</p>
          </div>
          <div>
            <div className="font-semibold text-stone-900 mb-2">Follow</div>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald-800">Instagram</a>
          </div>
        </div>
        <div className="text-center text-xs text-stone-500 py-6">© {new Date().getFullYear()} Urban Farm Co-op. All rights reserved.</div>
      </footer>
    </div>
  );
}
