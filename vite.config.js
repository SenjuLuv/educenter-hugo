import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'assets',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/about.html'),
        blog: resolve(__dirname, 'pages/blog.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
        courses: resolve(__dirname, 'pages/courses.html'),
        events: resolve(__dirname, 'pages/events.html'),
        notice: resolve(__dirname, 'pages/notice.html'),
        research: resolve(__dirname, 'pages/research.html'),
        scholarship: resolve(__dirname, 'pages/scholarship.html'),
        teachers: resolve(__dirname, 'pages/teachers.html')
      }
    }
  },
  server: {
    open: true
  }
});
