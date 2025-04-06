// public/sw.js
self.addEventListener("install", (event) => {
  console.log("Service Worker installed");
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activated");
});

self.addEventListener("fetch", (event) => {
  if (event.request.url.includes("/api/cart/")) {
    return;
  }
  console.log("Fetch intercepted for:", event.request.url);
});
