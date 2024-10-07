export default async function swDev() {
    // Converts the VAPID public key from base64 to a Uint8Array
    function determineAppServerKey() {
        const vapidPublicKey = "BJthRQ5myDgc7OSXzPCMftGw-n16F7zQBEN7EUD6XxcfTTvrLGWSIG7y_JxiWtVlCFua0S8MTB5rPziBqNx1qIo";
        return urlBase64ToUint8Array(vapidPublicKey);
    }

    // Helper function to convert base64 URL to Uint8Array
    function urlBase64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
            .replace(/\-/g, '+')
            .replace(/_/g, '/');

        const rawData = window.atob(base64);
        return new Uint8Array([...rawData].map(char => char.charCodeAt(0)));
    }

    const swURL = '/sw.js'; // Hardcoded path to sw.js
    
    try {
        // Register the service worker
        const registration = await navigator.serviceWorker.register(swURL);
        console.warn("Service Worker Registered Successfully:", registration);

        // Wait for the service worker to become active
        if (registration.installing) {
            registration.installing.addEventListener('statechange', (event) => {
                if (event.target.state === 'activated') {
                    subscribeToPush(registration);
                }
            });
        } else if (registration.active) {
            // Service worker is already active
            subscribeToPush(registration);
        }

    } catch (error) {
        console.error("Service Worker Registration Failed:", error);
    }

    // Function to subscribe to push notifications
    async function subscribeToPush(registration) {
        try {
            // Check for existing subscription
            let subscription = await registration.pushManager.getSubscription();
            
            if (!subscription) {
                // Subscribe to push notifications if not already subscribed
                subscription = await registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: determineAppServerKey()
                });
                console.log("Subscribed to push notifications:", subscription);
                
                // TODO: Send subscription to your server for storage
            } else {
                console.log("Already subscribed:", subscription);
            }
        } catch (error) {
            console.error("Push subscription failed:", error);
        }
    }
}

console.warn("sw from public folder");
