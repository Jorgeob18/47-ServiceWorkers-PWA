if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then((registrado) => console.log('Registered service worker'))
    .catch((err) => console.log('Failed to register service worker', err));
} else {
  console.log('Service worker no soportado');
}
