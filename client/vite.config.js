import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure Vite outputs to `dist`
    chunkSizeWarningLimit: 1000, // Suppress large chunk warnings
  },
  server: {
    proxy: {
      "/api": "http://localhost:5000", // Allow local API proxy for dev mode
    },
  },
});
