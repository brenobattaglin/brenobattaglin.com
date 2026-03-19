import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    coverage: {
      provider: 'v8',
      include: [
        'components/**/*.{ts,tsx}',
        'hooks/**/*.{ts,tsx}',
        'App.tsx',
        'index.tsx',
      ],
      exclude: [
        'node_modules/**',
        'dist/**',
        '**/*.test.{ts,tsx}',
        'setupTests.ts',
      ],
      reporter: ['text', 'json', 'html'],
      thresholds: {
        lines: 90,
        functions: 90,
        branches: 90,
        statements: 90,
      },
    },
  },
});
