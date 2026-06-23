import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'pages/about.html',
        blog: 'pages/blog.html',
        contact: 'pages/contact.html',
        courses: 'pages/courses.html',
        events: 'pages/events.html',
        notice: 'pages/notice.html',
        research: 'pages/research.html',
        scholarship: 'pages/scholarship.html',
        teachers: 'pages/teachers.html'
      }
    }
  },
  server: {
    open: true
  }
});
