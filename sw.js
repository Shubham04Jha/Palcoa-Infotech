const cacheData = "appV1";  // Name of the cache

const staticAssets = [
    '/',                   // Root page
    '/index.html',         // Index page
    '/index.css',          // Main CSS file
    '/src/main.jsx',       // Main JS entry
    // Add other essential files here
];

// 'install' event listener to cache essential resources
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            return cache.addAll(staticAssets);  // Cache predefined assets
        })
    );
});

// Flag to track if the offline notification has been shown
let notificationShown = false;

// 'fetch' event listener for serving and caching resources dynamically
self.addEventListener("fetch", (event) => {
    // Check if the request is for a navigation (HTML) request
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request).catch(() => {
                return caches.match('/index.html'); // Serve index.html if offline
            })
        );
        return; // Exit after handling navigation request
    }

    // Handle offline notification and resource serving
    if (!navigator.onLine) {
        if (!notificationShown) {
            notificationShown = true; // Set the flag to true
            event.waitUntil(
                self.registration.showNotification("Internet", {
                    body: "Internet not working",
                    icon: "/images/logo_sw.png", // Path to your icon
                })
            );
        }

        // Serve from cache if the user is offline
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                return cachedResponse || new Response("Offline, and no cached response available.", {
                    status: 404,
                    statusText: "Not Found"
                });
            })
        );
    } else {
        notificationShown = false; // Reset the flag when back online
        
        // Fetch from network and cache if not in the cache
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse; // Return cached response if available
                }

                // Fetch from the network
                return fetch(event.request).then((networkResponse) => {
                    // Only cache successful responses
                    if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                        return networkResponse;
                    }

                    // Clone the response because it can only be consumed once
                    const responseToCache = networkResponse.clone();

                    // Cache the new response
                    caches.open(cacheData).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });

                    return networkResponse; // Return the network response
                });
            })
        );
    }
});

// 'activate' event listener to clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== cacheData) {
                        return caches.delete(cacheName); // Delete old caches
                    }
                })
            );
        })
    );
});
