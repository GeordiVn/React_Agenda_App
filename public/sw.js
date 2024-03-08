importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js");

const CACHE_VERSION = 1;
const CURRENT_CACHES = {
    font: `agenda-cache-v${CACHE_VERSION}`,
};


workbox.core.setCacheNameDetails({ prefix: "agenda" });

workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "agenda-app-assets",
    })
);

workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|svg|gif)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "agenda-app-images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 20,
                maxAgeSeconds: 7 * 24 * 60 * 60,
            }),
        ],
    })
);

self.addEventListener("activate", (event) => {
    const expectedCacheNamesSet = new Set(Object.values(CURRENT_CACHES));
    event.waitUntil(
        caches.keys().then((cacheNames) =>
            Promise.all(
                cacheNames.map((cacheName) => {
                    if (!expectedCacheNamesSet.has(cacheName)) {
                        return caches.delete(cacheName);
                    }
                }),
            ),
        ),
    );

    function requestPermission() {
        console.log('Requesting permission...');
        Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
                console.log('Notification permission granted.')
            }
        })
    }
});






