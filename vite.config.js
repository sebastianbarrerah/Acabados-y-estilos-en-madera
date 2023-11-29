// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ajusta el directorio de salida según tu configuración
    emptyOutDir: true,
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://acabados-y-estilos-en-madera.vercel.app/', // Cambia esto según tu configuración
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    manifest: true,
  },
  optimizeDeps: {
    include: ['react-router-dom'],
  },
});
