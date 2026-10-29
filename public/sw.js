// Minimaler Service Worker: macht die App installierbar, cached absichtlich nichts.
// Kursinhalte ändern sich — ein Cache würde veraltete Lektionen ausliefern.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {
  // kein respondWith(): Anfragen gehen unverändert ans Netz
});
