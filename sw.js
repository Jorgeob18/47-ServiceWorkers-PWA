const nombreCache = 'apv-v1';
const assets = [
  './',
  './index.html',
  './css/bootstrap.css',
  './css/styles.css',
  './js/app.js',
  './js/apv.js',
];

// Cuando se instala el Service Worker
self.addEventListener('install', (e) => {
  console.log('Instalado el Service Worker');

  e.waitUntil(
    // Buen lugar para cachear -
    caches.open(nombreCache).then((cache) => {
      // Esta función es asincrona...
      console.log('cacheando...');
      cache.addAll(assets);
    })
  );

  // Revisar en App (Chrome) en Firefox en Almacenamiento
});

// Activar el service Worker
self.addEventListener('activate', (e) => {
  console.log('Service Worker activated');

  console.log(e);
});

// Evento fetch para descargar archivos estaticos

self.addEventListener('fetch', (e) => {
  console.log('Fetching Service Worker', e);
});
