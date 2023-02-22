if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then((registrado) => console.log('Registered service worker correctly'))
    .catch((err) => console.log('Failed to register service worker', err));
} else {
  console.log('No support for service worker');
}
