import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist', // Make sure this is the correct output directory
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'axios'] // Optional: Split larger packages
        }
      }
    }
  }
});
