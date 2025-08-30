import React from 'react';
import { Box, Carrot, Recycle, MapPin, CheckCircle2 } from 'lucide-react';

export default function ProduceAndCompost() {
  return (
    <section id="produce" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-700 text-white">
                <Box className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-stone-900">Weekly Produce Boxes</h3>
                <p className="text-sm text-stone-600">Fresh, seasonal, and grown with care</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm">
              {[
                'Harvested within 24 hours of pickup',
                'Two sizes: Standard and Family',
                'Pay-it-forward fund for neighbors',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-700 mt-0.5" />
                  <span className="text-stone-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-3 text-sm">
              <div className="inline-flex items-center gap-2 rounded-md bg-emerald-50 text-emerald-900 px-3 py-1 border border-emerald-200">
                <Carrot className="h-4 w-4" />
                From $18/week
              </div>
              <div className="text-stone-500">Fridays 4–7pm pickup</div>
            </div>
            <a href="#signup" className="mt-6 inline-flex px-4 py-2 rounded-lg bg-amber-700 text-white hover:bg-amber-800">Subscribe</a>
          </div>

          <div id="compost" className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-700 text-white">
                <Recycle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-stone-900">Community Compost Drop-off</h3>
                <p className="text-sm text-stone-600">Turn scraps into soil</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm">
              {[
                'Accepted: fruit/veg scraps, coffee grounds, eggshells',
                'Not accepted: meat, dairy, oils, compostable plastics',
                'Bring in a sealed container or compost caddy',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-700 mt-0.5" />
                  <span className="text-stone-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-3 text-sm">
              <div className="inline-flex items-center gap-2 rounded-md bg-stone-100 text-stone-800 px-3 py-1 border border-stone-200">
                <MapPin className="h-4 w-4" />
                123 Greenway Ave
              </div>
              <div className="text-stone-500">Saturdays 9am–1pm</div>
            </div>
            <div className="mt-6 rounded-lg overflow-hidden border border-stone-200">
              <iframe
                title="Co-op Garden Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-122.423%2C37.773%2C-122.411%2C37.781&layer=mapnik&marker=37.777%2C-122.417"
                className="w-full h-56"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
