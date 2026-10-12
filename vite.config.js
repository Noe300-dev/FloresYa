import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { defineConfig as defineTestConfig } from 'vitest/config'
export default defineConfig({
  plugins: [
    react({
      include: '**/*.{jsx,tsx,js}',
    }),
  ],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.[tj]sx?$/,
    exclude: [],
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
  },
});