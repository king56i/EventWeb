import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@css': path.resolve(__dirname, './src/assets/css'),
      '@scss': path.resolve(__dirname, './src/assets/scss'),
      '@js': path.resolve(__dirname, './src/assets/js'),
      '@lib': path.resolve(__dirname, './src/assets/lib'),
      '@images': path.resolve(__dirname, './src/assets/images'),
    },
  },
})
