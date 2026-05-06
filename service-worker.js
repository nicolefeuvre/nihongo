// Nihongo PWA - Service Worker
const CACHE_VERSION = 'nihongo-v1';
const CACHE_FILES = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './course-data.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  'https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Noto+Serif+JP:wght@400;700;900&display=swap'
];

// Installation : on met tout en cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      return cache.addAll(CACHE_FILES).catch((err) => {
        console.warn('SW: certaines ressources n\'ont pas pu être mises en cache', err);
      });
    })
  );
  self.skipWaiting();
});

// Activation : on supprime les vieux caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Stratégie : cache d'abord, réseau ensuite
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request).then((response) => {
        // On met en cache les nouvelles ressources si tout va bien
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // Si offline et ressource non cachée, on renvoie l'index
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
