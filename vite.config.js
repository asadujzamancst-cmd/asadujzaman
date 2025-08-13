import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000', // Django সার্ভার এড্রেস
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // অপশনাল: URL রি-রাইট
      },
    },
  },
  build: {
    outDir: '../backend/frontend/dist', // Django-র স্ট্যাটিক ফাইল লোকেশন
    emptyOutDir: true,
  }
});