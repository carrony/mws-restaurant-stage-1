const staticCacheName = 'reviews-static-v1';
const contentImgsCache = 'reviews-content-imgs';

const urlsToCache = [
    './',
    './index.html',
    './restaurant.html',
    './css/style.css',
    './data/restaurants.json',
    './js/dbhelper.js',
    './js/main.js',
    './js/restaurant_info.js',
    './js/sw_register.js'
];

self.addEventListener("install", function (event) {
    console.log("service worker installed.");
    //caching or creating the cache.
    event.waitUntil(
        caches.open(staticCacheName).then(function (cache) {
            console.log("caching");
            return cache.addAll(urlsToCache);
        })
    );
});



