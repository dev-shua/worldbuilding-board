import { defineConfig } from 'vitest/config'
import * as path from 'path'

export default defineConfig ({
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['src/setupTest.ts'],
    coverage: {
      provider: 'c8'
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src'),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      public: `${path.resolve(__dirname, "./src/public/")}`,
      pages: `${path.resolve(__dirname, "./src/pages/")}`,
      types: `${path.resolve(__dirname, "./src/@types/")}`,
    }
  }
})