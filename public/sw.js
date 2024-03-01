self.addEventListener("install", () => {
    console.log("[Service Worker] Installed 3");
});

self.addEventListener("activate", () => {
    console.log("[Service Worker] Activated");
});