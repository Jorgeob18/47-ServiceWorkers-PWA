// Cuando se instala el Service Worker
self.addEventListener('install', (e) => {
  console.log('Instalado Service Worker');

  console.log(e);
});

// Activar el service Worker
self.addEventListener('activate', (e) => {
  console.log('Service Worker activated');

  console.log(e);
});
