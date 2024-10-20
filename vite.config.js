import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  server: {
    port: 3000, // Change this to your desired port

    host: '0.0.0.0', // This allows external access
  },
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'My PWA',
        short_name: 'MyPWA',
        description: 'My Progressive Web App built with Vite and React',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'NOTASK.png',
            sizes: '192x192',
            type: 'image/png',
          },
          // {
          //   src: 'icon-512x512.png',
          //   sizes: '512x512',
          //   type: 'image/png',
          // },
        ],
      },
      registerType: 'autoUpdate',
    }),
  ],
});
