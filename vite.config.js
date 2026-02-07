import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'docs',
  },
  test: {
    environment: 'happy-dom',
    include: ['src/**/__tests__/**/*.test.js'],
  },
});
