self.addEventListener('install', (e) => {
  console.log('Service Worker yüklendi');
});

self.addEventListener('fetch', (e) => {
  // Şimdilik istekleri direkt internetten veya önbellekten alır
});
