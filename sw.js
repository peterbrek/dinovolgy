// Dínóvölgy offline cache.
// Ha frissíted az appot, írd át a verziószámot (pl. v2 -> v3), hogy az iPad is az új fájlokat töltse le.
const CACHE = 'dinovolgy-v2';

const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-180.png',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './baloo2-latin.woff2',
  './baloo2-latin-ext.woff2',
  './nunito-latin.woff2',
  './nunito-latin-ext.woff2'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // The page itself: online -> fresh copy (and keep it), offline -> last saved copy.
  if (req.mode === 'navigate') {
    if (!(url.pathname.endsWith('/') || url.pathname.endsWith('.html'))) return;
    event.respondWith(
      fetch(req)
        .then(res => {
          if (res.ok && !res.redirected) {
            const copy = res.clone();
            caches.open(CACHE).then(cache => cache.put('./index.html', copy));
          }
          return res;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Fonts, icons, manifest: from the cache first.
  event.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.ok) {
        const copy = res.clone();
        caches.open(CACHE).then(cache => cache.put(req, copy));
      }
      return res;
    }))
  );
});
