import React from 'react';
import { Leaf, Calendar, Box, Recycle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-16 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-10">
        <div className="z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-sm font-medium mb-5">
            <Leaf className="h-4 w-4" />
            Grow • Share • Nourish
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-stone-900">
            Local urban farming co-op for a greener community
          </h1>
          <p className="mt-4 text-lg text-stone-700 max-w-2xl">
            Join our workshops, subscribe to a weekly produce box, and drop off kitchen scraps for community composting.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#calendar" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 shadow-sm">
              <Calendar className="h-5 w-5" />
              Join a workshop
            </a>
            <a href="#produce" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-amber-700 text-white hover:bg-amber-800 shadow-sm">
              <Box className="h-5 w-5" />
              Get a produce box
            </a>
            <a href="#compost" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-stone-300 text-stone-800 hover:bg-stone-100">
              <Recycle className="h-5 w-5 text-emerald-700" />
              Compost drop-off
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-6 text-center">
            <div className="rounded-lg bg-white border border-stone-200 p-4">
              <dt className="text-sm text-stone-500">Members</dt>
              <dd className="text-2xl font-semibold text-stone-900">150+</dd>
            </div>
            <div className="rounded-lg bg-white border border-stone-200 p-4">
              <dt className="text-sm text-stone-500">Compost diverted</dt>
              <dd className="text-2xl font-semibold text-stone-900">12 tons</dd>
            </div>
            <div className="rounded-lg bg-white border border-stone-200 p-4">
              <dt className="text-sm text-stone-500">Weekly boxes</dt>
              <dd className="text-2xl font-semibold text-stone-900">85</dd>
            </div>
          </dl>
        </div>
        <div className="z-10 lg:pl-10">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-stone-200 shadow-sm bg-white">
            <img
              src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1600&auto=format&fit=crop"
              alt="Fresh produce from the garden"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <p className="mt-3 text-sm text-stone-500">Photo by Brooke Lark on Unsplash</p>
        </div>
      </div>
    </section>
  );
}
