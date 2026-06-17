const CACHE = 'rifafacil-v3';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Siempre ir a la red primero, caché como respaldo
  e.respondWith(
    fetch(e.request).catch(() =>
      caches.match(e.request).then(cached =>
        cached || caches.match('./index.html')
      )
    )
  );
});
