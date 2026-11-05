/* GARÉo Photo — service worker : la page marche sans réseau une fois ouverte.
   HTML : réseau d'abord (2,5 s max) puis cache → pas de vieille version coincée.
   Plans / icônes : cache d'abord. */
const CACHE = 'gareo-photo-v2026-11-05---6';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './gareo-192.png', './gareo-512.png', './gareo-maskable-512.png', './gareo-apple-180.png',
  './plans/N00.jpg', './plans/N01.jpg', './plans/N02.jpg', './plans/N03.jpg'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  const isPage = req.mode === 'navigate' || /\/(index\.html)?(\?.*)?$/.test(new URL(req.url).pathname + new URL(req.url).search);
  if (isPage) {
    e.respondWith(new Promise(resolve => {
      let done = false; const fallback = () => caches.match('./index.html').then(r => r || caches.match('./'));
      const timer = setTimeout(() => { if (!done) { done = true; resolve(fallback()); } }, 2500);
      fetch(req).then(r => { if (r.ok) { const cp = r.clone(); caches.open(CACHE).then(c => c.put('./index.html', cp)); }
        if (!done) { done = true; clearTimeout(timer); resolve(r); } })
        .catch(() => { if (!done) { done = true; clearTimeout(timer); resolve(fallback()); } });
    }));
  } else {
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(n => { if (n.ok) { const cp = n.clone(); caches.open(CACHE).then(c => c.put(req, cp)); } return n; })));
  }
});
