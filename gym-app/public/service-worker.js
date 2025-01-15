const CACHE_NAME = "gym-app-cache-v1";
const urlsToCache = ["/", "/index.html", "/favicon.ico"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Ako postoji u kešu, koristi keširanu verziju
      if (response) {
        return response;
      }
      // Ako nije u kešu, preuzmi sa mreže
      return fetch(event.request);
    })
  );
});
