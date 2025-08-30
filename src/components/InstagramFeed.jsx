import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Instagram } from 'lucide-react';

const defaultProfile = {
  handle: import.meta.env.VITE_INSTAGRAM_HANDLE || 'yourcoophandle',
  url: import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/yourcoophandle',
};

function useInstagramPostEmbeds() {
  const raw = import.meta.env.VITE_INSTAGRAM_POST_URLS || '';
  return useMemo(() => {
    const urls = raw
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
      .slice(0, 6);
    return urls;
  }, [raw]);
}

export default function InstagramFeed() {
  const containerRef = useRef(null);
  const postUrls = useInstagramPostEmbeds();
  const [embedReady, setEmbedReady] = useState(false);

  useEffect(() => {
    if (!postUrls.length) return;
    const existing = document.querySelector('script#ig-embed');
    if (!existing) {
      const script = document.createElement('script');
      script.id = 'ig-embed';
      script.async = true;
      script.src = 'https://www.instagram.com/embed.js';
      script.onload = () => setEmbedReady(true);
      document.body.appendChild(script);
    } else {
      setEmbedReady(true);
    }
  }, [postUrls.length]);

  useEffect(() => {
    if (!embedReady) return;
    const tryProcess = () => {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      }
    };
    const t = setTimeout(tryProcess, 50);
    return () => clearTimeout(t);
  }, [embedReady, postUrls]);

  return (
    <section id="instagram" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-700 to-emerald-700 text-white">
              <Instagram className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-stone-900">From our Instagram</h2>
              <a className="text-sm text-emerald-700 hover:text-emerald-800" href={defaultProfile.url} target="_blank" rel="noreferrer">
                @{defaultProfile.handle}
              </a>
            </div>
          </div>
          <a
            href={defaultProfile.url}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex px-4 py-2 rounded-md bg-stone-900 text-white hover:bg-stone-800"
          >
            Visit profile
          </a>
        </div>

        {postUrls.length > 0 ? (
          <div ref={containerRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {postUrls.map((url) => (
              <blockquote
                key={url}
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={`${url}?utm_source=ig_embed&utm_campaign=loading`}
                data-instgrm-version="14"
                style={{ background: '#fff', border: 0, borderRadius: 12, boxShadow: '0 1px 3px rgba(0,0,0,0.08)', minWidth: '220px', maxWidth: '540px', width: '100%' }}
              />
            ))}
          </div>
        ) : (
          <div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {["https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1600&auto=format&fit=crop","https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop","https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop"].map((src, i) => (
                <a key={i} href={defaultProfile.url} target="_blank" rel="noreferrer" className="group block">
                  <div className="aspect-square overflow-hidden rounded-xl border border-stone-200 bg-white">
                    <img src={src} alt="Urban farm" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  </div>
                </a>
              ))}
            </div>
            <p className="mt-3 text-xs text-stone-500">Set VITE_INSTAGRAM_POST_URLS in your .env (comma-separated post URLs) to auto-embed your latest posts.</p>
          </div>
        )}
      </div>
    </section>
  );
}
